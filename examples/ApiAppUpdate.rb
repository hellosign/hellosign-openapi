require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"

  # or, configure Bearer (JWT) authorization: oauth2
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

api_app_api = Dropbox::Sign::ApiAppApi.new

white_labeling_options = Dropbox::Sign::SubWhiteLabelingOptions.new
white_labeling_options.primary_button_color = "#00b3e6"
white_labeling_options.primary_button_text_color = "#ffffff"

custom_logo_file = File.new('./CustomLogoFile.png')

data = Dropbox::Sign::ApiAppUpdateRequest.new
data.name = "New Name"
data.callback_url = "http://example.com/dropboxsign"
data.white_labeling_options = white_labeling_options
data.custom_logo_file = custom_logo_file

client_id = "0dd3b823a682527788c4e40cb7b6f7e9"

begin
  result = api_app_api.api_app_update(client_id, data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
