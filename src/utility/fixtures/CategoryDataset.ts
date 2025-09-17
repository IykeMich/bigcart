import Vegetable from "@/assets/icons/category/Vegetables.svg"
import Fruit from  "@/assets/icons/category/Fruits.svg"
import Beverages from  "@/assets/icons/category/Beverages.svg"
import Grocery from  "@/assets/icons/category/Grocery.svg"
import EdibleOil from  "@/assets/icons/category/EdibleOil.svg"
import Household from  "@/assets/icons/category/HouseHold.svg"
import BabyCare from  "@/assets/icons/category/BabyCare.svg"

type categoryProps = {
    id: number,
    name: string,
    icon: any
}

export const categories: categoryProps[] = [
    {id: 1, name: "Vegetables", icon: Vegetable},
    {id: 2, name: "Fruits", icon: Fruit},
    {id: 3, name: "Beverages", icon: Beverages},
    {id: 4, name: "Grocery", icon: Grocery},
    {id: 5, name: "Edible Oil", icon: EdibleOil},
    {id: 6, name: "Household", icon: Household},
    {id: 7, name: "Babycare", icon: BabyCare},
  ]