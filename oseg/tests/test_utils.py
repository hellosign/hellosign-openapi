import os
import unittest
from oseg import parser


class TestUtils:
    _BASE_DIR: str = os.path.dirname(os.path.abspath(__file__))
    cached_oa_parsers: dict[str, parser.OaParser] = {}

    @classmethod
    def oa_parser(cls, filename: str) -> parser.OaParser:
        if filename in cls.cached_oa_parsers:
            return cls.cached_oa_parsers[filename]

        if not filename.startswith("/"):
            filepath = f"{TestUtils._BASE_DIR}/fixtures/{filename}.yaml"
        else:
            filepath = filename

        cls.cached_oa_parsers[filename] = parser.OaParser(filepath)

        return cls.cached_oa_parsers[filename]


class TestCase(unittest.TestCase):
    def setUp(self):
        super().setUp()

        self.maxDiff = None
