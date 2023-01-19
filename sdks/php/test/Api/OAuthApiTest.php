<?php

declare(strict_types=1);

namespace Dropbox\Sign\Test\Api;

use Dropbox\Sign\Api;
use Dropbox\Sign\Configuration;
use Dropbox\Sign\Model;
use Dropbox\Sign\Test\SignTestCase;
use Dropbox\Sign\Test\TestUtils;
use GuzzleHttp;

class OAuthApiTest extends SignTestCase
{
    /** @var Api\OAuthApi */
    protected $api;

    protected function setUp(): void
    {
        parent::setUp();

        $this->client = new GuzzleHttp\Client([
            'handler' => GuzzleHttp\HandlerStack::create($this->handler),
        ]);

        $this->api = new Api\OAuthApi(
            Configuration::getDefaultConfiguration(),
            $this->client,
        );
    }

    public function testTokenGenerate()
    {
        $requestClass = Model\OAuthTokenGenerateRequest::class;
        $requestData = TestUtils::getFixtureData($requestClass)['default'];

        $responseClass = Model\OAuthTokenResponse::class;
        $responseData = TestUtils::getFixtureData($responseClass)['default'];

        $this->setExpectedResponse($responseData);

        $obj = Model\OAuthTokenGenerateRequest::init($requestData);

        $response = $this->api->oauthTokenGenerate($obj);
        $serialized = TestUtils::toArray($response);

        $this->assertInstanceOf($responseClass, $response);
        $this->assertEquals($responseData, $serialized);
        $this->assertEquals($responseData, TestUtils::toArray($response));
    }

    public function testTokenRefresh()
    {
        $requestClass = Model\OAuthTokenRefreshRequest::class;
        $requestData = TestUtils::getFixtureData($requestClass)['default'];

        $responseClass = Model\OAuthTokenResponse::class;
        $responseData = TestUtils::getFixtureData($responseClass)['refresh'];

        $this->setExpectedResponse($responseData);

        $obj = Model\OAuthTokenRefreshRequest::init($requestData);

        $response = $this->api->oauthTokenRefresh($obj);
        $serialized = TestUtils::toArray($response);

        $this->assertInstanceOf($responseClass, $response);
        $this->assertEquals($responseData, $serialized);
        $this->assertEquals($responseData, TestUtils::toArray($response));
    }
}
