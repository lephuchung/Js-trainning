// function
let sum = (a, b) =>{
    return a + b;
}

let obj = {
    name: 'Hung',
    address: 'Hai Phong',
    //method
    getname: function(){
        return this.name;
    }
}

console.log(sum(2,3));
console.log(obj.getname());
