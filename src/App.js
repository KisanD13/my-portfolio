import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componets/Header';
import AllApp from './componets/AllApp';
import Landing from './componets/Landing';
import Footer from './componets/Footer';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/all-app' element={<AllApp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
