let fs = require("fs");
const { parse } = require("path");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let arr = readLine().split("");
let start = parseInt(arr.length/2);
for(let i=start+1; i<arr.length; i++){
    let key = arr[i];
    let j = i-1;
    while(j>=start && arr[j]>key){
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = key;
}
let word = "";
for(let i=0; i<arr.length; i++){
    word += arr[i];
}
console.log(word);