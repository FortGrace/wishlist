import React from 'react';
import WishItem from './component/Wish/WishItem';

function App() {
  return (
    <div className="site_wrapper">
      <h1>WISH LIST</h1>
      <div className="addWish_wrapper">
        <input placeholder='Write wish' />
        <button>Add Wish</button>
      </div>
      <WishItem />
    </div>
  );
}

export default App;
