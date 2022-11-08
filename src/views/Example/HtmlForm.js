import React from "react";
import ChildComponent from "./ChildComponent";

class HtmlForm extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            {
                "name": "John",
                "age": 30,
                "car": "Hyundai"
            },

            {
                "name": "Nhat",
                "age": 20,
                "car": "Vinfast"
            }
        ]
    }

    hanldeChangeFirsName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    hanldeChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    hanldeSubmit = (event) => {
        event.preventDefault() // Ham khong tra lai website - Ngan chan hanh dong default cua viec Submit
        console.log('>> Data input: ', this.state)
    }

    render() {
        //console.log('>> Cal render: ', this.state)
        return (
            < React.Fragment >
                <form action="/action_page.php">
                    <label htmlFor="fname">First name:</label><br />
                    <input onChange={(event) => this.hanldeChangeFirsName(event)} type="text" value={this.state.firstName} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input onChange={(event) => this.hanldeChangeLastName(event)} type="text" value={this.state.lastName} /><br /><br />
                    <input type="submit" onClick={(event) => this.hanldeSubmit(event)} value="Submit" />
                </form>
                <ChildComponent name={'3'} arrJobs={this.state.arrJobs} />
            </React.Fragment >
        )
    }
}

export default HtmlForm;

// Tổng kết bài học: là 1 class, 1 fuction, hay 1 hàm có chức năng đặc biệt là render html
// Component của React có 1 điều đb là sử dụng cú pháp JSX là funcion, hàm của javascript trả về 1 đống html thay vì trả về 1 biến
// Muốn dùng console.log trong html chỉ cần sử dụng dấu {}