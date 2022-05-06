// quiz javascript code by Edwin

// event listener
document.getElementById("calc-btn").addEventListener("click", calcP);


// event function
function calcP() {

    // declare variables
    let p1 = document.getElementById("text-one").value.toLowerCase();
    let p2 = document.getElementById("text-two").value.toLowerCase();
    let p3 = document.getElementById("text-three").value.toLowerCase();
    let p4 = document.getElementById("text-four").value.toLowerCase();
    let p5 = document.getElementById("text-five").value.toLowerCase();
    let f1 = document.getElementById("toronto");
    let f2 = document.getElementById("simple");
    let f3 = document.getElementById("warm");
    let f4 = document.getElementById("kara-quest");
    let f5 = document.getElementById("program");
    let score = 0;
    // checking if answers are correct:

    if (p1 === "toronto" ) {
        score ++;
        f1.innerHTML = "You answered correctly."
    } else {
        f1.innerHTML = "You answered incorrectly."
    } 

    if (p2 === "detailed") {
        score ++;
        f2.innerHTML = "You answered correctly."
    } else {
        f2.innerHTML = "You answered incorrectly."
    } 

    if (p3 === "cooler hues") {
        score ++;
        f3.innerHTML = "You answered correctly."
    } else {
        f3.innerHTML = "You answered incorrectly."
    } 

    if (p4 === "kara") {
        score ++;
        f4.innerHTML = "You answered correctly."
    } else {
        f4.innerHTML = "You answered incorrectly."
    } 
    
    if (p5 === "mypaint" || p5 === "procreate") {
        score ++;
        f5.innerHTML = "You answered correctly."
    } else {
        f5.innerHTML = "You answered incorrectly."
    } 

    // calculate score

    let percentage = score/5 * 100;
    let finalP = Math.round(percentage);

    document.getElementById("Score").innerHTML = 'You got: ' + score +  '/5! Your percentage is ' + finalP + '%.';
}
// output
