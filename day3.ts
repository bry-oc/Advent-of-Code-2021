import * as fs from 'fs';

function binaryDiagnostic() {
    let input = fs.readFileSync('./day3.txt', 'utf-8').trim().split('\n');
    let bitCount = new Array<number>(input[0].length);
    bitCount.fill(0);
    let half = Math.floor(input.length / 2);
    let gammaRate = "";
    let epsilonRate = "";
    let powerConsumption = 0;
    for (let i = 0; i < input.length; i++) {
        for(let j = 0; j < input[i].length; j++){
            if(input[i][j] === "1" ) {
                bitCount[j]++;
            }
        }
    }

    for(let i = 0; i < bitCount.length; i++) {
        if (bitCount[i] > half) {
            gammaRate += "1";
            epsilonRate += "0";
        } else {
            gammaRate += "0";
            epsilonRate += "1";
        }
    }
    
    powerConsumption = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
    console.log("The gamma rate is " + gammaRate);
    console.log("The epsilon rate is " + epsilonRate);
    console.log("The power consumption of the submarine is " + powerConsumption);
    return;
}

binaryDiagnostic();