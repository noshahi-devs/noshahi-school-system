#!/usr/bin/env python
# -*- coding: utf-8 -*-

file_path = r'e:\NSS Website\noshahi-school-system\campus-facilities.html'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"Total lines: {len(lines)}")

# Find the starting line "<!-- Two Featured Items Row -->"
start_idx = -1
for i, line in enumerate(lines):
    if "<!-- Two Featured Items Row" in line:
        start_idx = i
        print(f"Found start at line {i+1}: {line[:60]}")
        break

# Find the ending line - the closing </style> tag
end_idx = -1
if start_idx != -1:
    for i in range(start_idx + 50, len(lines)):
        if "</style>" in lines[i]:
            # Make sure this is the one we want by checking next line
            if i + 1 < len(lines) and "SECTION 3" in lines[i+1]:
                end_idx = i
                print(f"Found end at line {i+1}: {lines[i][:60]}")
                print(f"Next line: {lines[i+1][:60]}")
                break

if start_idx != -1 and end_idx != -1:
    print(f"\nReplacing lines {start_idx+1} through {end_idx+1}")
    print(f"Total lines to replace: {end_idx - start_idx + 1}")
    
    # Read the replacement content
    replacement_file = r'e:\NSS Website\noshahi-school-system\replacement_content.txt'
    with open(replacement_file, 'r', encoding='utf-8') as f:
        replacement_lines = f.readlines()
    
    # Build new file
    new_lines = lines[:start_idx] + replacement_lines + lines[end_idx+1:]
    
    # Write back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    
    print("Replacement complete!")
else:
    print(f"ERROR: Could not find boundaries. start_idx={start_idx}, end_idx={end_idx}")
