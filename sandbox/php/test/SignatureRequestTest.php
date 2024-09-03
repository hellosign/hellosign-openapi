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

        $config_custom = json_decode(file_get_contents(__DIR__ . '/.config.json'), true);
        $config_dist = json_decode(file_get_contents(__DIR__ . '/.config.dist.json'), true);
        $config = array_merge($config_dist, $config_custom);

        $this->client_id = $config['CLIENT_ID'];

        $this->config = new Sign\Configuration();
        $this->config->setUsername($config['API_KEY']);
        $this->config->setHost($config['BASE_URL']);

        if ($config['USE_XDEBUG']) {
            $cookies = CookieJar::fromArray(
                ['XDEBUG_SESSION' => 'xdebug'],
                parse_url($config['BASE_URL'], PHP_URL_HOST),
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

        $send_request = Sign\Model\SignatureRequestSendRequest::init($data);

        $send_response = $signature_request_api->signatureRequestSend($send_request);

        $this->assertEquals(
            $send_request->getFormFieldsPerDocument()[0]->getApiId(),
            $send_response->getSignatureRequest()->getCustomFields()[0]->getApiId(),
        );

        $this->assertEquals(
            $send_request->getSigners()[0]->getEmailAddress(),
            $send_response->getSignatureRequest()->getSignatures()[0]->getSignerEmailAddress(),
        );
        $this->assertEquals(
            $send_request->getSigners()[1]->getEmailAddress(),
            $send_response->getSignatureRequest()->getSignatures()[1]->getSignerEmailAddress(),
        );
        $this->assertEquals(
            $send_request->getSigners()[2]->getEmailAddress(),
            $send_response->getSignatureRequest()->getSignatures()[2]->getSignerEmailAddress(),
        );

        $get_response = $signature_request_api->signatureRequestGet(
            $send_response->getSignatureRequest()->getSignatureRequestId(),
        );

        $this->assertSame(
            $send_response->getSignatureRequest()->getSignatureRequestId(),
            $get_response->getSignatureRequest()->getSignatureRequestId(),
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

        $send_request = Sign\Model\SignatureRequestCreateEmbeddedRequest::init($data);

        $send_response = $signature_request_api->signatureRequestCreateEmbedded($send_request);

        $this->assertEquals(
            $send_request->getSigners()[0]->getEmailAddress(),
            $send_response->getSignatureRequest()->getSignatures()[0]->getSignerEmailAddress(),
        );
        $this->assertEquals(
            $send_request->getSigners()[1]->getEmailAddress(),
            $send_response->getSignatureRequest()->getSignatures()[1]->getSignerEmailAddress(),
        );
        $this->assertEquals(
            $send_request->getSigners()[2]->getEmailAddress(),
            $send_response->getSignatureRequest()->getSignatures()[2]->getSignerEmailAddress(),
        );

        $embedded_api = new Sign\Api\EmbeddedApi($this->config);

        $get_response = $embedded_api->embeddedSignUrl(
            $send_response->getSignatureRequest()->getSignatures()[0]->getSignatureId(),
        );

        $this->assertNotEmpty($get_response->getEmbedded()->getSignUrl());
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
