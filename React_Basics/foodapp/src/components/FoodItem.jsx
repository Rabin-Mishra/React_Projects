export default function FoodItem({ food }) {
  return (
    <div>
      <img src="{food.image}" alt="Image" />
      <h1>{food.title}</h1>
      <button>View Receipe</button>
    </div>
  );
}
