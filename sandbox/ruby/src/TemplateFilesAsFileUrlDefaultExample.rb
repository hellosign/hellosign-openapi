require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

begin
    response = Dropbox::Sign::TemplateApi.new.template_files_as_file_url(
        "f57db65d3f933b5316d398057a36176831451a35",
        {
            force_download: 1,
        },
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling Template#template_files_as_file_url: #{e}"
end
