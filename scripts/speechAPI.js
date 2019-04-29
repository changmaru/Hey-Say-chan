let speech = "";
SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
const speak = new SpeechRecognition();
speak.onresult = (event) => {
  speech = event.results[0][0].transcript;
  console.log(speech);
}
