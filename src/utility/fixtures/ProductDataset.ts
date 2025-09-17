// data/products.ts

export type Product = {
  id: string
  name: string
  price: number
  unit: string
  image: string
  isNew?: boolean
  discount?: number // negative number means percentage discount
}

export const products: Product[] = [
  {
    id: "1",
    name: "Fresh Peach",
    price: 8.0,
    unit: "dozen",
    image: "@/assets/images/products/Peaches.png",
  },
  {
    id: "2",
    name: "Avocado",
    price: 7.0,
    unit: "2.0 lbs",
    image: "@/assets/images/products/Avocado.png",
    isNew: true,
  },
  {
    id: "3",
    name: "Pineapple",
    price: 9.0,
    unit: "1.0 lbs",
    image: "@/assets/images/products/Pineapple.png",
  },
  {
    id: "4",
    name: "Black Grapes",
    price: 7.0,
    unit: "5.0 lbs",
    image: "@/assets/images/products/Grape.png",
    discount: -16,
  },
  {
    id: "5",
    name: "Pomegranate",
    price: 9.0,
    unit: "1.50 lbs",
    image: "@/assets/images/products/Pomegranate.png",
    isNew: true,
  },
  {
    id: "6",
    name: "Fresh Broccoli",
    price: 3.0,
    unit: "1 kg",
    image: "@/assets/images/products/Broccoli.png",
  },
]
