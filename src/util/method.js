export const getRandomElements = (arr, numElements) => {
  const elements = [];
  let currentIndex = arr?.length;
  let temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  for (let i = 0; i < numElements; i++) {
    elements.push(arr[i]);
  }

  return elements;
};
