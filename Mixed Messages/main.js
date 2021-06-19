const m1 = ['Ludo Bagman', 'Bathilda Bagshot', 'Sirius Black', 'Lavender Brown', 'Cho Chang',
'Albus Dumbledore','Amos Diggory', 'Fleur Delacour', 'Dudley Dursley',
'Cornelius Fudge', 'Hermoine Granger', 'Bellatrix Lestrange', 
'Neville Longbottom', 'Luna Lovegood', 'Draco Malfoy', 'Minerva McGonagall',
'Peter Pettigrew', 'Harry Potter', 'Thomas Marvelo Riddle',
'Salazar Slytherin', 'Severus Snape', 'Dolores Umbridge',
'Ron Weasley']; // Array of some Harry Potter characters.

const m2 = ['Head of the Department of Magical Games and Sports within the Ministry of Magic.'
    ,'Author of "A History of Magic," and the great aunt of Gellert Grindelwald.'
    ,'Harry\'s godfather and close friend of Harry\'s late dad, James. An escapee from Azkaban and member of the order of Phoenix.'
    ,'Gryffindor student in Harry\'s year and member of Dumbledore\'s Army.'
    ,'Ravenclaw Quidditch Seeker one year above Harry, and his first love interest; also member of Dumbledore\'s Army.'
    ,'Hogwarts headmaster in Harry Potter\'s time, founder of the Order of the Phoenix.'
    ,'Cedric Diggory\'s father and employee of the Department for the Regulation and Control of Magical Creatures.'
    ,'Representative of wizarding school Beauxbatons and wife of Bill Weasley.'
    ,'First cousin of Harry Potter and muggle.'
    ,'Minister for Magic in the first five books.'
    ,'Muggle-born Gryffindor student in Harry\'s year and one of his best friends; prefect and co-founder of Dumbledore\'s Army.'
    ,'Cousin of Sirius Black, Death Eater who tortured Neville Longbottom\'s parents into insanity.'
    ,'Gryffindor student in Harry\'s year and member of Dumbledore\'s Army.'
    ,'Ravenclaw student, one year below Harry and member of Dumbledore\'s Army.'
    ,'Slytherin student in Harry\'s year, Quidditch Seeker, prefect, and member of the Inquisitorial Squad.'  
    ,'Hogwarts Transfiguration professor, Head of Gryffindor House, Deputy Head mistress of Hogwarts, and member of the Order of the Pheonix.'
    ,'Death Eater and former school friend of James Potter, Sirius Black and Remus Lupin.'
    ,'The main character of the series, Gryffindor student at Hogwarts, and co-founder and first leader of Dumbledore\'s Army.' 
    ,'Slytherin studenet who became Lord Voldemort.'
    ,'One of the four founders of Hogwarts School of Witchcraft and Wizardry and founder of the Slytherin house.'
    ,'Head of Slytherin House, Double agent for Dumbledore, Potions and later Defence Against the Dark Arts professor at Hogrwarts.'
    ,'Senior Undersecretary to the Minister for Magic, Hogwarts High Inquisitor and Headmistress of Hogwarts.'
    ,'Harry\'s best friend, Gryffindor Quidditch Keeper and co-founder of Dumbledore\'s Army.']; // Array of descriptions for respective characters.

const m3 = ['Cat', 'Phoenix', 'Owl']; // Array of pets kept in Harry Potter.

// Function that generates random index to loop through m1 and m2 array.
const randomIndex1 = () =>{
    let randIndex = Math.floor(Math.random() * m1.length);
    return randIndex;
}

// Function that generates random index to loop through m3 array.
const randomIndex2 = () =>{
    let randInd = Math.floor(Math.random() *m3.length);
    return randInd;
}

const prompt = require('prompt-sync')({sigint: true});

/* Function that tells a fan from a regular, prints a welcome or an error message; depending if individual is a fan and returns
true if the former is the case, or false if the latter is.*/
const welcome = () =>{
    const name = prompt('What is your name? ');
    console.log(`Hey there ${name}!\n`);
    const harryPotterFan = prompt('Are you a Harry Potter fan? (Y or N) ');
    switch (harryPotterFan.toLowerCase()) {
        case "n":
          console.log(
            "Oops! I am sorry, this program is strictly for Harry Potter Movie fans!"
          );
          return false;
        case "y":
          console.log("\nWelcome! You better not be Slytherin :(\n");
          return true;
        default:
          console.log("Invalid Input, Please Restart App!");
          return false;
      }
}

// Function that generates mixed and somewhat funny messages, suggestions and predictions based on the Harry Potter movie.
const mixedMessages = () =>{
    let rand1 = randomIndex1();// Index that will be used to loop through m1 array.
    let rand2 = randomIndex1();// Index that will be used to loop through m2 array.
    let rand3 = randomIndex2();// Index that will be used to loop through m3 array.
    if (rand1 === rand2){
        rand2 = randomIndex1();
    }
    console.log(`If you were a Harry Potter character, you\'d probably want to be ${m1[rand1]}.\n`);
    console.log(`However, we believe ${m1[rand2]}\n - "${m2[rand2]}", will be a great fit for you.\n`);
    if (m3[rand3][0] === 'O' ){
        var id =  'an';
    } else{
        var id = 'a';
    }
    console.log(`You should consider adopting ${id} ${m3[rand3]}. Good luck with that!`);
}

//! Todo: In the future, I'd wanna have a while loop to keep the user in the app while val is false, and continue prompting, until val is true. I.E, until user inputs something valid.
if (welcome() === true){
    mixedMessages();
}