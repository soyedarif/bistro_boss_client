import FoodCard from "../../../components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//to do pagination here

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
   
    <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      
        {items.map(item => (
        <FoodCard item={item} key={item._id}></FoodCard>
      ))}
      </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default OrderTab;
