import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";

const PopularMenu = () => {
  const [menu]=useMenu()
  const popular=menu.filter(item => item.category === "popular")
 /*  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then(res => res.json())
      .then(data => {
        const popularItems = data.filter(item => item.category === "popular");
        setMenu(popularItems);
      });
  }, []); */

  return (
    <section className="mb-12">
      <SectionTitle subHeading={"Popular Items"} heading={"FROM OUR MENU"}></SectionTitle>
      <MenuCategory items={popular}></MenuCategory>
      <div className="grid justify-center">
        <button className="btn btn-outline border-0 border-b-4 ">View Full Menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;
