import React from "react";

class ChildComponent extends React.Component {


    render() {
        console.log('>> Props: ', this.props)
        let name = this.props.name;
        return (
            <div>
                Day la component con: {name}
            </div>
        )
    }
}

export default ChildComponent;

// Props: Giải quyết vấn đề gì? Truyền data cho thằng react