import * as fs from 'fs';

// advent of code day 1
// typing matters = string comparison vs int comparison
// trim empty lines and split on newline

function sonarSweep(){
    let input = fs.readFileSync('./day1.txt', 'utf-8').trim().split('\n');
    let increased = 0;    
    for(let i = 0; i < input.length; i++){        
        let message;        
        if(i === 0) {
            message = '(N/A - no previous measurement)';
        } else if (parseInt(input[i]) < parseInt(input[i - 1])){
            message =  '(decreased)';            
        } else if (parseInt(input[i]) > parseInt(input[i - 1])){
            increased++;
            message = '(increased)';
        } else if (parseInt(input[i]) == parseInt(input[i - 1])) {
            message = '(no change)';
        }
        console.log(input[i], message);
    }
    console.log('There are ' + increased + ' measurements that are larger than the previous measurement.');
    return;
}

sonarSweep();

function sonarThreeSweep() {
    let input = fs.readFileSync('./day1.txt', 'utf-8').trim().split('\n');
    let increased = 0;
    let currentSum;
    let previousSum;
    for (let i = 0; i < input.length - 2; i++) {
        let message;   
        if(i != 0) {
            previousSum = parseInt(input[i-1]) + parseInt(input[i]) + parseInt(input[i + 1]);
        }    
        currentSum = parseInt(input[i]) + parseInt(input[i+1]) + parseInt(input[i+2]);
        if (previousSum == undefined) { 
            message = '(N/A - no previous sum)';
        } else if (currentSum < previousSum) {
            message = '(decreased)';
        } else if (currentSum > previousSum) {
            increased++;
            message = '(increased)';
        } else if (currentSum == previousSum) {
            message = '(no change)';
        }

        console.log(currentSum, message);
    }
    console.log('There are ' + increased + ' sums that are larger than the previous measurement.');
    return;
}

sonarThreeSweep();


