		function startListening() {
			const recognition = new webkitSpeechRecognition(); // Create a new SpeechRecognition object
			recognition.onresult = function(event) { // When speech is recognized, handle it
				const speechResult = event.results[0][0].transcript; // Get the recognized speech
				document.getElementById("input-text").value = speechResult; // Set the value of the input field to the recognized speech
			}
			recognition.start(); // Start recording
		}

    function stopListening() {
			recognition.stop(); 
    }

async function matchLetters() {
  const inputText = document.getElementById("input-text").value;
  const imageContainer = document.getElementById("image-container");

  // Clear existing images
  imageContainer.innerHTML = "";
const space=' ';
  // Loop through each letter of the input text
  for (let i = 0; i < inputText.length; i++) {
    const letter = inputText[i].toUpperCase();
    if(letter==space){
      await new Promise(resolve => setTimeout(resolve, 1000));
      continue;
    }
    // Load the corresponding image if it exists
    const img = document.createElement("img");
    img.src = `signs/${letter}.jpg`;
    
    img.alt = letter;

    // Add the image to the container
    imageContainer.appendChild(img);

    // Wait for 1 second before displaying the next image
    await new Promise(resolve => setTimeout(resolve, 1000));
    imageContainer.innerHTML = "";
  }
}

