require 'spec_helper'
require_relative './test_utils'

config = Dropbox::Sign.configure
api_client = Dropbox::Sign::ApiClient.new(config)

describe Dropbox::Sign::EventCallbackHelper do
  context 'EventCallbackHelper' do
    fixture_data = get_fixture_data('EventCallbackHelper')
    api_key = '324e3b0840f065eb51f3fd63231d0d33daa35d4ed10d27718839e81737065782'
    api_key_rev = api_key.reverse

    fixture_data.each do |key, data|
      it "event callback for type #{key} is valid" do
        obj = Dropbox::Sign::EventCallbackRequest.init(data)

        expect(Dropbox::Sign::EventCallbackHelper.is_valid(api_key, obj)).to eq(true)
        expect(Dropbox::Sign::EventCallbackHelper.is_valid(api_key_rev, obj)).to eq(false)
      end
    end
  end
end
