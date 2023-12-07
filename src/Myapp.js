import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/footer";
import HomePage from "./pages/HomePage";
import Usage from "./pages/Usage";
import UserData from "./pages/UserData"
import DisplayUser from "./pages/DisplayUser";

class MyApp extends Component{

    constructor(props) {
        super(props)
        this.state = {
            currentSelect: 'home'
        };
    }


    handleMenuSelected=(value)=>
    {
        console.log(value)
        this.setState({
            currentSelect:value
        })

    }
    getPage() {
        const {
            currentSelect
        } = this.state
        
        switch (currentSelect) {
            
            case 'home':
                return <HomePage />
            case 'Usage':
                return <Usage name="Usage" />
            case 'Setting':
                return <UserData name="Settings" />

            case 'Logout':
                return <DisplayUser name="Logout" />
            default:
                break


        }
    }

 

    render()
    {

        return (
          <div className='app'>
    <Header OnMenuclick={this.handleMenuSelected} />
    {this.getPage()}
  
   </div>
        )
    }
}
export default MyApp;