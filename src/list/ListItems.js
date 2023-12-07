

import React from "react"
import Label from "./label";
import './label.css';

function ListItems({title,desc,isActive,onDelete,onLabelClick}) {
 
    
    return (
    

        <div className="list-items">
            <hr />
            <div className="list_title">
                <h4>{title}</h4>
                <label onClick={onDelete}>Delete</label>
            </div>
            <div className="list-desc">
               {desc}
            </div>
            <div className="list-label">
                <Label  isActive={isActive} onAction={onLabelClick} />
            

              
            </div>
            <hr/>
        </div>
)


}

export default ListItems;