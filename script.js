let btn=document.querySelector("#btn");
let content=document.querySelector("#content");
let voice =document.querySelector("#voice");

function speak(text){

    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    // text_speak.lang="hi-GB"
     window.speechSynthesis.speak(text_speak)

}




function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
      speak("Good morning");
    } else if (hours >= 12 && hours < 16) {
      speak("Good afternoon");
    } else {
      speak("Good evening");
    }
  }

  // Add event listener for button click
//   document.getElementById('btn').addEventListener('click', () => {
//     wishMe();
//   });

let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition= new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start();
    btn.style.display="none"
    voice.style.display="block"
})

 function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello") || message.includes("hey") ){
        speak("hello sir, what can i help you")
    }
    else if(message.includes("who are you")){
        speak("I am virtual assistant ,created by vivek singh")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/", "_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram....")
        window.open("https://www.instagram.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google....")
        window.open("https://www.google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook....")
        window.open("https://www.facebook.com/","_blank")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp....")
        window.open("whatsapp://")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator....")
        window.open("calculator://")
    } else if(message.includes("time")){
       let time=new Date().toLocaleString(undefined,{hour:"numeric", minute:"numeric"})
       speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric", month:"short"})
        speak(date)
     }

    else{
        let finalText="this is what i found on internet regarding" + message.replace("shipra"," ") || message.replace("shipra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message}`, "blank")
 }

 }



/// CHAT GPT WALA CODE 

// function speak(text) {
//     if ('speechSynthesis' in window) {
//       const utterance = new SpeechSynthesisUtterance(text);
//       utterance.rate = 1; // Normal speed
//       utterance.pitch = 1; // Normal pitch
//       utterance.volume = 1; // Full volume
//       window.speechSynthesis.speak(utterance);
//     } else {
//       console.error("Speech Synthesis API is not supported in this browser.");
//     }
//   }

  
