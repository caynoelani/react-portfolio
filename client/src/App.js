import './styles/App.scss';
import { Header, Skills, Projects } from './container'
import { Navbar } from './components'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
