import { Navigate, Route, Routes } from 'react-router-dom';
import { AppHeader } from './components/AppHeader';
import { HomePage } from './pages/HomePage';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { RoadmapPage } from './pages/RoadmapPage';

export default function App() {
  return (
    <div className="app-shell">
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/learn" element={<PlaceholderPage title="Learn" />} />
        <Route path="/support" element={<PlaceholderPage title="Support" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
