import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PopularItems from "../components/PopularItems/PopularItems";
import RecommendedItems from "../components/RecommendedItems/RecommendedItems";

const Home = () => {
  return (
    <div className="bg-[#EEEFF0] ">
      {/* --- nav bar start --- */}
      <div>
        <NavBar />
      </div>
      {/* --- nav bar end --- */}
      {/* --- banner section start --- */}
      <div>
        <Banner />
      </div>

      {/* --- banner section end --- */}

      {/* --- popular food items section start --- */}
      <div>
        <PopularItems />
      </div>
      {/* --- popular food items section end --- */}

      {/* --- recommended food items section start --- */}
      <div>
        <RecommendedItems />
      </div>
      {/* --- recommended food items section end --- */}

      {/* --- footer area start --- */}
      <div className="bg-[#F99F1D]">
        <Footer />
      </div>
      {/* --- footer area end --- */}
    </div>
  );
};

export default Home;
