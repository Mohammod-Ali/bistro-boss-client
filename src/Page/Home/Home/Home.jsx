import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommendations from "../ChefRecommendation/ChefRecommendations";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <ChefRecommendations></ChefRecommendations>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;