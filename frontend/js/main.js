document.addEventListener('DOMContentLoaded', () => {

  // ── Auto Active Nav Link ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const allNavLinks = document.querySelectorAll('.nav-links a');

  // Remove all existing active classes
  allNavLinks.forEach(link => link.classList.remove('active'));

  // Find and activate matching link(s)
  allNavLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const hrefPage = href.split('/').pop().split('?')[0].split('#')[0];
    if (hrefPage === currentPage) {
      link.classList.add('active');

      // If it's a dropdown child, also activate parent
      const parentDropdown = link.closest('.dropdown');
      if (parentDropdown) {
        const parentLink = parentDropdown.querySelector(':scope > a');
        if (parentLink) parentLink.classList.add('active');
      }
    }
  });

  // Sticky Navbar
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  if (mobileToggle) {
    // Create overlay for mobile menu
    let overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    document.body.appendChild(overlay);

    const closeMenu = () => {
      mobileToggle.classList.remove('active');
      navLinks.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.removeProperty('overflow');
    };

    const openMenu = () => {
      mobileToggle.classList.add('active');
      navLinks.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    mobileToggle.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on overlay click
    overlay.addEventListener('click', closeMenu);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        closeMenu();
      }
    });

    // Close menu when clicking a nav link (non-dropdown)
    navLinks.querySelectorAll('a:not(.dropdown > a)').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          closeMenu();
        }
      });
    });

    // Close menu on resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        closeMenu();
      }
    });
  }

  // Smooth Scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      // Close mobile menu if open
      if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        if (mobileToggle) mobileToggle.classList.remove('active');
        const overlay = document.querySelector('.mobile-menu-overlay');
        if (overlay) overlay.classList.remove('active');
        document.body.style.removeProperty('overflow');
      }

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  // Mobile Dropdown Toggle
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        // Toggle dropdown on mobile
        e.preventDefault();
        dropdown.classList.toggle('open');
      }
    });
  });

  // Hero Carousel
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const indicators = document.querySelectorAll('.indicator');
  
  if (slides.length > 0) {
    let currentSlide = 0;
    const slideCount = slides.length;
    let autoPlayInterval;

    const showSlide = (index) => {
      // Handle bounds
      if (index < 0) currentSlide = slideCount - 1;
      else if (index >= slideCount) currentSlide = 0;
      else currentSlide = index;

      // Update slides
      slides.forEach(slide => slide.classList.remove('active'));
      slides[currentSlide].classList.add('active');

      // Update indicators
      if (indicators.length > 0) {
        indicators.forEach(ind => ind.classList.remove('active'));
        indicators[currentSlide].classList.add('active');
      }
    };

    const nextSlide = () => showSlide(currentSlide + 1);
    const prevSlide = () => showSlide(currentSlide - 1);

    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoPlay();
    });
    
    if (prevBtn) prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoPlay();
    });

    if (indicators.length > 0) {
      indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          showSlide(index);
          resetAutoPlay();
        });
      });
    }

    // Auto play
    const startAutoPlay = () => {
      autoPlayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    };

    const resetAutoPlay = () => {
      clearInterval(autoPlayInterval);
      startAutoPlay();
    };

    startAutoPlay();
  }

  // Floating Widgets (Scroll to Top)
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (scrollToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add("show");
      } else {
        scrollToTopBtn.classList.remove("show");
      }
    });

    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
