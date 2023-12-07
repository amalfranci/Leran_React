import React from "react";
import ListItems from "../list/ListItems";
import Tool from "../components/Tools";
import Simplelist from "../list/simplelist";


const arr = [{
    id:1,
    title: "appoinment for april",
    desc: 'the patient is rescheduled to october',
    isActive: true
},
    {
        id:2,
    title: "appoinment for October",
    desc: 'the patient is rescheduled to october',
    isActive: false
    },
    {
        id:3,
    title: "appoinment for januvary",
    desc: 'the patient is rescheduled to october',
    isActive: true
}



]


class HomePage extends React.Component{


    constructor(props) {
        super(props)
        this.state = {
            data: arr,
            activeState:"all"
        };
    }

    onlistChange=(evt)=> {

        console.log(evt.target.value)
        const value=evt.target.value

//         console.log(newList)
   this.setState({activeState:value})
        

    }
    handleDelete = (item) => {
       const newList=this.state.data.filter((Element)=>Element.id !== item.id)
        this.setState({
          data:newList
      })   
    }
    handleLabelClick = (arg) => {
        this.setState({
            activeState:arg
        })
    }
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    render() {

        const {

            data,
            activeState
        }=this.state
                const newList = data.filter((item) => {
            
            if (activeState=== "all")
            {
                return true;
            }
            if (activeState=== "active")
            {
                return item.isActive===true
            }
            if (activeState === "non-active")
            {
                return item.isActive===false
            }
            return false
            
        })
        return (
            <Tool  labelValue={activeState} onAction={this.onlistChange}>
                <Simplelist   onLabelClick={this.handleLabelClick} data={newList} onAction={this.handleDelete } />
           
                </Tool>
        ) }
       



    
}
export default HomePage