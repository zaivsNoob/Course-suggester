const obj = {
    "power1":['eng091','eng101'],
    "power2":['cse110','cse111']
    
}

const courses=["cse110","eng101"]

console.log(obj.power1.filter((item)=>item!==courses[1]))