#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os

# File paths
replacement_file = r'e:\NSS Website\noshahi-school-system\replacement_content.txt'
html_file = r'e:\NSS Website\noshahi-school-system\campus-facilities.html'

try:
    # Read the replacement content
    with open(replacement_file, 'r', encoding='utf-8') as f:
        replacement_content = f.read()
    
    # Read the original HTML file
    with open(html_file, 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    # Find the start marker
    start_marker = '<!-- Two Featured Items Row'
    start_idx = html_content.find(start_marker)
    
    if start_idx == -1:
        print('ERROR: Start marker not found')
        exit(1)
    
    # Find the end marker (</style> after FEATURED CARDS – RESPONSIVE STYLES)
    search_start = start_idx
    style_start = html_content.find('<style>', search_start)
    style_end = html_content.find('</style>', style_start) + len('</style>')
    
    if style_end == -1:
        print('ERROR: End marker not found')
        exit(1)
    
    # Replace the section
    new_html_content = html_content[:start_idx] + replacement_content + html_content[style_end:]
    
    # Write back to file with UTF-8 encoding
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(new_html_content)
    
    print('SUCCESS')
    
except Exception as e:
    print(f'ERROR: {str(e)}')
    exit(1)
