import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart,FaUtensils, FaWallet, FaCalendarAlt, FaHome, FaHamburger, FaBook, FaUsers, FaBuromobelexperte } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  //TODO: load data from the server to have dynamic isAdmin based on data.
  // const isAdmin = true;
  const [isAdmin]=useAdmin()

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side  ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#D1A054] ">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <FaUtensils/>
                  Add an Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaBuromobelexperte/>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/">
                <FaBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers/>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  <FaCalendarAlt />
                  Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart>My Cart
                  <span className="badge text-white badge-secondary">+{cart?.length || 0}</span>
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaHamburger /> Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">Order Food</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
