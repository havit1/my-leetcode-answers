var romanToInt = function (s) {
  const array = s.split("");
  const numbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const arrayInNumbers = array.map((el) => numbers[`${el}`]);
  const lastArray = arrayInNumbers.reduce(
    (previousValue, currentValue, currentIndex, array) => {
      if (currentValue < arrayInNumbers[currentIndex + 1]) {
      }
    },
    0
  );
  console.log(arrayInNumbers);
};

romanToInt("IVX");
