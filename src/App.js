import React from 'react';

// function Fruit(props){
//   console.log(props);
//   return (
//     <h1>오렌지보단 {props.fav}</h1>
//   );
// }

function Fruit({fav}){
  return (
    <h1>오렌지보단 {fav}</h1>
  )
}

function App() {
  return (
    <div>
      <h1>안녕하세요</h1>
      <Fruit fav='천혜향' />
      <Fruit fav='레드향' />
      <Fruit fav='귤' />
      <Fruit fav='한라봉' />
    </div>
  );
}

export default App;
