require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
    response = Dropbox::Sign::TemplateApi.new.template_get(
        "f57db65d3f933b5316d398057a36176831451a35", # template_id
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling TemplateApi#template_get: #{e}"
end
