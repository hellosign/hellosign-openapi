<?php

declare(strict_types=1);

namespace Dropbox\Sign\Test\Api;

use Dropbox\Sign\Api;
use Dropbox\Sign\Configuration;
use Dropbox\Sign\Model;
use Dropbox\Sign\Test\SignTestCase;
use Dropbox\Sign\Test\TestUtils;
use GuzzleHttp;

class EmbeddedApiTest extends SignTestCase
{
    /** @var Api\EmbeddedApi */
    protected $api;

    protected function setUp(): void
    {
        parent::setUp();

        $this->client = new GuzzleHttp\Client([
            'handler' => GuzzleHttp\HandlerStack::create($this->handler),
        ]);

        $this->api = new Api\EmbeddedApi(
            Configuration::getDefaultConfiguration(),
            $this->client,
        );
    }

    public function testEmbeddedEditUrl()
    {
        $templateId = '5de8179668f2033afac48da1868d0093bf133266';

        $requestClass = Model\EmbeddedEditUrlRequest::class;
        $requestData = TestUtils::getFixtureData($requestClass)['default'];

        $responseClass = Model\EmbeddedEditUrlResponse::class;
        $responseData = TestUtils::getFixtureData($responseClass)['default'];

        $this->setExpectedResponse($responseData);

        $obj = Model\EmbeddedEditUrlRequest::init($requestData);

        $response = $this->api->embeddedEditUrl($templateId, $obj);
        $serialized = TestUtils::toArray($response);

        $this->assertInstanceOf($responseClass, $response);
        $this->assertEquals($responseData, $serialized);
        $this->assertEquals($responseData, TestUtils::toArray($response));
    }

    public function testEmbeddedSignUrl()
    {
        $signatureId = '50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b';

        $responseClass = Model\EmbeddedSignUrlResponse::class;
        $responseData = TestUtils::getFixtureData($responseClass)['default'];

        $this->setExpectedResponse($responseData);

        $response = $this->api->embeddedSignUrl($signatureId);
        $serialized = TestUtils::toArray($response);

        $this->assertInstanceOf($responseClass, $response);
        $this->assertEquals($responseData, $serialized);
        $this->assertEquals($responseData, TestUtils::toArray($response));
    }
}
