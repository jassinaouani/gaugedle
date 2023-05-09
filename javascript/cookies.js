function hidePopup() {
	document.getElementById("cookie-popup").style.display = "none";
}
// Helper function to set cookies
function setCookie(name, value) {
	if (getCookie("cookiesAgreeGe") !== 'true') {console.log("Saving cookies has been aborted, cookies haven't been agreed to")}
	else {
	document.cookie = name + "=" + value + ";path=/";
}}

  // Helper function to get cookies
  function getCookie(name) {
	const cookieString = decodeURIComponent(document.cookie);
	const cookies = cookieString.split(';');
	for (let i = 0; i < cookies.length; i++) {
	  let cookie = cookies[i].trim();
	  if (cookie.indexOf(name + "=") === 0) {
		return cookie.substring(name.length + 1, cookie.length);
	  }
	}
	return "";
  }

//cookie popup things happening here
agreebutton.addEventListener("click", function() {
    cookiesAgreeGe();
});

// Buttons for agree/disagree with cookie agreement
function cookiesAgreeGe() {
	document.cookie = "cookiesAgreeGe" + "=" + 'true' + ";path=/";
}
// hide popup if already agreed
if (getCookie("cookiesAgreeGe") === 'true') {
	hidePopup()
}

// Saving the number of incorrect guesses the player needed into cookies
function saveIncorrectGuessesToCookie() {
	// Get the existing incorrect guesses array from the cookie or create a new empty array
	let incorrectGuessesArray = [getCookie("incorrectGuessesArray")]

	// Add the current incorrect guesses count to the array
	incorrectGuessesArray.push(incorrectGuesses);

	// Save the updated array back into the cookie
	setCookie("incorrectGuessesArray", incorrectGuessesArray);
}

// Function to reset cookies
function resetcookies() {
	const cookies = document.cookie.split(";");

	for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i];
		const eqPos = cookie.indexOf("=");
		const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
	}
	
	/* setCookie("incorrectGuessesArray", '');
	setCookie("cookiesAgreeGe", ''); */
}