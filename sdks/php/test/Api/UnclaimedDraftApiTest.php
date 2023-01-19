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

class UnclaimedDraftApiTest extends SignTestCase
{
    /** @var Api\UnclaimedDraftApi */
    protected $api;

    protected function setUp(): void
    {
        parent::setUp();

        $this->client = new GuzzleHttp\Client([
            'handler' => GuzzleHttp\HandlerStack::create($this->handler),
        ]);

        $this->api = new Api\UnclaimedDraftApi(
            Configuration::getDefaultConfiguration(),
            $this->client,
        );
    }

    public function testUnclaimedDraftCreate()
    {
        $requestClass = Model\UnclaimedDraftCreateRequest::class;
        $requestData = TestUtils::getFixtureData($requestClass)['default'];

        $responseClass = Model\UnclaimedDraftCreateResponse::class;
        $responseData = TestUtils::getFixtureData($responseClass)['default'];

        $this->setExpectedResponse($responseData);

        $obj = Model\UnclaimedDraftCreateRequest::init($requestData);
        $obj->setFiles([
            new SplFileObject(self::ROOT_FILE_PATH . '/pdf-sample.pdf'),
        ]);

        $response = $this->api->unclaimedDraftCreate($obj);
        $serialized = TestUtils::toArray($response);

        $this->assertInstanceOf($responseClass, $response);
        $this->assertEquals($responseData, $serialized);
        $this->assertEquals($responseData, TestUtils::toArray($response));
    }

    public function testUnclaimedDraftCreateEmbedded()
    {
        $requestClass = Model\UnclaimedDraftCreateEmbeddedRequest::class;
        $requestData = TestUtils::getFixtureData($requestClass)['default'];

        $responseClass = Model\UnclaimedDraftCreateResponse::class;
        $responseData = TestUtils::getFixtureData($responseClass)['default'];

        $this->setExpectedResponse($responseData);

        $obj = Model\UnclaimedDraftCreateEmbeddedRequest::init($requestData);
        $obj->setFiles([
            new SplFileObject(self::ROOT_FILE_PATH . '/pdf-sample.pdf'),
        ]);

        $response = $this->api->unclaimedDraftCreateEmbedded($obj);
        $serialized = TestUtils::toArray($response);

        $this->assertInstanceOf($responseClass, $response);
        $this->assertEquals($responseData, $serialized);
        $this->assertEquals($responseData, TestUtils::toArray($response));
    }

    public function testUnclaimedDraftCreateEmbeddedWithTemplate()
    {
        $requestClass = Model\UnclaimedDraftCreateEmbeddedWithTemplateRequest::class;
        $requestData = TestUtils::getFixtureData($requestClass)['default'];

        $responseClass = Model\UnclaimedDraftCreateResponse::class;
        $responseData = TestUtils::getFixtureData($responseClass)['default'];

        $this->setExpectedResponse($responseData);

        $obj = Model\UnclaimedDraftCreateEmbeddedWithTemplateRequest::init(
            $requestData
        );
        $obj->setFiles([
            new SplFileObject(self::ROOT_FILE_PATH . '/pdf-sample.pdf'),
        ]);

        $response = $this->api->unclaimedDraftCreateEmbeddedWithTemplate($obj);
        $serialized = TestUtils::toArray($response);

        $this->assertInstanceOf($responseClass, $response);
        $this->assertEquals($responseData, $serialized);
        $this->assertEquals($responseData, TestUtils::toArray($response));
    }

    public function testUnclaimedDraftEditAndResend()
    {
        $signatureRequestId = '2f9781e1a83jdja934d808c153c2e1d3df6f8f2f';
        $requestClass = Model\UnclaimedDraftEditAndResendRequest::class;
        $requestData = TestUtils::getFixtureData($requestClass)['default'];

        $responseClass = Model\UnclaimedDraftCreateResponse::class;
        $responseData = TestUtils::getFixtureData($responseClass)['default'];

        $this->setExpectedResponse($responseData);

        $obj = Model\UnclaimedDraftEditAndResendRequest::init($requestData);

        $response = $this->api->unclaimedDraftEditAndResend(
            $signatureRequestId,
            $obj
        );
        $serialized = TestUtils::toArray($response);

        $this->assertInstanceOf($responseClass, $response);
        $this->assertEquals($responseData, $serialized);
        $this->assertEquals($responseData, TestUtils::toArray($response));
    }
}
