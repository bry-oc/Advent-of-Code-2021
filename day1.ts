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
        }
        console.log(input[i], message);
    }
    console.log('There are ' + increased + ' measurements that are larger than the previous measurement.');
    return;
}

sonarSweep();


