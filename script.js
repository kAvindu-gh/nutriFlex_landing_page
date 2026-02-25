
// Splash screen transition
document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const progressBar = document.querySelector('.loading-progress');
    
    // Animate progress bar
    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 100);
    
    // Hide splash screen and show main content after 3 seconds
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        
        setTimeout(() => {
            splashScreen.style.display = 'none';
            mainContent.classList.add('content-visible');
        }, 800);
    }, 3000);

    // Rest of your existing JavaScript code...
    // Download App Popup
    const downloadAppBtn = document.getElementById('downloadAppBtn');
    const appPopup = document.getElementById('appPopup');
    const popupCloseBtn = document.getElementById('popupCloseBtn');

    downloadAppBtn.addEventListener('click', () => {
        appPopup.classList.add('active');
    });

    popupCloseBtn.addEventListener('click', () => {
        appPopup.classList.remove('active');
    });

    // Close popup when clicking outside
    appPopup.addEventListener('click', (e) => {
        if (e.target === appPopup) {
            appPopup.classList.remove('active');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
        observer.observe(el);
    });
    
    // BMI Calculator
    const heightInput = document.getElementById('heightInput');
    const weightInput = document.getElementById('weightInput');
    const calculateBtn = document.getElementById('calculateBtn');
    const resetBtn = document.getElementById('resetBtn');
    const bmiPlaceholder = document.getElementById('bmiPlaceholder');
    const bmiResult = document.getElementById('bmiResult');
    const bmiValue = document.getElementById('bmiValue');
    const bmiCategory = document.getElementById('bmiCategory');
    const caloriesValue = document.getElementById('caloriesValue');
    const healthStatus = document.getElementById('healthStatus');
    
    calculateBtn.addEventListener('click', () => {
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);
        
        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            alert('Please enter valid height and weight values.');
            return;
        }
        
        // Calculate BMI
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        const roundedBmi = Math.round(bmi * 10) / 10;
        
        // Determine category and calories
        let category, calories;
        
        if (bmi < 18.5) {
            category = 'Underweight';
            calories = 2500;
        } else if (bmi < 25) {
            category = 'Normal Weight';
            calories = 2200;
        } else if (bmi < 30) {
            category = 'Overweight';
            calories = 1800;
        } else {
            category = 'Obese';
            calories = 1600;
        }
        
        // Update UI
        bmiValue.textContent = roundedBmi;
        bmiCategory.textContent = category;
        caloriesValue.textContent = `${calories} kcal`;
        healthStatus.textContent = category;
        
        // Show results
        bmiPlaceholder.style.display = 'none';
        bmiResult.style.display = 'block';
    });
    
    resetBtn.addEventListener('click', () => {
        heightInput.value = '';
        weightInput.value = '';
        bmiPlaceholder.style.display = 'flex';
        bmiResult.style.display = 'none';
    });
    
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('nameInput').value;
        const email = document.getElementById('emailInput').value;
        const message = document.getElementById('messageInput').value;
        
        // Create mailto link with form data
        const subject = encodeURIComponent(`New Message from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        const mailtoLink = `mailto:flexnutri1@gmail.com?subject=${subject}&body=${body}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
        
        // Reset form after 3 seconds
        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'block';
            formSuccess.style.display = 'none';
        }, 3000);
    });
    
    // Initialize animations on page load
    window.addEventListener('load', () => {
        // Trigger initial animations
        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add('visible');
            }
        });
    });
});
