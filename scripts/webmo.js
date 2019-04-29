//Webmoについて

<script src="http://webmo.local/javascripts/webmo.js"></script>
<script src="./scripts/webmo.js"></script>
const motor = new Webmo.ws("webmo.local");
function closeEyes(){
  motor.rotateBy(-30,60);
}
function openEyes() {
  motor.rotateBy(30,60);
}
