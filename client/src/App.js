import React from 'react';
import axios from 'axios';
import WishItem from './component/Wish/WishItem';

function App() {

  let [wish, setWish] = React.useState([

  ])

  React.useEffect(() => {
    let data = axios.get('http://localhost:8000/')
    data.then(res => {
      setWish(res.data)
    })
  }, [])

  let input = React.createRef()
  let postData = () => {
    let post = axios.post('http://localhost:8000/', {
      id: null,
      wish: input.current.value,
      isDone: 0
    })
  }

  return (
    <div className="site_wrapper">
      <h1>WISHLIST</h1>
      <div className="addWish_wrapper">
        <input ref={input} placeholder='Write wish' />
        <button onClick={postData}>Add Wish</button>
      </div>
      {
        wish.map(el => {
          return <WishItem wish={el.wish} id={el.id} />
        })
      }
    </div>
  );
}

export default App;
