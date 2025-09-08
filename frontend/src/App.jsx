
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import Chapters from './pages/Chapters';
import ChapterReader from './pages/ChapterReader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { booksData } from './data/booksData';

function App() {
  return (
    <div className="ui-font bg-gradient-to-br from-white via-gray-50 to-gray-100 min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/books" element={<Books/>} />
          <Route path="/chapters/:bookId" element={<Chapters booksData={booksData}/>} />
          <Route path="/books/:bookSlug/chapters" element={<Chapters/>} />
          <Route path="/read/:bookId/:chapterId" element={<ChapterReader/>} />
       </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;