import React from 'react'

function Item(props) {
    return (
        <div>
            <li>{props.itemText}
            <button style={{backgroundColor:'transparent',float:'right'}} onClick={()=>{
                props.onDelete(props.id);
            }}><i className="fas fa-trash-alt fa-2x"></i></button>
            
            </li>
  
        </div>
    )
}

export default Item
