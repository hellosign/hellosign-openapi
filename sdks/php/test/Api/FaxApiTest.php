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

class FaxApiTest extends SignTestCase
{
    /** @var Api\FaxApi */
    protected $api;

    protected function setUp(): void
    {
        parent::setUp();

        $this->client = new GuzzleHttp\Client([
            'handler' => GuzzleHttp\HandlerStack::create($this->handler),
        ]);

        $this->api = new Api\FaxApi(
            Configuration::getDefaultConfiguration(),
            $this->client,
        );
    }

    public function testFaxSend()
    {
        $requestClass = Model\FaxSendRequest::class;
        $requestData = TestUtils::getFixtureData($requestClass)['default'];

        $responseClass = Model\FaxGetResponse::class;
        $responseData = TestUtils::getFixtureData($responseClass)['default'];

        $this->setExpectedResponse($responseData);

        $obj = Model\FaxSendRequest::init(
            $requestData
        );
        $obj->setFiles([
            new SplFileObject(self::ROOT_FILE_PATH . '/pdf-sample.pdf'),
        ]);

        $response = $this->api->faxSend($obj);
        $serialized = TestUtils::toArray($response);

        $this->assertInstanceOf($responseClass, $response);
        $this->assertEquals($responseData, $serialized);
        $this->assertEquals($responseData, TestUtils::toArray($response));
    }

    public function testFaxList()
    {
        $responseClass = Model\FaxListResponse::class;
        $responseData = TestUtils::getFixtureData($responseClass)['default'];

        $this->setExpectedResponse($responseData);

        $response = $this->api->faxList();
        $serialized = TestUtils::toArray($response);

        $this->assertInstanceOf($responseClass, $response);
        $this->assertEquals($responseData, $serialized);
        $this->assertEquals($responseData, TestUtils::toArray($response));
    }

    public function testFaxGet()
    {
        $faxId = 'c2e9691c85d9d6fa6ae773842e3680b2b8650f1d';

        $responseClass = Model\FaxGetResponse::class;
        $responseData = TestUtils::getFixtureData($responseClass)['default'];

        $this->setExpectedResponse($responseData);

        $response = $this->api->faxGet($faxId);
        $serialized = TestUtils::toArray($response);

        $this->assertInstanceOf($responseClass, $response);
        $this->assertEquals($responseData, $serialized);
        $this->assertEquals($responseData, TestUtils::toArray($response));
    }
}
