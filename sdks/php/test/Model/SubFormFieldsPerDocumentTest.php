<?php

declare(strict_types=1);

namespace Dropbox\Sign\Test\Model;

use Dropbox\Sign\Model\SignatureRequestSendRequest;
use Dropbox\Sign\Test\SignTestCase;
use Dropbox\Sign\Test\TestUtils;

class SubFormFieldsPerDocumentTest extends SignTestCase
{
    /**
     * @dataProvider providerSubFormFieldsPerDocumentBase
     */
    public function testSubFormFieldsPerDocumentBase(
        string $type,
        array $form_field
    ) {
        $data = [
            'form_fields_per_document' => [$form_field],
        ];

        $obj = SignatureRequestSendRequest::init($data);

        $field = $obj->getFormFieldsPerDocument()[0];

        $this->assertInstanceOf("\\Dropbox\\Sign\\Model\\{$type}", $field);
        $this->assertEquals(
            $data['form_fields_per_document'],
            json_decode(json_encode($obj->getFormFieldsPerDocument()), true)
        );
    }

    /**
     * @dataProvider providerSubFormFieldsPerDocumentBase
     */
    public function testEmptyArrayReturnsNullValue(
        string $type,
        array $form_field
    ) {
        $data = [
            'form_fields_per_document' => [
                $form_field,
                [],
            ],
        ];

        $expected = [
            $form_field,
            null,
        ];

        $obj = SignatureRequestSendRequest::init($data);

        $field = $obj->getFormFieldsPerDocument()[0];

        $this->assertInstanceOf("\\Dropbox\\Sign\\Model\\{$type}", $field);
        $this->assertEquals(
            $expected,
            json_decode(json_encode($obj->getFormFieldsPerDocument()), true)
        );
    }

    /**
     * @dataProvider providerSubFormFieldsPerDocumentBase
     */
    public function testSignerAllowsInt(
        string $type,
        array $form_field
    ) {
        $form_field['signer'] = 1234;
        $data = ['form_fields_per_document' => [$form_field, []]];
        $expected_signer = '1234';

        $obj = SignatureRequestSendRequest::init($data);
        $result = $obj->getFormFieldsPerDocument()[0];
        $this->assertEquals($expected_signer, $result->getSigner());
    }

    /**
     * @dataProvider providerSubFormFieldsPerDocumentBase
     */
    public function testSignerAllowsString(
        string $type,
        array $form_field
    ) {
        $form_field['signer'] = 'sender';
        $data = ['form_fields_per_document' => [$form_field, []]];
        $expected_signer = 'sender';

        $obj = SignatureRequestSendRequest::init($data);
        $result = $obj->getFormFieldsPerDocument()[0];
        $this->assertEquals($expected_signer, $result->getSigner());
    }

    public function providerSubFormFieldsPerDocumentBase(): iterable
    {
        $fixtures = TestUtils::getFixtureData('SubFormFieldsPerDocument');
        foreach ($fixtures as $type => $data) {
            yield [
                'type' => $type,
                'data' => $data,
            ];
        }
    }
}
