require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"

  # or, configure Bearer (JWT) authorization: oauth2
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

api_app_api = Dropbox::Sign::ApiAppApi.new

oauth = Dropbox::Sign::SubOAuth.new
oauth.callback_url = "https://example.com/oauth"
oauth.scopes = %w[basic_account_info request_signature]

white_labeling_options = Dropbox::Sign::SubWhiteLabelingOptions.new
white_labeling_options.primary_button_color = "#00b3e6"
white_labeling_options.primary_button_text_color = "#ffffff"

custom_logo_file = File.new('./CustomLogoFile.png')

data = Dropbox::Sign::ApiAppCreateRequest.new
data.name = "My Production App"
data.domains = ["example.com"]
data.oauth = oauth
data.white_labeling_options = white_labeling_options
data.custom_logo_file = custom_logo_file

begin
  result = api_app_api.api_app_create(data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
