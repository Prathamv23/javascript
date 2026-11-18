//task-8  Group users by city: { Surat: [...], Mumbai: [...], Pune: [...] } . (Hint: reduce and {} )

const usersss = [
    { name: "Pratham", city: "Surat" },
    { name: "Rahul", city: "Mumbai" },
    { name: "Amit", city: "Pune" },
    { name: "Ravi", city: "Surat" },
    { name: "Meera", city: "Mumbai" },
    { name: "Karan", city: "Pune" },
    { name: "Jay", city: "Surat" }
];

const groupedUsers = usersss.reduce((acc, user) => {

    if (!acc[user.city]) {
        acc[user.city] = [];
    }

    acc[user.city].push(user);

    return acc;

}, {});

console.log(groupedUsers);
