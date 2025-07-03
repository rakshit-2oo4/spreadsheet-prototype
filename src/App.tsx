// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import ActionTabs from './components/ActionTabs';
import SpreadsheetTable from './components/SpreadsheetTable';
import BottomTabs from './components/BottomTabs';

import { mockData } from './data/mockData';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col border-b border-black">
      <Header />
      <Toolbar />
      <ActionTabs />
      <main className="flex-1 overflow-auto">
        <SpreadsheetTable data={mockData} />
      </main>
      <div className="fixed bottom-0 right-0 left-0">
      <BottomTabs/>
      </div>
    </div>
  );
};

export default App;
