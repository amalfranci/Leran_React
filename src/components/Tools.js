import React from "react";

class Tool extends React.Component{

    render() {
        const {
            children,
            onAction, labelValue } = this.props
        console.log(children)
        
        const onlyChild = React.Children.only(children)
        const count = React.Children.count(onlyChild.props.children)
        console.log(count)
        return (
            <div>
                <div className="list_header">
                    <select value={labelValue} onChange={onAction}  name='status'>
                    <option value="all">All</option>
                    <option value="active">Active</option>
                        <option value="non-active">Not active</option>
                        </select>
                </div>
                {children}
                <div className="list_footer">
                    Total {count} items
                </div>


            </div>
        )
    }
}

export default Tool