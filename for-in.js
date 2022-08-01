let array1 = ["cat", "dogs", "lions"]
for (let elements in array1) {
    console.log(elements)
}
//example 2
let array2 = {
    nigeria:"elephant",
    uganda:"sheep"
}
for (let prop in array2) {
    console.log(array2[prop])
    console.log ('in',prop,' we have', array2[prop])
}
