
const form = document.getElementById('jobApplicationForm');
const errorMessages = document.getElementById('errorMessages');
function validateForm() {
    errorMessages.innerHTML = '';
    const formData = new FormData(form);
    let isValid = true;
    if (!formData.get('first_name').trim()) {
        isValid = false;
        errorMessages.innerHTML += 'Please enter your first name.<br>';
    }
    if (!formData.get('last_name').trim()) {
        isValid = false;
        errorMessages.innerHTML += 'Please enter your last name.<br>';
    }
    if (!formData.get('email').trim() || !validateEmail(formData.get('email'))) {
        isValid = false;
        errorMessages.innerHTML += 'Please enter a valid email address.<br>';
    }
    if (!formData.get('phone_num').trim()) {
        isValid = false;
        errorMessages.innerHTML += 'Please enter your phone number.<br>';
    }
    if (!formData.get('address').trim()) {
        isValid = false;
        errorMessages.innerHTML += 'Please enter your address.<br>';
    }
    if (!formData.get('city').trim()) {
        isValid = false;
        errorMessages.innerHTML += 'Please enter your city.<br>';
    }
    if (!formData.get('state').trim()) {
        isValid = false;
        errorMessages.innerHTML += 'Please enter your state.<br>';
    }
    if (!formData.get('zip').trim() || isNaN(formData.get('zip'))) {
        isValid = false;
        errorMessages.innerHTML += 'Please enter a valid zip code.<br>';
    }
    if (!formData.get('country').trim()) {
        isValid = false;
        errorMessages.innerHTML += 'Please select your country.<br>';
    }
    if (!formData.get('edu_level').trim()) {
        isValid = false;
        errorMessages.innerHTML += 'Please select your education level.<br>';
    }
    if (!formData.get('edu_type').trim()) {
        isValid = false;
        errorMessages.innerHTML += 'Please select your education type.<br>';
    }
    if (!formData.get('resume').trim()) {
        isValid = false;
        errorMessages.innerHTML += 'Please upload your resume.<br>';
    }
    if (formData.get('employed_flag') === 'on') {
        if (!formData.get('current_employer').trim()) {
            isValid = false;
            errorMessages.innerHTML += 'Please enter your current employer.<br>';
        }
        if (!formData.get('years_of_exp').trim() || isNaN(formData.get('years_of_exp'))) {
            isValid = false;
            errorMessages.innerHTML += 'Please enter your years of experience.<br>';
        }
    }
    if (!formData.getAll('jobs_to_apply').length) {
        isValid = false;
        errorMessages.innerHTML += 'Please select the jobs you want to apply for.<br>';
    }

    return isValid;
}
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
function handleSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
        console.log('Form submitted successfully!');
        console.log(new FormData(form));
    }
}
form.addEventListener('submit', handleSubmit);
document.getElementById('employed_flag').addEventListener('change', function() {
    const employmentDetails = document.getElementById('employmentDetails');
    if (this.checked) {
        employmentDetails.style.display = 'block';
    } else {
        employmentDetails.style.display = 'none';
    }
});