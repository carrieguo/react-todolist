import React from 'react'
import { render } from 'react-dom'

// 首先我们需要导入一些组件...
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

class About extends React.Component{
    render() {
        return (
            <div>
                About
            </div>
        );
    }
}

class Inbox extends React.Component{
    render() {
        return (
            <div>
                Index
            </div>
        );
    }
}

class Home extends React.Component{
    render() {
        return (
            <div>
                Home
            </div>
        );
    }
}

// function Home() {
//     return <h2>Home</h2>;
//   }
  
//   function About() {
//     return <h2>About</h2>;
//   }
  
  function Users() {
    return <h2>Users</h2>;
  }
  

// 然后我们从应用中删除一堆代码和
// 增加一些 <Link> 元素...
class App extends React.Component{
  render() {
    return (
      <div>
        <h1>App</h1>
        {/* 把 <a> 变成 <Link> */}
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
    )
  }
}

// 最后，我们用一些 <Route> 来渲染 <Router>。
// 这些就是路由提供的我们想要的东西。
function RouterDemo() {
    return(
        <BrowserRouter>
            <App />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/inbox">
                    <Inbox />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default RouterDemo;