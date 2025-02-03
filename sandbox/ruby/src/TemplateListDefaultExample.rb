require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

begin
    response = Dropbox::Sign::TemplateApi.new.template_list(
        {
            account_id: nil,
            page: 1,
            page_size: 20,
            query: nil,
        },
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling Template#template_list: #{e}"
end
