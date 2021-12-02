import * as fs from 'fs';

function dive(){
    let input = fs.readFileSync('./day2.txt', 'utf-8').trim().split(/\s|\n/);
    let final;
    let depth = 0;
    let horizontal = 0;
    for(let i = 0; i < input.length; i++){
        if( input[i] === 'forward') {
            horizontal += parseInt(input[i + 1]);
        } else if (input[i] === 'down') {
            depth += parseInt(input[i+1]);
        } else if (input[i] === 'up') {
            depth -= parseInt(input[i + 1]);
        }
        i++;
    }
    console.log('Your horizontal position is ' + horizontal);
    console.log('Your depth is ' + depth);
    final = horizontal * depth;
    console.log('Your final position is ' + final);
    return;
}

function dive2() {
    let input = fs.readFileSync('./day2.txt', 'utf-8').trim().split(/\s|\n/);
    let final;
    let depth = 0;
    let aim = 0;
    let horizontal = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'forward') {
            horizontal += parseInt(input[i + 1]);
            depth += parseInt(input[i + 1]) * aim; 
        } else if (input[i] === 'down') {
            aim += parseInt(input[i + 1]);
        } else if (input[i] === 'up') {
            aim -= parseInt(input[i + 1]);
        }        
        i++;
    }
    console.log('Your horizontal position is ' + horizontal);
    console.log('Your depth is ' + depth);
    final = horizontal * depth;
    console.log('Your final position is ' + final);
    return;
}

console.log('=======================================');
console.log('Diving Part 1');
console.log('---------------------------------------');
dive();
console.log('=======================================');
console.log('Diving Part 2: Improved Calculations')
console.log('---------------------------------------');
dive2();
console.log('=======================================');