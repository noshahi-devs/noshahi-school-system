#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sys
import os

file_path = r'e:\NSS Website\noshahi-school-system\campus-facilities.html'

# Read the entire file
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Simple marker-based search
start_marker = '<!-- Two Featured Items Row'
end_marker = '</style>\n                <!-- '

# Find the boundaries 
start_pos = content.find(start_marker)
if start_pos == -1:
    print("ERROR: Could not find start marker")
    sys.exit(1)

# From start_pos, find the second occurrence of </style>
style_count = 0
search_start = start_pos
end_pos = -1

while style_count < 1:
    pos = content.find('</style>', search_start)
    if pos == -1:
        print("ERROR: Could not find </style>")
        sys.exit(1)
    style_count += 1
    search_start = pos + 1
    if style_count == 1:
        end_pos = pos + len('</style>')

print(f"Start position: {start_pos}")
print(f"End position: {end_pos}")
print(f"Marker found at: {content[start_pos:start_pos+40]}")
print(f"End found at: {content[end_pos-40:end_pos]}")

# Read the replacement content
with open(r'e:\NSS Website\noshahi-school-system\replacement_content.txt', 'r', encoding='utf-8') as f:
    replacement = f.read()

# Make the replacement
new_content = content[:start_pos] + replacement + content[end_pos:]

# Write back
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Replacement completed successfully!")
