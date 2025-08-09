import os

# coding: utf-8

"""
    oseg
"""

__version__ = "0.3-dev"
__ROOT_DIR__ = os.path.dirname(os.path.abspath(__file__)) + "/.."

from .jinja_extension import *
from .generator import *
from .model import *
from .parser import *
from .oseg import *
