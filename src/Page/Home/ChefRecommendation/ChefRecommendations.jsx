import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import cardImg from "../../../assets/home/slide5.jpg";

const ChefRecommendations = () => {
  return (
    <section className="my-20">
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subHeading={"Should Try"}
      ></SectionTitle>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        <div className=" bg-base-100 w-96 shadow-xl">
          <figure>
            <img className="w-full h-80" src={cardImg} alt="Shoes" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline btn-warning border-0 border-b-4 uppercase bg-slate-100">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-base-100 w-96 shadow-xl">
          <figure>
            <img className="w-full h-80" src={cardImg} alt="Shoes" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline btn-warning border-0 border-b-4 uppercase bg-slate-100">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-base-100 w-96 shadow-xl">
          <figure>
            <img className="w-full h-80" src={cardImg} alt="Shoes" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline btn-warning border-0 border-b-4 uppercase bg-slate-100">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommendations;
