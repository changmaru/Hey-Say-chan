//Webmoについて
const motor = new Webmo.ws("webmo.local");
function closeEyes(){
  motor.rotateBy(-30,60);
}
function openEyes() {
  motor.rotateBy(30,60);
}
