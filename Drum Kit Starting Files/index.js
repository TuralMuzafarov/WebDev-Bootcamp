// document.querySelectorAll('button').forEach((button)=>button.addEventListener('click' , function (){
//     alert('I got clicked!');
// }));

let buttonNumber = document.querySelectorAll('.drum').length;
let soundArray = ['tom-1.mp3', 'tom-2.mp3', 'tom-3.mp3', 'tom-4.mp3', 'snare.mp3', 'crash.mp3', 'kick-bass.mp3'];

for(let i = 0 ; i < buttonNumber ; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', function (){
        this.classList.toggle('clickedButton');
        let audioName = soundArray[i];
        let audio = new Audio(`sounds/${audioName}`);
        audio.play();
    })
}

// document.querySelectorAll('.drum').forEach((button)=>{
//     button.addEventListener('click', function (){
//         this.classList.toggle('clickedButton');
//     })
// })

// document.querySelectorAll("button")[0].addEventListener('click', function(){
//     let audio = new Audio("./sounds/tom-1.mp3");
//     audio.play();
// });