function randomSleepGenerator() {
    return Math.floor(Math.random() * 10000) + 2000;
}

let timeAwake = randomSleepGenerator();

function mowYard(name, callback) {
    setTimeout(() => {
        console.log(`${name} mowed the yard.`);
        callback();
    }, 2000);
};

function weedEat(name, callback) {
    if (timeAwake >= 3500) {
        setTimeout(() => {
            console.log(`${name} finished using the weed eater.`);
            callback();
        }, 1500);        
    } else {
        console.log(`${name} fell asleep after mowing the yard.`)
    }
}

function trimHedges(name, callback) {
    if (timeAwake >= 4500) {
        setTimeout(() => {
            console.log(`${name} finished trimming the hedges.`);
            callback();
        }, 1000); 
    } else {
        console.log(`${name} fell asleep after weed eating the yard.`)
    }    
}

function collectWood(name, callback) {
    if (timeAwake >= 7000) {
        setTimeout(() => {
            console.log(`${name} finished collecting wood.`);
            callback();
        }, 2500); 
    } else {
        console.log(`${name} fell asleep after trimming the hedges.`)
    }    
}

function waterGarden(name, callback) {
    if (timeAwake >= 7500) {
        setTimeout(() => {
            console.log(`${name} finished watering the garden.`);
            callback();
        }, 2500);
    } else {
        console.log(`${name} fell asleep after collecting wood.`);
    }    
}

function doSummerChores(name) {
    mowYard(name, () => {
        weedEat(name, () => {
            trimHedges(name, () => {
                collectWood(name, () => {
                    waterGarden(name, () => {
                        console.log(`${name} completed all of their chores!`);
                    });
                })
            })
        })
    })
}

doSummerChores('Allie');
