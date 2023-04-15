q = console.log;

//////////////////////////////////////////
// if ("speechSynthesis" in window) {
//   console.log("Web Speech API supported!");
// } else {
//   console.log("Web Speech API not supported :-(");
// }

"speechSynthesis" in window
  ? console.log("Web Speech API supported!")
  : console.log("Web Speech API not supported :-(");
///////////////////////////////////////////

const synth = window.speechSynthesis;
// let ourText = "keer two koon a khameneh e kos kesh";
// const utterThis = new SpeechSynthesisUtterance(ourText);

// utterThis.voice = synth.getVoices()[5];
// setTimeout(function () {
//   utterThis.voice = synth.getVoices()[5];
// }, 200);

// setTimeout(function () {
//   q(speechSynthesis);
//   q(utterThis.voice);
//   q(utterThis);

//   q(synth);
//   q(synth.getVoices());
//   //   synth.speak(utterThis);
// }, 2000);

/////////////////////////////////////////

// q(speechSynthesis);
// q(utterThis.voice);
// q(utterThis);

// q(synth);
// q(synth.getVoices());

////////////////////Start My Code!//////////////////////
const box = document.getElementById("box");
const voiceList = document.getElementById("voices");
const textBox = document.getElementById("text");

function closeBox() {
  box.classList.toggle("hidden");
}

function speechThis(text) {
  const utterThis = new SpeechSynthesisUtterance(text);
  utterThis.voice = synth.getVoices()[voiceList.value];
  synth.speak(utterThis);
  utterThis.addEventListener("start", () => {
    document.getElementById(text).classList.add("shadow");
  });
  utterThis.addEventListener("end", () => {
    document.getElementById(text).classList.remove("shadow");
  });
}

setTimeout(function () {
  voiceList.innerHTML = "";
  synth.getVoices().forEach(function (obj, index) {
    voiceList.innerHTML += `<option value="${index}">${obj.name} ${obj.lang}</option>`;
  });
}, 1);

function speechText() {
  const text = textBox.value;
  q(text);
  const utterThis = new SpeechSynthesisUtterance(text);
  utterThis.voice = synth.getVoices()[voiceList.value];
  synth.speak(utterThis);
}
