<?php

declare(strict_types=1);

namespace Dropbox\Sign\Test;

use Dropbox\Sign\Configuration;
use GuzzleHttp;
use GuzzleHttp\Handler;
use GuzzleHttp\Psr7;
use PHPUnit\Framework\TestCase;

abstract class SignTestCase extends TestCase
{
    public const ROOT_FILE_PATH = __DIR__ . '/../test_fixtures';

    /** @var GuzzleHttp\Client */
    protected $client;

    /** @var Handler\MockHandler */
    protected $handler;

    public static function setUpBeforeClass(): void
    {
        parent::setUpBeforeClass();

        $config = new Configuration();
        $config->setUsername('YOUR_API_KEY');

        Configuration::setDefaultConfiguration($config);
    }

    protected function setUp(): void
    {
        parent::setUp();

        $this->handler = new Handler\MockHandler();
    }

    protected function setExpectedResponse(array $data, int $httpCode = 200): void
    {
        $this->handler->append(
            new Psr7\Response($httpCode, [], json_encode($data)),
        );
    }
}
