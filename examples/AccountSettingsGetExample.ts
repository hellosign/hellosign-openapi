import api from "@dropbox/sign"

const apiCaller = new api.AccountApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.accountSettingsGet().then(response => {
  const company = response.body.settings.company;
  console.log(response.body);
  console.log({
    accountId: response.body.accountId,
    company: {
      value: company.value,
      isInherited: company.isInherited,
      source: company.source,
      type: company.type,
      writable: company.writable,
      lock: {
        mode: company.lock.mode,
        source: company.lock.source,
      },
    },
    warnings: response.body.warnings,
  });
}).catch(error => {
  console.log("Exception when calling AccountApi#accountSettingsGet:");
  console.log(error.body);
});
