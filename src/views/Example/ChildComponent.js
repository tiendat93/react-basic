import React from "react";

class ChildComponent extends React.Component {


    render() {
        console.log('>> Props: ', this.props)
        let { name, arrJobs } = this.props;
        return (
            < React.Fragment >
                <div className="job-lists">
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.name}>
                                    {item.name} - {item.car}
                                </div>
                            )
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default ChildComponent;

// Props: Giải quyết vấn đề gì? Truyền data cho thằng react4
//State:
//test edit