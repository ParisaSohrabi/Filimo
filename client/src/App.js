import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Form from './components/Form'
import MovieLists from './components/MovieLists';
import NavBar from './components/NavBar';
import OneMovie from './components/OneMovie';
import EditAMovie from './components/EditAMovie';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar />
     <Routes>
      <Route path="/addMovie" element={<Form />}/>      
      <Route path="/movieLists" element={<MovieLists />}/>      
      <Route path="/oneMovie/:id" element={<OneMovie />}/>      
      <Route path="/Update-A-Movie/:id" element={<EditAMovie />}/>      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
