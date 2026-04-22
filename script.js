let=btn=document.querySelector("#btn");
let=output=document.querySelector("#content");

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    text_speak.lang="hi-IN";
    window.speechSynthesis.speak(text_speak)

}
function  wishMe(){
    let day=new Date();
    let hours=day.getHours();
    if(hours>=6 && hours<12)
        speak("Good Morning sir");
    
    else if (hours>=12 && hour<16)
            speak("Good afternoon  sir");
    else speak("Good Evening sir");
}
window.addEventListener("load",()=>{
    wishMe
})


    

