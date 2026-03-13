window.addEventListener("load", function(){

setTimeout(function(){

// stop any previous speech
window.speechSynthesis.cancel();

// ---------- English Warning ----------
const englishSpeech = new SpeechSynthesisUtterance(
"Warning. This website may be unsafe. Please do not open this link."
);

englishSpeech.lang = "en-US";
englishSpeech.volume = 1;
englishSpeech.rate = 1;
englishSpeech.pitch = 1;


// ---------- Kannada Warning ----------
const kannadaSpeech = new SpeechSynthesisUtterance(
"ಎಚ್ಚರಿಕೆ. ಈ ವೆಬ್‌ಸೈಟ್ ಸುರಕ್ಷಿತವಾಗಿಲ್ಲ. ದಯವಿಟ್ಟು ಈ ಲಿಂಕ್ ತೆರೆಯಬೇಡಿ."
);

// Kannada voice not available → use Hindi engine
kannadaSpeech.lang = "hi-IN";

kannadaSpeech.volume = 1;
kannadaSpeech.rate = 1;
kannadaSpeech.pitch = 1;


// ---------- Hindi Warning ----------
const hindiSpeech = new SpeechSynthesisUtterance(
"चेतावनी. यह वेबसाइट सुरक्षित नहीं हो सकती। कृपया इस लिंक को मत खोलिए।"
);

hindiSpeech.lang = "hi-IN";
hindiSpeech.volume = 1;
hindiSpeech.rate = 1;
hindiSpeech.pitch = 1;


// play English first
speechSynthesis.speak(englishSpeech);

// then Kannada
englishSpeech.onend = function(){
speechSynthesis.speak(kannadaSpeech);
};

// then Hindi
kannadaSpeech.onend = function(){
speechSynthesis.speak(hindiSpeech);
};

},2000);

});