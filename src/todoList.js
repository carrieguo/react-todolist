import React from 'react'
import { render } from 'react-dom'

import './todoList.css';

class ToDoItems extends React.Component{
    constructor(props) {
        super(props);
        
        this.creatTasks = this.creatTasks.bind(this);
    }

    clickFun(text) {
        this.props.delItem(text)//这个地方把值传递给了props的事件当中
    }
    

    creatTasks(item) {
        return (<li key={item.key}>{item.text}<button onClick={this.clickFun.bind(this, item.key)}  className="del">DELETE</button></li>);
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.creatTasks);

        return (
            <ul className="theList">{listItems}</ul>
        );
        
    }
}

class ToDoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(event) {
        event.preventDefault();
        console.log(this.input);
        var itemArray = this.state.items;
        itemArray.push({
            text: this.input.value,
            key: Date.now()
        });
        this.setState({
            items: itemArray
        });
        this.input.value = "";
        this.input.focus();
        
    }

    deleteItem(index){
        //展开数组
        var list = [...this.state.items]
        //删除元素
        for(let i=0; i<list.length; i++){
            if(list[i].key===index){
                list.splice(i, 1);
                break;
            }
        }
        this.setState({
          items:list
        })
      }
    

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input
                        ref={(input) => {this.input = input}} 
                        placeholder="请输入一个任务" />
                        <button type="submit">添加</button>
                    </form>
                </div>
                <ToDoItems entries={this.state.items} delItem={this.deleteItem}/>
            </div>
        );
    }
}


export default ToDoList;