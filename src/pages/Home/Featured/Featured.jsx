import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item pt-8 my-20">
      <SectionTitle heading={"Featured Item"} subHeading={"Check it out"}></SectionTitle>
      <div className="md:flex justify-center items-center py-20 px-36">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10">
            <p>Aug 20, 2019</p>
            <p className="uppercase">Where can I get some</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore at omnis dignissimos aliquid consequuntur, adipisci animi aspernatur blanditiis voluptas ducimus molestias modi nobis asperiores similique? Modi commodi quod quaerat tempora esse, debitis totam ipsam dolor, blanditiis eveniet vel reiciendis ipsa aliquid, sed impedit sit voluptate?</p>
            <button className="btn btn-outline border-0 border-b-4 text-white">Order Now</button>
          </div>
      </div>
    </div>
  );
};

export default Featured;
