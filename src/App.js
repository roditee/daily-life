import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Bottom from './components/Bottom';
import Join from './components/Join';
import ListBoard from './components/ListBoard';
import ListHappyBank from './components/ListHappyBank';
import MyPage from './components/MyPage';
import Nav from './components/Nav';
import OpenHappyBank from './components/OpenHappyBank';
import PastHappyBank from './components/PastHappyBank';
import Top from './components/Top';
import UpdateBoard from './components/UpdateBoard';
import WriteBoard from './components/WriteBoard';
import WriteHappyBank from './components/WriteHappyBank';

function App() {
  return (
    <div className='App'>
      <h1>인덱스 페이지</h1>

      <Routes>
        <Route path="/bottom" element={<Bottom/>} />
        <Route path="/join" element={<Join/>} />
        <Route path="/listBoard" element={<ListBoard/>} />
        <Route path="/ListHappyBank" element={<ListHappyBank/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/myPage" element={<MyPage/>} />
        <Route path="/nav" element={<Nav/>} />
        <Route path="/openHappyBank" element={<OpenHappyBank/>} />
        <Route path="/pastHappyBank" element={<PastHappyBank/>} />
        <Route path="/top" element={<Top/>} />
        <Route path="/updateBoard" element={<UpdateBoard/>} />
        <Route path="/writeBoard" element={<WriteBoard/>} />
        <Route path="/writeHappyBank" element={<WriteHappyBank/>} />
      </Routes>
    </div>
  );
}

export default App;
