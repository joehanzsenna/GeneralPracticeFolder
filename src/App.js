import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import ReduxIndex from './Components/ReduxToolKit/ReduxIndex/ReduxIndex';
// import ChakraIndex from './Components/Chakraui/ChakraIndex/ChakraIndex';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ReduxIndex/>}/>
          {/* <Route path='' element={<ChakraIndex/>}/> */}
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
