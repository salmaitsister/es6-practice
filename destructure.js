const person = { name: 'Jack William', age: 17, job: 'facebook', gfName: 'Ema Watson', address: 'Kocho Khet', phone:'01717112211', friends:['Tom hancks', 'tom cruise', 'Tom yarn ']}

const{ address, phone, gfName, salary } = person;
//const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, salary, address);
// console.log(gfName, phone, salary, address);


const friends = ['Sakib khan', 'Arman khan', 'Aamir khan', 'Salman khan', 'Sharukh khan'];
const [chotoFriend, ...olderF] = friends;
console.log(olderF)