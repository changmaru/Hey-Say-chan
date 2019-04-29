let speech = "";
SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
const speak = new SpeechRecognition();
speak.onresult = (event) => {
  speech = event.results[0][0].transcript;
  if ( speech.match(/平成/)) {
    console.log("OK");
  }
  console.log(speech);
}
