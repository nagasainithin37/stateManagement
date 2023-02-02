import List from "./components/List";
import Entry from "./components/Entry";
import Count from "./components/Count";
import {useState} from 'react'
function App() {
   let [todos,setTodos]=useState([])
  
  
  
   return (  
    <div>
<div className="container row mt-5 ms-5">
  <div className="col"><Entry todos={todos}setTodos={setTodos}/></div>
  <div className="col"><List todos={todos}/></div>
  <div className="col"><Count todos={todos} /></div>
</div>

    </div>
  );
}

export default App;
