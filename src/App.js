import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Register from './Register/Register';
import Home from  './Main/Home';


function App() {
  return (
    <BrowserRouter>
    {/*<BrowserRouter>: This component is used to     wrap the routing configuration.   
    It enables client-side routing by utilizing the HTML5 history API. 
    
    Bunch information related to routing to all of the other component
    */}
      <Routes>
        {/*This component is used to      define the routes within the application.  
        
        It acts as a container for individual route configurations. */}
        <Route exact path="/" Component={Login}/>
          {/*This component represents a single route definition. 
          It specifies the path and the component to render when the URL matches the defined path. */}
        <Route exact path='/register' Component={Register}/>
        <Route exact path='/home' Component={Home}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
