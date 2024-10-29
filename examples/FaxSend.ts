import * as DropboxSign from "@dropbox/sign";
import * as fs from 'fs';

const faxApi = new DropboxSign.FaxApi();

// Configure HTTP basic authorization: api_key
faxApi.username = "YOUR_API_KEY";

// Upload a local file
const file = fs.createReadStream("example_signature_request.pdf");

// or, upload from buffer
const fileBuffer: DropboxSign.RequestDetailedFile = {
  value: fs.readFileSync("example_signature_request.pdf"),
  options: {
    filename: "example_signature_request.pdf",
    contentType: "application/pdf",
  },
};

// or, upload from buffer alternative
const fileBufferAlt: DropboxSign.RequestDetailedFile = {
  value: Buffer.from("abc-123"),
  options: {
    filename: "txt-sample.txt",
    contentType: "text/plain",
  },
};

const data: DropboxSign.FaxSendRequest = {
  files: [ file, fileBuffer, fileBufferAlt ],
  testMode: true,
  recipient: "16690000001",
  sender: "16690000000",
  coverPageTo: "Jill Fax",
  coverPageMessage: "I'm sending you a fax!",
  coverPageFrom: "Faxer Faxerson",
  title: "This is what the fax is about!",
};

const result = faxApi.faxSend(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
