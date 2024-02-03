let arr = [1,2,3,4,5,6,7,8,9,10];

// lặp bằng for
// for (let i = 0; i < arr.length; i++){
//     arr[i]*=arr[i];
// }

// lap bang map
let arrMap = arr.map((item, index) => {
    item *= item;
    return item;
});
console.log(arr);
console.log(arrMap);

// su dung map de lap roi truyen ket qua sang mang moi
// tranh lam thay doi mang ban dau