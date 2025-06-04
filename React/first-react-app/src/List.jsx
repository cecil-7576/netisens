import React from 'react'

function List() {

  const listItems = [1, 2, 3, 4, 5, 6];

  const items= listItems
  .map((num)=> <li>{num}</li>)
  .sort((a,b)=> b-a )

  return (
  <ul>{items}</ul>
  )
}

export default List