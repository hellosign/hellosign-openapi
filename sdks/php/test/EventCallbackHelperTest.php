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
        bool $passes,
        string $callback_type
    ) {
        $callback_event = EventCallbackRequest::init($data);

        $this->assertEquals(
            $passes,
            EventCallbackHelper::isValid($apiKey, $callback_event)
        );

        $this->assertEquals(
            $callback_type,
            EventCallbackHelper::getCallbackType($callback_event)
        );
    }

    public function providerIsValid(): iterable
    {
        $account_fixtures = TestUtils::getFixtureData('EventCallbackHelper_AccountCallbacks');
        foreach ($account_fixtures as $data) {
            yield [
                'apiKey' => self::APIKEY,
                'data' => $data,
                'passes' => true,
                'callback_type' => EventCallbackHelper::EVENT_TYPE_ACCOUNT_CALLBACK,
            ];

            yield [
                'apiKey' => strrev(self::APIKEY),
                'data' => $data,
                'passes' => false,
                'callback_type' => EventCallbackHelper::EVENT_TYPE_ACCOUNT_CALLBACK,
            ];
        }

        $app_fixtures = TestUtils::getFixtureData('EventCallbackHelper_AppCallbacks');
        foreach ($app_fixtures as $data) {
            yield [
                'apiKey' => self::APIKEY,
                'data' => $data,
                'passes' => true,
                'callback_type' => EventCallbackHelper::EVENT_TYPE_APP_CALLBACK,
            ];

            yield [
                'apiKey' => strrev(self::APIKEY),
                'data' => $data,
                'passes' => false,
                'callback_type' => EventCallbackHelper::EVENT_TYPE_APP_CALLBACK,
            ];
        }
    }
}
