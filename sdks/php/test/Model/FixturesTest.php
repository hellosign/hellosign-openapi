<?php

declare(strict_types=1);

namespace Dropbox\Sign\Test\Model;

use Dropbox\Sign\Model as ModelNS;
use Dropbox\Sign\ObjectSerializer;
use Dropbox\Sign\Test\SignTestCase;
use Dropbox\Sign\Test\TestUtils;

class FixturesTest extends SignTestCase
{
    /**
     * @dataProvider providerValues
     */
    public function testValues(string $type, array $data)
    {
        $obj = ObjectSerializer::deserialize($data, $type);
        $serialized = TestUtils::toArray($obj);

        $this->assertInstanceOf($type, $obj, "Expecting instance of {$type}");
        $this->assertEquals($data, $serialized, "Equality failed for {$type}");
    }

    public function providerValues(): iterable
    {
        $fixtures = [
            ModelNS\AccountCreateRequest::class,
            ModelNS\AccountUpdateRequest::class,
            ModelNS\AccountVerifyRequest::class,
            ModelNS\ApiAppCreateRequest::class,
            ModelNS\ApiAppUpdateRequest::class,
            ModelNS\EmbeddedEditUrlRequest::class,
            ModelNS\OAuthTokenGenerateRequest::class,
            ModelNS\OAuthTokenRefreshRequest::class,
            ModelNS\ReportCreateRequest::class,
            ModelNS\SignatureRequestBulkCreateEmbeddedWithTemplateRequest::class,
            ModelNS\SignatureRequestBulkSendWithTemplateRequest::class,
            ModelNS\SignatureRequestCreateEmbeddedRequest::class,
            ModelNS\SignatureRequestCreateEmbeddedWithTemplateRequest::class,
            ModelNS\SignatureRequestRemindRequest::class,
            ModelNS\SignatureRequestSendRequest::class,
            ModelNS\SignatureRequestSendWithTemplateRequest::class,
            ModelNS\SignatureRequestUpdateRequest::class,
            ModelNS\TeamAddMemberRequest::class,
            ModelNS\TeamCreateRequest::class,
            ModelNS\TeamRemoveMemberRequest::class,
            ModelNS\TeamUpdateRequest::class,
            ModelNS\TemplateAddUserRequest::class,
            ModelNS\TemplateCreateEmbeddedDraftRequest::class,
            ModelNS\TemplateRemoveUserRequest::class,
            ModelNS\TemplateUpdateFilesRequest::class,
            ModelNS\UnclaimedDraftCreateEmbeddedRequest::class,
            ModelNS\UnclaimedDraftCreateEmbeddedWithTemplateRequest::class,
            ModelNS\UnclaimedDraftCreateRequest::class,
            ModelNS\UnclaimedDraftEditAndResendRequest::class,
        ];

        foreach ($fixtures as $type) {
            $datasets = TestUtils::getFixtureData($type);
            foreach ($datasets as $data) {
                yield [
                    'type' => $type,
                    'data' => $data,
                ];
            }
        }
    }
}
