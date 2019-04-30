//Webmoについて
const motor = new Webmo.ws("webmo.local");
function closeEyes(){
  motor.rotateBy(45,90);
}
function openEyes() {
  motor.rotateBy(-45,90);
}
