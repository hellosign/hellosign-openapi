public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth api_key = (HttpBasicAuth) defaultClient
            .getAuthentication("api_key");
        api_key.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) defaultClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        SignatureRequestApi api = new SignatureRequestApi(defaultClient);

        SubSignatureRequestTemplateSigner signer1 = new SubSignatureRequestTemplateSigner()
            .role("Client")
            .name("George");

        SubSigningOptions subSigningOptions = new SubSigningOptions()
            .draw(true)
            .type(true)
            .upload(true)
            .phone(false)
            .defaultType(SubSigningOptions.DefaultTypeEnum.DRAW);

        SignatureRequestCreateEmbeddedWithTemplateRequest data = new SignatureRequestCreateEmbeddedWithTemplateRequest()
            .clientId("ec64a202072370a737edf4a0eb7f4437")
            .templateIds(Arrays.asList("c26b8a16784a872da37ea946b9ddec7c1e11dff6"))
            .subject("Purchase Order")
            .message("Glad we could come to an agreement.")
            .signers(Arrays.asList(signer1))
            .signingOptions(subSigningOptions)
            .testMode(true);

        try {
            SignatureRequestGetResponse result = api.signatureRequestCreateEmbeddedWithTemplate(data);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AccountApi#accountCreate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
