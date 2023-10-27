import { Category } from "@/types/global";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`, {
    cache: "no-cache",
  });

  return res.json();
};

export default getCategory;
