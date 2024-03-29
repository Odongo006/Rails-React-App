import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greetings from './components/Greetings';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Greetings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;