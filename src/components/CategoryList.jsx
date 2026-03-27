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
    <section>

    </section>
  )
}

export default CategoryList