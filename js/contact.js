document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    fetch('https://contact-five-iota.vercel.app/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'SUCCESS') {
            window.location.href = '/thank_you.html';
        } else {
            alert('There was an error submitting the form.');
        }
    })
    .catch(error => console.error('Error:', error));
});
