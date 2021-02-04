import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
class Counters extends Component {
    constructor(props){
super(props);


    
    
this.state = {  
 count:0,
 show:true


};

}

 handleIncrement=()=>{

this.setState({count:this.state.count+1});


    }

Decrease=()=>{
this.setState({count:this.state.count-1});


    }

ToggleClick=()=>{

    this.setState({show:!this.state.show});
}
Clear=()=>{


    this.setState({count:this.state.count=0})
}

    
    render() { 
        return (  

            <div>





<h1>{this.state.count} </h1>
<Button className='btn' variant="contained" color="primary" onClick={this.handleIncrement}>Increment </Button>


<Button variant="contained" color="secondary" onClick={this.Decrease}> Decrease </Button>
<Button variant="outlined" color="primary" onClick={this.Clear}>Reset</Button>
<Button variant="contained" color="default" onClick={this.ToggleClick}>

{ this.state.show ? 'Increase' : 'Decrease' }

</Button>



  { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }

            </div>
        );
    }
}
 
export default Counters;