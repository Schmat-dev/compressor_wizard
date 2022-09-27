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
let DPM21MillDemand
let DPM22MillDemand
let DPM23MillDemand
let DPM24MillDemand
let DPM25MillDemand
let DPM11MillDemand

let selectedmachine
let selectedpressure

//Update millpressure function
function updatemillpressure(selectedmachine, selectedpressure) {

}
//Respond listbox selected index change
document.getElementById('machine-list-box').addEventListener('change', function(e){
    selectedmachine = e.target.value;
    console.log(selectedpressure);
    console.log(selectedmachine);
 })
document.getElementById('pressure-list-box').addEventListener('change', function(e){
    selectedpressure = e.target.value;
    console.log(selectedpressure);
 })
    //Obtain and update Demand
    let Multiplier = 1

    let A = 150 * Multiplier
    let B = 450 * Multiplier
    let C = 450 * Multiplier
    let D = 800 * Multiplier
    let E = 550 * Multiplier





