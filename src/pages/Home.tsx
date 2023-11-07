import Banner from "../components/Banner";
import ProductsFeed from "../components/ProductsFeed";

const Home = () => {
  return (
    <main className=" max-w-screen-xl mx-auto border  bg-gray-100">
      <Banner />
      <ProductsFeed />
    </main>
  );
};

export default Home;
