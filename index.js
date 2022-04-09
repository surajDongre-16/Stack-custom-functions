
function myStack(){

    Object.defineProperty(this, "length", {
        value : 0,
        writable :true,
        enumerable : false
       
    })

    this.length=arguments.length

    for(let i=0;i<this.length;i++){
        this[i]=arguments[i]

    }
}

let s1= new myStack("a","b","c","d")

myStack.prototype.push=function(value){
    let index=this.length
    this[index]=value
    this.length++
}

myStack.prototype.pop=function(){
    let index=this.length-1
    delete this[index]
    this.length--
}


myStack.prototype.top=function(){
    let index=this.length-1
    return this[index]
}

myStack.prototype.reverse=function(value){
    let x=[]
    let index=this.length-1
    for(let i=index;i>=0;i--){
        x.push(value[i])
    }
    // console.log(value)
    return x
}

myStack.prototype.print=function(value){
    let x=[]
    let index=this.length
    for(let i=0;i<index;i++){
        x.push(value[i])
    }
    // console.log(value)
    return x
}

myStack.prototype.size=function(){
    return this.length
}










s1.push("z")
s1.pop()
s1.pop()
console.log(Object.values(s1))

console.log("top: ",s1.top())

console.log("print: ",Object.values(s1.print(s1)))

console.log("reverse: ",Object.values(s1.reverse(s1)))

console.log("size: ",s1.size())
