import React, {Component} from 'react'

class SideBar extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div style={{background:'green', height:'400px', width:'100px'}}>
                SideBar Comp
            </div>
        )
    }
}

export default SideBar;