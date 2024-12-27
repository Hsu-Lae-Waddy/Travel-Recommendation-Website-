// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message! We will get back to you soon.');
    } else {
        alert('Please fill out all fields.');
    }
});


// Pay section//
function showPaymentSection() {
    const modal = document.getElementById("paymentModal");
    modal.style.display = "flex"; // Show the modal
}

function hidePaymentSection() {
    const modal = document.getElementById("paymentModal");
    modal.style.display = "none"; // Hide the modal
}