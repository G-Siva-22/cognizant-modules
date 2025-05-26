// Community Event Portal - Main JavaScript File
// With Smooth Transitions and Animations

// Basic setup and welcome message
console.log("Welcome to the Community Portal");

// Global variables
let totalRegistrations = 0;
const today = new Date().toISOString().split('T')[0];
const communityEvents = [
    { id: 1, name: "Gardening Workshop", date: "2023-06-15", type: "workshop", seats: 20, fee: 25 },
    { id: 2, name: "Summer Concert", date: "2023-06-20", type: "concert", seats: 100, fee: 15 },
    { id: 3, name: "Basketball Tournament", date: "2023-06-25", type: "sports", seats: 50, fee: 10 },
    { id: 4, name: "Farmer's Market", date: "2023-06-10", type: "market", seats: 200, fee: 0 }
];

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Page loaded alert
    // alert("Community Event Portal is fully loaded!");
    
    // Initialize components
    initIntersectionObserver();
    initSmoothScrolling();
    loadSavedPreferences();
    displayUpcomingEvents();
    setupEventListeners();
});

// Initialize intersection observer for scroll animations
function initIntersectionObserver() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Initialize smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Load saved preferences from localStorage
function loadSavedPreferences() {
    const savedEventType = localStorage.getItem('preferredEventType');
    if (savedEventType) {
        const eventTypeSelect = document.getElementById('eventType');
        eventTypeSelect.value = savedEventType;
        showEventFee(eventTypeSelect); // Update fee display
        console.log(`Loaded preferred event type: ${savedEventType}`);
    }
}

// Display upcoming events
function displayUpcomingEvents() {
    const upcomingEvents = communityEvents.filter(event => event.date >= today && event.seats > 0);
    console.log("Upcoming events:", upcomingEvents);
    
    // In a full implementation, we would render these to the DOM
    if (upcomingEvents.length === 0) {
        console.log("No upcoming events available");
    }
}

// Setup all event listeners
function setupEventListeners() {
    // Form submission
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleSubmit);
    }
    
    // Geolocation button
    const geoBtn = document.getElementById('geoBtn');
    if (geoBtn) {
        geoBtn.addEventListener('click', handleGeolocation);
    }
    
    // Clear preferences button
    const clearPrefsBtn = document.getElementById('clearPrefs');
    if (clearPrefsBtn) {
        clearPrefsBtn.addEventListener('click', clearPreferences);
    }
    
    // Phone validation on blur
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('blur', function() {
            validatePhone(this);
        });
    }
    
    // Event type change
    const eventTypeSelect = document.getElementById('eventType');
    if (eventTypeSelect) {
        eventTypeSelect.addEventListener('change', function() {
            showEventFee(this);
        });
    }
    
    // Character count for message textarea
    const messageTextarea = document.getElementById('message');
    if (messageTextarea) {
        messageTextarea.addEventListener('keyup', function() {
            countChars(this);
        });
    }
}

// Form handling functions
function validatePhone(input) {
    const phoneRegex = /^\d{10}$/;
    const phoneError = document.getElementById('phoneError');
    
    if (input.value.trim() !== '' && !phoneRegex.test(input.value)) {
        phoneError.textContent = "Please enter a valid 10-digit phone number";
        input.style.borderColor = "#e53935";
        return false;
    } else {
        phoneError.textContent = "";
        input.style.borderColor = "#ddd";
        return true;
    }
}

function showEventFee(select) {
    const eventFeeElement = document.getElementById('eventFee');
    const selectedEvent = communityEvents.find(event => event.type === select.value);
    
    if (selectedEvent) {
        const feeText = selectedEvent.fee === 0 ? "Free" : `$${selectedEvent.fee}`;
        eventFeeElement.textContent = `Fee: ${feeText}`;
        eventFeeElement.style.color = "#1e88e5";
        eventFeeElement.style.fontWeight = "bold";
        
        // Save preference
        localStorage.setItem('preferredEventType', select.value);
    } else {
        eventFeeElement.textContent = "";
    }
}

