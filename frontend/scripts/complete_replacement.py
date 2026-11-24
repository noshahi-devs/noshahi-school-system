#!/usr/bin/env python
# -*- coding: utf-8 -*-

file_path = r'e:\NSS Website\noshahi-school-system\campus-facilities.html'

# Read the entire file
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find where "<!-- Two Featured Items Row" starts
marker_start = content.find('<!-- Two Featured Items Row')
if marker_start == -1:
    print("ERROR: Could not find start marker")
    exit(1)

# Find the closing </style> that follows this section
# Look for the pattern: </style>\n                <!-- SECTION 3
marker_end = content.find('                <!-- ', marker_start + 500)  # Look ahead for the next comment
if marker_end == -1:
    print("ERROR: Could not find section 3 marker")
    exit(1)

# Go backwards to find the </style> that precedes the SECTION 3 comment
style_close = content.rfind('</style>', marker_start, marker_end)
if style_close == -1:
    print("ERROR: Could not find </style>")
    exit(1)

# Include the </style> in the deletion
end_pos = style_close + len('</style>')

print(f"Replacing from position {marker_start} to {end_pos}")
print(f"Start context: {content[marker_start:marker_start+60]}")
print(f"End context: {content[end_pos-40:end_pos]}")

# Read the new content
with open(r'e:\NSS Website\noshahi-school-system\replacement_content.txt', 'r', encoding='utf-8') as f:
    new_section = f.read()

# Perform the replacement
new_content = content[:marker_start] + new_section + content[end_pos:]

# Write back
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Replacement completed successfully!")
print(f"Original file size: {len(content)} chars")
print(f"New file size: {len(new_content)} chars")
