function* test(){
	yield(1);
	yield(2);
	yield(3);
	yield(4);
}

var iter = test()
// console.log(iter)
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

for(var i of iter){
	console.log(i)
}