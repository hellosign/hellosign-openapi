import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.UnclaimedDraftApi();

const unclaimedDraftCreateEmbeddedRequest = new models.UnclaimedDraftCreateEmbeddedRequest();
unclaimedDraftCreateEmbeddedRequest.clientId = "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a";
unclaimedDraftCreateEmbeddedRequest.requesterEmailAddress = "jack@dropboxsign.com";
unclaimedDraftCreateEmbeddedRequest.testMode = true;
unclaimedDraftCreateEmbeddedRequest.fileUrls = [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
];

apiCaller.unclaimedDraftCreateEmbedded(
    unclaimedDraftCreateEmbeddedRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling UnclaimedDraft#unclaimedDraftCreateEmbedded:");
  console.log(error.body);
});
