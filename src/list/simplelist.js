import React from "react";

import ListItems from './ListItems';





function Simplelist(props) {
    const {
        data,
        onAction,
        onLabelClick
    }=props
    
    return (
        
         <div className='app-body'>
                {
               data.map((obj) => {
                        return (
                            <ListItems key={obj.title} {...obj}
                                onLabelClick={onLabelClick}
                                onDelete={() => {
                                 onAction(obj)
                            }} />
                     
                        )

                    })

                }
                
                </div>
    )
}

export default Simplelist