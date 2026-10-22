import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Publications from './pages/Publications';
import CommunityService from './pages/CommunityService';
import Experience from './pages/Experience';
import Honors from './pages/Honors';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/honors" element={<Honors />} />
        <Route path="/community-service" element={<CommunityService />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;
