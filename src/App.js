import PropTypes from 'prop-types'
import React, {Component} from 'react'

class Apps extends Component {

  constructor(props){
    super(props)
    console.log('constructor');
  }

  componentDidMount(){
    console.log('componentDidMount...Goodbye');
  }

  state = {
    count: 0
  }

   add = () => {
    this.setState({count : this.state.count + 1})
  }
    minus = () => {
      this.setState({count : this.state.count - 1})
  }

  render() {
    console.log('render');
    return(
      <div>
      <h1>The number is: {this.state.count} </h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

const FoodLike = [
  {
    id: 1,
    name: "sushi",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Sushi_at_restaurant_Itsudemo.jpg/450px-Sushi_at_restaurant_Itsudemo.jpg",
    alt: "스시",
    rating: 5.0
  },
  {
    id: 2,
    name: "잘익은김치",
    image:"http://08food.com/web/product/big/201801/33_shop1_243196.jpg",
    alt: "잘익은김치",
    rating: 4.9
  }
]


function App() {
  return (
    <div >
      {
        FoodLike.map(dish => (<Food key= {dish.id} name = {dish.name} 
          picture={dish.image} alt={dish.alt} rating={dish.rating}  />))
      }

    </div>

  );
}



function Food({name, picture, alt, rating}){
  
  return (
  <div>
    <h1>I like {name} </h1>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={alt} />

  </div>
  )

  
}
export default Apps;
