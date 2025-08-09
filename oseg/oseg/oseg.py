import os
from . import jinja_extension, generator, model, parser


class Generator:
    def __init__(
        self,
        oas_file: str,
        operation_id: str | None = None,
        example_data: model.EXAMPLE_DATA_BY_OPERATION | str | None = None,
    ):
        if isinstance(example_data, str):
            example_data = (
                parser.FileLoader.get_file_contents(example_data)
                if os.path.isfile(example_data)
                else None
            )

        self._oa_parser = parser.OaParser(
            oas_file,
            operation_id,
            example_data,
        )

    def generate(
        self,
        config: generator.BaseConfig,
        output_dir: str,
    ) -> int:
        jinja = jinja_extension.JinjaExt.factory()

        if not os.path.isdir(output_dir):
            os.makedirs(output_dir)

        for _, operation in self._oa_parser.operations.items():
            for name, property_container in operation.request.example_data.items():
                sdk_generator = generator.GeneratorFactory.generator_factory(
                    config,
                    operation,
                    property_container,
                )

                operation_id = operation.operation_id
                filename = parser.NormalizeStr.pascal_case(f"{operation_id}_{name}")
                file_extension = sdk_generator.FILE_EXTENSION
                target_file = f"{output_dir}/{filename}.{file_extension}"

                print(f"Begin parsing for {sdk_generator.NAME} {filename}")

                rendered = jinja.template(sdk_generator).render(
                    operation=operation,
                    example_name=name,
                    config=config,
                )

                with open(target_file, "w", encoding="utf-8") as f:
                    f.write(rendered)

        return 0

    def setup_project(
        self,
        config: generator.BaseConfig,
        base_dir: str,
        output_dir: str,
    ) -> int:
        generator.GeneratorFactory.project_factory(
            config,
            base_dir,
            output_dir,
        )

        return 0

    def read_config_file(
        self,
        config: generator.BaseConfigDef | str,
    ) -> generator.BaseConfig:
        return generator.GeneratorFactory.config_factory(config)
