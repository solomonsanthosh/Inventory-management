import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Manager from './Pages/Manager/Manager';
import Suggest from './Pages/Manager/Suggest';
import SignIn from './Pages/auth/SignIn';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/manager' element={<Manager />}></Route>
          <Route path='/manager/suggest' element={<Suggest />}></Route>
          <Route path='/signIn' element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
