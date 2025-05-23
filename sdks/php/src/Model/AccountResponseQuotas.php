<?php
/**
 * AccountResponseQuotas
 *
 * PHP version 7.4
 *
 * @category Class
 * @see     https://openapi-generator.tech
 */

/**
 * Dropbox Sign API
 *
 * Dropbox Sign v3 API
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: apisupport@hellosign.com
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.12.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace Dropbox\Sign\Model;

use ArrayAccess;
use Dropbox\Sign\ObjectSerializer;
use JsonSerializable;
use ReturnTypeWillChange;

/**
 * AccountResponseQuotas Class Doc Comment
 *
 * @category Class
 * @description Details concerning remaining monthly quotas.
 * @see     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class AccountResponseQuotas implements ModelInterface, ArrayAccess, JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
     * The original name of the model.
     *
     * @var string
     */
    protected static $openAPIModelName = 'AccountResponseQuotas';

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @var string[]
     */
    protected static $openAPITypes = [
        'api_signature_requests_left' => 'int',
        'documents_left' => 'int',
        'templates_total' => 'int',
        'templates_left' => 'int',
        'sms_verifications_left' => 'int',
        'num_fax_pages_left' => 'int',
    ];

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @var string[]
     * @phpstan-var array<string, string|null>
     * @psalm-var array<string, string|null>
     */
    protected static $openAPIFormats = [
        'api_signature_requests_left' => null,
        'documents_left' => null,
        'templates_total' => null,
        'templates_left' => null,
        'sms_verifications_left' => null,
        'num_fax_pages_left' => null,
    ];

    /**
     * Array of nullable properties. Used for (de)serialization
     *
     * @var bool[]
     */
    protected static array $openAPINullables = [
        'api_signature_requests_left' => true,
        'documents_left' => true,
        'templates_total' => true,
        'templates_left' => true,
        'sms_verifications_left' => true,
        'num_fax_pages_left' => true,
    ];

    /**
     * If a nullable field gets set to null, insert it here
     *
     * @var bool[]
     */
    protected array $openAPINullablesSetToNull = [];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes()
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats()
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of nullable properties
     */
    protected static function openAPINullables(): array
    {
        return self::$openAPINullables;
    }

    /**
     * Array of nullable field names deliberately set to null
     *
     * @return bool[]
     */
    private function getOpenAPINullablesSetToNull(): array
    {
        return $this->openAPINullablesSetToNull;
    }

    /**
     * Setter - Array of nullable field names deliberately set to null
     *
     * @param bool[] $openAPINullablesSetToNull
     */
    private function setOpenAPINullablesSetToNull(array $openAPINullablesSetToNull): void
    {
        $this->openAPINullablesSetToNull = $openAPINullablesSetToNull;
    }

    /**
     * Checks if a property is nullable
     */
    public static function isNullable(string $property): bool
    {
        return self::openAPINullables()[$property] ?? false;
    }

    /**
     * Checks if a nullable property is set to null.
     */
    public function isNullableSetToNull(string $property): bool
    {
        return in_array($property, $this->getOpenAPINullablesSetToNull(), true);
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'api_signature_requests_left' => 'api_signature_requests_left',
        'documents_left' => 'documents_left',
        'templates_total' => 'templates_total',
        'templates_left' => 'templates_left',
        'sms_verifications_left' => 'sms_verifications_left',
        'num_fax_pages_left' => 'num_fax_pages_left',
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'api_signature_requests_left' => 'setApiSignatureRequestsLeft',
        'documents_left' => 'setDocumentsLeft',
        'templates_total' => 'setTemplatesTotal',
        'templates_left' => 'setTemplatesLeft',
        'sms_verifications_left' => 'setSmsVerificationsLeft',
        'num_fax_pages_left' => 'setNumFaxPagesLeft',
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'api_signature_requests_left' => 'getApiSignatureRequestsLeft',
        'documents_left' => 'getDocumentsLeft',
        'templates_total' => 'getTemplatesTotal',
        'templates_left' => 'getTemplatesLeft',
        'sms_verifications_left' => 'getSmsVerificationsLeft',
        'num_fax_pages_left' => 'getNumFaxPagesLeft',
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$openAPIModelName;
    }

    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[]|null $data Associated array of property values
     *                           initializing the model
     */
    public function __construct(?array $data = null)
    {
        $this->setIfExists('api_signature_requests_left', $data ?? [], null);
        $this->setIfExists('documents_left', $data ?? [], null);
        $this->setIfExists('templates_total', $data ?? [], null);
        $this->setIfExists('templates_left', $data ?? [], null);
        $this->setIfExists('sms_verifications_left', $data ?? [], null);
        $this->setIfExists('num_fax_pages_left', $data ?? [], null);
    }

    /**
     * @deprecated use ::init()
     */
    public static function fromArray(array $data): AccountResponseQuotas
    {
        return self::init($data);
    }

    /**
     * Attempt to instantiate and hydrate a new instance of this class
     */
    public static function init(array $data): AccountResponseQuotas
    {
        /** @var AccountResponseQuotas */
        return ObjectSerializer::deserialize(
            $data,
            AccountResponseQuotas::class,
        );
    }

    /**
     * Sets $this->container[$variableName] to the given data or to the given default Value; if $variableName
     * is nullable and its value is set to null in the $fields array, then mark it as "set to null" in the
     * $this->openAPINullablesSetToNull array
     *
     * @param string|int|object|array|mixed $defaultValue
     */
    private function setIfExists(string $variableName, array $fields, $defaultValue): void
    {
        if (self::isNullable($variableName) && array_key_exists($variableName, $fields) && is_null($fields[$variableName])) {
            $this->openAPINullablesSetToNull[] = $variableName;
        }

        $this->container[$variableName] = $fields[$variableName] ?? $defaultValue;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        return [];
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }

    /**
     * Gets api_signature_requests_left
     *
     * @return int|null
     */
    public function getApiSignatureRequestsLeft()
    {
        return $this->container['api_signature_requests_left'];
    }

    /**
     * Sets api_signature_requests_left
     *
     * @param int|null $api_signature_requests_left API signature requests remaining
     *
     * @return self
     */
    public function setApiSignatureRequestsLeft(?int $api_signature_requests_left)
    {
        if (is_null($api_signature_requests_left)) {
            array_push($this->openAPINullablesSetToNull, 'api_signature_requests_left');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('api_signature_requests_left', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['api_signature_requests_left'] = $api_signature_requests_left;

        return $this;
    }

    /**
     * Gets documents_left
     *
     * @return int|null
     */
    public function getDocumentsLeft()
    {
        return $this->container['documents_left'];
    }

    /**
     * Sets documents_left
     *
     * @param int|null $documents_left signature requests remaining
     *
     * @return self
     */
    public function setDocumentsLeft(?int $documents_left)
    {
        if (is_null($documents_left)) {
            array_push($this->openAPINullablesSetToNull, 'documents_left');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('documents_left', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['documents_left'] = $documents_left;

        return $this;
    }

    /**
     * Gets templates_total
     *
     * @return int|null
     */
    public function getTemplatesTotal()
    {
        return $this->container['templates_total'];
    }

    /**
     * Sets templates_total
     *
     * @param int|null $templates_total total API templates allowed
     *
     * @return self
     */
    public function setTemplatesTotal(?int $templates_total)
    {
        if (is_null($templates_total)) {
            array_push($this->openAPINullablesSetToNull, 'templates_total');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('templates_total', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['templates_total'] = $templates_total;

        return $this;
    }

    /**
     * Gets templates_left
     *
     * @return int|null
     */
    public function getTemplatesLeft()
    {
        return $this->container['templates_left'];
    }

    /**
     * Sets templates_left
     *
     * @param int|null $templates_left API templates remaining
     *
     * @return self
     */
    public function setTemplatesLeft(?int $templates_left)
    {
        if (is_null($templates_left)) {
            array_push($this->openAPINullablesSetToNull, 'templates_left');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('templates_left', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['templates_left'] = $templates_left;

        return $this;
    }

    /**
     * Gets sms_verifications_left
     *
     * @return int|null
     */
    public function getSmsVerificationsLeft()
    {
        return $this->container['sms_verifications_left'];
    }

    /**
     * Sets sms_verifications_left
     *
     * @param int|null $sms_verifications_left SMS verifications remaining
     *
     * @return self
     */
    public function setSmsVerificationsLeft(?int $sms_verifications_left)
    {
        if (is_null($sms_verifications_left)) {
            array_push($this->openAPINullablesSetToNull, 'sms_verifications_left');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('sms_verifications_left', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['sms_verifications_left'] = $sms_verifications_left;

        return $this;
    }

    /**
     * Gets num_fax_pages_left
     *
     * @return int|null
     */
    public function getNumFaxPagesLeft()
    {
        return $this->container['num_fax_pages_left'];
    }

    /**
     * Sets num_fax_pages_left
     *
     * @param int|null $num_fax_pages_left Number of fax pages left
     *
     * @return self
     */
    public function setNumFaxPagesLeft(?int $num_fax_pages_left)
    {
        if (is_null($num_fax_pages_left)) {
            array_push($this->openAPINullablesSetToNull, 'num_fax_pages_left');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('num_fax_pages_left', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['num_fax_pages_left'] = $num_fax_pages_left;

        return $this;
    }

    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param int $offset Offset
     */
    #[ReturnTypeWillChange]
    public function offsetExists($offset): bool
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param int $offset Offset
     *
     * @return mixed|null
     */
    #[ReturnTypeWillChange]
    public function offsetGet($offset)
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param int|null $offset Offset
     * @param mixed    $value  Value to be set
     */
    #[ReturnTypeWillChange]
    public function offsetSet($offset, $value): void
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param int $offset Offset
     */
    #[ReturnTypeWillChange]
    public function offsetUnset($offset): void
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     * @see https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed returns data which can be serialized by json_encode(), which is a value
     *               of any type other than a resource
     */
    #[ReturnTypeWillChange]
    public function jsonSerialize()
    {
        return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_UNESCAPED_SLASHES
        );
    }

    /**
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue()
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}
