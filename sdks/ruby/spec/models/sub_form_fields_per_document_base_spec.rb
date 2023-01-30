require 'spec_helper'
require 'json_spec'
require_relative '../test_utils'

describe Dropbox::Sign::SubFormFieldsPerDocumentBase do
  context 'SubFormFieldsPerDocument' do
    fixture_data = get_fixture_data('SubFormFieldsPerDocument')

    fixture_data.each do |type, data|
      it "SubFormFieldsPerDocument of type #{type} is instantiated" do
        payload = { form_fields_per_document: [data] }

        obj = Dropbox::Sign::SignatureRequestSendRequest.init(payload)

        form_fields_per_document = obj.form_fields_per_document[0]
        serialized = form_fields_per_document.to_hash(false)
        classname = "Dropbox::Sign::#{type}"

        expect(form_fields_per_document.class.to_s).to eq(classname)
        expect(serialized.to_json).to be_json_eql(JSON.dump(data))
      end
    end

    fixture_data.each do |type, data|
      it "SubFormFieldsPerDocument allows int for signer property" do
        data[:signer] = 1234
        payload = { form_fields_per_document: [data] }
        expected_signer = '1234'

        obj = Dropbox::Sign::SignatureRequestSendRequest.init(payload)
        form_fields_per_document = obj.form_fields_per_document[0]
        expect(form_fields_per_document.signer).to eq(expected_signer)
      end
    end

    fixture_data.each do |type, data|
      it "SubFormFieldsPerDocument allows string for signer property" do
        data[:signer] = 'sender'
        payload = { form_fields_per_document: [data] }
        expected_signer = 'sender'

        obj = Dropbox::Sign::SignatureRequestSendRequest.init(payload)
        form_fields_per_document = obj.form_fields_per_document[0]
        expect(form_fields_per_document.signer).to eq(expected_signer)
      end
    end
  end
end
