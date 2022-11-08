import React from "react";

class MyComponent extends React.Component {

    // JSX => Return Block

    render() {
        let name = 'dathee'
        return (
            <React.Fragment>
                <div>
                    Hello Component, my name is {name}
                </div>
            </React.Fragment>
        )
    }
}

export default MyComponent;

// Tổng kết bài học: là 1 class, 1 fuction, hay 1 hàm có chức năng đặc biệt là render html
// Component của React có 1 điều đb là sử dụng cú pháp JSX là funcion, hàm của javascript trả về 1 đống html thay vì trả về 1 biến
// Muốn dùng console.log trong html chỉ cần sử dụng dấu {}