#!/usr/bin/env python3
"""
Update the Quran Education and Security & Safety cards in campus-facilities.html
"""

# Read the file
with open('campus-facilities.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and replace the section
# Look for the start marker
start_marker = '<!-- Two Featured Items Row - Premium Redesign -->'
start_idx = content.find(start_marker)

if start_idx == -1:
    print("ERROR: Could not find the section marker")
    exit(1)

# Find the end of the current section (next closing div at the correct indentation level)
# Count the divs to find matching closing tag
lines_after = content[start_idx:].split('\n')
div_count = 0
end_line_idx = 0

for i, line in enumerate(lines_after):
    if '<div' in line and 'style=' in line:
        div_count += 1
    if '</div>' in line and div_count > 0:
        div_count -= 1
        if div_count == 0:
            end_line_idx = i
            break

# Find the actual end position
end_text = '\n'.join(lines_after[:end_line_idx + 1])
end_pos = start_idx + len(end_text)

# Extract old content
old_content = content[start_idx:end_pos]

# New content
new_content = '''<!-- Two Featured Items Row - Premium Redesign -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem;">
                    
                    <!-- Quran Education Card -->
                    <div style="background: #ffffff; background: linear-gradient(180deg, #ffffff 0%, #fafbfc 100%); border-radius: 24px; padding: 2.5rem; border: 1px solid rgba(59,130,246,0.12); box-shadow: 0 2px 12px rgba(31,42,68,0.04); position: relative; overflow: hidden; display: flex; flex-direction: column; transition: all 0.3s cubic-bezier(0.165,0.84,0.44,1);"
                        onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 20px 50px rgba(59,130,246,0.15)'; this.style.borderColor='rgba(59,130,246,0.25)';"
                        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 12px rgba(31,42,68,0.04)'; this.style.borderColor='rgba(59,130,246,0.12)';">
                        
                        <!-- Top Accent Bar (4px gradient) -->
                        <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #3B82F6 0%, #60A5FA 100%);"></div>
                        
                        <!-- Icon Circle -->
                        <div style="width: 70px; height: 70px; border-radius: 50%; background: linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(96,165,250,0.08) 100%); border: 2px solid rgba(59,130,246,0.2); display: flex; align-items: center; justify-content: center; color: #3B82F6; font-size: 2.2rem; margin-bottom: 1.75rem; transition: all 0.3s ease;">
                            <i class="fas fa-book-quran"></i>
                        </div>
                        
                        <!-- Badge -->
                        <div style="display: inline-flex; align-items: center; gap: 6px; background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.25); color: #3B82F6; padding: 0.4rem 0.9rem; border-radius: 20px; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase; margin-bottom: 1.2rem; align-self: flex-start;">
                            <i class="fas fa-medal" style="font-size: 0.65rem;"></i> Certified Teachers
                        </div>
                        
                        <!-- Title -->
                        <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--primary-color); margin-bottom: 1rem; line-height: 1.3; font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">Quran Learning</h3>
                        
                        <!-- Description -->
                        <p style="color: #4B5563; line-height: 1.8; margin-bottom: 1.5rem; font-size: 0.95rem;">Learn the Quran with proper Tajweed under expert guidance. Our certified instructors make Quranic education engaging and easy to understand.</p>
                        
                        <!-- Feature List with Checkmarks -->
                        <ul style="list-style: none; padding: 0; margin: 0; flex-grow: 1;">
                            <li style="color: #4B5563; font-size: 0.95rem; margin-bottom: 0.9rem; display: flex; align-items: center; gap: 10px;">
                                <i class="fas fa-check-circle" style="color: #3B82F6; font-size: 1rem; flex-shrink: 0;"></i>
                                <span>Certified Huffaz instructors</span>
                            </li>
                            <li style="color: #4B5563; font-size: 0.95rem; margin-bottom: 0.9rem; display: flex; align-items: center; gap: 10px;">
                                <i class="fas fa-check-circle" style="color: #3B82F6; font-size: 1rem; flex-shrink: 0;"></i>
                                <span>Daily Quran classes with Tajweed</span>
                            </li>
                            <li style="color: #4B5563; font-size: 0.95rem; display: flex; align-items: center; gap: 10px;">
                                <i class="fas fa-check-circle" style="color: #3B82F6; font-size: 1rem; flex-shrink: 0;"></i>
                                <span>Small group learning for focus</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Security & Safety Card -->
                    <div style="background: #ffffff; background: linear-gradient(180deg, #ffffff 0%, #fafbfc 100%); border-radius: 24px; padding: 2.5rem; border: 1px solid rgba(34,197,94,0.12); box-shadow: 0 2px 12px rgba(31,42,68,0.04); position: relative; overflow: hidden; display: flex; flex-direction: column; transition: all 0.3s cubic-bezier(0.165,0.84,0.44,1);"
                        onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 20px 50px rgba(34,197,94,0.15)'; this.style.borderColor='rgba(34,197,94,0.25)';"
                        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 12px rgba(31,42,68,0.04)'; this.style.borderColor='rgba(34,197,94,0.12)';">
                        
                        <!-- Top Accent Bar (4px gradient) -->
                        <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #22C55E 0%, #4ADE80 100%);"></div>
                        
                        <!-- Icon Circle -->
                        <div style="width: 70px; height: 70px; border-radius: 50%; background: linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(74,222,128,0.08) 100%); border: 2px solid rgba(34,197,94,0.2); display: flex; align-items: center; justify-content: center; color: #22C55E; font-size: 2.2rem; margin-bottom: 1.75rem; transition: all 0.3s ease;">
                            <i class="fas fa-shield-halved"></i>
                        </div>
                        
                        <!-- Badge -->
                        <div style="display: inline-flex; align-items: center; gap: 6px; background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.25); color: #22C55E; padding: 0.4rem 0.9rem; border-radius: 20px; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase; margin-bottom: 1.2rem; align-self: flex-start;">
                            <i class="fas fa-lock" style="font-size: 0.65rem;"></i> 24/7 Protection
                        </div>
                        
                        <!-- Title -->
                        <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--primary-color); margin-bottom: 1rem; line-height: 1.3; font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">Security & Safety</h3>
                        
                        <!-- Description -->
                        <p style="color: #4B5563; line-height: 1.8; margin-bottom: 1.5rem; font-size: 0.95rem;">Complete campus security with 24/7 CCTV monitoring. We use advanced technology to ensure your child is safe every moment they're at school.</p>
                        
                        <!-- Feature List with Checkmarks -->
                        <ul style="list-style: none; padding: 0; margin: 0; flex-grow: 1;">
                            <li style="color: #4B5563; font-size: 0.95rem; margin-bottom: 0.9rem; display: flex; align-items: center; gap: 10px;">
                                <i class="fas fa-check-circle" style="color: #22C55E; font-size: 1rem; flex-shrink: 0;"></i>
                                <span>24/7 CCTV monitoring</span>
                            </li>
                            <li style="color: #4B5563; font-size: 0.95rem; margin-bottom: 0.9rem; display: flex; align-items: center; gap: 10px;">
                                <i class="fas fa-check-circle" style="color: #22C55E; font-size: 1rem; flex-shrink: 0;"></i>
                                <span>Advanced security technology</span>
                            </li>
                            <li style="color: #4B5563; font-size: 0.95rem; display: flex; align-items: center; gap: 10px;">
                                <i class="fas fa-check-circle" style="color: #22C55E; font-size: 1rem; flex-shrink: 0;"></i>
                                <span>Trained security personnel</span>
                            </li>
                        </ul>
                    </div>
                </div>'''

# Replace
updated_content = content[:start_idx] + new_content + content[end_pos:]

# Write back
with open('campus-facilities.html', 'w', encoding='utf-8') as f:
    f.write(updated_content)

print(f"✓ Successfully updated campus-facilities.html")
print(f"✓ Replaced {len(old_content)} characters with premium design")
