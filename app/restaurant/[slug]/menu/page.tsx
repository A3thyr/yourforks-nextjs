import { FC } from "react";
import RestaurantHeader from "../components/RestaurantHeader";
import RestNavBar from "../components/RestNavBar";
import Menu from "../components/Menu";

const RestaurantMenu: FC = () => {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestNavBar />
        <Menu />
      </div>
    </>
  );
};

export default RestaurantMenu;
