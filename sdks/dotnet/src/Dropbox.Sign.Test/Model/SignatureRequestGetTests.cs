using System;
using System.Collections.Generic;
using Xunit;

using Dropbox.Sign.Model;

namespace Dropbox.Sign.Test.Model
{
    public class SignatureRequestGetTests
    {
        [Fact]
        public void MetadataAsObjectTest()
        {
            var responseData = TestHelper.GetJsonContents(nameof(SignatureRequestGetResponse));
            var responseObj = SignatureRequestGetResponse.Init(responseData.ToString());

            var metadata = responseObj.SignatureRequest.Metadata;

            var metadataStringLegacyValue = getMetadataValueStringLegacy(
                metadata,
                "metadata_name_1"
            );

            dynamic metadataObjectLegacyValue = getMetadataValueObjectLegacy(
                metadata,
                "metadata_name_2"
            );

            var metadataStringNewValue = getMetadataValueStringNew(
                metadata,
                "metadata_name_1"
            );

            dynamic metadataObjectNewValue = getMetadataValueObjectNew(
                metadata,
                "metadata_name_2"
            );

            string expectedValue1 = "metadata_value_1";
            string expectedValue2 = "metadata_value_2_a";

            Assert.Equal(expectedValue1, metadataStringLegacyValue);
            Assert.Equal(expectedValue2, metadataObjectLegacyValue["metadata_name_2_a"].ToString());

            Assert.Equal(expectedValue1, metadataStringNewValue);
            Assert.Equal(expectedValue2, metadataObjectNewValue["metadata_name_2_a"].ToString());
        }

        private Object getMetadataValueStringLegacy(dynamic metadata, string key)
        {
            return metadata[key];
        }

        private Object getMetadataValueObjectLegacy(dynamic metadata, string key)
        {
            return metadata[key];
        }

        private Object getMetadataValueStringNew(Dictionary<string, Object> metadata, string key)
        {
            return metadata[key];
        }

        private Object getMetadataValueObjectNew(Dictionary<string, Object> metadata, string key)
        {
            return metadata[key];
        }
    }
}
