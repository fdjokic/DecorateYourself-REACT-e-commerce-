export const urlProducts = "https://fakestoreapi.com/products/";

export const getUniqueValue = (data, type) => {
  let unique = data.map((item) => item[type]);
  return ["all", ...new Set(unique)];
};
