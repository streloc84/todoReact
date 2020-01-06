import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import Header from './components/Header';
import TodoItem from "./components/TodoItem";

function App() {
  const firstName="Andrey";
  const lastName="Bespalov";
  const date=new Date();
  const hours=date.getHours();
  let timeOfDay;
  const styles={
    color:"#ff8cff",
    backgroundColor:"#ff2d00"
  }

  if(hours<12&&hours>6){
    timeOfDay="Доброе утро!"
    styles.color="#04756F"
  }else if(hours>12&&hours<17){
    timeOfDay="Добрый день!"
    styles.color="#2e09ff"
  }else{
    timeOfDay="Доброй ночи!"
    styles.color="#d90000"
  }

  return (
    <div className="todo-list">
      
      <Header />
  <h1 style={styles}>{timeOfDay}</h1>
  <h2>It is currently about {date.getHours()%12} o'clock!</h2>
      <TodoItem
      contact={{
        placeholder:"lorem ipsum"
      }}
      />
      <TodoItem
      contact={{
        placeholder:"lorem ipsum"
      }}
      />
      <TodoItem
      contact={{
        placeholder:"lorem ipsum"
      }}
      />
      <TodoItem 
      contact={{
        placeholder:"lorem ipsum"
      }}
      />    
    </div>
  );
}

export default App;
