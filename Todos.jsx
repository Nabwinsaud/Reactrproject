import React,{ useState} from 'react';
import './todos.css';




function Todos ({todo,index,CompleteTodo,removeItems}){


    return(<>



<div className='todo' style={{textDecoration:todo.iscompleted ? 'line-through':''}}
>

{todo.text}
<div>

 
    <button onClick={()=>CompleteTodo(index)} className='btn'>Complete</button>
  
</div>
<div>
  <button className='remove' onClick={()=>removeItems(index)}> ⨉ </button>
</div>



</div>
</>
    );


    
}
//todo input
function TodoForm({addTodo}){
const [value,setValue]=useState('');
const handleSubmit=e=>{
e.preventDefault();
if(!value) return;
    addTodo(value);
    setValue('');

};

return(

    <form onSubmit={handleSubmit}>

<input type='text'
className='input'
value={value}
onChange={e=> setValue(e.target.value)} />


   </form>

);

}




const App=()=>{

    const[todos,setTods]=useState([
{text:'learn the new technolody',
iscompleted:false,
},

{text:'Add Todo to your day',
iscompleted:false
},



]
)
const addTodo= text =>{
const newTodos=[...todos,{text}];
setTods(newTodos);

}

const removeItems=index=>{
    const newTodos=[...todos];
    newTodos.splice(index,1);
    setTods(newTodos);


}
const CompleteTodo=index=>{
    const newTodos=[...todos];
    newTodos[index].iscompleted=true;
    setTods(newTodos);



}
  





return(
<div className='app'>
<div className='todo-list'>

{todos.map((todo,index)=>(
   <Todos 
   key={index}
   index={index} 
   todo={todo}

   CompleteTodo={CompleteTodo}
   addTodo={addTodo}
   removeItems={removeItems}


   />
    
    ))}
    <TodoForm addTodo={addTodo}/>


</div>

</div>

)




}

export default App;