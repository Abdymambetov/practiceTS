import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import EventsExemple from './components/EventsExemple';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
import {  IUser, ITodos } from './types/Types';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <NavLink to='/users'>пользователи</NavLink>
          <NavLink to='/todos'>todos</NavLink>
        </div>
        <Routes>
          <Route path='/users' element={<UserPage/>}/>
          <Route path='/users/:id' element={<UserItemPage/>}/>
          <Route path='/todos' element={<TodosPage/>}/>
          <Route path='/todos/:id' element={<TodoItemPage/>}/>
        </Routes>
        {/* <EventsExemple/>
        <Card width='200px' height='200px' variant={CardVariant.primary} onClick={(num) => console.log('e', num)}>
          <button>add</button>
          <div>asdjhsagdsh</div>
        </Card> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
