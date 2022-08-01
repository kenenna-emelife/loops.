let array1 = ["cat", "dogs", "lions"]
//this is a for...in loop
for (let elements in array1) {
    console.log(elements)
}


//in this i am declaring the property and value
let array2 = ["nigeria:elephant", "uganda:sheep"]
for (let prop in array2) {
    console.log(array2[prop])
    console.log ('in',prop,' we have', array1[prop])
}