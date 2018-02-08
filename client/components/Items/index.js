import React from 'react';

const buttonName = (item) => {
  return item.packed === true ? 'unpack' : 'pack'
}

const component = ({items, packItem, removeItem}) => (
  <div className="items">{items.map((item) => (
    <div>
    {item.name}
    <button className="packItem" onClick={() => packItem(item)}>{buttonName(item)}</button>
    <button className="removeItem" onClick={() => removeItem(item)}>Remove</button>
    </div>
  ))}
 </div>
)

export default component;
