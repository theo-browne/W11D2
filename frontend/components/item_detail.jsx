import React from 'react'

// const ItemDetail = props => {
//   if (props.item === undefined) return null
//   debugger
//   return (
//     <span>
//       <li>{props.item.name}</li>
//       <li>{props.item.happiness}</li>
//       <li>{props.item.price}</li>
//     </span>
//   )
// }

class ItemDetail extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    if (this.props.item === undefined) return null
    
    return (
      <div className="item-details">
        <strong>{this.props.item.name}</strong>
        <li>{this.props.item.happiness}</li>
        <li>{this.props.item.price}</li>
      </div>
    )
  }
}


export default ItemDetail