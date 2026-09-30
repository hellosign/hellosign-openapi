import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxApi();
apiCaller.username = "YOUR_API_KEY";

const faxDraftCreateRequest: models.FaxDraftCreateRequest = {
  clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
  fileUrls: [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
  ],
  recipients: ["+14155552671"],
  editorOptions: {
    forceUploadPage: false,
    forceEditorPage: true,
    forceReviewPage: true,
  },
  testMode: true,
};

apiCaller.faxDraftCreate(
  faxDraftCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling FaxApi#faxDraftCreate:");
  console.log(error.body);
});
