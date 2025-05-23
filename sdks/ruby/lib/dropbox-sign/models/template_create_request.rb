=begin
#Dropbox Sign API

#Dropbox Sign v3 API

The version of the OpenAPI document: 3.0.0
Contact: apisupport@hellosign.com
Generated by: https://openapi-generator.tech
Generator version: 7.12.0

=end

require 'date'
require 'time'

module Dropbox
end

module Dropbox::Sign
  class TemplateCreateRequest
    # The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)  **NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.  * Text Field use `SubFormFieldsPerDocumentText` * Dropdown Field use `SubFormFieldsPerDocumentDropdown` * Hyperlink Field use `SubFormFieldsPerDocumentHyperlink` * Checkbox Field use `SubFormFieldsPerDocumentCheckbox` * Radio Field use `SubFormFieldsPerDocumentRadio` * Signature Field use `SubFormFieldsPerDocumentSignature` * Date Signed Field use `SubFormFieldsPerDocumentDateSigned` * Initials Field use `SubFormFieldsPerDocumentInitials` * Text Merge Field use `SubFormFieldsPerDocumentTextMerge` * Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`
    # @return [Array<SubFormFieldsPerDocumentBase>]
    attr_accessor :form_fields_per_document

    # An array of the designated signer roles that must be specified when sending a SignatureRequest using this Template.
    # @return [Array<SubTemplateRole>]
    attr_accessor :signer_roles

    # Use `files[]` to indicate the uploaded file(s) to send for signature.  This endpoint requires either **files** or **file_urls[]**, but not both.
    # @return [Array<File>]
    attr_accessor :files

    # Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.  This endpoint requires either **files** or **file_urls[]**, but not both.
    # @return [Array<String>]
    attr_accessor :file_urls

    # Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.  **NOTE:** Only available for Premium plan and higher.
    # @return [Boolean]
    attr_accessor :allow_reassign

    # A list describing the attachments
    # @return [Array<SubAttachment>]
    attr_accessor :attachments

    # The CC roles that must be assigned when using the template to send a signature request
    # @return [Array<String>]
    attr_accessor :cc_roles

    # Client id of the app you're using to create this draft. Used to apply the branding and callback url defined for the app.
    # @return [String]
    attr_accessor :client_id

    # @return [SubFieldOptions]
    attr_accessor :field_options

    # Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.
    # @return [Array<SubFormFieldGroup>]
    attr_accessor :form_field_groups

    # Conditional Logic rules for fields defined in `form_fields_per_document`.
    # @return [Array<SubFormFieldRule>]
    attr_accessor :form_field_rules

    # Add merge fields to the template. Merge fields are placed by the user creating the template and used to pre-fill data by passing values into signature requests with the `custom_fields` parameter. If the signature request using that template *does not* pass a value into a merge field, then an empty field remains in the document.
    # @return [Array<SubMergeField>]
    attr_accessor :merge_fields

    # The default template email message.
    # @return [String]
    attr_accessor :message

    # Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.
    # @return [Hash<String, Object>]
    attr_accessor :metadata

    # The template title (alias).
    # @return [String]
    attr_accessor :subject

    # Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.
    # @return [Boolean]
    attr_accessor :test_mode

    # The title you want to assign to the SignatureRequest.
    # @return [String]
    attr_accessor :title

    # Enable the detection of predefined PDF fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`).
    # @return [Boolean]
    attr_accessor :use_preexisting_fields

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'form_fields_per_document' => :'form_fields_per_document',
        :'signer_roles' => :'signer_roles',
        :'files' => :'files',
        :'file_urls' => :'file_urls',
        :'allow_reassign' => :'allow_reassign',
        :'attachments' => :'attachments',
        :'cc_roles' => :'cc_roles',
        :'client_id' => :'client_id',
        :'field_options' => :'field_options',
        :'form_field_groups' => :'form_field_groups',
        :'form_field_rules' => :'form_field_rules',
        :'merge_fields' => :'merge_fields',
        :'message' => :'message',
        :'metadata' => :'metadata',
        :'subject' => :'subject',
        :'test_mode' => :'test_mode',
        :'title' => :'title',
        :'use_preexisting_fields' => :'use_preexisting_fields'
      }
    end

    # Returns attribute mapping this model knows about
    def self.acceptable_attribute_map
      attribute_map
    end

    # Returns all the JSON keys this model knows about
    def self.acceptable_attributes
      acceptable_attribute_map.values
    end

    # Attribute type mapping.
    def self.openapi_types
      {
        :'form_fields_per_document' => :'Array<SubFormFieldsPerDocumentBase>',
        :'signer_roles' => :'Array<SubTemplateRole>',
        :'files' => :'Array<File>',
        :'file_urls' => :'Array<String>',
        :'allow_reassign' => :'Boolean',
        :'attachments' => :'Array<SubAttachment>',
        :'cc_roles' => :'Array<String>',
        :'client_id' => :'String',
        :'field_options' => :'SubFieldOptions',
        :'form_field_groups' => :'Array<SubFormFieldGroup>',
        :'form_field_rules' => :'Array<SubFormFieldRule>',
        :'merge_fields' => :'Array<SubMergeField>',
        :'message' => :'String',
        :'metadata' => :'Hash<String, Object>',
        :'subject' => :'String',
        :'test_mode' => :'Boolean',
        :'title' => :'String',
        :'use_preexisting_fields' => :'Boolean'
      }
    end

    # List of attributes with nullable: true
    def self.openapi_nullable
      Set.new([
      ])
    end

    # Returns attribute map of this model + parent
    def self.merged_attributes
      self.attribute_map
    end

    # Attribute type mapping of this model + parent
    def self.merged_types
      self.openapi_types
    end

    # Returns list of attributes with nullable: true of this model + parent
    def self.merged_nullable
      self.openapi_nullable
    end

    # Attempt to instantiate and hydrate a new instance of this class
    # @param [Object] data Data to be converted
    # @return [TemplateCreateRequest]
    def self.init(data)
      ApiClient.default.convert_to_type(
        data,
        "TemplateCreateRequest"
      ) || TemplateCreateRequest.new
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      if (!attributes.is_a?(Hash))
        fail ArgumentError, "The input argument (attributes) must be a hash in `Dropbox::Sign::TemplateCreateRequest` initialize method"
      end

      # check to see if the attribute exists and convert string to symbol for hash key
      acceptable_attribute_map = self.class.acceptable_attribute_map
      attributes = attributes.each_with_object({}) { |(k, v), h|
        if (!self.class.merged_attributes.key?(k.to_sym))
          fail ArgumentError, "`#{k}` is not a valid attribute in `Dropbox::Sign::TemplateCreateRequest`. Please check the name to make sure it's valid. List of attributes: " + acceptable_attribute_map.keys.inspect
        end
        h[k.to_sym] = v
      }

      if attributes.key?(:'form_fields_per_document')
        if (value = attributes[:'form_fields_per_document']).is_a?(Array)
          self.form_fields_per_document = value
        end
      end

      if attributes.key?(:'signer_roles')
        if (value = attributes[:'signer_roles']).is_a?(Array)
          self.signer_roles = value
        end
      end

      if attributes.key?(:'files')
        if (value = attributes[:'files']).is_a?(Array)
          self.files = value
        end
      end

      if attributes.key?(:'file_urls')
        if (value = attributes[:'file_urls']).is_a?(Array)
          self.file_urls = value
        end
      end

      if attributes.key?(:'allow_reassign')
        self.allow_reassign = attributes[:'allow_reassign']
      else
        self.allow_reassign = false
      end

      if attributes.key?(:'attachments')
        if (value = attributes[:'attachments']).is_a?(Array)
          self.attachments = value
        end
      end

      if attributes.key?(:'cc_roles')
        if (value = attributes[:'cc_roles']).is_a?(Array)
          self.cc_roles = value
        end
      end

      if attributes.key?(:'client_id')
        self.client_id = attributes[:'client_id']
      end

      if attributes.key?(:'field_options')
        self.field_options = attributes[:'field_options']
      end

      if attributes.key?(:'form_field_groups')
        if (value = attributes[:'form_field_groups']).is_a?(Array)
          self.form_field_groups = value
        end
      end

      if attributes.key?(:'form_field_rules')
        if (value = attributes[:'form_field_rules']).is_a?(Array)
          self.form_field_rules = value
        end
      end

      if attributes.key?(:'merge_fields')
        if (value = attributes[:'merge_fields']).is_a?(Array)
          self.merge_fields = value
        end
      end

      if attributes.key?(:'message')
        self.message = attributes[:'message']
      end

      if attributes.key?(:'metadata')
        if (value = attributes[:'metadata']).is_a?(Hash)
          self.metadata = value
        end
      end

      if attributes.key?(:'subject')
        self.subject = attributes[:'subject']
      end

      if attributes.key?(:'test_mode')
        self.test_mode = attributes[:'test_mode']
      else
        self.test_mode = false
      end

      if attributes.key?(:'title')
        self.title = attributes[:'title']
      end

      if attributes.key?(:'use_preexisting_fields')
        self.use_preexisting_fields = attributes[:'use_preexisting_fields']
      else
        self.use_preexisting_fields = false
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @form_fields_per_document.nil?
        invalid_properties.push('invalid value for "form_fields_per_document", form_fields_per_document cannot be nil.')
      end

      if @signer_roles.nil?
        invalid_properties.push('invalid value for "signer_roles", signer_roles cannot be nil.')
      end

      if !@message.nil? && @message.to_s.length > 5000
        invalid_properties.push('invalid value for "message", the character length must be smaller than or equal to 5000.')
      end

      if !@subject.nil? && @subject.to_s.length > 200
        invalid_properties.push('invalid value for "subject", the character length must be smaller than or equal to 200.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @form_fields_per_document.nil?
      return false if @signer_roles.nil?
      return false if !@message.nil? && @message.to_s.length > 5000
      return false if !@subject.nil? && @subject.to_s.length > 200
      true
    end

    # Custom attribute writer method with validation
    # @param [Object] form_fields_per_document Value to be assigned
    def form_fields_per_document=(form_fields_per_document)
      if form_fields_per_document.nil?
        fail ArgumentError, 'form_fields_per_document cannot be nil'
      end

      @form_fields_per_document = form_fields_per_document
    end

    # Custom attribute writer method with validation
    # @param [Object] signer_roles Value to be assigned
    def signer_roles=(signer_roles)
      if signer_roles.nil?
        fail ArgumentError, 'signer_roles cannot be nil'
      end

      @signer_roles = signer_roles
    end

    # Custom attribute writer method with validation
    # @param [Object] message Value to be assigned
    def message=(message)
      if message.to_s.length > 5000
        fail ArgumentError, 'invalid value for "message", the character length must be smaller than or equal to 5000.'
      end

      @message = message
    end

    # Custom attribute writer method with validation
    # @param [Object] metadata Value to be assigned
    def metadata=(metadata)
      @metadata = metadata
    end

    # Custom attribute writer method with validation
    # @param [Object] subject Value to be assigned
    def subject=(subject)
      if subject.to_s.length > 200
        fail ArgumentError, 'invalid value for "subject", the character length must be smaller than or equal to 200.'
      end

      @subject = subject
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          form_fields_per_document == o.form_fields_per_document &&
          signer_roles == o.signer_roles &&
          files == o.files &&
          file_urls == o.file_urls &&
          allow_reassign == o.allow_reassign &&
          attachments == o.attachments &&
          cc_roles == o.cc_roles &&
          client_id == o.client_id &&
          field_options == o.field_options &&
          form_field_groups == o.form_field_groups &&
          form_field_rules == o.form_field_rules &&
          merge_fields == o.merge_fields &&
          message == o.message &&
          metadata == o.metadata &&
          subject == o.subject &&
          test_mode == o.test_mode &&
          title == o.title &&
          use_preexisting_fields == o.use_preexisting_fields
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Integer] Hash code
    def hash
      [form_fields_per_document, signer_roles, files, file_urls, allow_reassign, attachments, cc_roles, client_id, field_options, form_field_groups, form_field_rules, merge_fields, message, metadata, subject, test_mode, title, use_preexisting_fields].hash
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def self.build_from_hash(attributes)
      new.build_from_hash(attributes)
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def build_from_hash(attributes)
      return nil unless attributes.is_a?(Hash)
      attribute_map = self.class.merged_attributes

      self.class.merged_types.each_pair do |key, type|
        if type =~ /\AArray<(.*)>/i
          # check to ensure the input is an array given that the attribute
          # is documented as an array but the input is not
          if attributes[attribute_map[key]].is_a?(Array)
            self.send("#{key}=", attributes[attribute_map[key]].map { |v| _deserialize($1, v) })
          end
        elsif !attributes[attribute_map[key]].nil?
          self.send("#{key}=", _deserialize(type, attributes[attribute_map[key]]))
        end
      end

      self
    end

    # Deserializes the data based on type
    # @param string type Data type
    # @param string value Value to be deserialized
    # @return [Object] Deserialized data
    def _deserialize(type, value)
      case type.to_sym
      when :Time
        Time.parse(value)
      when :Date
        Date.parse(value)
      when :String
        value.to_s
      when :Integer
        value.to_i
      when :Float
        value.to_f
      when :Boolean
        if value.to_s =~ /\A(true|t|yes|y|1)\z/i
          true
        else
          false
        end
      when :Object
        # generic object (usually a Hash), return directly
        value
      when /\AArray<(?<inner_type>.+)>\z/
        inner_type = Regexp.last_match[:inner_type]
        value.map { |v| _deserialize(inner_type, v) }
      when /\AHash<(?<k_type>.+?), (?<v_type>.+)>\z/
        k_type = Regexp.last_match[:k_type]
        v_type = Regexp.last_match[:v_type]
        {}.tap do |hash|
          value.each do |k, v|
            hash[_deserialize(k_type, k)] = _deserialize(v_type, v)
          end
        end
      else # model
        klass = Dropbox::Sign.const_get(type)
        klass.respond_to?(:openapi_any_of) || klass.respond_to?(:openapi_one_of) ? klass.build(value) : klass.build_from_hash(value)
      end
    end

    # Returns the string representation of the object
    # @return [String] String presentation of the object
    def to_s
      to_hash.to_s
    end

    # to_body is an alias to to_hash (backward compatibility)
    # @return [Hash] Returns the object in the form of hash
    def to_body
      to_hash
    end

    # Returns the object in the form of hash
    # @return [Hash] Returns the object in the form of hash
    def to_hash(include_nil = true)
      hash = {}
      self.class.merged_attributes.each_pair do |attr, param|
        value = self.send(attr)
        if value.nil?
          next unless include_nil
          is_nullable = self.class.merged_nullable.include?(attr)
          next if !is_nullable || (is_nullable && !instance_variable_defined?(:"@#{attr}"))
        end

        hash[param] = _to_hash(value, include_nil)
      end
      hash
    end

    # Outputs non-array value in the form of hash
    # For object, use to_hash. Otherwise, just return the value
    # @param [Object] value Any valid value
    # @return [Hash] Returns the value in the form of hash
    def _to_hash(value, include_nil = true)
      if value.is_a?(Array)
        value.compact.map { |v| _to_hash(v, include_nil) }
      elsif value.is_a?(Hash)
        {}.tap do |hash|
          value.each { |k, v| hash[k] = _to_hash(v, include_nil) }
        end
      elsif value.respond_to? :to_hash
        value.to_hash(include_nil)
      else
        value
      end
    end
  end
end
