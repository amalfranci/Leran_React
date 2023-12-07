import React from "react";
import './labelstyle.css';


class Label extends React.Component{

    render() {
        const props = this.props
        const style=props.isActive?{background:'green'}:{background:"orange"}
        
        return <span onClick={() => {

            props.onAction(props.isActive ? 'active':'non-active')
            
        }} className="list_label_items" style={style}>{props.isActive?'ACTIVE':'NOT ACTIVE' }</span>
    }
}

export default Label