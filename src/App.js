import React from 'react';
import propTypes from 'prop-types';

// function Fruit(props){
//   console.log(props);
//   return (
//     <h1>오렌지보단 {props.fav}</h1>
//   );
// }

function Fruit({name,picture,rating}){
  return (
    <div>
      <h2>오렌지보단 {name}</h2>
      <h4>{rating} / 5.0</h4>
      <img src={picture} alt={name} />
    </div>
  )
}

const fruitILike=[
  {
    id:1,
    name:'바나나',
    Image:'http://qwerew.cafe24.com/images/banana.png',
    rating:3.5
  },
  {
    id:2,
    name:'오렌지',
    Image:'http://qwerew.cafe24.com/images/orange.png',
    rating:4.9999
  },
  {
    id:3,
    name:'사과',
    Image:'http://qwerew.cafe24.com/images/apple.png',
    rating:2.1
  },
  {
    id:4,
    name:'메론',
    Image:'http://qwerew.cafe24.com/images/melon.jpg',
    rating:2.8
  }
];

// function renderFruit(dish){
//   return<Fruit key={dish.id} name={dish.name} picture={dish.Image} />
// }

function App() {
  return (
    <div>
      {fruitILike.map((dish) => <Fruit key={dish.id} name={dish.name} picture={dish.Image} rating={dish.rating} />)}
    </div>
  );
}
Fruit.propTypes={
  name:propTypes.string.isRequired,
  picture:propTypes.string.isRequired,
  rating:propTypes.number.isRequired,
}

export default App;
