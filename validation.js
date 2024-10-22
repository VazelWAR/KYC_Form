document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("kycForm");

    const dobInput = document.getElementById("dob");
    const nationalityInput = document.getElementById("nationality");
    const panInput = document.getElementById("pan");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const photoUpload = document.getElementById("photoUpload");
    const signatureUpload = document.getElementById("signatureUpload");

    const dobError = document.getElementById("dobError");
    const nationalityError = document.getElementById("nationalityError");
    const panError = document.getElementById("panError");
    const phoneError = document.getElementById("phoneError");
    const emailError = document.getElementById("emailError");
    const addressError = document.getElementById("addressError");
    const photoError = document.getElementById('photoError');
    const signError = document.getElementById('signError');

    form.addEventListener("submit", function(event) {
        let isValid = true;

        // Validate Date of Birth
        if (!dobInput.value) {
            dobError.textContent = "Date of Birth is required";
            isValid = false;
        } else {
            dobError.textContent = "";
        }

        // Validate Nationality
        if (nationalityInput.value === "") {
            nationalityError.textContent = "Please select a nationality";
            isValid = false;
        } else {
            nationalityError.textContent = "";
        }

        // Validate PAN (using basic regex for PAN card format)
        const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        if (!panInput.value) {
            panError.textContent = "PAN is required";
            isValid = false;
        } else if (!panPattern.test(panInput.value)) {
            panError.textContent = "Invalid PAN format";
            isValid = false;
        } else {
            panError.textContent = "";
        }

        // Validate Phone Number (using a basic regex for phone)
        const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
        if (!phoneInput.value) {
            phoneError.textContent = "Phone number is required";
            isValid = false;
        } else if (!phonePattern.test(phoneInput.value)) {
            phoneError.textContent = "Invalid phone number format (use (000) 000-0000)";
            isValid = false;
        } else {
            phoneError.textContent = "";
        }

        // Validate Email (using basic email format)
        const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!emailInput.value) {
            emailError.textContent = "Email is required";
            isValid = false;
        } else if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = "Invalid email format";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        // Validate address fields
        const streetAddress = document.getElementById("streetAddress").value;
        const city = document.getElementById("city").value;
        const state = document.getElementById("state").value;
        const zipCode = document.getElementById("zipCode").value;
        const country = document.getElementById("country").value;

        if (!streetAddress || !city || !state || !zipCode || !country) {
            addressError.textContent = "All address fields are required";
            isValid = false;
        } else {
            addressError.textContent = "";
        }

        // Validate Photo Upload (size between 20KB - 50KB)
        if (photoUpload.files.length === 0) {
            photoError.textContent = 'Customer photo is required';
            isValid = false;
        } else {
            const photoSize = photoUpload.files[0].size / (1024 * 1024);
            if (photoSize > 10) {
                photoError.textContent = 'Invalid Photo Size';
                isValid = false;
            } 
        }

        // Validate Signature Upload (size between 5KB - 50KB)
        if (signatureUpload.files.length === 0) {
            photoError.textContent = 'Customer signature is required';
            isValid = false;
        } else {
            const signatureSize = signatureUpload.files[0].size / (1024 * 1024);
            if (signatureSize > 10) {
                signError.textContent = 'Invalid Photo Size';
                isValid = false;
            }
        }

        // If the form is invalid, prevent submission
        if (!isValid) {
            event.preventDefault();
        } else {
            event.preventDefault();
            window.location.href = './success.html';
        }
    });
});







// Upload files
document.getElementById('photoUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('photoPreviewImg');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('signatureUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('signaturePreviewImg');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('uploadForm').addEventListener('click', function(event) {
    event.preventDefault();
    // Add your file validation and upload logic here
    alert('Form submitted');
});
