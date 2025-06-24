<?php

declare(strict_types=1);

namespace Api;

use Dropbox\Sign\Api;
use Dropbox\Sign\Configuration;
use Dropbox\Sign\Model;
use Dropbox\Sign\Test\SignTestCase;
use Dropbox\Sign\Test\TestUtils;
use GuzzleHttp;
use SplFileObject;

class FaxLineApiTest extends SignTestCase
{
    /** @var Api\FaxApi */
    protected $api;

    protected function setUp(): void
    {
        parent::setUp();

        $this->client = new GuzzleHttp\Client([
            'handler' => GuzzleHttp\HandlerStack::create($this->handler),
        ]);

        $this->api = new Api\FaxLineApi(
            Configuration::getDefaultConfiguration(),
            $this->client,
        );
    }

    public function testFaxSend()
    {
        $requestClass = Model\FaxLineCreateRequest::class;
        $requestData = TestUtils::getFixtureData($requestClass)['default'];

        $responseClass = Model\FaxLineResponse::class;
        $responseData = TestUtils::getFixtureData($responseClass)['default'];

        $this->setExpectedResponse($responseData);

        $obj = Model\FaxLineCreateRequest::init(
            $requestData
        );

        $response = $this->api->faxLineCreate($obj);
        $serialized = TestUtils::toArray($response);

        $this->assertInstanceOf($responseClass, $response);
        $this->assertEquals($responseData, $serialized);
        $this->assertEquals($responseData, TestUtils::toArray($response));
    }

    public function testFaxLineList()
    {
        $responseClass = Model\FaxLineListResponse::class;
        $responseData = TestUtils::getFixtureData($responseClass)['default'];

        $this->setExpectedResponse($responseData);

        $response = $this->api->faxLineList();
        $serialized = TestUtils::toArray($response);

        $this->assertInstanceOf($responseClass, $response);
        $this->assertEquals($responseData, $serialized);
        $this->assertEquals($responseData, TestUtils::toArray($response));
    }

    public function testFaxLineGet()
    {
        $faxLineNumber = '14155557897';

        $responseClass = Model\FaxLineResponse::class;
        $responseData = TestUtils::getFixtureData($responseClass)['default'];

        $this->setExpectedResponse($responseData);

        $response = $this->api->faxLineGet($faxLineNumber);
        $serialized = TestUtils::toArray($response);

        $this->assertInstanceOf($responseClass, $response);
        $this->assertEquals($responseData, $serialized);
        $this->assertEquals($responseData, TestUtils::toArray($response));
    }
}
