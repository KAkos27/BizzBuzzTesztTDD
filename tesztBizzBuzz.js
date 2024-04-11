import bizzBuzz from "./bizzbuzz.js";

const teszBizzBuzz = () => {
  const tesztEsetek = [
    {
      n: 0,
      vart: "nincs ilyen sorozat",
    },
    {
      n: -1,
      vart: "nincs ilyen sorozat",
    },
    {
      n: 1,
      vart: "1",
    },
    {
      n: 2,
      vart: "1, BIZZ",
    },
    {
      n: 3,
      vart: "1, BIZZ, BUZZ",
    },
  ];

  tesztEsetek.forEach((tesztEset) => {
    const kapott = bizzBuzz(tesztEset.n);
    console.assert(
      tesztEset.vart === kapott,
      "%o",
      `n: ${tesztEset.n} | várt: ${tesztEset.vart} | kapott: ${kapott}`
    );
  });
};

export default teszBizzBuzz;
