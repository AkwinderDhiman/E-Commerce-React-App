import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Home = ()=> {

  const [openSidebar, setOpenSidebar] = useState(true);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

    return (
       <>
       <Header/>

      <Navbar  toggleSidebar={toggleSidebar} />
       <div className="flex p-6">
        <Sidebar openSidebar={openSidebar} />
      <div className="grid grid-cols-3 gap-6">

            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}

          </div>
        </div>
    </>
    )
}

export default Home;