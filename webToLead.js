
// JavaScript code to get the current URL
var currentURL = window.location.href;
console.log('currentURL=>', currentURL);

// Function to assign the currentURL to the input field
function assignCurrentURL() {
    document.getElementById('urlInput').value = currentURL;
    document.getElementById('retURL').value = currentURL;
    
}