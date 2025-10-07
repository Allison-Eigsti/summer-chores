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

async function doSummerChores(name) {
    
    try {
        let mowYardResult = await mowYard(name);
        console.log(mowYardResult);
    
        let weedEatResult = await weedEat(name);
        console.log(weedEatResult);
    
        let trimHedgeResult = await trimHedges(name);
        console.log(trimHedgeResult);
    
        let collectWoodResult = await collectWood(name);
        console.log(collectWoodResult);
    
        let waterGardenResult = await waterGarden(name);
        console.log(waterGardenResult);
        console.log(`${name} finished their summer chores!`)
    }
    catch(error) {
        console.error(error);
    }
}

doSummerChores('Allie');
