
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('.contact__form');
        const nameInput = document.querySelector('.contact__input[type="text"]');
        const emailInput = document.querySelector('.contact__input[type="email"]');
        const subjectInput = document.querySelector('.contact__input[type="text"]:nth-of-type(2)');
        const descriptionInput = document.querySelector('.contact__input[type="text"]:nth-of-type(3)');
        
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            // Simple validation
            if (!nameInput.value || !emailInput.value || !subjectInput.value || !descriptionInput.value) {
                alert('Please fill in all fields.');
                return;
            }

            // Simulate sending the form data (you would replace this with an actual AJAX request)
            const formData = {
                name: nameInput.value,
                email: emailInput.value,
                subject: subjectInput.value,
                description: descriptionInput.value
            };

            console.log('Form data:', formData); // Log the data for now

            // Clear form fields
            nameInput.value = '';
            emailInput.value = '';
            subjectInput.value = '';
            descriptionInput.value = '';

            // Show success message
            alert('Message sent successfully!');

            
        });
    });

