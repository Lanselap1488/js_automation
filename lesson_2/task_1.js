let resPerson1 = 0;
let resPerson2 = 0;

for (let i = 1; i <= 3; i++) {
  let person1 = Math.random() * 6;
  let person2 = Math.random() * 6;

  resPerson1 = Math.ceil(person1);
  resPerson2 = Math.ceil(person2);
}
console.log(resPerson1, resPerson2);

if (resPerson1 > resPerson2) {
  console.log('Первый игрок победил');
}
if (resPerson2 > resPerson1) {
  console.log('Второй игрок победил');
}
if (resPerson1 === resPerson2) {
  console.log('Ничья!');
}
