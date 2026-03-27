import React from 'react'
import {featuredCategories} from "../data.js"


const CategoryCard = ({ category }) => {
    return (
        <div className='"w-26 h-26 md:w-32 md:h-28 place-items-center rounded-xl flex flex-col items-center justify-center p-2"'>
            <img src={category.image} alt={category.name}      className="icon-amber w-12 h-12 md:w-16 md:h-16 object-contain rounded-tl-xl rounded-tr-xl mb-2"/>
            <span className="text-sm font-medium">{category.name}</span>
        </div>
    )
}

const CategoryList = () => {
  return (
    <section className="md:w-full md:h-50">
        <h2 className="p-3 text-xl font-bold text-gray-700">Featured Categories</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 justify-center place-items-center p-2 md:p-2 gap-2 md:gap-8 m-3 md:m-1">
        {featuredCategories.map((category) => ( // 
          <CategoryCard key={category.id} category={category} />
        ))}
        </div>
    </section>
  );
}

export default CategoryList
// <CategoryCard key={category.id} category={category} />
// For each category in the array, render one CategoryCard component. Same as your createCategoryCard(category) call — just React syntax.

// key={category.id}
// jsxkey={category.id}
// This is React-specific. Whenever you render a list, React needs a unique key on each item so it can track which item is which when the list updates. You just pass the id from your data. If you forget it, React will still work but will throw a warning in the console.

// category={category}
// jsxcategory={category}
// This is passing the whole category object as a prop to CategoryCard for you to access inside it.