import openapi_pydantic as oa
from dataclasses import dataclass
from enum import Enum
from oseg import parser


class SecurityTypeEnum(str, Enum):
    API_KEY = "apiKey"
    HTTP = "http"
    OAUTH2 = "oauth2"

    # not currently supported
    MUTUAL_TLS = "mutualTLS"
    OPEN_ID_CONNECT = "openIdConnect"


class SecuritySchemeEnum(str, Enum):
    BASIC = "basic"
    BEARER = "bearer"
    # not currently supported
    DIGEST = "digest"


class SecurityMethod(str, Enum):
    """What TemplateParser will actually use"""

    ACCESS_TOKEN = "access_token"
    API_KEY = "api_key"
    BASIC = "basic"


@dataclass
class SecurityScheme:
    name: str
    # key is the key value in the securitySchemes definition, not the "name" property
    key: str
    method: SecurityMethod


class Security:
    def __init__(
        self,
        oa_parser: parser.OaParser,
        operation: oa.Operation,
    ):
        self.is_optional: bool = False
        self.schemes: list[dict[str, SecurityScheme]] = []

        if (
            # security not defined anywhere
            not operation.security
            and not oa_parser.components.securitySchemes
            # security disabled for this operation
        ) or operation.security == {}:
            self.is_optional = True

            return

        # operation-level security overrides global security schemes
        for security in operation.security:
            # empty dict means security is optional for this operation
            if security == {}:
                self.is_optional = True

                continue

            if isinstance(security, str):
                scheme = oa_parser.components.securitySchemes[security]

                self.schemes.append(
                    {
                        security: SecurityScheme(
                            name=scheme.name if scheme.name else "",
                            key=security,
                            method=self._resolve_scheme_method(scheme),
                        )
                    }
                )

                continue

            joined = {}
            for key in security:
                scheme = oa_parser.components.securitySchemes[key]
                joined[key] = SecurityScheme(
                    name=scheme.name if scheme.name else "",
                    key=key,
                    method=self._resolve_scheme_method(scheme),
                )

            self.schemes.append(joined)

    def _resolve_scheme_method(
        self,
        security_scheme: oa.SecurityScheme,
    ) -> SecurityMethod:
        if security_scheme.type == SecurityTypeEnum.API_KEY:
            return SecurityMethod.API_KEY

        if (
            security_scheme.type == SecurityTypeEnum.HTTP
            and security_scheme.scheme == SecuritySchemeEnum.BASIC
        ):
            return SecurityMethod.BASIC

        if (
            security_scheme.type == SecurityTypeEnum.HTTP
            and security_scheme.scheme == SecuritySchemeEnum.BEARER
        ):
            return SecurityMethod.ACCESS_TOKEN

        if security_scheme.type == SecurityTypeEnum.OAUTH2:
            return SecurityMethod.ACCESS_TOKEN

        raise NotImplementedError("Cannot resolve security scheme type")
