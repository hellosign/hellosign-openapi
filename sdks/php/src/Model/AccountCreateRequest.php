<?php
/**
 * AccountCreateRequest
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
 * AccountCreateRequest Class Doc Comment
 *
 * @category Class
 * @see     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class AccountCreateRequest implements ModelInterface, ArrayAccess, JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
     * The original name of the model.
     *
     * @var string
     */
    protected static $openAPIModelName = 'AccountCreateRequest';

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @var string[]
     */
    protected static $openAPITypes = [
        'email_address' => 'string',
        'client_id' => 'string',
        'client_secret' => 'string',
        'locale' => 'string',
    ];

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @var string[]
     * @phpstan-var array<string, string|null>
     * @psalm-var array<string, string|null>
     */
    protected static $openAPIFormats = [
        'email_address' => 'email',
        'client_id' => null,
        'client_secret' => null,
        'locale' => null,
    ];

    /**
     * Array of nullable properties. Used for (de)serialization
     *
     * @var bool[]
     */
    protected static array $openAPINullables = [
        'email_address' => false,
        'client_id' => false,
        'client_secret' => false,
        'locale' => false,
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
        'email_address' => 'email_address',
        'client_id' => 'client_id',
        'client_secret' => 'client_secret',
        'locale' => 'locale',
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'email_address' => 'setEmailAddress',
        'client_id' => 'setClientId',
        'client_secret' => 'setClientSecret',
        'locale' => 'setLocale',
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'email_address' => 'getEmailAddress',
        'client_id' => 'getClientId',
        'client_secret' => 'getClientSecret',
        'locale' => 'getLocale',
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
        $this->setIfExists('email_address', $data ?? [], null);
        $this->setIfExists('client_id', $data ?? [], null);
        $this->setIfExists('client_secret', $data ?? [], null);
        $this->setIfExists('locale', $data ?? [], null);
    }

    /**
     * @deprecated use ::init()
     */
    public static function fromArray(array $data): AccountCreateRequest
    {
        return self::init($data);
    }

    /**
     * Attempt to instantiate and hydrate a new instance of this class
     */
    public static function init(array $data): AccountCreateRequest
    {
        /** @var AccountCreateRequest */
        return ObjectSerializer::deserialize(
            $data,
            AccountCreateRequest::class,
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
        $invalidProperties = [];

        if ($this->container['email_address'] === null) {
            $invalidProperties[] = "'email_address' can't be null";
        }
        return $invalidProperties;
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
     * Gets email_address
     *
     * @return string
     */
    public function getEmailAddress()
    {
        return $this->container['email_address'];
    }

    /**
     * Sets email_address
     *
     * @param string $email_address the email address which will be associated with the new Account
     *
     * @return self
     */
    public function setEmailAddress(string $email_address)
    {
        if (is_null($email_address)) {
            throw new InvalidArgumentException('non-nullable email_address cannot be null');
        }
        $this->container['email_address'] = $email_address;

        return $this;
    }

    /**
     * Gets client_id
     *
     * @return string|null
     */
    public function getClientId()
    {
        return $this->container['client_id'];
    }

    /**
     * Sets client_id
     *
     * @param string|null $client_id Used when creating a new account with OAuth authorization.  See [OAuth 2.0 Authorization](https://app.hellosign.com/api/oauthWalkthrough#OAuthAuthorization)
     *
     * @return self
     */
    public function setClientId(?string $client_id)
    {
        if (is_null($client_id)) {
            throw new InvalidArgumentException('non-nullable client_id cannot be null');
        }
        $this->container['client_id'] = $client_id;

        return $this;
    }

    /**
     * Gets client_secret
     *
     * @return string|null
     */
    public function getClientSecret()
    {
        return $this->container['client_secret'];
    }

    /**
     * Sets client_secret
     *
     * @param string|null $client_secret Used when creating a new account with OAuth authorization.  See [OAuth 2.0 Authorization](https://app.hellosign.com/api/oauthWalkthrough#OAuthAuthorization)
     *
     * @return self
     */
    public function setClientSecret(?string $client_secret)
    {
        if (is_null($client_secret)) {
            throw new InvalidArgumentException('non-nullable client_secret cannot be null');
        }
        $this->container['client_secret'] = $client_secret;

        return $this;
    }

    /**
     * Gets locale
     *
     * @return string|null
     */
    public function getLocale()
    {
        return $this->container['locale'];
    }

    /**
     * Sets locale
     *
     * @param string|null $locale The locale used in this Account. Check out the list of [supported locales](/api/reference/constants/#supported-locales) to learn more about the possible values.
     *
     * @return self
     */
    public function setLocale(?string $locale)
    {
        if (is_null($locale)) {
            throw new InvalidArgumentException('non-nullable locale cannot be null');
        }
        $this->container['locale'] = $locale;

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
