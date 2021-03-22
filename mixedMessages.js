const fillArrays = () => {
    let nestedArr = [];
    let nameArr = [];
    let activityArr = [];
    let adjectiveArr = [];

    nameArr = ["sebbe", "kalle", "simon", "samme", "johan"];
    nestedArr.push(nameArr);

    activityArr = ["gaming", "playing golf", "cycling", "jogging", "working", "blasting"];
    nestedArr.push(activityArr);

    adjectiveArr = ["fast", "good", "great", "like a boss", "like a beast", "bad", "cucked"]
    nestedArr.push(adjectiveArr);

    return nestedArr;
}

const makeMessage = (nestedArr) => {
    let randomName = Math.floor(Math.random() * nestedArr[0].length);
    let randomActivity = Math.floor(Math.random() * nestedArr[1].length);
    let randomAdjective = Math.floor(Math.random() * nestedArr[2].length);
    let message = `${nestedArr[0][randomName]} is ${nestedArr[1][randomActivity]} ${nestedArr[2][randomAdjective]}`;

    return message;
}

let arr = [];
arr = fillArrays();
// console.log(arr);
let msg = makeMessage(arr);

console.log(msg);


