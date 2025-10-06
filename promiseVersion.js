function randomSleepGenerator() {
    return Math.floor(Math.random() * 10000) + 2000;
}

let timeAwake = randomSleepGenerator();


function mowYard(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${name} mowed the yard.`);
        }, 2000);
    })
};

function weedEat(name) {
    return new Promise((resolve, reject) => {
        if (timeAwake >= 3500) {
            setTimeout(() => {
                resolve(`${name} finished using the weed eater.`);
            }, 1500);        
        } else {
            reject(`${name} fell asleep after mowing the yard.`);
        }
    })
}

function trimHedges(name) {
    return new Promise((resolve, reject) => {
        if (timeAwake >= 4500) {
            setTimeout(() => {
                resolve(`${name} finished trimming the hedges.`);
            }, 1000); 
        } else {
            reject(`${name} fell asleep after weed eating the yard.`)
        }          
    })  
}

function collectWood(name) {
    return new Promise((resolve, reject) => {
        if (timeAwake >= 7000) {
            setTimeout(() => {
                resolve(`${name} finished collecting wood.`);
            }, 2500); 
        } else {
            reject(`${name} fell asleep after trimming the hedges.`)
        }   
    }) 
}

function waterGarden(name) {
    return new Promise((resolve, reject) => {
        if (timeAwake >= 7500) {
            setTimeout(() => {
                resolve(`${name} finished watering the garden.`);
            }, 2500);
        } else {
            reject(`${name} fell asleep after collecting wood.`);
        }  
    })  
}

function doSummerChores(name) {
    mowYard(name).then((value) => {console.log(value); return weedEat(name)})
    .then((value) => {console.log(value); return trimHedges(name)})
    .then((value) => {console.log(value); return collectWood(name)})
    .then((value) => {console.log(value); return waterGarden(name)})
    .then((value) => {console.log(value); console.log(`${name} finished all of their chores!`)})
    .catch((error) => {console.log(error)});
}

doSummerChores('Allie');
