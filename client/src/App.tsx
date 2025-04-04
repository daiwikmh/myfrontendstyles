
import { Routes, Route } from 'react-router';
import HomeBeforeLogin from './pages/HomeBeforeLogin';

function App() {

  return (
    <Routes>
      <Route 
        path="/" 
        element={<HomeBeforeLogin />} 
      />
    </Routes>
  );
}

export default App;

// Updated HomeAfterLogin component with subscription check
