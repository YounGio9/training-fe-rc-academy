import React from "react";
import Layout from "../components/Layout";
import "../styles/Shop/index.css";

function Shop() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [option, setOption] = React.useState("no");

  // const fetchProducts = async () => {
  //   await fetch("https://fakestoreapi.com/products/")
  //     .then(async (res) => await res.json())
  //     .then((data) => console.log(data));
  // };

  // React.useEffect(() => {
  //   fetchProducts();
  // }, []);

  React.useEffect(() => {
    if (loading) {
      console.log("Loading is finished");
    }
  }, [loading]);

  React.useEffect(() => {
    console.log("I'm rerendered");
  });
  React.useEffect(() => {
    console.log("I just render on the initialization");
  }, []);

  const toggleLoading = () => setLoading(!loading);
  return (
    <Layout>
      <h1 className="shop-title">Sushi food</h1>
      <button> Click me</button>
      <button onClick={toggleLoading}>Toggle me</button>

      <select
        value={option}
        onChange={(e) => {
          setOption(e.target.value);
        }}
      >
        <option value="no">Pas d'option sélectionnée</option>
        <option value={"text"}>Du texte</option>
        <option value={"essai"}> Un Essai</option>
      </select>
    </Layout>
  );
}

export default Shop;
