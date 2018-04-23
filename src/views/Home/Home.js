import React, {Component} from 'react';
import Carousel from '../../components/Carousel/Carousel';

class Home extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div style={{background:'blue', height:'400px', width:'400px'}}>
                Home View
                <Carousel />
                <Carousel />
            </div>
        )
    }
}

export default Home;