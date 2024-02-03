console.log('Hello world from js');

let arr = [1, 2, 3, 4, 5, 6, 7];
// cach viet khong dat bien
console.log(arr.filter((item, index) =>{
    return item && item > 3;
}));

let filter1 = arr.filter((item, index) => {
    console.log(`check stt ${index} gia tri ${item}`);
    if(item % 2 ===0) return item;
});

console.log(filter1);

let family = [
    {name: 'Hung1', address: 'HaiPhong', age: 23},
    {name: 'Hung2', address: 'HaiPhong', age: 24},
    {name: 'Hung3', address: 'HaiPhong', age: 25},
    {name: 'Hung4', address: 'HaiPhong', age: 26},
    {name: 'Hung5', address: 'HaiPhong', age: 27},
]

let filterfamily = family.filter((item, index) => {
    return item.name && item.age > 26; 
});

console.log(filterfamily);

let findMember = family.find((item, index) =>{
    if(item.age > 24) return item
})
console.log(findMember)

// filter se lay tat ca du dk 
// find chi lay gt dau tien 
// neu k co kq tm, filter tra ve mang rong, find tra undefined