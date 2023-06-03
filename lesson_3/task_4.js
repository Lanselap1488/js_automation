function getDiff(one, two) {
  let res1 = String(one).split('');
  let res2 = String(two).split('');
  let allSame = 0;
  let numberSame = 0;

  for (let i in res1) {
    for (x in res2) {
      if (res1[i] === res2[x] && x === i) {
        allSame++;
        continue;
      }
      if (res1[i] === res2[x]) {
        numberSame++;
      }
    }
  }
  return console.log(`Совсем одинаковые ${allSame}, одно число ${numberSame}`);
}

getDiff(3487, 3794);
