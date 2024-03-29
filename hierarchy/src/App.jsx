import { FilterableProductTable } from "./components/FilterableProductTable";

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"},
  {category: "Meat", price: "$10", stocked: true, name: "Beef"},
  {category: "Meat", price: "$8", stocked: false, name: "Chicken"},
];

export default function App(){
  return <FilterableProductTable products={PRODUCTS} />;
}