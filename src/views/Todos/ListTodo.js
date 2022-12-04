import React from "react";
import AddTodo from "./AddTodo";

class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'WFH1' },
            { id: 'todo2', title: 'WFH2' },
            { id: 'todo3', title: 'WFH3' },
        ],

        editTodo: {

        }
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodos
        })
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];

            //Find index of specific object using findIndex method.    
            let objIndex = listTodosCopy.findIndex((item => item.id == todo.id));

            //Update object's name property.
            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })

            return;
        }

        this.setState({
            editTodo: todo
        })
    }

    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {


        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('Check empty Object:', isEmptyObj);


        return (
            <div className="list-todo-container">

                <AddTodo
                    addNewTodo={this.addNewTodo}
                />

                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span> {index + 1} - {item.title}</span>
                                        :
                                        <>
                                            {
                                                editTodo.id === item.id ?
                                                    <span>{index + 1} - <input value={editTodo.title} onChange={(event) => this.handleOnchangeEditTodo(event)} /></span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                            }
                                        </>
                                    }
                                    <button onClick={() => this.handleEditTodo(item)}>
                                        {
                                            isEmptyObj === false && editTodo.id === item.id ?
                                                'Save' : 'Edit'
                                        }
                                    </button>
                                    <button onClick={() => this.handleDeleteTodo(item)}>Del</button>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        )
    }
}
export default ListTodo;