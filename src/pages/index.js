import Banner from "@/components/ui/Banner";
import FeaturedCategories from "@/components/ui/FeaturedCategories";
import FeaturedProducts from "@/components/ui/FeaturedProducts";

const HomePage = () => {
  return (
    <div className='min-h-screen'>
      <Banner />
      <FeaturedProducts />
      <FeaturedCategories />
    </div>
  );
};

export default HomePage;