import React ,{useState} from 'react';
import './App.css';
import Input from './components/Input';
import Item from './components/Item';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function App() {

  const [items, setItems] = useState([]);

  const addToList = (newItem)=>{
    setItems((prevItems)=>{
      if(newItem != ""){
        return[...prevItems , newItem]
      }else{
        return prevItems;

      }
    })
  }

  const deleteFromList = (itemId)=>{
    // const conf  = window.confirm("You Want To Delete This Task!?");
    // if(conf){
    //   setItems((prevItems)=>{
    //     return prevItems.filter((item , index)=>{
    //       return index != itemId
    //     })
    //   })
    // }else{
    //   setItems((prevItems)=>{
    //     return prevItems;
    //   })
    // }


    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => setItems((prevItems)=>{
            return prevItems.filter((item , index)=>{
              return index != itemId
            })
          })
        },
        {
          label: 'No',
          onClick: () => setItems((prevItems)=>{
            return prevItems;
          })
        }
      ]
    });


    // confirmAlert({
    //   customUI: ({ onClose }) => {
    //     return (
    //       <div className='custom-ui'>
    //         <h1>Are you sure?</h1>
    //         <p>You want to delete this file?</p>
    //         <button onClick={onClose}>No</button>
    //         <button
    //           onClick={() => {
    //             this.handleClickDelete();
    //             onClose();
    //           }}
    //         >
    //           Yes, Delete it!
    //         </button>
    //       </div>
    //     );
    //   }
    // });

  }
    return (
    <div className="App">
      <div className="container">
        <div className="heading">
        <h2>What will you do !?</h2>
        </div>
        <Input  onAdd={addToList}  />
        <div style={{
          overflowY:"scroll",
          height: 300,
          }}>
            <ul>
                 {items.map((itemText , itemIndex)=>{
          return (

            <Item key={itemIndex} id={itemIndex} itemText={itemText} onDelete={deleteFromList} />
          )
        })} 
        </ul>
        </div>

      </div>
    </div>
  );
}

export default App;
