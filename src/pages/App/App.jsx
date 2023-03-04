import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import NewNotesPage from '../NewNotesPage/NewNotesPage';
import NotesHistoryPage from '../NotesHistoryPage/NotesHistoryPage';

import NavBar from '../../components/NavBar/NavBar'

export default function App() {
  const [ user, setUser ] = useState(getUser())



  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/notes/new" element={<NewNotesPage user={user} setUser={setUser} />} />
            <Route path="/notes" element={<NotesHistoryPage />} />
            {/* <Route path="/*" element={<Navigate to="/notes/new" />} /> */}
            
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


