$(document).ready(function() {
	var animal = generateRandomAnimal();
    $("#name").attr('src', animal.image);
    $('#age').attr('value', animal.age);
});

function Rabbit(name, age) {
    this.name = name;
    this.age = age;
    this.type = 'Rabbit';
    this.image = 'rabbit.jpg';
}

function Raven(name, age) {
    this.name = name;
    this.age = age;
    this.type = 'Raven';
    this.image = 'raven.jpg';
}

function Racoon(name, age) {
    this.name = name;
    this.age = age;
    this.type = 'Racoon';
    this.image = 'racoon.jpg';
}

var animal = [new Rabbit(), new Raven(), new Racoon()];

var names = ["Ray", "Randy", "Ralph"];

function generateRandomIndex(maxIndex) {
    /*console.log(Math.floor(Math.random() * maxIndex))*/
    return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
    var randomIndex = generateRandomIndex(3);
    return names[randomIndex];
}

function generateRandomAge() {
    return generateRandomIndex(10);
    
}

function generateRandomAnimal() {
    var randomIdx = generateRandomIndex(3);
    var randomAnimal = animal[randomIdx];
    
    if (randomAnimal instanceof 'Rabbit') {
        return (new Rabbit(generateRandomName(), generateRandomAge()));
    }
    if (randomAnimal instanceof 'Raven') {
        return (new Raven(generateRandomName(), generateRandomAge()));
    }
    if (randomAnimal instanceof 'Racoon') {
        return (new Racoon(generateRandomName(), generateRandomAge()));
    }
}