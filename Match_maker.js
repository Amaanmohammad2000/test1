let fs = require("fs");
const { default: test } = require("node:test");
const { parse } = require("path");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function Mergesort(A,start,end){
    if(start>=end){return;}
    let mid = parseInt((start+end)/2);
    Mergesort(A,start,mid);
    Mergesort(A,mid+1,end);
    Merge(A,start,mid,end);
}

function Merge(A,start,mid,end){
    let n1 = mid-start+1;
    let n2 = end-mid;
    let L =[], R =[];
    for(let i=0; i<n1; i++)
    {
        L[i] = A[start+i];
    }
    for(let j=0; j<n2; j++)
    {
        R[j] = A[mid+1+j];
    }
    let i=0, j=0, k=start;
    while(i<n1 && j<n2){
        if(L[i]<=R[j])
        {
            A[k] = L[i];
            i++;
        }
        else{
            A[k] = R[j];
            j++;
        }
        k++;
    }
    while(i<n1){
        A[k] = L[i];
        i++;k++;
    }
    while(j<n2){
        A[k] = R[j];
        j++;k++;
    }
}

let t = parseInt(readLine());
for(let c=0; c<t; c++)
{
    let n = parseInt(readLine());
    let girls = readLine().split(" ").map(Number);
    let boys = readLine().split(" ").map(Number);
    Mergesort(girls,0,n-1);
    Mergesort(boys,0,n-1);
    let i=0; j=n-1;
    while(i<j)
    {
        let temp = boys[i];
        boys[i] = boys[j];
        boys[j] = temp;
        i++;
        j--;
    }
    let count = 0;
    for(let i=0; i<n; i++){
        if((girls[i]%boys[i])==0 || (boys[i]%girls[i])==0)
        {
            count++;
        }
    }
    console.log(count);
}



