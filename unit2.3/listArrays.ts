let firstList: Array<number> = []
//firstList is empty for now, we will add numbers using the .push() method
let secondList: Array<string> = [
    "thing1", 
    "thing2", 
    "thing3"
]
//The .push() method adds items to whatever array you assign.
firstList.push(510)
firstList.push(849)
firstList.push(3.14159)
//510, 849,3.14159 should all be added to the firstList array
console.log("The first list is: ", firstList)
//using the .pop() method you are able to delete the last item on array
console.log("The item at the end of the second list is: ", secondList.pop())
//After the pop the secondlist should only have thing1 and thing2
console.log("the remaining items on the second list are: ", secondList)
//access array items by the index, arrays start at 0
console.log("this should be thing1", secondList[0])
console.log("this should be thing2", secondList[1])
