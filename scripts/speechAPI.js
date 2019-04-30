// Web Speech APIについて

SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
const speak = new SpeechRecognition();
speak.lang = 'ja';
speak.interimResults = true;
speak.continuous = true;

speak.onresult = function(event){
  var results = event.results;
  for (var i = event.resultIndex; i<results.length; i++) speech = results[i][0].transcript;
  console.log(speech);
  if ( speech.match(/平成/)) end();
  speak.stop();
}
