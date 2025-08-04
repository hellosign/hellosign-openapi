from jinja2.runtime import Macro


class JinjaMacros:
    def __init__(self, macros: dict[str, Macro]):
        self.print_object: Macro = macros["print_object"]
        self.print_object_array: Macro = macros["print_object_array"]
        self.print_scalar: Macro = macros["print_scalar"]
        self.print_scalar_array: Macro = macros["print_scalar_array"]
        self.print_file: Macro = macros["print_file"]
        self.print_file_array: Macro = macros["print_file_array"]
        self.print_free_form: Macro = macros["print_free_form"]
        self.print_free_form_array: Macro = macros["print_free_form_array"]
        self.print_security: Macro = macros["print_security"]
