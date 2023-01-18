<?php

declare(strict_types=1);

namespace Dropbox\Sign\Test\Api;

use Dropbox\Sign\Api;
use Dropbox\Sign\Configuration;
use Dropbox\Sign\Model;
use Dropbox\Sign\Test\SignTestCase;
use Dropbox\Sign\Test\TestUtils;
use GuzzleHttp;
use SplFileObject;

class ApiAppApiTest extends SignTestCase
{
    /** @var Api\ApiAppApi */
    protected $api;

    protected function setUp(): void
    {
        parent::setUp();

        $this->client = new GuzzleHttp\Client([
            'handler' => GuzzleHttp\HandlerStack::create($this->handler),
        ]);

        $this->api = new Api\ApiAppApi(
            Configuration::getDefaultConfiguration(),
            $this->client,
        );
    }

    public function testApiAppCreate()
    {
        $requestClass = Model\ApiAppCreateRequest::class;
        $requestData = TestUtils::getFixtureData($requestClass)['default'];

        $responseClass = Model\ApiAppGetResponse::class;
        $responseData = TestUtils::getFixtureData($responseClass)['default'];

        $this->setExpectedResponse($responseData);

        $obj = Model\ApiAppCreateRequest::init($requestData);
        $obj->setCustomLogoFile(
            new SplFileObject(self::ROOT_FILE_PATH . '/pdf-sample.pdf')
        );

        $response = $this->api->apiAppCreate($obj);
        $serialized = TestUtils::toArray($response);

        $this->assertInstanceOf($responseClass, $response);
        $this->assertEquals($responseData, $serialized);
        $this->assertEquals($responseData, TestUtils::toArray($response));
    }

    public function testApiAppGet()
    {
        $clientId = '0dd3b823a682527788c4e40cb7b6f7e9';

        $responseClass = Model\ApiAppGetResponse::class;
        $responseData = TestUtils::getFixtureData($responseClass)['default'];

        $this->setExpectedResponse($responseData);

        $response = $this->api->apiAppGet($clientId);
        $serialized = TestUtils::toArray($response);

        $this->assertInstanceOf($responseClass, $response);
        $this->assertEquals($responseData, $serialized);
        $this->assertEquals($responseData, TestUtils::toArray($response));
    }

    public function testApiAppUpdate()
    {
        $clientId = '0dd3b823a682527788c4e40cb7b6f7e9';

        $requestClass = Model\ApiAppUpdateRequest::class;
        $requestData = TestUtils::getFixtureData($requestClass)['default'];

        $responseClass = Model\ApiAppGetResponse::class;
        $responseData = TestUtils::getFixtureData($responseClass)['default'];

        $this->setExpectedResponse($responseData);

        $obj = Model\ApiAppUpdateRequest::init($requestData);
        $obj->setCustomLogoFile(
            new SplFileObject(self::ROOT_FILE_PATH . '/pdf-sample.pdf')
        );

        $response = $this->api->apiAppUpdate($clientId, $obj);
        $serialized = TestUtils::toArray($response);

        $this->assertInstanceOf($responseClass, $response);
        $this->assertEquals($responseData, $serialized);
        $this->assertEquals($responseData, TestUtils::toArray($response));
    }

    public function testApiAppDelete()
    {
        $this->markTestSkipped('DELETE /api_app/{client_id} skipped');
    }

    public function testApiAppList()
    {
        $page = 1;
        $pageSize = 20;

        $responseClass = Model\ApiAppListResponse::class;
        $responseData = TestUtils::getFixtureData($responseClass)['default'];

        $this->setExpectedResponse($responseData);

        $response = $this->api->apiAppList($page, $pageSize);
        $serialized = TestUtils::toArray($response);

        $this->assertInstanceOf($responseClass, $response);
        $this->assertEquals($responseData, $serialized);
        $this->assertEquals($responseData, TestUtils::toArray($response));
    }
}
