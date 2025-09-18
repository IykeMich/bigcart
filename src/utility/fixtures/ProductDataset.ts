// data/products.ts
import { ImageSourcePropType } from 'react-native';

// Import product images
import PeachesImg from '@/assets/images/products/Peaches.png';
import AvocadoImg from '@/assets/images/products/Avacado.png';
import AvocadoBg from '@/assets/images/products/AvacadoBg.png';
import PineappleImg from '@/assets/images/products/Pineapple.png';
import PineappleBg from '@/assets/images/products/PineappleBg.png';
import GrapeImg from '@/assets/images/products/Grape.png';
import GrapeBg from '@/assets/images/products/GrapeBg.png';
import PomegranateImg from '@/assets/images/products/Pomegranate.png';
import PomegranateBg from '@/assets/images/products/PomegranateBg.png';
import BroccoliImg from '@/assets/images/products/Broccoli.png';
import BroccoliBg from '@/assets/images/products/BroccoliBg.png';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';

export type Product = {
  id: string
  name: string
  price: number
  unit: string
  image: ImageSourcePropType
  isNew?: boolean
  discount?: number // negative number means percentage discount
  imageBg?: ImageSourcePropType
  description?: string
  category?: string
  rating?: number | Float
}

export const products: Product[] = [
  {
    id: "1",
    name: "Fresh Peach",
    price: 8.5,
    unit: "dozen",
    image: PeachesImg,
    category: "Fruits",
    description: "Organic Mountain works as a seller for many organic growers of organic lemons. Organic lemons are easy to spot in your produce aisle. They are just like regular lemons, but they will usually have a few more scars on the outside of the lemon skin. Organic lemons are considered to be the world's finest lemon for juicing",
    rating: 4.5
  },
  {
    id: "2",
    name: "Avocado",
    price: 7.0,
    unit: "2.0 lbs",
    image: AvocadoImg,
    imageBg: AvocadoBg,
    isNew: true,
    category: "Fruits",
    description: "Organic Mountain works as a seller for many organic growers of organic lemons. Organic lemons are easy to spot in your produce aisle. They are just like regular lemons, but they will usually have a few more scars on the outside of the lemon skin. Organic lemons are considered to be the world's finest lemon for juicing",
    rating: 4.50
  },
  {
    id: "3",
    name: "Pineapple",
    price: 9.0,
    unit: "1.0 lbs",
    image: PineappleImg,
    imageBg: PineappleBg,
    category: "Fruits",
    description: "Organic Mountain works as a seller for many organic growers of organic lemons. Organic lemons are easy to spot in your produce aisle. They are just like regular lemons, but they will usually have a few more scars on the outside of the lemon skin. Organic lemons are considered to be the world's finest lemon for juicing",
    rating: 2.5

  },
  {
    id: "4",
    name: "Black Grapes",
    price: 7.0,
    unit: "5.0 lbs",
    image: GrapeImg,
    imageBg: GrapeBg,
    discount: -16,
    category: "Fruits",
  },
  {
    id: "5",
    name: "Pomegranate",
    price: 9.0,
    unit: "1.50 lbs",
    image: PomegranateImg,
    imageBg: PomegranateBg,
    isNew: true,
    category: "Fruits",
  },
  {
    id: "6",
    name: "Fresh Broccoli",
    price: 3.0,
    unit: "1 kg",
    image: BroccoliImg,
    imageBg: BroccoliBg,
    isNew: true,
    category: "Vegetables",
  },
]
