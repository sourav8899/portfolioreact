import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/home';
import Skills from './components/skills/Skills';
import Project from './components/projects/Project';
import Certificate from './components/certificates/Certificate';
function App() {
  return (
    <>
    <Header></Header>
    <Home></Home>
    <div className='makeflex'>
    <Skills></Skills>
    <Project></Project>
   <Certificate></Certificate>
    </div>
   
    

    

    </>
  );
}

export default App;
