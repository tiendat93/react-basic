import React from "react";

class MyComponent extends React.Component {

    // JSX => Return Block

    state = {
        name: 'Dat',
        channel: 'Tesk TV'

    }

    hanldeOnChangeName = (event) => {
        // this.state.name = event.target.value;  bad code
        this.setState({  // phai su dung ham setState
            name: event.target.value,
            channel: "TEKS TV"
        })
    }

    handleClickButton = () => {
        alert("Click me")
    }

    render() {
        //let name = 'dathee'
        console.log('>> Cal render: ', this.state)
        return (
            < React.Fragment >
                <div>
                    <input value={this.state.name} type="text" onChange={(event) => this.hanldeOnChangeName(event)} />
                    My name is {this.state['name']} <br />
                    My channel is {this.state['channel']}
                </div>

                <div className="third">
                    <button onClick={() => { this.handleClickButton() }}>Click me</button>
                </div>

            </React.Fragment >
        )
    }
}

export default MyComponent;

// Tổng kết bài học: là 1 class, 1 fuction, hay 1 hàm có chức năng đặc biệt là render html
// Component của React có 1 điều đb là sử dụng cú pháp JSX là funcion, hàm của javascript trả về 1 đống html thay vì trả về 1 biến
// Muốn dùng console.log trong html chỉ cần sử dụng dấu {}