import React from 'react'

function List(props) {
    
    const category = props.category
    const itemslist = props.items;
    const group = props.group
      
    const Item = itemslist.map((items) => <li key={items.id}>{items.name}--- &nbsp; {items.calories}</li>);



return(
    <div>
    <h1>{group}</h1>    
    <h3>{category}</h3>
    <ol>{Item}</ol>
    </div>)

}

List.defaultProps = {
    category: 'foods',
    items: [],
}

export default List