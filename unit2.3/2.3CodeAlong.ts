console.log("\nFirst Object\n")

var myPerson = {
    firstName: "Bernice",
    lastName: "Ortiz",
    age: "26",
};
console.log(`Person: \n 
Name: "${myPerson.firstName} ${myPerson.lastName}"
\n Age: ${myPerson.age}`)

console.log("\nOur Array\n")

var icecreamFlavors: Array<string> = [
    "Mint Chocolate Chip",
    "Caramel Praline",
    "Strawberry",
    "Vanilla Bean",
    "Pistachio",
    "Reeses",
    "Chocolate",
    "Moose Tracks"
];

icecreamFlavors.forEach((flavor, i) => {
console.log(`${i + 1}. ${flavor}`)
})

console.log("\nArray of Objects\n")

var people = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 45
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 43
    },
    {
        firstName: "James",
        lastName: "Doe",
        age: 20
    }
];

people.forEach((person) => {
    console.log(`Person: \n "${person.firstName}, ${person.lastName} 
    \n Age: ${person.age}`)
})

console.log("\nAn object with an array\n")

var myPersonWithAnArray = {
    firstName: "John",
    lastName: "Doe",
    age: 45,
    johnsFavIcecream: [
        "Mint chip",
        "Caramel Praline",
        "Strawberry",
        "Vanilla Bean",
        "Reeses"
    ]
};

console.log(`Name: ${myPersonWithAnArray.firstName} ${myPersonWithAnArray.lastName}`)
console.log(`\t Favorite Ice Cream Flavors: `)
myPersonWithAnArray.johnsFavIcecream.forEach((flavor) => {
    console.log(`${flavor}`)
})