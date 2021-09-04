import React, { useState } from 'react';
import AddCatergories from './components/AddCatergories';
import GifGrid from './components/GifGrid';
import BackgroundParticles from './components/BackgroundParticles';

const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  /*
     *
  const addCategory = () => {
    setCategories([...categories, 'eyeshield 21']);
  };
        * */

  return (
    <div className="principal__body">
      <BackgroundParticles />
      <div className="principal__header">
        <h2 className="title">GifExpertApp</h2>
        <AddCatergories setCategories={setCategories} />
      </div>
      {categories.map((item, indexArray) => (
        <div className="box__items-category" key={indexArray}>
          <h3 className="title__category">{item}</h3>
          <GifGrid category={item} />
        </div>
      ))}
    </div>
  );
};

export default GifExpertApp;
