// import React from 'react';



// import './index.css';
// // import ReactDOM from 'react-dom';
// import Button from '@material-ui/core/Button';
// import ListItems from './ListItems';



// class Todo extends React.Component {

// constructor(props){
// super(props);
// this.state={

// items:[],
// curentItems:{

//   text:'',
  
//   key:'',

// }

// }
// this.handleInput=this.handleInput.bind(this);
// this.addItems=this.addItems.bind(this);

// }

// handleInput(e){

//   this.setState({
//     currentItems:{
//       text:e.target.value,
//       key:Date.now()


//     }



//   })
// }
// addItems(e){
// e.preventDefault();
// const newItem=this.state.curentItems;
// console.log(newItem);
// if(newItem.text!== ""){

//   const newItems=[...this.state.items,newItem];//destructing assigment 
//   this.setState({
// items:newItems,
// currentItems:{

//   text:'',
//   key:'',


// }



//   })
// }

// }
//   render(){


//     return(


    

// <div className='list'>



// <div className='container'>

// <form  className='form ' onSubmit={this.addItems}>
 

//   <input type='text' className='input-name' placeholder='  ' value={this.state.curentItems.text} onChange={this.handleInput}></input>
  
// <Button variant='contained' color='secondary' className='btn' >ADD</Button>
// </form>
// {/* <ListItems {items}></ListItems>  */}










// </div>


// </div>

// );
    





//   } 
  
  
  

// // }






// // export default Todo;


import { Button } from '@material-ui/core';
import React ,{useState} from 'react';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import IconLabelButtons from './Reactstrap';






const Todo =()=>{

    const [inputList ,setInput]=useState('');
    const [itemsList,setItems]=useState([]);
    // const [inputList,setinput]=useState();
    // const [itemlist,setInput]=useState([]);

    // const items=(event)=>{

    //  setInput(event.target.value);

    // }
const handleDelte=index=>{

const newtodo=[...inputList]
newtodo.splice(index,1)
setItems(newtodo);


}


const itemsEvents=(event)=>{
setInput(event.target.value);



};   
const ListofItems=()=>{
    setItems((newItems)=>{
        return [...newItems,inputList];



    });





}

return (
<>
<div className='todo'>





<fieldset>
<input type='text' name='text' placeholder='Enter something'   onChange={itemsEvents} key=''></input>



<Button variant='contained' color='success' onClick={ListofItems} >Add Items </Button>
</fieldset>


<ol>



{itemsList.map((itemsvalue,index)=>{


    return <div className='keyelement' key={index} id={index}>





 

    
    <h3 >   
   
    
    
      <li> {itemsvalue} </li>  <Button className='btn' onClick={()=>handleDelte>(index) ⨉ </Button>   </h3>
    {/* <Button varinat='outline' color='warning' onClick={handdleDelte}>Delete</Button> */}
 
     


     
        
   
    
    
    
        
     </div>
 

     


})}


    
</ol>

</div>



</>





);


}



export default Todo;

