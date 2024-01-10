#!/usr/bin/env php
<?php

require_once __DIR__ . '/../vendor/autoload.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

set_error_handler(function ($level, $msg) {
    echo "Error: {$msg}";
    exit(1);
});

class GenerateOverloadMethods
{
    private string $directory;

    private array $toWrite = [];

    public function __construct(string $directory)
    {
        $this->directory = $directory;
    }

    public function run(): void
    {
        foreach ($this->getFiles() as $file) {
            $this->toWrite = [];

            $lines = file($file, FILE_IGNORE_NEW_LINES);

            foreach ($lines as $line) {
                $this->replace($line);
            }

            file_put_contents($file, implode("\n", $this->toWrite));
        }
    }

    private function getFiles(): array
    {
        $dir = new DirectoryIterator($this->directory);

        $files = [];
        /** @var DirectoryIterator $fileinfo */
        foreach ($dir as $fileinfo) {
            if (!$fileinfo->isDot()) {
                $files[] = $fileinfo->getPathname();
            }
        }

        return $files;
    }

    private function replace(string $line): void
    {
        if (!strpos($line, '__OVERLOAD_DELIMITER')) {
            $this->toWrite[] = $line;

            return;
        }

        $line = trim(str_replace('__OVERLOAD_DELIMITER ', '', $line));
        $data = json_decode($line, true, JSON_THROW_ON_ERROR);

        $needsRewrite = false;
        foreach ($data['parameters'] as $parameter) {
            if ($parameter['required'] !== true) {
                $needsRewrite = true;

                break;
            }
        }

        // Does not need method overload written to file
        if (!$needsRewrite) {
            return;
        }

        $this->generate($data);
    }

    private function generate(array $data): void
    {
        $requiredParams = [];
        $optionalParams = [];
        foreach ($data['parameters'] as $parameter) {
            if ($parameter['required'] === false) {
                $optionalParams[] = $parameter;
            } else {
                $requiredParams[] = $parameter;
            }
        }

        // Remove the final optional parameter, openapi-generator will always have the full method
        $optionalParamsSignature = $optionalParams;
        array_pop($optionalParamsSignature);

        $generated = [];
        $generated[] = $this->template(
            $data['class'],
            $data['returnType'],
            $data['method'],
            $requiredParams,
            $requiredParams,
            $optionalParams,
        );

        $fullSignature = $requiredParams;
        foreach ($optionalParamsSignature as $parameter) {
            $fullSignature[] = $parameter;

            $generated[] = $this->template(
                $data['class'],
                $data['returnType'],
                $data['method'],
                $fullSignature,
                $requiredParams,
                $optionalParams,
            );
        }

        $this->toWrite[] = "\n" . implode("\n", $generated);
    }

    private function template(
        string $class,
        string $returnType,
        string $method,
        array $signatureParams,
        array $requiredParams,
        array $optionalParams
    ): string {
        $methodSignature = [];
        foreach ($signatureParams as $param) {
            $methodSignature[$param['name']] = "{$param['type']} {$param['name']}";
        }

        $setters = [];
        foreach ($optionalParams as $param) {
            // If param is in method signature we do not set a default value for it
            if (array_key_exists($param['name'], $methodSignature)) {
                continue;
            }

            $type = $param['type'];
            $name = $param['name'];
            $value = $param['value'];

            $data = "{$type} {$name} = ";

            if ($value !== null && strtolower(trim($type)) === 'string') {
                $data .= '"' . $value . '";';
            } elseif ($value === null) {
                $data .= "null;";
            } else {
                $data .= "{$value};";
            }

            $setters[] = $data;
        }

        $paramList = [];
        $typeList = [];
        foreach ($requiredParams as $param) {
            $paramList[] = $param['name'];
            $typeList[] = $param['type'];
        }

        foreach ($optionalParams as $param) {
            $paramList[] = $param['name'];
            $typeList[] = $param['type'];
        }

        $methodSignature = implode(', ', $methodSignature);
        $paramList = implode(', ', $paramList);
        $typeList = implode(', ', $typeList);
        $setters = implode("\n    ", $setters);

        return <<<EOT
          /**
           * @see {$class}#{$method}({$typeList})
           */
          public {$returnType} {$method}({$methodSignature}) throws ApiException {
            {$setters}

            return {$method}WithHttpInfo({$paramList}).getData();
          }

          /**
           * @see {$class}#{$method}WithHttpInfo({$typeList})
           */
          public ApiResponse<{$returnType}> {$method}WithHttpInfo({$methodSignature}) throws ApiException {
            {$setters}

            return {$method}WithHttpInfo({$paramList});
          }

        EOT;
    }
}

$generator = new GenerateOverloadMethods(__DIR__ . '/../src/main/java/com/dropbox/sign/api/');
$generator->run();
