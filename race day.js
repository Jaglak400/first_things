let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 19;

if(registeredEarly == true && runnerAge > 18){
 raceNumber += 1000;
}

if(registeredEarly && runnerAge > 18){
  console.log(`You will race at 9:30 am, number ${raceNumber}`);
}else if (!registeredEarly && runnerAge > 18){
    console.log(`You will race at 11:00 am, number ${raceNumber}`);
}else if (runnerAge < 18){
    console.log(`You will race at 12:30pm, number ${raceNumber}`);
}else{
  console.log(`Please approach the registration desk.`)
}