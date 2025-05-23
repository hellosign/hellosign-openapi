<?php
/**
 * ReportResponse
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
use InvalidArgumentException;
use JsonSerializable;
use ReturnTypeWillChange;

/**
 * ReportResponse Class Doc Comment
 *
 * @category Class
 * @description Contains information about the report request.
 * @see     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class ReportResponse implements ModelInterface, ArrayAccess, JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
     * The original name of the model.
     *
     * @var string
     */
    protected static $openAPIModelName = 'ReportResponse';

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @var string[]
     */
    protected static $openAPITypes = [
        'success' => 'string',
        'start_date' => 'string',
        'end_date' => 'string',
        'report_type' => 'string[]',
    ];

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @var string[]
     * @phpstan-var array<string, string|null>
     * @psalm-var array<string, string|null>
     */
    protected static $openAPIFormats = [
        'success' => null,
        'start_date' => null,
        'end_date' => null,
        'report_type' => null,
    ];

    /**
     * Array of nullable properties. Used for (de)serialization
     *
     * @var bool[]
     */
    protected static array $openAPINullables = [
        'success' => false,
        'start_date' => false,
        'end_date' => false,
        'report_type' => false,
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
        'success' => 'success',
        'start_date' => 'start_date',
        'end_date' => 'end_date',
        'report_type' => 'report_type',
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'success' => 'setSuccess',
        'start_date' => 'setStartDate',
        'end_date' => 'setEndDate',
        'report_type' => 'setReportType',
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'success' => 'getSuccess',
        'start_date' => 'getStartDate',
        'end_date' => 'getEndDate',
        'report_type' => 'getReportType',
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

    public const REPORT_TYPE_USER_ACTIVITY = 'user_activity';
    public const REPORT_TYPE_DOCUMENT_STATUS = 'document_status';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getReportTypeAllowableValues()
    {
        return [
            self::REPORT_TYPE_USER_ACTIVITY,
            self::REPORT_TYPE_DOCUMENT_STATUS,
        ];
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
        $this->setIfExists('success', $data ?? [], null);
        $this->setIfExists('start_date', $data ?? [], null);
        $this->setIfExists('end_date', $data ?? [], null);
        $this->setIfExists('report_type', $data ?? [], null);
    }

    /**
     * @deprecated use ::init()
     */
    public static function fromArray(array $data): ReportResponse
    {
        return self::init($data);
    }

    /**
     * Attempt to instantiate and hydrate a new instance of this class
     */
    public static function init(array $data): ReportResponse
    {
        /** @var ReportResponse */
        return ObjectSerializer::deserialize(
            $data,
            ReportResponse::class,
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
     * Gets success
     *
     * @return string|null
     */
    public function getSuccess()
    {
        return $this->container['success'];
    }

    /**
     * Sets success
     *
     * @param string|null $success A message indicating the requested operation's success
     *
     * @return self
     */
    public function setSuccess(?string $success)
    {
        if (is_null($success)) {
            throw new InvalidArgumentException('non-nullable success cannot be null');
        }
        $this->container['success'] = $success;

        return $this;
    }

    /**
     * Gets start_date
     *
     * @return string|null
     */
    public function getStartDate()
    {
        return $this->container['start_date'];
    }

    /**
     * Sets start_date
     *
     * @param string|null $start_date the (inclusive) start date for the report data in MM/DD/YYYY format
     *
     * @return self
     */
    public function setStartDate(?string $start_date)
    {
        if (is_null($start_date)) {
            throw new InvalidArgumentException('non-nullable start_date cannot be null');
        }
        $this->container['start_date'] = $start_date;

        return $this;
    }

    /**
     * Gets end_date
     *
     * @return string|null
     */
    public function getEndDate()
    {
        return $this->container['end_date'];
    }

    /**
     * Sets end_date
     *
     * @param string|null $end_date the (inclusive) end date for the report data in MM/DD/YYYY format
     *
     * @return self
     */
    public function setEndDate(?string $end_date)
    {
        if (is_null($end_date)) {
            throw new InvalidArgumentException('non-nullable end_date cannot be null');
        }
        $this->container['end_date'] = $end_date;

        return $this;
    }

    /**
     * Gets report_type
     *
     * @return string[]|null
     */
    public function getReportType()
    {
        return $this->container['report_type'];
    }

    /**
     * Sets report_type
     *
     * @param string[]|null $report_type The type(s) of the report you are requesting. Allowed values are \"user_activity\" and \"document_status\". User activity reports contain list of all users and their activity during the specified date range. Document status report contain a list of signature requests created in the specified time range (and their status).
     *
     * @return self
     */
    public function setReportType(?array $report_type)
    {
        if (is_null($report_type)) {
            throw new InvalidArgumentException('non-nullable report_type cannot be null');
        }
        $allowedValues = $this->getReportTypeAllowableValues();
        if (array_diff($report_type, $allowedValues)) {
            throw new InvalidArgumentException(
                sprintf(
                    "Invalid value for 'report_type', must be one of '%s'",
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['report_type'] = $report_type;

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
