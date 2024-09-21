// Function to show the login form
function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
}

// Handle Login Button Click
function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:5001/login', { // Update to your port
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('loginMessage').innerText = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('loginMessage').innerText = 'Error logging in.';
    });
}



function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    alert(`Location shared: Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}
