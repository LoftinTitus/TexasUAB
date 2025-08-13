import { MemoryRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MembersPage } from './pages/MembersPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <ErrorBoundary>
      <Router initialEntries={[window.location.pathname || '/']} initialIndex={0}>
        <div className="min-h-screen bg-white">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/members" element={<MembersPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
              <Route path="/preview_page" element={<Navigate to="/" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}