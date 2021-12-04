import * as fs from 'fs';

function binaryDiagnostic() {
    let input = fs.readFileSync('./day3.txt', 'utf-8').trim().split('\n');
    let bitCount = new Array<number>(input[0].length);
    bitCount.fill(0);
    let half = input.length / 2;
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
    console.log("The gamma rate is " + parseInt(gammaRate, 2));
    console.log("The epsilon rate is " + parseInt(epsilonRate, 2));
    console.log("The power consumption of the submarine is " + powerConsumption);
    return;
}

binaryDiagnostic();

// read the file
// fill oxygen and carbon dioxide

// oxygen rating
// look at first bit >>>> count 1s/0s >>>> keep numbers with majority >>>? go to next bit

//carbon dioxide rating
// look at first bit >>>> count 1s/0s >>>> keep numbers with minority >>>> go to next bit

function lifeSupport(){
    let input = fs.readFileSync('./day3.txt', 'utf-8').trim().split('\n');    
    let half = 0;
    let oxygenGeneratorRating = input.slice(0);
    let carbonDioxideScrubberRating = input.slice(0);
    let lifeSupportRating = 0;
    let currentBit = 0;
    let bitCount = 0;

    while (oxygenGeneratorRating.length > 1 && currentBit < oxygenGeneratorRating[0].length) {
        half = oxygenGeneratorRating.length / 2;
        for(let i = 0; i < oxygenGeneratorRating.length; i++) {
            if(oxygenGeneratorRating[i][currentBit] === "1") {
                bitCount++;
            }
        }
        for (let i = 0; i < oxygenGeneratorRating.length; i++) {
            oxygenGeneratorRating = oxygenGeneratorRating.filter(function (val, index, array) {
                if (bitCount >= half && val[currentBit] === "1") {
                    return val;
                } else if (bitCount < half && val[currentBit] === "0") {
                    return val;
                }
            })      
        }
        currentBit++;
        bitCount = 0;
    }

    currentBit = 0;
    bitCount = 0;

    while (carbonDioxideScrubberRating.length > 1 && currentBit < carbonDioxideScrubberRating[0].length) {
        half = carbonDioxideScrubberRating.length / 2;
        for (let i = 0; i < carbonDioxideScrubberRating.length; i++) {
            if (carbonDioxideScrubberRating[i][currentBit] === "1") {
                bitCount++;
            }
        }
        for (let i = 0; i < carbonDioxideScrubberRating.length; i++) {
            carbonDioxideScrubberRating = carbonDioxideScrubberRating.filter(function (val, index, array) {
                if (bitCount >= half && val[currentBit] === "0") {
                    return val;
                } else if (bitCount < half && val[currentBit] === "1") {
                    return val;
                }
            })
        }
        currentBit++;
        bitCount = 0;
    }
    
    console.log("The oxygen generator rating is " + parseInt(oxygenGeneratorRating[0], 2));
    console.log("The CO2 scrubber rating is " + parseInt(carbonDioxideScrubberRating[0], 2));

    lifeSupportRating = parseInt(oxygenGeneratorRating[0], 2) * parseInt(carbonDioxideScrubberRating[0], 2);

    console.log("The life support rating of the submarine is " + lifeSupportRating);
}

lifeSupport();