<?php

declare(strict_types=1);

namespace Dropbox\Sign\Test;

use Dropbox\Sign\Api;
use Dropbox\Sign\Configuration;
use Dropbox\Sign\Model;
use Dropbox\Sign\ObjectSerializer;
use Dropbox\Sign\Test\SignTestCase;
use Dropbox\Sign\Test\TestUtils;
use GuzzleHttp;
use GuzzleHttp\Psr7;
use SplFileObject;

class ObjectSerializerTest extends SignTestCase
{
    /** @var Api\SignatureRequestApi */
    protected $api;

    protected function setUp(): void
    {
        parent::setUp();

        $this->client = new GuzzleHttp\Client([
            'handler' => GuzzleHttp\HandlerStack::create($this->handler),
        ]);

        $this->api = new Api\SignatureRequestApi(
            Configuration::getDefaultConfiguration(),
            $this->client,
        );
    }

    public function testExplicitIndexKeysAreKeptForNestedValues(): void
    {
        $data = [
            'type'                     => 'request_signature',
            'subject'                  => 'unclaimed draft that should work',
            'message'                  => 'indeed',
            'metadata'                 => null,
            'test_mode'                => false,
            'signers'                  => [
                '1' => [
                    'order'         => 1,
                    'email_address' => 'john@example.com',
                    'name'          => 'John Q Public',
                ],
            ],
            'form_fields_per_document' => [
                [
                    'document_index' => 0,
                    'name'           => null,
                    'type'           => 'signature',
                    'x'              => 530,
                    'y'              => 415,
                    'width'          => 120,
                    'height'         => 30,
                    'required'       => true,
                    'signer'         => 1,
                ],
            ],
            'client_id'                => '1df877123c9b64884c86530a1c1d309d',
            'requester_email_address'  => 'test-1725033846-d0e693477a@example.com',
        ];

        $obj = Model\UnclaimedDraftCreateEmbeddedRequest::init($data);

        $expected_signer_key = '1';
        $this->assertArrayHasKey($expected_signer_key, $obj->getSigners());
        $this->assertEquals(
            $data['signers'][$expected_signer_key]['email_address'],
            $obj->getSigners()[$expected_signer_key]->getEmailAddress(),
        );

        $expected_ffpd_key = 0;
        $this->assertArrayHasKey($expected_ffpd_key, $obj->getFormFieldsPerDocument());
        $this->assertEquals(
            $data['form_fields_per_document'][$expected_ffpd_key]['type'],
            $obj->getFormFieldsPerDocument()[$expected_ffpd_key]->getType(),
        );
    }

    public function testSplFileObjectUntouched(): void
    {
        $requestClass = Model\SignatureRequestSendRequest::class;
        $requestData = TestUtils::getFixtureData($requestClass)['default'];
        unset($requestData['file_urls']);

        $filename = 'pdf-sample.pdf';
        $filepath = self::ROOT_FILE_PATH . "/{$filename}";

        $requestData['files'] = [new SplFileObject($filepath)];

        $obj = Model\SignatureRequestSendRequest::init($requestData);

        $file = $obj->getFiles()[0];

        $this->assertInstanceOf(SplFileObject::class, $file);
        $this->assertEquals($filename, $file->getFilename());
        $this->assertEquals($filepath, $file->getPathname());
    }
}
