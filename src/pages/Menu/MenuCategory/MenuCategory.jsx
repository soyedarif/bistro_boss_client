import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 mb-5 gap-10 my-16">
        {items.map(item => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
       {title && <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 ">Order Now</button>
        </Link>}
      </div>
    </div>
  );
};

export default MenuCategory;
