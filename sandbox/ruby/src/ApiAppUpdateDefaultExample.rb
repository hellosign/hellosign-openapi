require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY";
    # config.access_token = "YOUR_ACCESS_TOKEN";
end

white_labeling_options = Dropbox::Sign::SubWhiteLabelingOptions.new
white_labeling_options.primary_button_color = "#00b3e6"
white_labeling_options.primary_button_text_color = "#ffffff"

api_app_update_request = Dropbox::Sign::ApiAppUpdateRequest.new
api_app_update_request.callback_url = "https://example.com/dropboxsign"
api_app_update_request.name = "New Name"
api_app_update_request.white_labeling_options = white_labeling_options

begin
    response = Dropbox::Sign::ApiAppApi.new.api_app_update(
        "0dd3b823a682527788c4e40cb7b6f7e9",
        api_app_update_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling ApiApp#api_app_update: #{e}"
end
