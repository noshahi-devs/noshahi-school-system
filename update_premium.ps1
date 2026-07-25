# Read the file
$content = Get-Content "campus-facilities.html" -Raw -Encoding UTF8

# Replace the old sections with new premium sections
$newContent = $content -replace '<!-- Two Featured Items Row -->[\s\S]*?<!-- Responsive Styles for Featured Cards -->', @'
<!-- Premium Two Featured Items Row -->
                <div class="premium-featured-row">
                    <!-- Quran Learning Section -->
                    <div class="premium-card premium-card-blue">
                        <!-- Accent Bar -->
                        <div class="premium-accent-bar"></div>
                        
                        <!-- Icon -->
                        <div class="premium-icon premium-icon-blue">
                            <i class="fas fa-book-quran"></i>
                        </div>
                        
                        <!-- Title with Badge -->
                        <div class="premium-title-wrapper">
                            <h3 class="premium-card-title">Quran Learning</h3>
                            <span class="premium-badge premium-badge-blue">CERTIFIED TEACHERS</span>
                        </div>
                        
                        <!-- Description -->
                        <p class="premium-card-description">
                            Learn Quran with proper recitation from certified teachers. Daily classes for correct pronunciation and understanding.
                        </p>
                        
                        <!-- Features List -->
                        <ul class="premium-features-list">
                            <li>
                                <i class="fas fa-check-circle"></i>
                                <span>Certified Huffaz instructors</span>
                            </li>
                            <li>
                                <i class="fas fa-check-circle"></i>
                                <span>Daily Quran classes with Tajweed</span>
                            </li>
                            <li>
                                <i class="fas fa-check-circle"></i>
                                <span>Small group learning for focus</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Security & Safety Section -->
                    <div class="premium-card premium-card-green">
                        <!-- Accent Bar -->
                        <div class="premium-accent-bar"></div>
                        
                        <!-- Icon -->
                        <div class="premium-icon premium-icon-green">
                            <i class="fas fa-shield-halved"></i>
                        </div>
                        
                        <!-- Title with Badge -->
                        <div class="premium-title-wrapper">
                            <h3 class="premium-card-title">Security & Safety</h3>
                            <span class="premium-badge premium-badge-green">24/7 PROTECTION</span>
                        </div>
                        
                        <!-- Description -->
                        <p class="premium-card-description">
                            24/7 CCTV surveillance throughout campus. Your child's safety is our top priority with complete peace of mind for every parent.
                        </p>
                        
                        <!-- Features List -->
                        <ul class="premium-features-list">
                            <li>
                                <i class="fas fa-check-circle"></i>
                                <span>24/7 CCTV monitoring</span>
                            </li>
                            <li>
                                <i class="fas fa-check-circle"></i>
                                <span>Advanced security technology</span>
                            </li>
                            <li>
                                <i class="fas fa-check-circle"></i>
                                <span>Trained security personnel</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Responsive Styles for Featured Cards -->
'@

# Write back to file
Set-Content "campus-facilities.html" -Value $newContent -Encoding UTF8

Write-Host "Update completed successfully!"
