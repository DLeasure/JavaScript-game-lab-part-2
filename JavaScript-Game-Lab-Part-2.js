let userHealth = 40;
let grantHealth = 10;
let userWins = 0;

function getDamage() {
    return (Math.floor(Math.random() * 5) + 1);
}

function startGame() {
    const likeToPlay = prompt("Would you like to play a game?");
    if (likeToPlay === "yes" || likeToPlay === "Yes") {
        userName = prompt("Name your character");
        if (userName === "Jonah"){
            let reallySure = prompt("Are you really sure you want to do play, Jonah?");
            if (reallySure === "yes" || reallySure === "Yes"){
                alert("You don't want to do that Jonah.");
            } else {
            alert("Smart thinking. That would have been a mistake. The mighty Chirpus is unbeatable.")
            }
        } else {
        startCombat();
        }
    }
}

function startCombat() {
    while (userWins < 3 && userHealth > 0) {
        const healthDecrement = getDamage();
        userHealth -= healthDecrement;
        grantHealth -= healthDecrement;
        console.log(`Health: ${userName} ${userHealth} - ${grantHealth} Grant`);
        if (grantHealth < 1) {
            userWins++;
            console.log(`${userName} has won game ${userWins}!`);
            grantHealth = 10;
        }
        if (userHealth < 1) {
            console.log(`${userName} has lost the game!`);
            break;
        }
        if (userWins === 3) {
            console.log(`${userName} has defeated Grant!`);
            break;
        }
        const nextAction = prompt("Would you like to attack, or quit?");
        if (nextAction === "attack") {
            continue;
        } else {
            alert("You have chosen to give up.");
            console.log("User knew winning was incomprehensible.");
            break;
        }
    }
}

startGame();





// THE FOLLOWING CODE WILL TELL YOU HOW MANY GAMES GRANT HAD TO PLAY TO WIN 1 GAME.

function testGame() {
    const likeToPlay = prompt("Would you like to play a game?");
    if (likeToPlay === "yes" || likeToPlay === "Yes") {
        userName = prompt("Name your character");
        testCombat();
    }
}

function testCombat() {
    while (userWins < 3 && userHealth > 0) {
        const healthDecrement = getDamage();
        userHealth -= healthDecrement;
        grantHealth -= healthDecrement;
        if (grantHealth < 1) {
            userWins++;
            grantHealth = 10;
        }
        if (userHealth < 1) {
            console.log(`You've lost the game!`);
            userLost++;
            break;
        }
        if (userWins === 3) {
            console.log(`You've defeated Grant!`);
            break;
        }
    }
}

// matchNum = 1;
// userLost = 0;
// while (userLost < 1) {
//     console.log("Match: " + matchNum);
//     testCombat();
//     matchNum++;
//     userHealth = 40;
//     grantHealth = 10;
//     userWins = 0;
// }