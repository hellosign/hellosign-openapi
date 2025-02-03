using System;
using System.Collections.Generic;
using System.IO;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class UnclaimedDraftCreateDefaultExample
{
    public static void Run()
    {
        var config = new Configuration();

        var signers1 = new SubUnclaimedDraftSigner(
            name: "Jack",
            emailAddress: "jack@example.com",
            order: 0
        );

        var signers = new List<SubUnclaimedDraftSigner>
        {
            signers1,
        };

        var unclaimedDraftCreateRequest = new UnclaimedDraftCreateRequest(
            type: UnclaimedDraftCreateRequest.TypeEnum.RequestSignature,
            testMode: true,
            fileUrls: [
                "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
            ],
            signers: signers
        );

        try
        {
            var response = new UnclaimedDraftApi(config).UnclaimedDraftCreate(
                unclaimedDraftCreateRequest: unclaimedDraftCreateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling UnclaimedDraft#UnclaimedDraftCreate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
