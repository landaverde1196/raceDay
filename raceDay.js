let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let age = 24;
if (age > 18 && registeredEarly === true) {raceNumber += 1000};
if (age > 18 && registeredEarly === true) {console.log(`Runners over 18 who registered early will race at 9:30am ${raceNumber}.`);}
else if (age > 18 && registeredEarly === false) 
  {console.log(`Late adults run at 11:00 am ${raceNumber}`);}
else if (age < 18) {console.log(`Youth registrants run at 12:30 pm (regardless of registration) ${raceNumber}`);}
else {console.log(`See the registration desk.`);}
