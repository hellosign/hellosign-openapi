from oseg import parser
from test_utils import TestCase


class TestNormalizeStr(TestCase):
    def test_underscore(self):
        data = {
            "A": {
                "v1": "A",
                "v2": "A",
            },
            "a": {
                "v1": "a",
                "v2": "a",
            },
            "Ab": {
                "v1": "Ab",
                "v2": "Ab",
            },
            "AB": {
                "v1": "AB",
                "v2": "A_B",
            },
            "aB": {
                "v1": "a_B",
                "v2": "a_B",
            },
            "ABC": {
                "v1": "ABC",
                "v2": "A_BC",
            },
            "OAuthName": {
                "v1": "O_Auth_Name",
                "v2": "O_Auth_Name",
            },
            "abcdefg123hij456": {
                "v1": "abcdefg123hij456",
                "v2": "abcdefg123hij456",
            },
            "Abcdefg123hij456": {
                "v1": "Abcdefg123hij456",
                "v2": "Abcdefg123hij456",
            },
            "ABcdefg123hij456": {
                "v1": "A_Bcdefg123hij456",
                "v2": "A_Bcdefg123hij456",
            },
            "ABCdefg123hij456": {
                "v1": "AB_Cdefg123hij456",
                "v2": "A_B_Cdefg123hij456",
            },
            "ABCDefg123hij456": {
                "v1": "ABC_Defg123hij456",
                "v2": "A_BC_Defg123hij456",
            },
            "ABCDEfg123hij456": {
                "v1": "ABCD_Efg123hij456",
                "v2": "A_BCD_Efg123hij456",
            },
            "ABCDEFg123hij456": {
                "v1": "ABCDEFg123hij456",
                "v2": "A_BCDEFg123hij456",
            },
            "ABCDEFG123hij456": {
                "v1": "ABCDEFG123hij456",
                "v2": "A_BCDEFG123hij456",
            },
            "ABCDEFG123Hij456": {
                "v1": "ABCDEFG123_Hij456",
                "v2": "A_BCDEFG123_Hij456",
            },
            "ABCDEFG123HIj456": {
                "v1": "ABCDEFG123_HIj456",
                "v2": "A_BCDEFG123_HIj456",
            },
            "ABCDEFG123HIJ456": {
                "v1": "ABCDEFG123_HIJ456",
                "v2": "A_BCDEFG123_HIJ456",
            },
            "ABCDEFG123HiJ456": {
                "v1": "ABCDEFG123_Hi_J456",
                "v2": "A_BCDEFG123_Hi_J456",
            },
            "ABCDEFG123hiJ456": {
                "v1": "ABCDEFG123hi_J456",
                "v2": "A_BCDEFG123hi_J456",
            },
            "ABCDEFG123hIJ456": {
                "v1": "ABCDEFG123h_IJ456",
                "v2": "A_BCDEFG123h_IJ456",
            },
            "aBcdefg123hij456": {
                "v1": "a_Bcdefg123hij456",
                "v2": "a_Bcdefg123hij456",
            },
            "aBCdefg123hij456": {
                "v1": "a_B_Cdefg123hij456",
                "v2": "a_B_Cdefg123hij456",
            },
            "aBCDefg123hij456": {
                "v1": "a_BC_Defg123hij456",
                "v2": "a_BC_Defg123hij456",
            },
            "aBCDEfg123hij456": {
                "v1": "a_BCD_Efg123hij456",
                "v2": "a_BCD_Efg123hij456",
            },
            "aBCDEFg123hij456": {
                "v1": "a_BCDEFg123hij456",
                "v2": "a_BCDEFg123hij456",
            },
            "aBCDEFG123hij456": {
                "v1": "a_BCDEFG123hij456",
                "v2": "a_BCDEFG123hij456",
            },
            "aBcDeFg123hIj456": {
                "v1": "a_Bc_De_Fg123h_Ij456",
                "v2": "a_Bc_De_Fg123h_Ij456",
            },
            "HelloWorld!123": {
                "v1": "Hello_World_123",
                "v2": "Hello_World_123",
            },
            "MixEDCase$#42": {
                "v1": "Mix_ED_Case__42",
                "v2": "Mix_ED_Case__42",
            },
            "Snake_Case-Test": {
                "v1": "Snake_Case_Test",
                "v2": "Snake_Case_Test",
            },
            "CamelCase99!": {
                "v1": "Camel_Case99",
                "v2": "Camel_Case99",
            },
            "Python@Rocks2024": {
                "v1": "Python_Rocks2024",
                "v2": "Python_Rocks2024",
            },
            "myVariable&*()": {
                "v1": "my_Variable",
                "v2": "my_Variable",
            },
            "Some-Thing#Here": {
                "v1": "Some_Thing_Here",
                "v2": "Some_Thing_Here",
            },
            "No$SpacesAllowed99": {
                "v1": "No_Spaces_Allowed99",
                "v2": "No_Spaces_Allowed99",
            },
            "justA_TestString!": {
                "v1": "just_A_Test_String",
                "v2": "just_A_Test_String",
            },
            "What?Ever*YouSay": {
                "v1": "What_Ever_You_Say",
                "v2": "What_Ever_You_Say",
            },
            "UserID_789": {
                "v1": "User_ID_789",
                "v2": "User_ID_789",
            },
            "Go4It-Now!": {
                "v1": "Go4_It_Now",
                "v2": "Go4_It_Now",
            },
            "Check_ME@THIS": {
                "v1": "Check_ME_THIS",
                "v2": "Check_ME_THIS",
            },
            "JavaScript$Rules!": {
                "v1": "Java_Script_Rules",
                "v2": "Java_Script_Rules",
            },
            "Best_Choice_2025*": {
                "v1": "Best_Choice_2025",
                "v2": "Best_Choice_2025",
            },
            "Happy_Days": {
                "v1": "Happy_Days",
                "v2": "Happy_Days",
            },
            "Let's-Try_This-One!": {
                "v1": "Let_s_Try_This_One",
                "v2": "Let_s_Try_This_One",
            },
            "Make$It$Count24": {
                "v1": "Make_It_Count24",
                "v2": "Make_It_Count24",
            },
            "Code-Lover@Heart": {
                "v1": "Code_Lover_Heart",
                "v2": "Code_Lover_Heart",
            },
            "Dev&Ops-24/7": {
                "v1": "Dev_Ops_24_7",
                "v2": "Dev_Ops_24_7",
            },
            "Super#Cool_Project": {
                "v1": "Super_Cool_Project",
                "v2": "Super_Cool_Project",
            },
            "WhatIs_This?": {
                "v1": "What_Is_This",
                "v2": "What_Is_This",
            },
            "42AnswerToEverything!": {
                "v1": "42_Answer_To_Everything",
                "v2": "42_Answer_To_Everything",
            },
            "API@Version_3.0": {
                "v1": "API_Version_3_0",
                "v2": "A_PI_Version_3_0",
            },
            "Let'sDo_This-Again!": {
                "v1": "Let_s_Do_This_Again",
                "v2": "Let_s_Do_This_Again",
            },
            "AI configs (beta) Api": {
                "v1": "AI_configs_beta_Api",
                "v2": "A_I_configs_beta_Api",
            },
            "AI Configs (beta) Api": {
                "v1": "AI_Configs_beta_Api",
                "v2": "A_I_Configs_beta_Api",
            },
            "AIconfigs (beta) Api": {
                "v1": "A_Iconfigs_beta_Api",
                "v2": "A_Iconfigs_beta_Api",
            },
            "AIConfigs (beta) Api": {
                "v1": "AI_Configs_beta_Api",
                "v2": "A_I_Configs_beta_Api",
            },
            "AIConfigs(beta) Api": {
                "v1": "AI_Configs_beta_Api",
                "v2": "A_I_Configs_beta_Api",
            },
            "AIConfigs(Beta) Api": {
                "v1": "AI_Configs_Beta_Api",
                "v2": "A_I_Configs_Beta_Api",
            },
            "AIConfigsBeta) Api": {
                "v1": "AI_Configs_Beta_Api",
                "v2": "A_I_Configs_Beta_Api",
            },
            "AI Configs Beta Api": {
                "v1": "AI_Configs_Beta_Api",
                "v2": "A_I_Configs_Beta_Api",
            },
            "AI configs (BETA) Api": {
                "v1": "AI_configs_BETA_Api",
                "v2": "A_I_configs_BETA_Api",
            },
            "abcd": {
                "v1": "abcd",
                "v2": "abcd",
            },
            "some-value": {
                "v1": "some_value",
                "v2": "some_value",
            },
            "some_value": {
                "v1": "some_value",
                "v2": "some_value",
            },
            "LD-API-Version": {
                "v1": "LD_API_Version",
                "v2": "L_D_API_Version",
            },
        }

        for provided, expected in data.items():
            with self.subTest(provided):
                v1 = parser.NormalizeStr.underscore(
                    provided,
                    option=parser.UnderscoreOption.FIRST_CHAR_JOIN,
                )

                self.assertEqual(
                    first=expected["v1"],
                    second=v1,
                    msg=f"v1 - Provided: {provided}, Expected: {expected["v1"]}, Result: {v1}",
                )

                v2 = parser.NormalizeStr.underscore(
                    provided,
                    option=parser.UnderscoreOption.FIRST_CHAR_SEPARATE,
                )

                self.assertEqual(
                    first=expected["v2"],
                    second=v2,
                    msg=f"v2 - Provided: {provided}, Expected: {expected["v2"]}, Result: {v2}",
                )

    def test_camel_case(self):
        data = {
            "A": {
                "v1": "a",
                "v2": "a",
                "v3": "a",
            },
            "a": {
                "v1": "a",
                "v2": "a",
                "v3": "a",
            },
            "Ab": {
                "v1": "ab",
                "v2": "ab",
                "v3": "ab",
            },
            "AB": {
                "v1": "aB",
                "v2": "ab",
                "v3": "ab",
            },
            "aB": {
                "v1": "aB",
                "v2": "aB",
                "v3": "aB",
            },
            "ABC": {
                "v1": "aBC",
                "v2": "abc",
                "v3": "abc",
            },
            "OAuthName": {
                "v1": "oAuthName",
                "v2": "oAuthName",
                "v3": "oAuthName",
            },
            "abcdefg123hij456": {
                "v1": "abcdefg123hij456",
                "v2": "abcdefg123hij456",
                "v3": "abcdefg123hij456",
            },
            "Abcdefg123hij456": {
                "v1": "abcdefg123hij456",
                "v2": "abcdefg123hij456",
                "v3": "abcdefg123hij456",
            },
            "ABcdefg123hij456": {
                "v1": "aBcdefg123hij456",
                "v2": "aBcdefg123hij456",
                "v3": "aBcdefg123hij456",
            },
            "ABCdefg123hij456": {
                "v1": "aBCdefg123hij456",
                "v2": "abCdefg123hij456",
                "v3": "abCdefg123hij456",
            },
            "ABCDefg123hij456": {
                "v1": "aBCDefg123hij456",
                "v2": "abcDefg123hij456",
                "v3": "abcDefg123hij456",
            },
            "ABCDEfg123hij456": {
                "v1": "aBCDEfg123hij456",
                "v2": "abcdEfg123hij456",
                "v3": "abcdEfg123hij456",
            },
            "ABCDEFg123hij456": {
                "v1": "aBCDEFg123hij456",
                "v2": "abcdefg123hij456",
                "v3": "abcdefg123hij456",
            },
            "ABCDEFG123hij456": {
                "v1": "aBCDEFG123hij456",
                "v2": "abcdefg123hij456",
                "v3": "abcdefg123hij456",
            },
            "ABCDEFG123Hij456": {
                "v1": "aBCDEFG123Hij456",
                "v2": "abcdefg123Hij456",
                "v3": "abcdefg123Hij456",
            },
            "ABCDEFG123HIj456": {
                "v1": "aBCDEFG123HIj456",
                "v2": "abcdefg123Hij456",
                "v3": "abcdefg123HIj456",
            },
            "ABCDEFG123HIJ456": {
                "v1": "aBCDEFG123HIJ456",
                "v2": "abcdefg123Hij456",
                "v3": "abcdefg123HIJ456",
            },
            "ABCDEFG123HiJ456": {
                "v1": "aBCDEFG123HiJ456",
                "v2": "abcdefg123HiJ456",
                "v3": "abcdefg123HiJ456",
            },
            "ABCDEFG123hiJ456": {
                "v1": "aBCDEFG123hiJ456",
                "v2": "abcdefg123hiJ456",
                "v3": "abcdefg123hiJ456",
            },
            "ABCDEFG123hIJ456": {
                "v1": "aBCDEFG123hIJ456",
                "v2": "abcdefg123hIj456",
                "v3": "abcdefg123hIJ456",
            },
            "aBcdefg123hij456": {
                "v1": "aBcdefg123hij456",
                "v2": "aBcdefg123hij456",
                "v3": "aBcdefg123hij456",
            },
            "aBCdefg123hij456": {
                "v1": "aBCdefg123hij456",
                "v2": "aBCdefg123hij456",
                "v3": "aBCdefg123hij456",
            },
            "aBCDefg123hij456": {
                "v1": "aBCDefg123hij456",
                "v2": "aBcDefg123hij456",
                "v3": "aBCDefg123hij456",
            },
            "aBCDEfg123hij456": {
                "v1": "aBCDEfg123hij456",
                "v2": "aBcdEfg123hij456",
                "v3": "aBCDEfg123hij456",
            },
            "aBCDEFg123hij456": {
                "v1": "aBCDEFg123hij456",
                "v2": "aBcdefg123hij456",
                "v3": "aBCDEFg123hij456",
            },
            "aBCDEFG123hij456": {
                "v1": "aBCDEFG123hij456",
                "v2": "aBcdefg123hij456",
                "v3": "aBCDEFG123hij456",
            },
            "aBcDeFg123hIj456": {
                "v1": "aBcDeFg123hIj456",
                "v2": "aBcDeFg123hIj456",
                "v3": "aBcDeFg123hIj456",
            },
            "HelloWorld!123": {
                "v1": "helloWorld123",
                "v2": "helloWorld123",
                "v3": "helloWorld123",
            },
            "MixEDCase$#42": {
                "v1": "mixEDCase42",
                "v2": "mixEdCase42",
                "v3": "mixEDCase42",
            },
            "Snake_Case-Test": {
                "v1": "snakeCaseTest",
                "v2": "snakeCaseTest",
                "v3": "snakeCaseTest",
            },
            "CamelCase99!": {
                "v1": "camelCase99",
                "v2": "camelCase99",
                "v3": "camelCase99",
            },
            "Python@Rocks2024": {
                "v1": "pythonRocks2024",
                "v2": "pythonRocks2024",
                "v3": "pythonRocks2024",
            },
            "myVariable&*()": {
                "v1": "myVariable",
                "v2": "myVariable",
                "v3": "myVariable",
            },
            "Some-Thing#Here": {
                "v1": "someThingHere",
                "v2": "someThingHere",
                "v3": "someThingHere",
            },
            "No$SpacesAllowed99": {
                "v1": "noSpacesAllowed99",
                "v2": "noSpacesAllowed99",
                "v3": "noSpacesAllowed99",
            },
            "justA_TestString!": {
                "v1": "justATestString",
                "v2": "justATestString",
                "v3": "justATestString",
            },
            "What?Ever*YouSay": {
                "v1": "whatEverYouSay",
                "v2": "whatEverYouSay",
                "v3": "whatEverYouSay",
            },
            "UserID_789": {
                "v1": "userID789",
                "v2": "userId789",
                "v3": "userID789",
            },
            "Go4It-Now!": {
                "v1": "go4ItNow",
                "v2": "go4ItNow",
                "v3": "go4ItNow",
            },
            "Check_ME@THIS": {
                "v1": "checkMETHIS",
                "v2": "checkMeThis",
                "v3": "checkMETHIS",
            },
            "JavaScript$Rules!": {
                "v1": "javaScriptRules",
                "v2": "javaScriptRules",
                "v3": "javaScriptRules",
            },
            "Best_Choice_2025*": {
                "v1": "bestChoice2025",
                "v2": "bestChoice2025",
                "v3": "bestChoice2025",
            },
            "Happy_Days": {
                "v1": "happyDays",
                "v2": "happyDays",
                "v3": "happyDays",
            },
            "Let's-Try_This-One!": {
                "v1": "letSTryThisOne",
                "v2": "letSTryThisOne",
                "v3": "letSTryThisOne",
            },
            "Make$It$Count24": {
                "v1": "makeItCount24",
                "v2": "makeItCount24",
                "v3": "makeItCount24",
            },
            "Code-Lover@Heart": {
                "v1": "codeLoverHeart",
                "v2": "codeLoverHeart",
                "v3": "codeLoverHeart",
            },
            "Dev&Ops-24/7": {
                "v1": "devOps247",
                "v2": "devOps247",
                "v3": "devOps247",
            },
            "Super#Cool_Project": {
                "v1": "superCoolProject",
                "v2": "superCoolProject",
                "v3": "superCoolProject",
            },
            "WhatIs_This?": {
                "v1": "whatIsThis",
                "v2": "whatIsThis",
                "v3": "whatIsThis",
            },
            "42AnswerToEverything!": {
                "v1": "42AnswerToEverything",
                "v2": "42AnswerToEverything",
                "v3": "42AnswerToEverything",
            },
            "API@Version_3.0": {
                "v1": "aPIVersion30",
                "v2": "apiVersion30",
                "v3": "apiVersion30",
            },
            "Let'sDo_This-Again!": {
                "v1": "letSDoThisAgain",
                "v2": "letSDoThisAgain",
                "v3": "letSDoThisAgain",
            },
            "AI configs (beta) Api": {
                "v1": "aIConfigsBetaApi",
                "v2": "aiConfigsBetaApi",
                "v3": "aiConfigsBetaApi",
            },
            "AI Configs (beta) Api": {
                "v1": "aIConfigsBetaApi",
                "v2": "aiConfigsBetaApi",
                "v3": "aiConfigsBetaApi",
            },
            "AIconfigs (beta) Api": {
                "v1": "aIconfigsBetaApi",
                "v2": "aIconfigsBetaApi",
                "v3": "aIconfigsBetaApi",
            },
            "AIConfigs (beta) Api": {
                "v1": "aIConfigsBetaApi",
                "v2": "aiConfigsBetaApi",
                "v3": "aiConfigsBetaApi",
            },
            "AIConfigs(beta) Api": {
                "v1": "aIConfigsBetaApi",
                "v2": "aiConfigsBetaApi",
                "v3": "aiConfigsBetaApi",
            },
            "AIConfigs(Beta) Api": {
                "v1": "aIConfigsBetaApi",
                "v2": "aiConfigsBetaApi",
                "v3": "aiConfigsBetaApi",
            },
            "AIConfigsBeta) Api": {
                "v1": "aIConfigsBetaApi",
                "v2": "aiConfigsBetaApi",
                "v3": "aiConfigsBetaApi",
            },
            "AI Configs Beta Api": {
                "v1": "aIConfigsBetaApi",
                "v2": "aiConfigsBetaApi",
                "v3": "aiConfigsBetaApi",
            },
            "AI configs (BETA) Api": {
                "v1": "aIConfigsBETAApi",
                "v2": "aiConfigsBetaApi",
                "v3": "aiConfigsBETAApi",
            },
            "abcd": {
                "v1": "abcd",
                "v2": "abcd",
                "v3": "abcd",
            },
            "some-value": {
                "v1": "someValue",
                "v2": "someValue",
                "v3": "someValue",
            },
            "some_value": {
                "v1": "someValue",
                "v2": "someValue",
                "v3": "someValue",
            },
            "LD-API-Version": {
                "v1": "lDAPIVersion",
                "v2": "ldApiVersion",
                "v3": "ldAPIVersion",
            },
        }

        for provided, expected in data.items():
            with self.subTest(provided):
                v1 = parser.NormalizeStr.camel_case(
                    provided,
                    option=parser.CamelCaseOption.UPPERCASE_KEEP,
                )

                self.assertEqual(
                    first=expected["v1"],
                    second=v1,
                    msg=f"v1 - Provided: {provided}, Expected: {expected["v1"]}, Result: {v1}",
                )

                v2 = parser.NormalizeStr.camel_case(
                    provided,
                    option=parser.CamelCaseOption.LOWERCASE_CONTIGUOUS,
                )

                self.assertEqual(
                    first=expected["v2"],
                    second=v2,
                    msg=f"v2 - Provided: {provided}, Expected: {expected["v2"]}, Result: {v2}",
                )

                v3 = parser.NormalizeStr.camel_case(
                    provided,
                    option=parser.CamelCaseOption.LOWERCASE_FIRST_SECTION,
                )

                self.assertEqual(
                    first=expected["v3"],
                    second=v3,
                    msg=f"v3 - Provided: {provided}, Expected: {expected["v3"]}, Result: {v3}",
                )

    def test_pascal_case(self):
        data = {
            "A": {
                "v1": "A",
                "v2": "A",
            },
            "a": {
                "v1": "A",
                "v2": "A",
            },
            "Ab": {
                "v1": "Ab",
                "v2": "Ab",
            },
            "AB": {
                "v1": "AB",
                "v2": "Ab",
            },
            "aB": {
                "v1": "AB",
                "v2": "AB",
            },
            "ABC": {
                "v1": "ABC",
                "v2": "Abc",
            },
            "OAuthName": {
                "v1": "OAuthName",
                "v2": "OAuthName",
            },
            "abcdefg123hij456": {
                "v1": "Abcdefg123hij456",
                "v2": "Abcdefg123hij456",
            },
            "Abcdefg123hij456": {
                "v1": "Abcdefg123hij456",
                "v2": "Abcdefg123hij456",
            },
            "ABcdefg123hij456": {
                "v1": "ABcdefg123hij456",
                "v2": "ABcdefg123hij456",
            },
            "ABCdefg123hij456": {
                "v1": "ABCdefg123hij456",
                "v2": "AbCdefg123hij456",
            },
            "ABCDefg123hij456": {
                "v1": "ABCDefg123hij456",
                "v2": "AbcDefg123hij456",
            },
            "ABCDEfg123hij456": {
                "v1": "ABCDEfg123hij456",
                "v2": "AbcdEfg123hij456",
            },
            "ABCDEFg123hij456": {
                "v1": "ABCDEFg123hij456",
                "v2": "Abcdefg123hij456",
            },
            "ABCDEFG123hij456": {
                "v1": "ABCDEFG123hij456",
                "v2": "Abcdefg123hij456",
            },
            "ABCDEFG123Hij456": {
                "v1": "ABCDEFG123Hij456",
                "v2": "Abcdefg123Hij456",
            },
            "ABCDEFG123HIj456": {
                "v1": "ABCDEFG123HIj456",
                "v2": "Abcdefg123Hij456",
            },
            "ABCDEFG123HIJ456": {
                "v1": "ABCDEFG123HIJ456",
                "v2": "Abcdefg123Hij456",
            },
            "ABCDEFG123HiJ456": {
                "v1": "ABCDEFG123HiJ456",
                "v2": "Abcdefg123HiJ456",
            },
            "ABCDEFG123hiJ456": {
                "v1": "ABCDEFG123hiJ456",
                "v2": "Abcdefg123hiJ456",
            },
            "ABCDEFG123hIJ456": {
                "v1": "ABCDEFG123hIJ456",
                "v2": "Abcdefg123hIj456",
            },
            "aBcdefg123hij456": {
                "v1": "ABcdefg123hij456",
                "v2": "ABcdefg123hij456",
            },
            "aBCdefg123hij456": {
                "v1": "ABCdefg123hij456",
                "v2": "ABCdefg123hij456",
            },
            "aBCDefg123hij456": {
                "v1": "ABCDefg123hij456",
                "v2": "ABcDefg123hij456",
            },
            "aBCDEfg123hij456": {
                "v1": "ABCDEfg123hij456",
                "v2": "ABcdEfg123hij456",
            },
            "aBCDEFg123hij456": {
                "v1": "ABCDEFg123hij456",
                "v2": "ABcdefg123hij456",
            },
            "aBCDEFG123hij456": {
                "v1": "ABCDEFG123hij456",
                "v2": "ABcdefg123hij456",
            },
            "aBcDeFg123hIj456": {
                "v1": "ABcDeFg123hIj456",
                "v2": "ABcDeFg123hIj456",
            },
            "HelloWorld!123": {
                "v1": "HelloWorld123",
                "v2": "HelloWorld123",
            },
            "MixEDCase$#42": {
                "v1": "MixEDCase42",
                "v2": "MixEdCase42",
            },
            "Snake_Case-Test": {
                "v1": "SnakeCaseTest",
                "v2": "SnakeCaseTest",
            },
            "CamelCase99!": {
                "v1": "CamelCase99",
                "v2": "CamelCase99",
            },
            "Python@Rocks2024": {
                "v1": "PythonRocks2024",
                "v2": "PythonRocks2024",
            },
            "myVariable&*()": {
                "v1": "MyVariable",
                "v2": "MyVariable",
            },
            "Some-Thing#Here": {
                "v1": "SomeThingHere",
                "v2": "SomeThingHere",
            },
            "No$SpacesAllowed99": {
                "v1": "NoSpacesAllowed99",
                "v2": "NoSpacesAllowed99",
            },
            "justA_TestString!": {
                "v1": "JustATestString",
                "v2": "JustATestString",
            },
            "What?Ever*YouSay": {
                "v1": "WhatEverYouSay",
                "v2": "WhatEverYouSay",
            },
            "UserID_789": {
                "v1": "UserID789",
                "v2": "UserId789",
            },
            "Go4It-Now!": {
                "v1": "Go4ItNow",
                "v2": "Go4ItNow",
            },
            "Check_ME@THIS": {
                "v1": "CheckMETHIS",
                "v2": "CheckMeThis",
            },
            "JavaScript$Rules!": {
                "v1": "JavaScriptRules",
                "v2": "JavaScriptRules",
            },
            "Best_Choice_2025*": {
                "v1": "BestChoice2025",
                "v2": "BestChoice2025",
            },
            "Happy_Days": {
                "v1": "HappyDays",
                "v2": "HappyDays",
            },
            "Let's-Try_This-One!": {
                "v1": "LetSTryThisOne",
                "v2": "LetSTryThisOne",
            },
            "Make$It$Count24": {
                "v1": "MakeItCount24",
                "v2": "MakeItCount24",
            },
            "Code-Lover@Heart": {
                "v1": "CodeLoverHeart",
                "v2": "CodeLoverHeart",
            },
            "Dev&Ops-24/7": {
                "v1": "DevOps247",
                "v2": "DevOps247",
            },
            "Super#Cool_Project": {
                "v1": "SuperCoolProject",
                "v2": "SuperCoolProject",
            },
            "WhatIs_This?": {
                "v1": "WhatIsThis",
                "v2": "WhatIsThis",
            },
            "42AnswerToEverything!": {
                "v1": "42AnswerToEverything",
                "v2": "42AnswerToEverything",
            },
            "API@Version_3.0": {
                "v1": "APIVersion30",
                "v2": "ApiVersion30",
            },
            "Let'sDo_This-Again!": {
                "v1": "LetSDoThisAgain",
                "v2": "LetSDoThisAgain",
            },
            "AI configs (beta) Api": {
                "v1": "AIConfigsBetaApi",
                "v2": "AiConfigsBetaApi",
            },
            "AI Configs (beta) Api": {
                "v1": "AIConfigsBetaApi",
                "v2": "AiConfigsBetaApi",
            },
            "AIconfigs (beta) Api": {
                "v1": "AIconfigsBetaApi",
                "v2": "AIconfigsBetaApi",
            },
            "AIConfigs (beta) Api": {
                "v1": "AIConfigsBetaApi",
                "v2": "AiConfigsBetaApi",
            },
            "AIConfigs(beta) Api": {
                "v1": "AIConfigsBetaApi",
                "v2": "AiConfigsBetaApi",
            },
            "AIConfigs(Beta) Api": {
                "v1": "AIConfigsBetaApi",
                "v2": "AiConfigsBetaApi",
            },
            "AIConfigsBeta) Api": {
                "v1": "AIConfigsBetaApi",
                "v2": "AiConfigsBetaApi",
            },
            "AI Configs Beta Api": {
                "v1": "AIConfigsBetaApi",
                "v2": "AiConfigsBetaApi",
            },
            "AI configs (BETA) Api": {
                "v1": "AIConfigsBETAApi",
                "v2": "AiConfigsBetaApi",
            },
            "abcd": {
                "v1": "Abcd",
                "v2": "Abcd",
            },
            "some-value": {
                "v1": "SomeValue",
                "v2": "SomeValue",
            },
            "some_value": {
                "v1": "SomeValue",
                "v2": "SomeValue",
            },
            "LD-API-Version": {
                "v1": "LDAPIVersion",
                "v2": "LdApiVersion",
            },
        }

        for provided, expected in data.items():
            with self.subTest(provided):
                v1 = parser.NormalizeStr.pascal_case(
                    provided,
                    option=parser.PascalCaseOption.UPPERCASE_KEEP,
                )

                self.assertEqual(
                    first=expected["v1"],
                    second=v1,
                    msg=f"v1 - Provided: {provided}, Expected: {expected["v1"]}, Result: {v1}",
                )

                v2 = parser.NormalizeStr.pascal_case(
                    provided,
                    option=parser.PascalCaseOption.LOWERCASE_CONTIGUOUS,
                )

                self.assertEqual(
                    first=expected["v2"],
                    second=v2,
                    msg=f"v2 - Provided: {provided}, Expected: {expected["v2"]}, Result: {v2}",
                )

    def test_snake_case(self):
        data = {
            "A": "a",
            "a": "a",
            "Ab": "ab",
            "AB": "ab",
            "aB": "a_b",
            "ABC": "abc",
            "OAuthName": "o_auth_name",
            "abcdefg123hij456": "abcdefg123hij456",
            "Abcdefg123hij456": "abcdefg123hij456",
            "ABcdefg123hij456": "a_bcdefg123hij456",
            "ABCdefg123hij456": "ab_cdefg123hij456",
            "ABCDefg123hij456": "abc_defg123hij456",
            "ABCDEfg123hij456": "abcd_efg123hij456",
            "ABCDEFg123hij456": "abcdefg123hij456",
            "ABCDEFG123hij456": "abcdefg123hij456",
            "ABCDEFG123Hij456": "abcdefg123_hij456",
            "ABCDEFG123HIj456": "abcdefg123_hij456",
            "ABCDEFG123HIJ456": "abcdefg123_hij456",
            "ABCDEFG123HiJ456": "abcdefg123_hi_j456",
            "ABCDEFG123hiJ456": "abcdefg123hi_j456",
            "ABCDEFG123hIJ456": "abcdefg123h_ij456",
            "aBcdefg123hij456": "a_bcdefg123hij456",
            "aBCdefg123hij456": "a_b_cdefg123hij456",
            "aBCDefg123hij456": "a_bc_defg123hij456",
            "aBCDEfg123hij456": "a_bcd_efg123hij456",
            "aBCDEFg123hij456": "a_bcdefg123hij456",
            "aBCDEFG123hij456": "a_bcdefg123hij456",
            "aBcDeFg123hIj456": "a_bc_de_fg123h_ij456",
            "HelloWorld!123": "hello_world_123",
            "MixEDCase$#42": "mix_ed_case__42",
            "Snake_Case-Test": "snake_case_test",
            "CamelCase99!": "camel_case99",
            "Python@Rocks2024": "python_rocks2024",
            "myVariable&*()": "my_variable",
            "Some-Thing#Here": "some_thing_here",
            "No$SpacesAllowed99": "no_spaces_allowed99",
            "justA_TestString!": "just_a_test_string",
            "What?Ever*YouSay": "what_ever_you_say",
            "UserID_789": "user_id_789",
            "Go4It-Now!": "go4_it_now",
            "Check_ME@THIS": "check_me_this",
            "JavaScript$Rules!": "java_script_rules",
            "Best_Choice_2025*": "best_choice_2025",
            "Happy_Days": "happy_days",
            "Let's-Try_This-One!": "let_s_try_this_one",
            "Make$It$Count24": "make_it_count24",
            "Code-Lover@Heart": "code_lover_heart",
            "Dev&Ops-24/7": "dev_ops_24_7",
            "Super#Cool_Project": "super_cool_project",
            "WhatIs_This?": "what_is_this",
            "42AnswerToEverything!": "42_answer_to_everything",
            "API@Version_3.0": "api_version_3_0",
            "Let'sDo_This-Again!": "let_s_do_this_again",
            "AI configs (beta) Api": "ai_configs_beta_api",
            "AI Configs (beta) Api": "ai_configs_beta_api",
            "AIconfigs (beta) Api": "a_iconfigs_beta_api",
            "AIConfigs (beta) Api": "ai_configs_beta_api",
            "AIConfigs(beta) Api": "ai_configs_beta_api",
            "AIConfigs(Beta) Api": "ai_configs_beta_api",
            "AIConfigsBeta) Api": "ai_configs_beta_api",
            "AI Configs Beta Api": "ai_configs_beta_api",
            "AI configs (BETA) Api": "ai_configs_beta_api",
            "abcd": "abcd",
            "some-value": "some_value",
            "some_value": "some_value",
            "LD-API-Version": "ld_api_version",
        }

        for provided, expected in data.items():
            with self.subTest(provided):
                result = parser.NormalizeStr.snake_case(provided)

                self.assertEqual(
                    first=expected,
                    second=result,
                    msg=f"Provided: {provided}, Expected: {expected}, Result: {result}",
                )

    def test_uc_first(self):
        data = {
            "A": "A",
            "a": "A",
            "Ab": "Ab",
            "AB": "AB",
            "aB": "AB",
            "ABC": "ABC",
            "OAuthName": "OAuthName",
            "abcdefg123hij456": "Abcdefg123hij456",
            "Abcdefg123hij456": "Abcdefg123hij456",
            "ABcdefg123hij456": "ABcdefg123hij456",
            "ABCdefg123hij456": "ABCdefg123hij456",
            "ABCDefg123hij456": "ABCDefg123hij456",
            "ABCDEfg123hij456": "ABCDEfg123hij456",
            "ABCDEFg123hij456": "ABCDEFg123hij456",
            "ABCDEFG123hij456": "ABCDEFG123hij456",
            "ABCDEFG123Hij456": "ABCDEFG123Hij456",
            "ABCDEFG123HIj456": "ABCDEFG123HIj456",
            "ABCDEFG123HIJ456": "ABCDEFG123HIJ456",
            "ABCDEFG123HiJ456": "ABCDEFG123HiJ456",
            "ABCDEFG123hiJ456": "ABCDEFG123hiJ456",
            "ABCDEFG123hIJ456": "ABCDEFG123hIJ456",
            "aBcdefg123hij456": "ABcdefg123hij456",
            "aBCdefg123hij456": "ABCdefg123hij456",
            "aBCDefg123hij456": "ABCDefg123hij456",
            "aBCDEfg123hij456": "ABCDEfg123hij456",
            "aBCDEFg123hij456": "ABCDEFg123hij456",
            "aBCDEFG123hij456": "ABCDEFG123hij456",
            "aBcDeFg123hIj456": "ABcDeFg123hIj456",
            "HelloWorld!123": "HelloWorld!123",
            "MixEDCase$#42": "MixEDCase$#42",
            "Snake_Case-Test": "Snake_Case-Test",
            "CamelCase99!": "CamelCase99!",
            "Python@Rocks2024": "Python@Rocks2024",
            "myVariable&*()": "MyVariable&*()",
            "Some-Thing#Here": "Some-Thing#Here",
            "No$SpacesAllowed99": "No$SpacesAllowed99",
            "justA_TestString!": "JustA_TestString!",
            "What?Ever*YouSay": "What?Ever*YouSay",
            "UserID_789": "UserID_789",
            "Go4It-Now!": "Go4It-Now!",
            "Check_ME@THIS": "Check_ME@THIS",
            "JavaScript$Rules!": "JavaScript$Rules!",
            "Best_Choice_2025*": "Best_Choice_2025*",
            "Happy_Days": "Happy_Days",
            "Let's-Try_This-One!": "Let's-Try_This-One!",
            "Make$It$Count24": "Make$It$Count24",
            "Code-Lover@Heart": "Code-Lover@Heart",
            "Dev&Ops-24/7": "Dev&Ops-24/7",
            "Super#Cool_Project": "Super#Cool_Project",
            "WhatIs_This?": "WhatIs_This?",
            "42AnswerToEverything!": "42AnswerToEverything!",
            "API@Version_3.0": "API@Version_3.0",
            "Let'sDo_This-Again!": "Let'sDo_This-Again!",
            "AI configs (beta) Api": "AI configs (beta) Api",
            "AI Configs (beta) Api": "AI Configs (beta) Api",
            "AIconfigs (beta) Api": "AIconfigs (beta) Api",
            "AIConfigs (beta) Api": "AIConfigs (beta) Api",
            "AIConfigs(beta) Api": "AIConfigs(beta) Api",
            "AIConfigs(Beta) Api": "AIConfigs(Beta) Api",
            "AIConfigsBeta) Api": "AIConfigsBeta) Api",
            "AI Configs Beta Api": "AI Configs Beta Api",
            "AI configs (BETA) Api": "AI configs (BETA) Api",
            "abcd": "Abcd",
            "some-value": "Some-value",
            "some_value": "Some_value",
            "LD-API-Version": "LD-API-Version",
        }

        for provided, expected in data.items():
            with self.subTest(provided):
                result = parser.NormalizeStr.uc_first(provided)

                self.assertEqual(
                    first=expected,
                    second=result,
                    msg=f"Provided: {provided}, Expected: {expected}, Result: {result}",
                )
