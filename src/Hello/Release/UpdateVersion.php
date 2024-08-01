<?php
declare(strict_types=1);

namespace Hello\Release;

use Exception;

class UpdateVersion
{
    private const ALLOWED_SDKS = [
        'dotnet',
        'java-v1',
        'java-v2',
        'node',
        'php',
        'python',
        'ruby',
    ];

    private const FILES_DOTNET = [
        'README.md',
        'VERSION',
        'openapi-config.yaml',
        'src/Dropbox.Sign/Client/Configuration.cs',
        'src/Dropbox.Sign/Dropbox.Sign.csproj',
    ];

    private const FILES_JAVA_V1 = [
        'README.md',
        'VERSION',
        'build.gradle',
        'build.sbt',
        'gradle.properties',
        'openapi-config.yaml',
        'pom.xml',
        'src/main/java/com/dropbox/sign/ApiClient.java',
    ];

    private const FILES_JAVA_V2 = [
        'README.md',
        'VERSION',
        'build.gradle',
        'build.sbt',
        'gradle.properties',
        'openapi-config.yaml',
        'pom.xml',
        'src/main/java/com/dropbox/sign/ApiClient.java',
    ];

    private const FILES_NODE = [
        'VERSION',
        'api/apis.ts',
        'dist/api.js',
        'openapi-config.yaml',
        'package-lock.json',
        'package.json',
        'types/api/apis.d.ts',
    ];

    private const FILES_PHP = [
        'README.md',
        'VERSION',
        'openapi-config.yaml',
        'src/Configuration.php',
    ];

    private const FILES_PYTHON = [
        'README.md',
        'VERSION',
        'dropbox_sign/__init__.py',
        'dropbox_sign/api_client.py',
        'dropbox_sign/configuration.py',
        'openapi-config.yaml',
        'setup.py',
    ];

    private const FILES_RUBY = [
        '.travis.yml',
        'Gemfile.lock',
        'README.md',
        'VERSION',
        'lib/dropbox-sign/version.rb',
        'openapi-config.yaml',
    ];

    private string $sdk;

    private string $version;

    private string $target_directory;

    private string $current_version;

    private array $target_files = [];

    public function __construct(
        ?string $sdk,
        ?string $version,
    ) {
        $this->validate($sdk, $version);
    }

    public function run(): void
    {
        echo "Updating SDK {$this->sdk} version to {$this->version}\n";

        foreach ($this->target_files as $filename) {
            $path = $this->getFilePath($filename);

            $contents = file_get_contents($path);

            if (empty($contents)) {
                throw new Exception("File {$filename} is empty");
            }

            $contents = str_replace($this->current_version, $this->version, $contents);
            file_put_contents($path, $contents);

            echo "{$filename} updated\n";
        }
    }

    private function validate(?string $sdk, ?string $version): void
    {
        if (!in_array($sdk, self::ALLOWED_SDKS, true)) {
            throw new Exception(
                'Invalid SDK. Must be one of ' . implode(', ', self::ALLOWED_SDKS),
            );
        }

        $invalid_version_message = 'Invalid Version. Must be in pattern of 1.4.0';

        if (empty($version)) {
            throw new Exception($invalid_version_message);
        }

        // very loose validation
        preg_match('/[a-z0-9]+\.[a-z0-9]+\.[a-z0-9]+/', $version, $matches, PREG_OFFSET_CAPTURE);

        if (empty($matches)) {
            throw new Exception($invalid_version_message);
        }

        $target_directory = __DIR__ . "/../../../repos/{$sdk}";

        if (!is_dir($target_directory)) {
            throw new Exception('Repo directory does not exist');
        }

        if (
            !file_exists("{$target_directory}/VERSION")
            || !is_readable("{$target_directory}/VERSION")
        ) {
            throw new Exception('VERSION file does not exist or is not readable');
        }

        $current_version = file_get_contents("{$target_directory}/VERSION") ?: '';
        $current_version = trim($current_version);

        if (empty($current_version)) {
            throw new Exception('VERSION file is empty');
        }

        $this->sdk = $sdk;
        $this->version = $version;
        $this->target_directory = $target_directory;
        $this->current_version = $current_version;

        $this->target_files = match ($this->sdk) {
            'dotnet' => self::FILES_DOTNET,
            'java-v1' => self::FILES_JAVA_V1,
            'java-v2' => self::FILES_JAVA_V2,
            'node' => self::FILES_NODE,
            'php' => self::FILES_PHP,
            'python' => self::FILES_PYTHON,
            'ruby' => self::FILES_RUBY,
        };

        foreach ($this->target_files as $filename) {
            $path = $this->getFilePath($filename);

            if (
                !file_exists($path)
                || !is_readable($path)
            ) {
                throw new Exception("{$path} does not exist or is not readable");
            }
        }
    }

    private function getFilePath(string $filename): string
    {
        return "{$this->target_directory}/{$filename}";
    }
}
