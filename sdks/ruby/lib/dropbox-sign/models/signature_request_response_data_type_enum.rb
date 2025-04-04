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
  class SignatureRequestResponseDataTypeEnum
    TEXT = "text".freeze
    CHECKBOX = "checkbox".freeze
    DATE_SIGNED = "date_signed".freeze
    DROPDOWN = "dropdown".freeze
    INITIALS = "initials".freeze
    RADIO = "radio".freeze
    SIGNATURE = "signature".freeze
    TEXT_MERGE = "text-merge".freeze
    CHECKBOX_MERGE = "checkbox-merge".freeze

    def self.all_vars
      @all_vars ||= [TEXT, CHECKBOX, DATE_SIGNED, DROPDOWN, INITIALS, RADIO, SIGNATURE, TEXT_MERGE, CHECKBOX_MERGE].freeze
    end

    # Builds the enum from string
    # @param [String] The enum value in the form of the string
    # @return [String] The enum value
    def self.build_from_hash(value)
      new.build_from_hash(value)
    end

    # Builds the enum from string
    # @param [String] The enum value in the form of the string
    # @return [String] The enum value
    def build_from_hash(value)
      return value if SignatureRequestResponseDataTypeEnum.all_vars.include?(value)
      raise "Invalid ENUM value #{value} for class #SignatureRequestResponseDataTypeEnum"
    end
  end
end
