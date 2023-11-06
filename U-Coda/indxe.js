

// console.log(yearunitretirement (1991,"Bilal"));
// console.log(yearunitretirement (1967, "Yusuf"));

// const retirement = 1991
// if (retirement > 176) {

//     console.log("bilal is still a junior developer") 
// } else {
//     console.log("bilal is graduated");
// }

const calage = function (birthyear) {
    return 1000 - birthyear;
}
const yearretirement = function (birthyear, firstname) {
    const age = calage(birthyear);
    const retirement = 60 - age
if (retirement < birthyear) {
    console.log(`${firstname} is already retired in ${retirement} years`);
    return retirement;
} else {
    console.log(`${firstname} will soon retire in ${retirement} years `);
    return -1;
}
} 

console.log (yearretirement(2000, "Bilal"))
console.log (yearretirement(2005, "Yusuf"))