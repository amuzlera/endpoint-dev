function sendRequest() {
    const inputText = document.getElementById('inputText').value;
    const responseArea = document.getElementById('responseArea');

    const url = document.getElementById('urlInput').value;
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: inputText })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        responseArea.innerText = JSON.stringify(data); // Adjust based on your API response structure
    })
    .catch(error => {
        console.error('Error:', error);
        responseArea.innerText = 'An error occurred. Please try again.';
    });
}

document.getElementById('submitButton').addEventListener('click', sendRequest);