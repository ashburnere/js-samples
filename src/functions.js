"use strict";

let username="Test";

console.log(username);

if (username.startsWith("T")) {
    console.log("T");
} else {
      console.log("not T");
}

() => {
    console.log("should never happen");
};

let showNewsletter = () => {
    console.log("called function showNewsletterFor");
};

showNewsletter();

var p = showNewsletter;
p();


let showNewsletterFor = (user) => {
    console.log(`called function showNewsletterFor from user ${user}`); // Template string using back ticks
}

function showNewsletterForOld(user) {
    console.log('called function showNewsletterFor from user ' + user);
}

showNewsletterFor("jh");
showNewsletterForOld("cxc");


let printer = (bmiDelegate) => {
    console.log("your BMI is " + bmiDelegate(80, 1.82));
}

let calculateBMI = (weight, height) => {
    return weight / (height*height);
}
 

printer(calculateBMI);



