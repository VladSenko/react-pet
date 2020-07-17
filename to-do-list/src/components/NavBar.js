import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import ToDoList from './ToDoList';
import NewToDo from './NewToDo';

const NavBar = (props) => {
    return (
        <Router>
            <ul className='nav col-sm-8 offset-sm-2'>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/list' className='nav-link'>
                        To Do List
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/new' className='nav-link'>
                        New To Do
                    </Link>
                </li>
            </ul>

            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/list'>
                    <ToDoList />
                </Route>
                <Route path='/new'>
                    <NewToDo />
                </Route>
            </Switch>
        </Router>
    );
};

export default NavBar;
