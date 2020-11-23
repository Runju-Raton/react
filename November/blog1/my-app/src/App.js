import logo from './logo.svg';
import './App.css';

function App() {
 

 
  return (
    <div className="App">
      
     <Person></Person>
     <Person></Person>
     <Person></Person>
     <Person></Person>
    </div>
   
  );
}

function Person(){
  return(
    <div>
         <h1>My name is : Shakib Khan</h1>
         <h3>No. 1 Shakib Khan</h3>
    </div>
  )
}
export default App;
