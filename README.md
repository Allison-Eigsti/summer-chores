# summer-chores

## Description
This project serves as asynchronous JavaScript practice, using 3 different methods: callbacks, promises(then/catch), and async/await.

## callbackVersion.js
The first file experiments with callback functions by simulating how long it takes a person to complete their list of summer chores. A random number generator is used to retrieve a random amount of time the person has before falling asleep, and each of the chore functions uses setTimeout to simulate the time it takes to complete that task. By simply entering a persons name as a string literal, the program will tell you if how many chores were completed (in real time) and if they fell asleep on the job.

## promiseVersion.js
The second file arrives at the same result as the callbackVersion, but using the promise/then/catch method. Each chore function is a new Promise object that accepts two arguments: the resolve and the reject. Then, the doSummerChores function is structured as a chain using .then() and .catch() to handle the resolves or rejections that arise.

## asyncAwaitVersion.js
The third file completes the same activity by using an async/await function. The doSummerChores() function is an asynchronous function, meaning it returns a Promise, and the await keywords pause the code execution until each Promise is resolved/rejected. The try, catch block is used to handle errors gracefully in the case of a Promise being rejected.

## Installation
- Install VSCode or another code editor
- Clone the gitHub repository
- Cd into the summer-chores folder to open the callbackVersion.js file

## Usage
- Enter a string literal (the name of the person to complete the chores) into the doSummerChores() function
- Open the terminal in VSCode and cd into the summer-chores folder
- run node callbackVerson.js

### Credits
A project from Code:You
