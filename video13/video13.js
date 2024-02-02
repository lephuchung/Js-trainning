let arr = ['MU', 'MCT', 'ARSS'];
for(let i = 0; i < arr.length; i++){
    if(arr[i].length === 2){
        console.log(arr[i]);
    }
    else if(arr[i].length === 4){
        console.log(arr[i]);
    }
    else{
        continue;
        // break;
    }
    
}