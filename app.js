const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
    console.log("please write a number");
} else if (age < 18) {
    console.log("You are too young");
} else if (50 > age && age > 19) {
    console.log("Welcome");
} else if (100 === age) {
    console.log("wowwow");
} else {
    console.log("drink little bit");
}