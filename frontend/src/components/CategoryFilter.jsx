import React from 'react'

const CategoryFilter = ({ categories, filterCategory, setFilterCategory }) => {
    const onClick = (category) => {
        const isChecked = filterCategory.includes(category);
    
        if (isChecked) {
          const state = filterCategory.filter((val) => val !== category);
          setFilterCategory(state);
        } else {
          const state = [...filterCategory, category];
          setFilterCategory(state);
        }
      };
  return (
    <div >
    <p >Filter By Category</p>
    
      {categories.map((category) => (
        
          <button key={category}
            className={` btn btn-sm  btn-outline-secondary m-1 ${
              filterCategory.includes(category) ? "active" : ""
            }`}
            onClick={() => onClick(category)}
          >
            {category}
          </button>
       
      ))}
  
  </div>
  )
}

export default CategoryFilter