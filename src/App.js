import './App.scss';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div className='wrapper'>
      <div className='content'>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
