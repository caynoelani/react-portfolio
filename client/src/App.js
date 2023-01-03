import './styles/App.scss';
import { Header, Skills, Projects, Contact } from './container'
import { Navbar } from './components'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
