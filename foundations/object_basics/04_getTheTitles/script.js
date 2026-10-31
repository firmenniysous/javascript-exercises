let users = [
    {
        name: "Aydin",
        age: 28,
    },
    {   name: "Kristina",
        age: 21,
    }
];

let userNames = users.map((obj, name) => {
    return obj.name;
});
console.log(userNames);