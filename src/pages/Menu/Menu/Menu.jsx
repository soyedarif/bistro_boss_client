import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/menu-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === "dessert");
  const pizzas = menu.filter(item => item.category === "pizza");
  const soups = menu.filter(item => item.category === "soup");
  const salads = menu.filter(item => item.category === "salad");
  const offered = menu.filter(item => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      {/* main cover */}
      <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
      {/* offered menu items*/}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory title={"dessert"} coverImg={dessertImg} items={desserts}></MenuCategory>
      {/* Pizza menu items */}
      <MenuCategory title={"pizza"} coverImg={pizzaImg} items={pizzas}></MenuCategory>
      {/* Salad Menu*/}
      <MenuCategory title={"salad"} coverImg={saladImg} items={salads}></MenuCategory>
      {/* Soup Menu */}
      <MenuCategory title={"soup"} coverImg={soupImg} items={soups}></MenuCategory>
    </div>
  );
};

export default Menu;
