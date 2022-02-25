Events will be POSTed to your callback URLs. There are two kinds of callbacks that can be defined.
      
**Callback Response Format**

The default format for messages sent to your callbacks is a multipart ('form/multipart') POST request, with the message details in a POST field named 'json'.

The Java SDK includes an event parsing class, and you can access this field in the $_POST array on PHP. For other platforms, either a library function, such as cgi.parse_multipart (for python) or ActionDispatch::Http::UploadedFile for Rails, or third party options, such as multer for node, may be useful.