#!/usr/bin/env python
# -*- coding: utf-8 -*-
import os

# File path
file_path = r'e:\NSS Website\noshahi-school-system\campus-facilities.html'

# Read the file with proper encoding
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Check total lines and show lines around 696-822
print(f'Total lines in file: {len(lines)}')
print(f'\nLine 695 (0-indexed): {lines[694][:80]}')
print(f'Line 696 (0-indexed): {lines[695][:80]}')
print(f'Line 821 (0-indexed): {lines[820][:80]}')
print(f'Line 822 (0-indexed): {lines[821][:80]}')
print(f'Line 823 (0-indexed): {lines[822][:80]}')
