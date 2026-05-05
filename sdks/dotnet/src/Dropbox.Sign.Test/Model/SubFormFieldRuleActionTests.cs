using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Xunit;
using Dropbox.Sign.Model;

namespace Dropbox.Sign.Test.Model
{
    public class SubFormFieldRuleActionTests
    {
        // SubFormFieldRuleAction.TypeEnum must serialize to the exact
        // wire values accepted by the Dropbox Sign API
        // (change-field-visibility, change-group-visibility). The enum
        // intentionally carries legacy alias members (FieldVisibility,
        // GroupVisibility) that share a numeric value with the canonical
        // members, so at runtime they are indistinguishable (xUnit also
        // dedups the alias rows because [InlineData] compares enums by
        // their underlying int). The dedicated TypeEnumJsonConverter
        // maps by underlying value so both names produce the same wire
        // string; pinning the canonical members is therefore sufficient.
        [Theory]
        [InlineData(SubFormFieldRuleAction.TypeEnum.ChangeFieldVisibility, "change-field-visibility")]
        [InlineData(SubFormFieldRuleAction.TypeEnum.ChangeGroupVisibility, "change-group-visibility")]
        public void TypeEnum_Serializes_To_EnumMember_Value(
            SubFormFieldRuleAction.TypeEnum value,
            string expected)
        {
            var json = JsonConvert.SerializeObject(value);

            Assert.Equal($"\"{expected}\"", json);
        }

        [Theory]
        [InlineData(SubFormFieldRuleAction.TypeEnum.ChangeFieldVisibility, "change-field-visibility")]
        [InlineData(SubFormFieldRuleAction.TypeEnum.ChangeGroupVisibility, "change-group-visibility")]
        public void Action_Payload_Uses_EnumMember_Value_For_Type(
            SubFormFieldRuleAction.TypeEnum value,
            string expected)
        {
            var action = new SubFormFieldRuleAction(
                fieldId: "api_id_2",
                hidden: true,
                type: value
            );

            var json = JObject.Parse(action.ToJson());

            Assert.Equal(expected, (string)json["type"]);
        }

        [Theory]
        [InlineData("change-field-visibility", SubFormFieldRuleAction.TypeEnum.ChangeFieldVisibility)]
        [InlineData("change-group-visibility", SubFormFieldRuleAction.TypeEnum.ChangeGroupVisibility)]
        public void Action_Payload_Deserializes_EnumMember_Value_For_Type(
            string wireValue,
            SubFormFieldRuleAction.TypeEnum expected)
        {
            var payload = new JObject(
                new JProperty("field_id", "api_id_2"),
                new JProperty("hidden", true),
                new JProperty("type", wireValue)
            ).ToString();

            var action = SubFormFieldRuleAction.Init(payload);

            Assert.Equal(expected, action.Type);
        }

        [Theory]
        [InlineData("FieldVisibility")]
        [InlineData("GroupVisibility")]
        [InlineData("change-unknown-thing")]
        [InlineData("")]
        public void Action_Payload_Rejects_Unknown_Type_Values(string wireValue)
        {
            var payload = new JObject(
                new JProperty("field_id", "api_id_2"),
                new JProperty("hidden", true),
                new JProperty("type", wireValue)
            ).ToString();

            Assert.ThrowsAny<JsonException>(() => SubFormFieldRuleAction.Init(payload));
        }
    }
}
