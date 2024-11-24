import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from './Pages/Landing';
import MainLayout from './Layouts/MainLayout';
import EventLayout from './Layouts/EventLayout';
import LoginSignup from './Pages/LoginSignup';

function App() {
  const [isEventActive] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {isEventActive ? (
          <Route path="/" element={<EventLayout />} />
        ) : (
          <Route path="/" element={<Navigate to="/home" replace />} />
        )}
        <Route path="/home" element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path="/home/login" element={<LoginSignup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
