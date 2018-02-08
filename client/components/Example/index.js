import React from 'react';

class Example extends React.Component{
  state = {
    items: ['cleaning', 'washing', 'drying']
  }

  render(){
    return(
      <div>
        <h1> Items </h1>
        {this.state.items.map((item) => {
          return <div>
                  <span>{item}</span>
                  <button>packedd</button>
                  <button>remove</button>
                </div>
        })}
      </div>
    )
  }
}

export default Example;
