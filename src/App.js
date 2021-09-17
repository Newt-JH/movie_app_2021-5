

const foodLike = [
  {
    id: 1,
    name: "sushi",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Sushi_at_restaurant_Itsudemo.jpg/450px-Sushi_at_restaurant_Itsudemo.jpg"

  },
  { id: 2,
    name: "잘익은김치",
    image:"http://08food.com/web/product/big/201801/33_shop1_243196.jpg"

  }
 
]





function App() {
  return (
    <div >
      {
        foodLike.map(dish => (<Food key= {dish.id} name = {dish.name} picture={dish.image} />))
      }

    </div>

  );
}



function Food({name, picture}){
  
  return (
  <div>
    <h1>I like {name} </h1>
    <img src={picture}  alt="name"/>

  </div>
  )

  
}
export default App;
