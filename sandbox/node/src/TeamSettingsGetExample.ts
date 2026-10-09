import api from "@dropbox/sign"

const apiCaller = new api.TeamApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.teamSettingsGet().then(response => {
  const company = response.body.settings.company;
  const dataResidency = response.body.settings.dataResidency;
  console.log(response.body);
  console.log({
    teamId: response.body.teamId,
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
    dataResidency: {
      value: dataResidency.value,
      isInherited: dataResidency.isInherited,
      source: dataResidency.source,
      type: dataResidency.type,
      writable: dataResidency.writable,
      lock: {
        mode: dataResidency.lock.mode,
        source: dataResidency.lock.source,
      },
    },
    warnings: response.body.warnings,
  });
}).catch(error => {
  console.log("Exception when calling TeamApi#teamSettingsGet:");
  console.log(error.body);
});
