from oseg import Generator, __ROOT_DIR__


def main():
    operation_id = None
    target_sdk = None

    project_dir = f"{__ROOT_DIR__}/../"

    sdks = {
        "csharp": {
            "base_dir": project_dir,
            "output_dir": "examples",
            "config": f"{project_dir}/sdks/dotnet/openapi-config.yaml"
        },
        "java": {
            "base_dir": project_dir,
            "output_dir": "examples",
            "config": f"{project_dir}/sdks/java-v2/openapi-config.yaml"
        },
        "php": {
            "base_dir": project_dir,
            "output_dir": "examples",
            "config": f"{project_dir}/sdks/php/openapi-config.yaml"
        },
        "python": {
            "base_dir": project_dir,
            "output_dir": "examples",
            "config": f"{project_dir}/sdks/python/openapi-config.yaml"
        },
        "ruby": {
            "base_dir": project_dir,
            "output_dir": "examples",
            "config": f"{project_dir}/sdks/ruby/openapi-config.yaml"
        },
        "typescript-axios": {
            "base_dir": project_dir,
            "output_dir": "examples",
            "config": f"{project_dir}/sdks/node/openapi-config.yaml"
        },
    }

    oas_file = f"{project_dir}/openapi-sdk.yaml"
    example_data_file = None

    oseg_generator = Generator(
        oas_file=oas_file,
        operation_id=operation_id,
        example_data=example_data_file,
    )

    for sdk_name, sdk in sdks.items():
        if target_sdk and sdk_name != target_sdk:
            continue

        config = oseg_generator.read_config_file(sdk["config"])

        oseg_generator.generate(
            config=config,
            output_dir=f"{sdk["base_dir"]}/{sdk["output_dir"]}",
        )

        oseg_generator.setup_project(
            config=config,
            base_dir=sdk["base_dir"],
            output_dir=sdk["output_dir"],
        )


if __name__ == "__main__":
    main()
