import FoodItem from "./FoodItem";

export default function FoodList({ foodData }) {
  // Add null check
  if (!foodData) return <div>Loading...</div>;

  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </div>
  );
}
