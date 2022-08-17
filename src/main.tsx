import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import 'tailwindcss/tailwind.css';
import 'tw-elements';

import App from './App';
import Home from 'pages/Home';
import Notes from 'pages/Notes';
import NotesRedux from 'pages/NotesRedux';
import Counter from 'components/Counter';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="notes" element={<Notes />} />
            <Route path="notes-redux" element={<NotesRedux />} />
            <Route path="counter" element={<Counter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}
