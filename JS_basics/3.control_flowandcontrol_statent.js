// ================= CONTROL FLOW =================
// Control flow means: how program makes decisions and repeats tasks


// ================= IF STATEMENT =================
// Runs code only if condition is true

let age = 19;

if (age >= 18) {
    console.log("Can vote");
}


// ================= IF ELSE =================
// One block runs if true, another if false

if (age >= 18) {
    console.log("Can vote");
} else {
    console.log("Cannot vote");
}


// ================= IF ELSE IF ELSE =================
// Used when we have multiple conditions

if (age >= 50) {
    console.log("Gen X");
} else if (age >= 20) {
    console.log("Gen Z");
} else {
    console.log("Gen Beta");
}


// ================= SWITCH STATEMENT =================
// Used when comparing one value with many cases

let day = 1;

switch (day) {
    case 1:
        console.log("Sunday");
        break;  // stops execution after match

    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid day");
}


// ================= LOOPS =================
// Loops repeat code multiple times


// ---------- FOR LOOP ----------
// Used when we know how many times to repeat

for (let i = 1; i <= 5; i++) {
    console.log("For loop number:", i);
}


// ---------- WHILE LOOP ----------
// Runs while condition is true

let i = 1;
while (i <= 5) {
    console.log("While loop number:", i);
    i++;
}


// ---------- DO WHILE LOOP ----------
// Runs at least once, then checks condition

let j = 1;
do {
    console.log("Do While number:", j);
    j++;
} while (j <= 5);
