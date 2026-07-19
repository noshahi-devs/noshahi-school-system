#!/usr/bin/env python3
import re

# Read file
with open('campus-facilities.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the old facilities section and replace it
# Strategy: find </style> tag after new CSS, then replace everything until </section>

# Split at </style> after the CSS we added
parts = content.split('</style>')

if len(parts) >= 2:
    # Get the CSS part
    css_part = parts[0] + '</style>'
    rest = ''.join(parts[1:])
    
    # Now find the old HTML content up to the next </section>
    # Find first </section> in rest
    section_end_index = rest.find('</section>')
    
    if section_end_index != -1:
        # Everything before </section> is old HTML to replace
        old_html_part = rest[:section_end_index]
        footer_part = rest[section_end_index:]
        
        # New HTML content
        new_html = '''

        <!-- Section 1: Intro with Stats -->
        <div class="fac-intro-section">
            <div class="container">
                <div class="fac-intro">
                    <div class="fac-intro-left">
                        <div class="fac-eyebrow"><i class="fas fa-star"></i> Premium Facilities</div>
                        <h2>Everything Your Child<br>Needs - <span>Under One Roof</span></h2>
                        <p>From a fully equipped Computer Lab to CCTV security and certified Quran teachers - every facility at Noshahi is designed with your child's safety, growth, and success in mind.</p>
                    </div>
                    <div class="fac-stats">
                        <div class="fac-stat">
                            <div class="stat-icon"><i class="fas fa-desktop"></i></div>
                            <div class="stat-num">1</div>
                            <div class="stat-lbl">Computer Lab</div>
                        </div>
                        <div class="fac-stat">
                            <div class="stat-icon"><i class="fas fa-shield-halved"></i></div>
                            <div class="stat-num">24/7</div>
                            <div class="stat-lbl">CCTV Security</div>
                        </div>
                        <div class="fac-stat">
                            <div class="stat-icon"><i class="fas fa-user-tie"></i></div>
                            <div class="stat-num">100%</div>
                            <div class="stat-lbl">Qualified Staff</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section 2: Featured Facilities -->
        <div class="fac-features-container">
            <div class="container">
                <!-- Computer Labs -->
                <div class="fac-feature-item">
                    <div class="fac-feature-content">
                        <h3><span>Computer</span> Labs</h3>
                        <p>At Noshahi School, our state-of-the-art computer laboratories are designed to provide students with hands-on experience in modern technology. With latest hardware and software, our students gain practical knowledge to complement their theoretical learning.</p>
                        <div class="fac-feature-highlight">
                            <i class="fas fa-check-circle"></i>
                            <div>Latest computers and networking equipment</div>
                        </div>
                        <div class="fac-feature-highlight">
                            <i class="fas fa-check-circle"></i>
                            <div>Expert technicians and IT educators</div>
                        </div>
                        <div class="fac-feature-highlight">
                            <i class="fas fa-check-circle"></i>
                            <div>Regular maintenance and upgrades</div>
                        </div>
                    </div>
                    <div class="fac-feature-image">
                        <img src="img/computer-lab.png" alt="Computer Labs">
                    </div>
                </div>

                <!-- Prayer Area -->
                <div class="fac-feature-item">
                    <div class="fac-feature-image">
                        <img src="img/Islamic study.png" alt="Prayer Area">
                    </div>
                    <div class="fac-feature-content">
                        <h3>Islamic <span>Prayer Area</span></h3>
                        <p>We provide a dedicated, peaceful prayer area for our Muslim students where they can perform their daily prayers comfortably. This reflects our commitment to integrating Islamic values into the educational environment.</p>
                        <div class="fac-feature-highlight">
                            <i class="fas fa-check-circle"></i>
                            <div>Spacious and well-maintained prayer hall</div>
                        </div>
                        <div class="fac-feature-highlight">
                            <i class="fas fa-check-circle"></i>
                            <div>Separate facilities for boys and girls</div>
                        </div>
                        <div class="fac-feature-highlight">
                            <i class="fas fa-check-circle"></i>
                            <div>Clean and serene environment</div>
                        </div>
                    </div>
                </div>

                <!-- Library -->
                <div class="fac-feature-item">
                    <div class="fac-feature-content">
                        <h3><span>Digital</span> Library</h3>
                        <p>Our comprehensive library houses an extensive collection of books, reference materials, journals, and digital resources. It serves as a hub for knowledge, research, and intellectual development for all students.</p>
                        <div class="fac-feature-highlight">
                            <i class="fas fa-check-circle"></i>
                            <div>Thousands of books across all subjects</div>
                        </div>
                        <div class="fac-feature-highlight">
                            <i class="fas fa-check-circle"></i>
                            <div>Digital databases and online resources</div>
                        </div>
                        <div class="fac-feature-highlight">
                            <i class="fas fa-check-circle"></i>
                            <div>Quiet study areas and comfortable seating</div>
                        </div>
                    </div>
                    <div class="fac-feature-image">
                        <img src="img/about.png" alt="Library">
                    </div>
                </div>

                <!-- CCTV Security -->
                <div class="fac-feature-item">
                    <div class="fac-feature-image">
                        <img src="img/page_header.png" alt="Security">
                    </div>
                    <div class="fac-feature-content">
                        <h3>24/7 <span>Security</span></h3>
                        <p>Your child's safety is our top priority. Our campus is equipped with comprehensive CCTV surveillance, trained security personnel, and strict access control measures to ensure a secure learning environment.</p>
                        <div class="fac-feature-highlight">
                            <i class="fas fa-check-circle"></i>
                            <div>Advanced CCTV camera system throughout campus</div>
                        </div>
                        <div class="fac-feature-highlight">
                            <i class="fas fa-check-circle"></i>
                            <div>Professional security staff on duty 24/7</div>
                        </div>
                        <div class="fac-feature-highlight">
                            <i class="fas fa-check-circle"></i>
                            <div>Controlled entry and exit points</div>
                        </div>
                    </div>
                </div>

                <!-- Dining & Refreshment -->
                <div class="fac-feature-item">
                    <div class="fac-feature-content">
                        <h3><span>Dining</span> Facilities</h3>
                        <p>We provide clean, hygienic dining facilities with nutritious meal options for our students. Our cafeteria is managed by professional staff ensuring food safety and quality standards at all times.</p>
                        <div class="fac-feature-highlight">
                            <i class="fas fa-check-circle"></i>
                            <div>Spacious and clean cafeteria</div>
                        </div>
                        <div class="fac-feature-highlight">
                            <i class="fas fa-check-circle"></i>
                            <div>Nutritious and balanced meal options</div>
                        </div>
                        <div class="fac-feature-highlight">
                            <i class="fas fa-check-circle"></i>
                            <div>Professional food handling and hygiene standards</div>
                        </div>
                    </div>
                    <div class="fac-feature-image">
                        <img src="img/hero-section.png" alt="Dining">
                    </div>
                </div>
            </div>
        </div>

        <!-- Section 3: Call to Action -->
        <div class="fac-cta-section">
            <div class="container">
                <div class="fac-cta">
                    <div class="fac-cta-text">
                        <h3>Ready to Give Your Child the Best?</h3>
                        <p>Join Noshahi School System and experience world-class education with comprehensive facilities</p>
                    </div>
                    <div class="fac-btn-group">
                        <a href="admissions.html" class="fac-btn fac-btn-primary">
                            <i class="fas fa-arrow-right"></i> Apply Now
                        </a>
                        <a href="contact.html" class="fac-btn fac-btn-secondary">
                            <i class="fas fa-phone"></i> Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scroll Animation Script -->
        <script>
            const observerOptions = {
                threshold: 0.2,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fac-feature-item').forEach(el => {
                observer.observe(el);
            });
        </script>'''
        
        # Reconstruct
        new_content = css_part + new_html + '\n    ' + footer_part
        
        # Write back
        with open('campus-facilities.html', 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print("Success! Campus facilities updated with professional design.")
    else:
        print("Error: Could not find </section> tag")
else:
    print("Error: Could not find </style> tag")
