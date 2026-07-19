#!/usr/bin/env python3
import sys
sys.dont_write_bytecode = True

file_path = r'e:\NSS Website\noshahi-school-system\campus-facilities.html'
new_html = r'e:\NSS Website\noshahi-school-system\replacement_content.txt'

try:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    with open(new_html, 'r', encoding='utf-8') as f:
        replacement = f.read()
    
    start_marker = '<!-- Two Featured Items Row'
    start_pos = content.find(start_marker)
    
    if start_pos == -1:
        print("ERROR: Start marker not found")
        sys.exit(1)
    
    end_pos = content.find('</style>', start_pos)
    if end_pos == -1:
        print("ERROR: End marker not found")
        sys.exit(1)
    
    end_pos = end_pos + len('</style>')
    
    new_content = content[:start_pos] + replacement + content[end_pos:]
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("SUCCESS")
except Exception as e:
    print(f"ERROR: {e}")
    sys.exit(1)
