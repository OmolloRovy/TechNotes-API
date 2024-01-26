import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Public from './Components/Public';
import Login from './features/auth/Login';
import DashLayout from './Components/DashLayout';
import welcome from './features/auth/Welcome'
import NotesLists from './features/notes/NotesList'
import UsersLists from './features/users/UsersList'

function App() {
  return (
    <Routes>
      <Route path="public" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        <Route path="dash" element={<DashLayout />}>
          <Route index element={<welcome />} />
          <Route path="notes">
            <Route index elemenet={<NotesLists />} />
          </Route>

          <Route path="users">
            <Route index elemenet={<UsersLists />} />
          </Route>{/* End Dash */}

        </Route>
      </Route>
    </Routes>
  );
}

export default App;