import RestNavBar from "../components/RestNavBar";
import Menu from "../components/Menu";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchRestMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });

  if (!restaurant) {
    throw new Error();
  }

  return restaurant.items;
};

const RestaurantMenu = async ({ params }: { params: { slug: string } }) => {
  const menu = await fetchRestMenu(params.slug);
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestNavBar slug={params.slug} />
        <Menu menu={menu} />
      </div>
    </>
  );
};

export default RestaurantMenu;
