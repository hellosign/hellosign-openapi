import inspect
import json
import os
import click
from tabulate import tabulate
from oseg import Generator, generator as g

"""
Example:
python3 run.py generate \
    -i openapi.yaml \
    -o generated/python/src \
    --config-file config-python.yaml \
    --example-data-file example_data.json

or:

python3 run.py generate \
    -i openapi.yaml \
    -o generated/python/src \
    --generator-name python \
    --config '{
      "packageName": "openapi_client",
      "oseg.propertyNamingConvention": "camel_case",
      "oseg.ignoreOptionalUnset": false
    }' \
    --example-data-file example_data.json
    
or:

python3 run.py config-help -g python
"""


generator_names = g.GeneratorFactory.default_generator_names()


@click.group()
def cli():
    pass


@click.command()
@click.option(
    "-i",
    "--input-spec",
    "spec_file",
    required=True,
    help="Path to OpenAPI file",
)
@click.option(
    "-o",
    "--output",
    "output_dir",
    required=True,
    help="Where to write the generated files",
)
@click.option(
    "--config-file",
    "config_file",
    help=inspect.cleandoc(
        f"""
        Config file for the target SDK to generate examples for.
        
        One of {", ".join(generator_names)}.
        
        When defined you should not use --generator-name or --config,
        otherwise required.
        """
    ),
)
@click.option(
    "--generator-name",
    "generator_name",
    help=inspect.cleandoc(
        f"""
        Generator to use.
        
        One of {", ".join(generator_names)}.
        
        When defined you should not use --config-file, otherwise required alongside
        --config.
        """
    ),
)
@click.option(
    "--config",
    "config",
    help=inspect.cleandoc(
        """
        Config properties available to the chosen generator, as a JSON blob.
        
        When defined you should not use --config-file, otherwise required alongside
        --generator-name.
        """
    ),
)
@click.option(
    "--example-data-file",
    "example_data_file",
    help="Path to optional external file containing example data",
)
@click.option(
    "--operation-id",
    "operation_id",
    help="Optionally process only a single operation",
)
def generate(
    spec_file: str,
    output_dir: str,
    config_file: str | None,
    generator_name: str | None,
    config: str | None,
    example_data_file: str | None,
    operation_id: str | None,
):
    resolved_config = get_config(config_file, generator_name, config)

    example_data = None

    if example_data_file and os.path.isfile(example_data_file):
        with open(example_data_file, "r", encoding="utf-8") as f:
            example_data = json.load(f)

    generator = Generator(
        oas_file=spec_file,
        operation_id=operation_id,
        example_data=example_data,
    )

    generator.generate(
        config=resolved_config,
        output_dir=output_dir,
    )


@click.command()
@click.option(
    "-g",
    "--generator-name",
    "generator_name",
    required=True,
    help=inspect.cleandoc(
        f"""
        Config help for chosen lang.
        
        One of {", ".join(generator_names)}.
        """
    ),
)
def config_help(generator_name: str):
    result = g.GeneratorFactory.config_class(generator_name).config_help()

    data = [
        ["Name", "", "Required", "Default"],
    ]

    for name, description in result["required"].items():
        data.append([name, description, "Yes", ""])

    for name, sub in result["optional"].items():
        data.append([name, sub["description"], "No", sub["default"]])

    print(
        "\n"
        + inspect.cleandoc(
            """
            Note: Any config name not prepended with "oseg" refers to the source
            SDK. These names come directly from openapi-generator. See
            https://openapi-generator.tech/docs/generators/ for more information.
            """
        )
        + "\n"
    )

    print(
        tabulate(data, headers="firstrow", tablefmt="simple", maxcolwidths=[None, 40])
    )

    pass


def get_config(
    config_file: str | None,
    generator_name: str | None,
    config: str | None,
) -> str | g.BaseConfig:
    if config_file:
        assert (
            generator_name is None
        ), "--generator-name cannot be used with --config-file"

        assert config is None, "--config cannot be used with --config-file"

        return g.GeneratorFactory.config_factory(config_file)

    assert isinstance(generator_name, str) and (
        generator_name in generator_names
    ), f"--generator-name must be one of {", ".join(generator_names)}"

    assert isinstance(config, str), f"--config required when --config-file is not used"

    return g.GeneratorFactory.config_factory(
        {
            "generatorName": generator_name,
            "additionalProperties": json.loads(config),
        }
    )


cli.add_command(generate)
cli.add_command(config_help)


if __name__ == "__main__":
    cli()
