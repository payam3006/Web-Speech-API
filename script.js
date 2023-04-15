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
let VOICES = synth.getVoices();

voiceList.innerHTML = "";
window.onload = () => {
  speechSynthesis.addEventListener("voiceschanged", () => {
    VOICES = speechSynthesis.getVoices();
    // q(VOICES);
    // alert(speechSynthesis.getVoices());

    VOICES.forEach(function (obj, index) {
      voiceList.innerHTML += `<option value="${index}">${obj.name} ${obj.lang}</option>`;
    });
  });
};

//////////////////////////double CHECK!//////////////////
// if (!VOICES) {
//   setTimeout(() => {
//     VOICES = synth.getVoices();
//     // q(VOICES);
//     // alert(VOICES);

//     VOICES.forEach(function (obj, index) {
//       voiceList.innerHTML += `<option value="${index}">${obj.name} ${obj.lang}</option>`;
//     });
//   }, 1000);
// }

function closeBox() {
  box.classList.toggle("hidden");
}

function speechThis(text) {
  const utterThis = new SpeechSynthesisUtterance(text);
  utterThis.voice = VOICES[voiceList.value];
  synth.speak(utterThis);

  utterThis.addEventListener("start", () => {
    document.getElementById(text).classList.add("shadow");
  });
  utterThis.addEventListener("end", () => {
    document.getElementById(text).classList.remove("shadow");
  });
}

function speechText() {
  const text = textBox.value;
  alert(text);
  const utterThis = new SpeechSynthesisUtterance(text);
  utterThis.voice = VOICES[voiceList.value];
  synth.speak(utterThis);
}
