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
    let score = 0;
    // checking if answers are correct:
    if (p1 === "toronto" ) {
        score ++;
    } 

    if (p2 === "detailed") {
        score ++;
    }

    if (p3 === "cooler hues") {
        score ++;
    }

    if (p4 === "kara") {
        score ++;
    }

    if (p5 === "mypaint" || p5 === "procreate") {
        score ++;
    }
    // calculate score

    let percentage = score/5 * 100;
    let finalP = Math.round(percentage);

    document.getElementById("Score").innerHTML = 'You got: ' + score +  '/5! Your percentage is ' + finalP + '%.';
}
// output
