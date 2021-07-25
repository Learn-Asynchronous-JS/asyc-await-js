console.log("start");

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { name: "Asitha", location: "Kadawatha", secret: "123" };
            resolve(user);
        }, 4000);
    });
}

function getScrets(secretId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const secret = { secret: [1, 2, 3, 4, 5, 6] };
            resolve(secret);
        }, 4000);
    });
}

async function displayInfo() {
    const user = await getUser(1);
    const secrets = await getScrets(user.secret);
    console.log(user);
    console.log(secrets);
}

displayInfo();

console.log("end");
