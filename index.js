

// Fetching products from an external Api
const fetchData = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
fetchData();
