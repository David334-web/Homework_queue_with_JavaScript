function queue2(){
    this.arr = [];
}

queue2.prototype.add = function(value){
    this.arr.push(value);
}

queue2.prototype.delete = function(value){
    this.arr.shift(value);
}

const pil = new queue2();

pil.add(1);
pil.add(2);
pil.add(3);

console.log(pil);
console.log(pil.delete());