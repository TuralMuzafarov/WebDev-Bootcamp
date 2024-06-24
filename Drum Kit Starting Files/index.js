let numberOfButtons = document.querySelectorAll('.drum').length;

for(let i=0 ; i<numberOfButtons ; i++)
{
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
        document.querySelectorAll('.drum')[i].classList.add('clickedButton');
        let buttonInnerHTML = this.innerHTML;
        addAnimation(buttonInnerHTML);
        makeSound(buttonInnerHTML);
        document.querySelectorAll('.drum')[i].classList.remove('clickedButton');
    })
}

document.addEventListener('keydown', function(event){
    makeSound(event.key);
    addAnimation(event.key);
})

function makeSound(key){
    switch(key)
    {
        case 'w':
            let tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            let tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            let tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            let snear = new Audio('./sounds/snare.mp3');
            snear.play();
            break;
        case 'k':
            let crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            let kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;            
    }
}

function addAnimation(key){
    document.querySelector("."+key).classList.add('pressed');

    setTimeout(function() {
        document.querySelector('.'+key).classList.remove('pressed')
    }, 100);

    
}