function countChars(textarea) {
    const charCount = document.getElementById('charCount');
    const maxLength = 200;
    const currentLength = textarea.value.length;
    
    charCount.textContent = `${currentLength}/${maxLength} characters`;
    
    if (currentLength > maxLength) {
        charCount.style.color = "#e53935";
    } else {
        charCount.style.color = "#666";
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const submitBtn = form.querySelector('.submit-btn');
    const output = document.getElementById('formOutput');
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Processing <span class="spinner"></span>';
    
    // Validate required fields
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const phoneValid = validatePhone(form.elements['phone']);
    
    if (name === '' || email === '' || !phoneValid) {
        output.textContent = "Please fill in all required fields correctly";
        output.style.color = "#e53935";
        output.style.backgroundColor = "#ffebee";
        
        submitBtn.disabled = false;
        submitBtn.textContent = 'Register';
        return;
    }
    
    // Simulate async form submission
    setTimeout(() => {
        // Increment registration count
        totalRegistrations++;
        
        // Show success message
        output.textContent = "Thank you for registering! We've sent a confirmation to your email.";
        output.style.color = "#43a047";
        output.style.backgroundColor = "#e8f5e9";
        
        // Reset form
        form.reset();
        document.getElementById('charCount').textContent = "0/200 characters";
        
        // Reset button
        submitBtn.disabled = false;
        submitBtn.textContent = 'Register';
        
        // Log registration data
        console.log("New registration:", {
            id: Date.now(),
            name: name,
            email: email,
            phone: form.elements['phone'].value.trim(),
            eventDate: form.elements['eventDate'].value,
            eventType: form.elements['eventType'].value,
            message: form.elements['message'].value.trim(),
            timestamp: new Date().toISOString()
        });
        
        console.log(`Total registrations: ${totalRegistrations}`);
    }, 1500);
}

// Image gallery functions
function enlargeImage(img) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.onclick = function() {
        modal.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    };
    
    const modalImg = document.createElement('img');
    modalImg.className = 'modal-content';
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close';
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = function(e) {
        e.stopPropagation();
        modal.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    };
    
    modal.appendChild(modalImg);
    modal.appendChild(closeBtn);
    document.body.appendChild(modal);
    
    // Trigger the animation
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

// Video functions
function videoReady() {
    const videoStatus = document.getElementById('videoStatus');
    videoStatus.textContent = "Video ready to play!";
    videoStatus.style.color = "#43a047";
}

// Geolocation functions
function handleGeolocation() {
    const geoBtn = document.getElementById('geoBtn');
    const locationInfo = document.getElementById('locationInfo');
    const originalText = geoBtn.textContent;
    
    // Show loading state
    geoBtn.disabled = true;
    geoBtn.innerHTML = '<span class="spinner"></span> Locating...';
    locationInfo.textContent = "";
    
    if (!navigator.geolocation) {
        locationInfo.textContent = "Geolocation is not supported by your browser";
        locationInfo.style.color = "#e53935";
        geoBtn.disabled = false;
        geoBtn.textContent = originalText;
        return;
    }
    
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    
    navigator.geolocation.getCurrentPosition(
        function(position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            
            // Simulate finding nearby events
            const nearbyEvents = [
                { name: "Community Park", distance: "0.5 miles" },
                { name: "Town Hall", distance: "1.2 miles" },
                { name: "Library", distance: "1.5 miles" }
            ];
            
            locationInfo.innerHTML = `
                <strong>Your location:</strong><br>
                Latitude: ${lat.toFixed(4)}<br>
                Longitude: ${lng.toFixed(4)}<br><br>
                <strong>Nearest Events:</strong><br>
                ${nearbyEvents.map(event => `• ${event.name} (${event.distance})`).join('<br>')}
            `;
            locationInfo.style.color = "#43a047";
            
            // Reset button
            geoBtn.disabled = false;
            geoBtn.textContent = originalText;
            
            // In a real app, you would use these coordinates to find nearby events
            console.log(`User location: ${lat}, ${lng}`);
        },
        function(error) {
            let message = "";
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    message = "User denied the request for Geolocation";
                    break;
                case error.POSITION_UNAVAILABLE:
                    message = "Location information is unavailable";
                    break;
                case error.TIMEOUT:
                    message = "The request to get user location timed out";
                    break;
                case error.UNKNOWN_ERROR:
                    message = "An unknown error occurred";
                    break;
            }
            
            locationInfo.textContent = message;
            locationInfo.style.color = "#e53935";
            
            // Reset button
            geoBtn.disabled = false;
            geoBtn.textContent = originalText;
        },
        options
    );
}

// Preferences functions
function clearPreferences() {
    localStorage.removeItem('preferredEventType');
    sessionStorage.clear();
    
    const eventTypeSelect = document.getElementById('eventType');
    eventTypeSelect.value = "";
    document.getElementById('eventFee').textContent = "";
    
    // Show confirmation with animation
    const confirmation = document.createElement('div');
    confirmation.textContent = "Preferences cleared!";
    confirmation.style.position = "fixed";
    confirmation.style.bottom = "20px";
    confirmation.style.right = "20px";
    confirmation.style.backgroundColor = "#43a047";
    confirmation.style.color = "white";
    confirmation.style.padding = "10px 20px";
    confirmation.style.borderRadius = "4px";
    confirmation.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    confirmation.style.transform = "translateX(100%)";
    confirmation.style.transition = "transform 0.3s ease";
    document.body.appendChild(confirmation);
    
    // Animate in
    setTimeout(() => {
        confirmation.style.transform = "translateX(0)";
    }, 10);
    
    // Animate out and remove
    setTimeout(() => {
        confirmation.style.transform = "translateX(100%)";
        setTimeout(() => {
            document.body.removeChild(confirmation);
        }, 300);
    }, 3000);
    
    console.log("Preferences cleared from localStorage and sessionStorage");
}

// Handle beforeunload event for form
window.addEventListener('beforeunload', function(e) {
    const form = document.getElementById('registrationForm');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, textarea');
    let hasContent = false;
    
    inputs.forEach(input => {
        if (input.value.trim() !== '') {
            hasContent = true;
        }
    });
    
    if (hasContent) {
        e.preventDefault();
        e.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
    }
});