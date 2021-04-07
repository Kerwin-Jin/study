let p1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		reject("p1")
	},1000)
})
let p2 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("p2")
	},2000)
})
let p3 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("p3")
	},3000)
})

let p4 = Promise.race([p1,p2,p3])
p4.then(res=>{
	console.log(res)
})