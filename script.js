document.querySelector('.btn').addEventListener('click', function() {
    // Get values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if both fields are filled
    if (username === '' || password === '') {
        alert('Please fill in both fields.');
    } else {
        // Dummy check for static login credentials
        if (username === 'admin' && password === 'password') {
            alert('Login successful!');
            // You can redirect or perform other actions here
        } else {
            alert('Invalid username or password.');
        }
    }
});
