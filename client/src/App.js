import './styles/App.scss';
import { Header, Skills } from './container'
import { Navbar } from './components'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skills />
    </div>
  );
}

export default App;
