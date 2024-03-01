import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import { EddSign } from './sign/EddSign';

export const GifEddApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {

    const duplicate = categories.find(category => newCategory.toLowerCase() === category.toLowerCase());
    if (duplicate) return;

    setCategories([newCategory, ...categories]);
    // setCategories(  cat =>  [ 'Dragon Ball', ...cat] );
  }

  return (
    <>
      <h1>GifEddApp</h1>

      <AddCategory
        onNewCategory={event => onAddCategory(event)}
      />

      {categories.map(category => (
        <GifGrid key={category} category={category} />
      ))
      }
      
      <EddSign />
    </>
  );
};
