console.log("Hello World!\n==========\n");


// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(let count = 1; count <= 100; count+=2){
    console.log(count);
}

let count = 1;

while(count <= 100){
    console.log(count);
    count+=2;
}

do{
    console.log(count);
    count+=2;
} while (count <= 100)


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i = 1; i <= 100; i++)
{
    if(i % 3 == 0 & i % 5 == 0){
        console.log("FIZZBUZZ");
    }
    else if(i % 3 == 0){
        console.log("FIZZ");
    }
    else if(i % 5 == 0){
        console.log("BUZZ");
    }
}

let iterate = 1;

while(iterate <= 100){
    if(iterate % 3 == 0 & iterate % 5 == 0){
        console.log("FIZZBUZZ");
    }
    else if(iterate % 3 == 0){
        console.log("FIZZ");
    }
    else if(iterate % 5 == 0){
        console.log("BUZZ");
    }
    iterate++;
}

do{
    if(iterate % 3 == 0 & iterate % 5 == 0){
        console.log("FIZZBUZZ");
    }
    else if(iterate % 3 == 0){
        console.log("FIZZ");
    }
    else if(iterate % 5 == 0){
        console.log("BUZZ");
    }
    iterate++;
}while(iterate <= 100)

//Exercise 4
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for(let i = 0; i <= n; i++){
    console.log(i);
    if(i == value){
        console.log(`Found value ${value}!`);
        break;
    }
    else if(i == n){
        console.log("Did not find value...");
    }
}

//Exercise 5
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let num = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(let i = start; i <= num; i++){
    if(i % fizzDivisor == 0 & i % buzzDivisor == 0){
        console.log("FIZZBUZZ");
    }
    else if(i % fizzDivisor == 0){
        console.log("FIZZ");
    }
    else if(i % buzzDivisor == 0){
        console.log("BUZZ");
    }
}
console.log(`Fizz: ${fizzDivisor} Buzz: ${buzzDivisor} \nEnd: ${num} Start: ${start}`);