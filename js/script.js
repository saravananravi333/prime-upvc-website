// ----- LOAD FANCYBOX -----
document.addEventListener("DOMContentLoaded", function () {
    Fancybox.bind('[data-fancybox="gallery"]', {});
});

// ----- BLOG - READ MORE -----
function toggleReadMore(button) {
    const moreText = button.parentElement.querySelector('.more-text');

    if (moreText.style.display === 'inline') {
        moreText.style.display = 'none';
        button.innerHTML = 'Read More...';
    } else {
        moreText.style.display = 'inline';
        button.innerHTML = 'Read Less <i class="ri-arrow-up-fill"></i>';
    }
}

document.querySelectorAll('.more-text').forEach(function (span) {
    span.style.display = 'none';
});

// ----- CONTACT FORM - FUNCTION -----
function handleFormSubmit() {
    const fullName = document.getElementById('full_name').value.trim();
    const mobileNo = document.getElementById('mobile_no').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!validateForm(fullName, mobileNo, email, subject, message)) {
        alert('Please fill all fields.');
        return;
    }

    sendToWhatsApp(fullName, mobileNo, email, subject, message);
}

// ----- CONTACT FORM - VALIDATION -----
function validateForm(fullName, mobileNo, email, subject, message) {
    if (fullName === '') {
        alert('Full name is required.');
        return false;
    }

    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobileNo)) {
        alert('Please enter a valid 10-digit mobile number.');
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (subject === '') {
        alert('Subject is required.');
        return false;
    }

    if (message === '') {
        alert('Message is required.');
        return false;
    }

    return true;
}

// ----- SEND TO WHATSAPP -----
function sendToWhatsApp(fullName, mobileNo, email, subject, message) {
    const whatsappNumber = '7603820924';
    const whatsappMessage = `Name: ${fullName}\nMobile: ${mobileNo}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank');
}