#!/usr/bin/env ruby
# Integration test for verifying the fix in the Dropbox Sign Ruby SDK
#
# This script uses Typhoeus mocking (the SDK's HTTP client) to test error handling.
# Run from the repo root:
#   cd repos/ruby && bundle install && cd ../..
#   ruby -I repos/ruby/lib integration_test.rb
#
# Or with bundler:
#   BUNDLE_GEMFILE=repos/ruby/Gemfile bundle exec ruby -I repos/ruby/lib integration_test.rb

$LOAD_PATH.unshift File.join(__dir__, 'repos/ruby/lib')

begin
  require 'dropbox-sign'
  require 'typhoeus'
rescue LoadError => e
  puts "Missing dependency: #{e.message}"
  puts "\nTo run this test, install from the local SDK:"
  puts "  cd repos/ruby && bundle install && cd ../.."
  puts "  ruby -I repos/ruby/lib integration_test.rb"
  exit 1
end

class SDKErrorHandlingTest
  def initialize
    @config = Dropbox::Sign::Configuration.default
    @config.username = "test_api_key"
    @api_client = Dropbox::Sign::ApiClient.new(@config)
    @account_api = Dropbox::Sign::AccountApi.new(@api_client)
    @test_results = []
  end

  def run_all_tests
    puts "=" * 80
    puts "Dropbox Sign Ruby SDK - Error Handling Integration Test"
    puts "=" * 80
    puts ""

    test_connection_failure
    test_server_error_500
    test_server_error_503
    test_timeout_error
    test_client_error_400
    test_client_error_404
    test_success_response

    print_summary
  end

  private

  def test_connection_failure
    test("Connection failure (code=0, libcurl error)") do
      response = Typhoeus::Response.new(
        code: 0,
        return_message: "Connection refused"
      )
      Typhoeus.stub(/account/).and_return(response)

      begin
        @account_api.account_get
        { status: :fail, reason: "No error raised (returned nil)" }
      rescue Dropbox::Sign::ApiError => e
        if e.code == 0
          { status: :pass, reason: "ApiError raised with code=0: #{e.message}" }
        else
          { status: :fail, reason: "Wrong error code: #{e.code}" }
        end
      rescue => e
        { status: :fail, reason: "Wrong exception: #{e.class}: #{e.message}" }
      end
    end
  end

  def test_server_error_500
    test("Server error (HTTP 500)") do
      response = Typhoeus::Response.new(
        code: 500,
        body: '{"error":{"error_msg":"Internal server error","error_name":"ServerError"}}',
        headers: { 'Content-Type' => 'application/json' }
      )
      Typhoeus.stub(/account/).and_return(response)

      begin
        @account_api.account_get
        { status: :fail, reason: "No error raised (returned nil)" }
      rescue Dropbox::Sign::ApiError => e
        if e.code == 500
          { status: :pass, reason: "ApiError raised with code=500" }
        else
          { status: :fail, reason: "Wrong error code: #{e.code}" }
        end
      rescue => e
        { status: :fail, reason: "Wrong exception: #{e.class}: #{e.message}" }
      end
    end
  end

  def test_server_error_503
    test("Server error (HTTP 503)") do
      response = Typhoeus::Response.new(
        code: 503,
        body: '{"error":{"error_msg":"Service unavailable","error_name":"ServiceUnavailable"}}',
        headers: { 'Content-Type' => 'application/json' }
      )
      Typhoeus.stub(/account/).and_return(response)

      begin
        @account_api.account_get
        { status: :fail, reason: "No error raised (returned nil)" }
      rescue Dropbox::Sign::ApiError => e
        if e.code == 503
          { status: :pass, reason: "ApiError raised with code=503" }
        else
          { status: :fail, reason: "Wrong error code: #{e.code}" }
        end
      rescue => e
        { status: :fail, reason: "Wrong exception: #{e.class}: #{e.message}" }
      end
    end
  end

  def test_timeout_error
    test("Timeout error") do
      response = Typhoeus::Response.new(
        code: 0,
        return_message: "Timeout was reached",
        mock: true
      )
      response.instance_variable_set(:@options, response.instance_variable_get(:@options).merge(return_code: :operation_timedout))
      Typhoeus.stub(/account/).and_return(response)

      begin
        @account_api.account_get
        { status: :fail, reason: "No error raised" }
      rescue Dropbox::Sign::ApiError => e
        { status: :pass, reason: "ApiError raised (code=#{e.code.inspect}, msg=#{e.message})" }
      rescue NoMethodError => e
        { status: :fail, reason: "NoMethodError (nil comparison bug): #{e.message}" }
      rescue => e
        { status: :fail, reason: "Unexpected: #{e.class}: #{e.message}" }
      end
    end
  end

  def test_client_error_400
    test("Client error (HTTP 400)") do
      response = Typhoeus::Response.new(
        code: 400,
        body: '{"error":{"error_msg":"Bad request","error_name":"BadRequest"}}',
        headers: { 'Content-Type' => 'application/json' }
      )
      Typhoeus.stub(/account/).and_return(response)

      begin
        @account_api.account_get
        { status: :fail, reason: "No error raised" }
      rescue Dropbox::Sign::ApiError => e
        if e.code == 400
          { status: :pass, reason: "ApiError raised with code=400" }
        else
          { status: :fail, reason: "Wrong error code: #{e.code}" }
        end
      rescue => e
        { status: :fail, reason: "Wrong exception: #{e.class}: #{e.message}" }
      end
    end
  end

  def test_client_error_404
    test("Client error (HTTP 404)") do
      response = Typhoeus::Response.new(
        code: 404,
        body: '{"error":{"error_msg":"Not found","error_name":"NotFound"}}',
        headers: { 'Content-Type' => 'application/json' }
      )
      Typhoeus.stub(/account/).and_return(response)

      begin
        @account_api.account_get
        { status: :fail, reason: "No error raised" }
      rescue Dropbox::Sign::ApiError => e
        if e.code == 404
          { status: :pass, reason: "ApiError raised with code=404" }
        else
          { status: :fail, reason: "Wrong error code: #{e.code}" }
        end
      rescue => e
        { status: :fail, reason: "Wrong exception: #{e.class}: #{e.message}" }
      end
    end
  end

  def test_success_response
    test("Success response (HTTP 200)") do
      response = Typhoeus::Response.new(
        code: 200,
        body: '{"account":{"account_id":"abc123","email_address":"test@example.com"}}',
        headers: { 'Content-Type' => 'application/json' }
      )
      Typhoeus.stub(/account/).and_return(response)

      begin
        result = @account_api.account_get
        if result && result.account
          { status: :pass, reason: "Request succeeded, got account_id=#{result.account.account_id}" }
        else
          { status: :fail, reason: "Unexpected result: #{result.inspect}" }
        end
      rescue => e
        { status: :fail, reason: "Unexpected error: #{e.class}: #{e.message}" }
      end
    end
  end

  def test(name)
    Typhoeus::Expectation.clear
    print "  Testing: #{name}..."

    result = yield
    @test_results << result.merge(name: name)

    case result[:status]
    when :pass
      puts " PASS"
      puts "           #{result[:reason]}" if result[:reason]
    when :fail
      puts " FAIL"
      puts "           #{result[:reason]}" if result[:reason]
    when :warn
      puts " WARN"
      puts "           #{result[:reason]}" if result[:reason]
    end
  end

  def print_summary
    passed = @test_results.count { |r| r[:status] == :pass }
    failed = @test_results.count { |r| r[:status] == :fail }
    warned = @test_results.count { |r| r[:status] == :warn }
    total = @test_results.size

    puts ""
    puts "=" * 80
    puts "SUMMARY"
    puts "=" * 80
    puts "  Total:   #{total}"
    puts "  Passed:  #{passed}"
    puts "  Failed:  #{failed}"
    puts "  Warned:  #{warned}"
    puts ""

    if failed > 0
      puts "FAILED TESTS:"
      @test_results.select { |r| r[:status] == :fail }.each do |r|
        puts "  - #{r[:name]}"
        puts "    Reason: #{r[:reason]}"
      end
      puts ""
      puts "The bug is NOT fixed."
      exit 1
    elsif warned > 0
      puts "Some tests raised warnings. Review the output above."
      exit 0
    else
      puts "All tests passed! The fix is working correctly."
      exit 0
    end
  end
end

# Run tests
tester = SDKErrorHandlingTest.new
tester.run_all_tests
