import { GlobalStyle } from './globalStyles';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
