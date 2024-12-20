import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedList from "../FeaturedList/FeaturedList";

const Home = () => {
    return (
        <div className="text-center">
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedList></FeaturedList>
        </div>
    );
};

export default Home;