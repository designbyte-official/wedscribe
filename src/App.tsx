import React, { useState } from 'react';
import { LandingPage } from './pages/home';
import { EditorPage } from './pages/editor';

const App = () => {
  const [view, setView] = useState<'landing' | 'editor'>('landing');

  if (view === 'landing') {
    return <LandingPage onStart={() => setView('editor')} />;
  }

  return <EditorPage onBack={() => setView('landing')} />;
};

export default App;
