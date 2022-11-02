//Declare general variables
//Declare Enabled values
//Declare Max Air
let DPM21MaxAir = 520
let DPM22MaxAir = 520
let DPM23MaxAir = 520
let DPM24MaxAir = 520
let DPM11MaxAir = 170
//Declare Mill  Pressure
let DPM21MillPressure = 0
let DPM22MillPressure = 0
let DPM23MillPressure = 0
let DPM24MillPressure = 0
let DPM25MillPressure = 0
let DPM11MillPressure = 0
//Declare Demands
let DPM21Demand = 0
let DPM22Demand = 0
let DPM23Demand = 0
let DPM24Demand = 0
let DPM25Demand = 0
let DPM11Demand = 0
let totalDemand = 0

let selectedMachine
let selectedPressure
let Multiplier = 1

//Declare functions
function updateMillPressure(selectedPressure) {
   if (selectedmachine = "DPM-2.1") {
      DPM21Demand = selectedPressure * DPM21MaxAir / 100
   }
   if (selectedmachine = "DPM-2.2") {
      DPM22Demand = selectedPressure * DPM22MaxAir / 100
   }
   if (selectedmachine = "DPM-2.3") {
      DPM23Demand = selectedPressure * DPM23MaxAir / 100
   }
   if (selectedmachine = "DPM-2.4") {
      DPM24Demand = selectedPressure * DPM24MaxAir / 100
   }
   if (selectedmachine = "DPM-2.5") {
      DPM25Demand = selectedPressure * DPM25MaxAir / 100
   }
   if (selectedmachine = "DPM-1.1") {
      DPM11Demand = selectedPressure * DPM11MaxAir / 100
   }
   
}

function updateTotalDemand() {
   return DPM21Demand + DPM22Demand + DPM23Demand + DPM24Demand + DPM25Demand + DPM11Demand
}
//Respond to listbox selected index change
document.getElementById('machine-list-box').addEventListener('change', function(e){
    selectedmachine = e.target.value;
    console.log(selectedPressure);
    console.log(selectedmachine);
 })
document.getElementById('pressure-list-box').addEventListener('change', function(e){
    selectedPressure = e.target.value;
    console.log(selectedPressure);
 })

    let A = 150 * Multiplier
    let B = 450 * Multiplier
    let C = 450 * Multiplier
    let D = 800 * Multiplier
    let E = 550 * Multiplier




