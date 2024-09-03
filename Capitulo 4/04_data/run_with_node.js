const JOURNAL = require("./code/journal");

// load dependencies
require("./code/load")("code/journal.js", "code/chapter/04_data.js");

//Estructura para ver todas las correlaciones de todos los eventos del diario
/*for (let event of journalEvents(JOURNAL)) {
  console.log(event + ":", phi(tableFor(event, JOURNAL)));
}*/

//Estrcutura filtrada para las correlaciones en el rango
for (let event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event, JOURNAL));
  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ":", correlation);
  }
}

// → brushed teeth: -0.3805211953
// → work:          -0.1371988681
// → reading:        0.1106828054


for(let entry of JOURNAL){
  if(entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")){
    entry.events.push("teeth with peanuts");
  }
}

console.log("\n" + phi(tableFor("teeth and peanuts")));