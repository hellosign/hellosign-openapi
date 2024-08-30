<?php
declare(strict_types=1);

namespace Dropbox\SignSandbox\Tests;

use Dropbox\Sign;
use GuzzleHttp\Cookie\CookieJar;
use PHPUnit\Framework\TestCase;
use SplFileObject;

/**
 * This test suite is intended solely as a stopgap while we setup automated
 * internal tests from github actions.
 *
 * For now it requires running manually
 */
class SignatureRequestTest extends TestCase
{
    public const FIXTURES_DIR = __DIR__ . '/../test_fixtures';

    private Sign\Configuration $config;

    private string $client_id;

    public function setUp(): void
    {
        parent::setUp();

        $env = parse_ini_file(__DIR__ . '/.env');
        $env_dist = parse_ini_file(__DIR__ . '/.env.dist');
        $env_merged = array_merge($env_dist, $env);

        $this->client_id = $env_merged['CLIENT_ID'];

        $this->config = new Sign\Configuration();
        $this->config->setUsername($env_merged['API_KEY']);
        $this->config->setHost($env_merged['BASE_URL']);

        if ($env_merged['USE_XDEBUG']) {
            $cookies = CookieJar::fromArray(
                ['XDEBUG_SESSION' => 'xdebug'],
                parse_url($env_merged['BASE_URL'], PHP_URL_HOST),
            );

            $this->config->setOptions(['cookies' => $cookies]);
        }
    }

    public function testSend(): void
    {
        $signature_request_api = new Sign\Api\SignatureRequestApi($this->config);

        $data = json_decode(
            file_get_contents(self::FIXTURES_DIR . '/SignatureRequestSendRequest.json'),
            true,
        );
        $file = new SplFileObject(self::FIXTURES_DIR . '/pdf-sample.pdf');
        $data['files'] = [$file];

        $request = Sign\Model\SignatureRequestSendRequest::init($data);

        try {
            $response = $signature_request_api->signatureRequestSend($request);
        } catch (Sign\ApiException $e) {
            $this->fail(
                'Should not have thrown: ' . print_r($e->getResponseBody(), true),
            );
        }

        $signature_request = $response->getSignatureRequest();

        $this->assertEquals(
            $request->getFormFieldsPerDocument()[0]->getApiId(),
            $signature_request->getCustomFields()[0]->getApiId(),
        );

        $this->assertEquals(
            $request->getSigners()[0]->getEmailAddress(),
            $signature_request->getSignatures()[0]->getSignerEmailAddress(),
        );
        $this->assertEquals(
            $request->getSigners()[1]->getEmailAddress(),
            $signature_request->getSignatures()[1]->getSignerEmailAddress(),
        );
        $this->assertEquals(
            $request->getSigners()[2]->getEmailAddress(),
            $signature_request->getSignatures()[2]->getSignerEmailAddress(),
        );

        try {
            $response = $signature_request_api->signatureRequestGet(
                $signature_request->getSignatureRequestId(),
            );
        } catch (Sign\ApiException $e) {
            $this->fail(
                'Should not have thrown: ' . print_r($e->getResponseBody(), true),
            );
        }

        $this->assertSame(
            $signature_request->getSignatureRequestId(),
            $response->getSignatureRequest()->getSignatureRequestId(),
        );
    }

    public function testCreateEmbedded(): void
    {
        $signature_request_api = new Sign\Api\SignatureRequestApi($this->config);

        $data = json_decode(
            file_get_contents(self::FIXTURES_DIR . '/SignatureRequestCreateEmbeddedRequest.json'),
            true,
        );
        $file = new SplFileObject(self::FIXTURES_DIR . '/pdf-sample.pdf');
        $data['files'] = [$file];
        $data['client_id'] = $this->client_id;

        $request = Sign\Model\SignatureRequestCreateEmbeddedRequest::init($data);

        try {
            $response = $signature_request_api->signatureRequestCreateEmbedded($request);
        } catch (Sign\ApiException $e) {
            $this->fail(
                'Should not have thrown: ' . print_r($e->getResponseBody(), true),
            );
        }

        $signature_request = $response->getSignatureRequest();

        $this->assertEquals(
            $request->getSigners()[0]->getEmailAddress(),
            $signature_request->getSignatures()[0]->getSignerEmailAddress(),
        );
        $this->assertEquals(
            $request->getSigners()[1]->getEmailAddress(),
            $signature_request->getSignatures()[1]->getSignerEmailAddress(),
        );
        $this->assertEquals(
            $request->getSigners()[2]->getEmailAddress(),
            $signature_request->getSignatures()[2]->getSignerEmailAddress(),
        );

        $embedded_api = new Sign\Api\EmbeddedApi($this->config);

        try {
            $response = $embedded_api->embeddedSignUrl(
                $signature_request->getSignatures()[0]->getSignatureId(),
            );

            $this->assertNotEmpty($response->getEmbedded()->getSignUrl());
        } catch (Sign\ApiException $e) {
            $this->fail(
                'Should not have thrown: ' . print_r($e->getResponseBody(), true),
            );
        }
    }

    public function testSendWithoutFileError(): void
    {
        $signature_request_api = new Sign\Api\SignatureRequestApi($this->config);

        $data = json_decode(
            file_get_contents(self::FIXTURES_DIR . '/SignatureRequestSendRequest.json'),
            true,
        );

        $request = Sign\Model\SignatureRequestSendRequest::init($data);

        try {
            $response = $signature_request_api->signatureRequestSend($request);

            $this->fail('Should have thrown: ' . print_r($response, true));
        } catch (Sign\ApiException $e) {
            $error = $e->getResponseObject();

            $this->assertEquals('file', $error->getError()->getErrorPath());
        }
    }
}
