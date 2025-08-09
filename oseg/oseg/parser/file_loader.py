import json
import os
import openapi_pydantic as oa
import yaml
from pathlib import Path


class FileLoader:
    def __init__(self, oas_file: str):
        self._oas_file: str = oas_file
        self.base_dir: str = os.path.dirname(oas_file)
        self.oas: dict[str, any] = self.get_file_contents(self._oas_file)
        self._cached_example_data: dict[str, dict[str, any]] = {}

    @staticmethod
    def get_file_contents(filename: str) -> dict[str, any]:
        if not os.path.isfile(filename):
            return {}

        with open(filename, "r", encoding="utf-8") as f:
            if Path(filename).suffix == ".json":
                results = json.load(f)
            else:
                results = yaml.safe_load(f)

            return results if isinstance(results, dict) else {}

    def get_example_data(self, example_schema: oa.Example) -> dict[str, any] | None:
        """Read example data from external file.

        The filename comes from embedded $ref value in an Example schema.
        Filenames are prepended with the directory where the OAS file is
        located.
        """

        if not isinstance(example_schema.value, dict):
            return None

        ref = example_schema.value.get("$ref")

        if not ref:
            return None

        if ref in self._cached_example_data:
            return self._cached_example_data[ref]

        filename = f"{self.base_dir}/{ref}"

        try:
            data = self.get_file_contents(filename)
            self._cached_example_data[ref] = data

            return data
        except Exception as e:
            print(f"Error reading example file {filename}")
            print(e)
