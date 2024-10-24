import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-20">
            <SectionTitle
            heading={'Featured Item'}
            subHeading={'Check it out'}
            ></SectionTitle>

            <div className="md:flex justify-center items-center pt-10 pb-20 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Nov 24, 2024</p>
                    <p>Where can i get some?</p>
                    <p>"Craving something delicious? Order now from Bistro Boss and enjoy fresh, flavorful dishes made just for you! Quick, easy, and satisfying, your perfect meal is just a click away!"</p>
                    <button className="btn btn-outline">Order Now</button>

                </div>
            </div>
        </div>
    );
};

export default Featured;