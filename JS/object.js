var houseKeeper1 = {
    yearsOfExperience: 12,
    name: "Jane",
    cleearningRepertoire: ['bathroom', 'lobby', 'bedroom']
}

function HouseKeeper(yearsOfExperience, name, cleearningRepertoire){
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.cleearningRepertoire = cleearningRepertoire;
    this.clean = function(){
        console.log('cleaning...');
    };
}

let houserKeeper2 = new HouseKeeper(4, "Adam", ['lobby','bathroom']);
houserKeeper2.clean();
console.log(houseKeeper1);
console.log(houserKeeper2);