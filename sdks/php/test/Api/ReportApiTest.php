<?php

declare(strict_types=1);

namespace Dropbox\Sign\Test\Api;

use Dropbox\Sign\Api;
use Dropbox\Sign\Configuration;
use Dropbox\Sign\Model;
use Dropbox\Sign\Test\SignTestCase;
use Dropbox\Sign\Test\TestUtils;
use GuzzleHttp;

class ReportApiTest extends SignTestCase
{
    /** @var Api\ReportApi */
    protected $api;

    protected function setUp(): void
    {
        parent::setUp();

        $this->client = new GuzzleHttp\Client([
            'handler' => GuzzleHttp\HandlerStack::create($this->handler),
        ]);

        $this->api = new Api\ReportApi(
            Configuration::getDefaultConfiguration(),
            $this->client,
        );
    }

    public function testReportCreate()
    {
        $requestClass = Model\ReportCreateRequest::class;
        $requestData = TestUtils::getFixtureData($requestClass)['default'];

        $responseClass = Model\ReportCreateResponse::class;
        $responseData = TestUtils::getFixtureData($responseClass)['default'];

        $this->setExpectedResponse($responseData);

        $obj = Model\ReportCreateRequest::init($requestData);

        $response = $this->api->reportCreate($obj);
        $serialized = TestUtils::toArray($response);

        $this->assertInstanceOf($responseClass, $response);
        $this->assertEquals($responseData, $serialized);
        $this->assertEquals($responseData, TestUtils::toArray($response));
    }
}
