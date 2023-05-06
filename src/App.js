import './App.css';
import NavigationPage from './components/navbar';
import Page from './components/page';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <NavigationPage />
      <Routes>
        <Route path="/" element={<Page title="Home" />} />
        <Route path="/about" element={<Page title="About-us" />} />
        <Route path="/contact" element={<Page title="Contact-us" />} />
        <Route path="/yo" element={<Page title="Yo" />} />
        <Route path="/*" element={<Page title="404 Page not Found" />} />
      </Routes>
    </div>
  );
}

export default App;
