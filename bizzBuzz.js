const seged = (n) => {
  let eredmeny;
  if (n === 1) {
    eredmeny = "1";
  } else if (n % 2 === 0 && n % 3 === 0) {
    eredmeny = "BIZZBUZZ";
  } else if (n % 2 === 0) {
    eredmeny = "BIZZ";
  } else if (n % 3 === 0) {
    eredmeny = "BUZZ";
  } else {
    eredmeny = n;
  }

  return eredmeny;
};

const bizzBuzz = (n) => {
  let eredmeny;
  if (n <= 0) {
    eredmeny = "nincs ilyen sorozat";
  } else {
    for (let i = 0; i <= n; i++) {
      eredmeny += i === n ? seged(i) : seged(i) + ", ";
    }
  }
  return eredmeny;
};

export default bizzBuzz;
