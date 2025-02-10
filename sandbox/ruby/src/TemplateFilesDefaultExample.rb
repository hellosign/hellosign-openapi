require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY";
    # config.access_token = "YOUR_ACCESS_TOKEN";
end

begin
    response = Dropbox::Sign::TemplateApi.new.template_files(
        "f57db65d3f933b5316d398057a36176831451a35",
    )

    FileUtils.cp(response.path, "path/to/file.zip")
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling Template#template_files: #{e}"
end
