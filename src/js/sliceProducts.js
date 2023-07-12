export const sliceProducts = (products, type) => {
  const randomIndex = Math.floor(Math.random() * products.length);

  if (type === "Bookmark") {
    products.slice(
      products.length < 4 ? 0 : products.length - 4 - products.length
    );
  } else if (type === "All") {
    products.slice(randomIndex, randomIndex + 4);
  }
};
