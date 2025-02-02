# tests/test_math_operations.py
import pytest
from math_operations import add_numbers

def test_add_positive_numbers():
    assert add_numbers(2, 3) == 5

def test_add_negative_numbers():
    assert add_numbers(-1, -1) == -2

def test_add_mixed_numbers():
    assert add_numbers(5, -3) == 2

def test_add_zero():
    assert add_numbers(0, 7) == 7
    assert add_numbers(0, 0) == 1
