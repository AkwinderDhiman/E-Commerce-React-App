import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Home = () => {

  return (
    <div className="flex p-6">
      
      <div className="grid grid-cols-4 md:grid-cols-2 gap-6 w-full">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;