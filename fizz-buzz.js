//let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz to")); #This does not work as the prompt functionality is only available in browsers

function FizzBuzz(n) {

    //This let's the loop run from 1(because it starts counting from 1) to the number specified: n
    for (let i = 1; i <= n; i++){
        //checks if the number is divisible by both 3 and 5 
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        //checks if the number is divisible by 3
        } else if (i % 3 === 0) {
            console.log('Fizz')
        //checks if the number is divisible by 5
        } else if (i % 5 === 0) {
            console.log('Buzz') 
        //otherwise just print the number as is
        } else {
            console.log(i)
        }
    }
}

FizzBuzz(50);