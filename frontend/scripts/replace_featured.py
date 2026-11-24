#!/usr/bin/env python3
import re

# Read the file
with open(r'e:\NSS Website\noshahi-school-system\campus-facilities.html', 'r', encoding='utf-8') as f:
    content = f.read()

# New premium HTML
new_html = '''                <!-- Two Featured Items Row - Premium Redesign -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem;">
                    
                    <!-- Premium Quran Learning Card -->
                    <div style="position: relative; border-radius: 24px; overflow: hidden; background: #FFFFFF; border: 1px solid rgba(59,130,246,0.12); transition: all 0.35s cubic-bezier(0.4,0,0.2,1); box-shadow: 0 2px 16px rgba(31,42,68,0.06);"
                        onmouseover="this.style.transform='translateY(-12px)'; this.style.boxShadow='0 24px 48px rgba(59,130,246,0.15)';"
                        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 16px rgba(31,42,68,0.06)';">
                        
                        <!-- Top Accent Bar -->
                        <div style="position: absolute; top: 0; left: 0; right: 0; height: 6px; background: linear-gradient(90deg, #3B82F6 0%, #60A5FA 100%);"></div>
                        
                        <!-- Card Content -->
                        <div style="padding: 2.75rem; position: relative; z-index: 1;">
                            
                            <!-- Icon with Gradient Background -->
                            <div style="width: 70px; height: 70px; border-radius: 18px; background: linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%); display: flex; align-items: center; justify-content: center; color: #FFFFFF; font-size: 2rem; margin-bottom: 1.75rem; box-shadow: 0 8px 24px rgba(59,130,246,0.25);">
                                <i class="fas fa-book-quran"></i>
                            </div>
                            
                            <!-- Title & Badge Wrapper -->
                            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                                <h3 style="font-size: 1.5rem; font-weight: 800; color: #1A3A6B; margin: 0;">Quran Learning</h3>
                                <span style="display: inline-block; background: linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(96,165,250,0.1) 100%); color: #3B82F6; font-size: 0.75rem; font-weight: 700; padding: 0.4rem 0.9rem; border-radius: 20px; border: 1px solid rgba(59,130,246,0.25); white-space: nowrap;">
                                    <i class="fas fa-certificate" style="margin-right: 0.4rem;"></i>Certified Teachers
                                </span>
                            </div>
                            
                            <!-- Description -->
                            <p style="color: #4B5563; font-size: 0.95rem; line-height: 1.8; margin-bottom: 1.75rem; margin-top: 0;">Learn Quran from certified teachers with expert guidance in Tajweed and proper recitation techniques.</p>
                            
                            <!-- Features List -->
                            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem;">
                                <li style="color: #4B5563; font-size: 0.9rem; display: flex; align-items: center; gap: 0.7rem;">
                                    <i class="fas fa-check-circle" style="color: #3B82F6; font-size: 1.1rem; flex-shrink: 0;"></i>
                                    <span>One-on-one personalized lessons</span>
                                </li>
                                <li style="color: #4B5563; font-size: 0.9rem; display: flex; align-items: center; gap: 0.7rem;">
                                    <i class="fas fa-check-circle" style="color: #3B82F6; font-size: 1.1rem; flex-shrink: 0;"></i>
                                    <span>Flexible scheduling options</span>
                                </li>
                                <li style="color: #4B5563; font-size: 0.9rem; display: flex; align-items: center; gap: 0.7rem;">
                                    <i class="fas fa-check-circle" style="color: #3B82F6; font-size: 1.1rem; flex-shrink: 0;"></i>
                                    <span>Progress tracking and certificates</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Premium Security & Safety Card -->
                    <div style="position: relative; border-radius: 24px; overflow: hidden; background: #FFFFFF; border: 1px solid rgba(34,197,94,0.12); transition: all 0.35s cubic-bezier(0.4,0,0.2,1); box-shadow: 0 2px 16px rgba(31,42,68,0.06);"
                        onmouseover="this.style.transform='translateY(-12px)'; this.style.boxShadow='0 24px 48px rgba(34,197,94,0.15)';"
                        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 16px rgba(31,42,68,0.06)';">
                        
                        <!-- Top Accent Bar -->
                        <div style="position: absolute; top: 0; left: 0; right: 0; height: 6px; background: linear-gradient(90deg, #22C55E 0%, #4ADE80 100%);"></div>
                        
                        <!-- Card Content -->
                        <div style="padding: 2.75rem; position: relative; z-index: 1;">
                            
                            <!-- Icon with Gradient Background -->
                            <div style="width: 70px; height: 70px; border-radius: 18px; background: linear-gradient(135deg, #22C55E 0%, #4ADE80 100%); display: flex; align-items: center; justify-content: center; color: #FFFFFF; font-size: 2rem; margin-bottom: 1.75rem; box-shadow: 0 8px 24px rgba(34,197,94,0.25);">
                                <i class="fas fa-shield-halved"></i>
                            </div>
                            
                            <!-- Title & Badge Wrapper -->
                            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                                <h3 style="font-size: 1.5rem; font-weight: 800; color: #1A3A6B; margin: 0;">Security & Safety</h3>
                                <span style="display: inline-block; background: linear-gradient(135deg, rgba(34,197,94,0.15) 0%, rgba(74,222,128,0.1) 100%); color: #22C55E; font-size: 0.75rem; font-weight: 700; padding: 0.4rem 0.9rem; border-radius: 20px; border: 1px solid rgba(34,197,94,0.25); white-space: nowrap;">
                                    <i class="fas fa-clock" style="margin-right: 0.4rem;"></i>24/7 Protection
                                </span>
                            </div>
                            
                            <!-- Description -->
                            <p style="color: #4B5563; font-size: 0.95rem; line-height: 1.8; margin-bottom: 1.75rem; margin-top: 0;">Round-the-clock surveillance and security measures ensure the complete safety and well-being of every student.</p>
                            
                            <!-- Features List -->
                            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem;">
                                <li style="color: #4B5563; font-size: 0.9rem; display: flex; align-items: center; gap: 0.7rem;">
                                    <i class="fas fa-check-circle" style="color: #22C55E; font-size: 1.1rem; flex-shrink: 0;"></i>
                                    <span>Advanced CCTV surveillance system</span>
                                </li>
                                <li style="color: #4B5563; font-size: 0.9rem; display: flex; align-items: center; gap: 0.7rem;">
                                    <i class="fas fa-check-circle" style="color: #22C55E; font-size: 1.1rem; flex-shrink: 0;"></i>
                                    <span>Trained security personnel on-site</span>
                                </li>
                                <li style="color: #4B5563; font-size: 0.9rem; display: flex; align-items: center; gap: 0.7rem;">
                                    <i class="fas fa-check-circle" style="color: #22C55E; font-size: 1.1rem; flex-shrink: 0;"></i>
                                    <span>Emergency response protocols ready</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Responsive Styles for Premium Featured Cards -->
                <style>
                    /* ─────────────────────────────────────────────────────────────────────────────
                       PREMIUM FEATURED CARDS – RESPONSIVE STYLES
                    ───────────────────────────────────────────────────────────────────────────── */

                    /* Tablet Breakpoint (768px) */
                    @media (max-width: 768px) {
                        div[style*="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem"] {
                            grid-template-columns: 1fr !important;
                            gap: 2rem !important;
                        }
                        div[style*="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem"] > div {
                            padding: 2.25rem !important;
                        }
                        div[style*="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem"] div[style*="width: 70px; height: 70px"] {
                            width: 60px !important;
                            height: 60px !important;
                            font-size: 1.7rem !important;
                            margin-bottom: 1.5rem !important;
                        }
                        div[style*="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem"] h3 {
                            font-size: 1.3rem !important;
                            margin-bottom: 0.6rem !important;
                        }
                        div[style*="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem"] p {
                            font-size: 0.9rem !important;
                            line-height: 1.7 !important;
                            margin-bottom: 1.5rem !important;
                        }
                        div[style*="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem"] li {
                            font-size: 0.88rem !important;
                            gap: 0.6rem !important;
                        }
                        div[style*="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem"] span[style*="display: inline-block; background: linear-gradient"] {
                            font-size: 0.7rem !important;
                            padding: 0.35rem 0.8rem !important;
                        }
                    }

                    /* Mobile Breakpoint (480px) */
                    @media (max-width: 480px) {
                        div[style*="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem"] {
                            grid-template-columns: 1fr !important;
                            gap: 1.75rem !important;
                        }
                        div[style*="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem"] > div {
                            padding: 1.75rem 1.5rem !important;
                            border-radius: 20px !important;
                        }
                        div[style*="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem"] div[style*="width: 70px; height: 70px"] {
                            width: 52px !important;
                            height: 52px !important;
                            font-size: 1.5rem !important;
                            margin-bottom: 1.25rem !important;
                            border-radius: 16px !important;
                        }
                        div[style*="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem"] h3 {
                            font-size: 1.1rem !important;
                            margin-bottom: 0.5rem !important;
                        }
                        div[style*="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem"] p {
                            font-size: 0.85rem !important;
                            line-height: 1.6 !important;
                            margin-bottom: 1.25rem !important;
                        }
                        div[style*="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem"] li {
                            font-size: 0.82rem !important;
                            gap: 0.55rem !important;
                            margin-bottom: 0.6rem !important;
                        }
                        div[style*="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem"] i[class*="fas fa-check-circle"] {
                            font-size: 1rem !important;
                        }
                        div[style*="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem"] span[style*="display: inline-block; background: linear-gradient"] {
                            font-size: 0.68rem !important;
                            padding: 0.3rem 0.7rem !important;
                        }
                    }

                    /* Extra Small Breakpoint (360px) */
                    @media (max-width: 360px) {
                        div[style*="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem"] > div {
                            padding: 1.5rem 1.25rem !important;
                            border-radius: 18px !important;
                        }
                        div[style*="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem"] div[style*="width: 70px; height: 70px"] {
                            width: 48px !important;
                            height: 48px !important;
                            font-size: 1.3rem !important;
                            margin-bottom: 1rem !important;
                        }
                        div[style*="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem"] h3 {
                            font-size: 1rem !important;
                        }
                        div[style*="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem"] p {
                            font-size: 0.8rem !important;
                        }
                        div[style*="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem"] li {
                            font-size: 0.78rem !important;
                        }
                        div[style*="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem"] span[style*="display: inline-block; background: linear-gradient"] {
                            font-size: 0.65rem !important;
                            padding: 0.25rem 0.6rem !important;
                        }
                    }
                </style>'''

# Use regex to find and replace the section
pattern = r'<!-- Two Featured Items Row -->.*?</style>\n\s+<!-- .* SECTION 3: ADDITIONAL FACILITIES'
replacement = new_html + '\n                <!-- SECTION 3: ADDITIONAL FACILITIES'

content_new = re.sub(pattern, replacement, content, flags=re.DOTALL)

if content != content_new:
    with open(r'e:\NSS Website\noshahi-school-system\campus-facilities.html', 'w', encoding='utf-8') as f:
        f.write(content_new)
    print("SUCCESS: File replaced successfully!")
else:
    print("ERROR: Pattern not found or replacement failed")
