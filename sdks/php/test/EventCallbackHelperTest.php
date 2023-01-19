<?php

declare(strict_types=1);

namespace Dropbox\Sign\Test;

use Dropbox\Sign\EventCallbackHelper;
use Dropbox\Sign\Model\EventCallbackRequest;

class EventCallbackHelperTest extends SignTestCase
{
    protected const APIKEY = '324e3b0840f065eb51f3fd63231d0d33daa35d4ed10d27718839e81737065782';

    /**
     * @dataProvider providerIsValid
     */
    public function testIsValid(
        string $apiKey,
        array $data,
        bool $passes
    ) {
        $callback_event = EventCallbackRequest::init($data);

        $isValid = EventCallbackHelper::isValid($apiKey, $callback_event);

        if ($passes) {
            $this->assertTrue($isValid);
        } else {
            $this->assertFalse($isValid);
        }
    }

    public function providerIsValid(): iterable
    {
        $fixtures = TestUtils::getFixtureData('EventCallbackHelper');
        foreach ($fixtures as $data) {
            yield [
                'apiKey' => self::APIKEY,
                'data' => $data,
                'passes' => true,
            ];

            yield [
                'apiKey' => strrev(self::APIKEY),
                'data' => $data,
                'passes' => false,
            ];
        }
    }
}
