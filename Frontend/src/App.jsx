import './App.css'
import Header from './components/Header';
import Homepage from './pages/homepage/Homepages.jsx';
import ProductPages from './pages/products/ProductPages.jsx';
import ReviewPages from './pages/reviews/ReviewPages.jsx';
import ServiewPages from './pages/services/ServicePages.jsx';

export function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      
      <Homepage />
      <ProductPages />
      <ReviewPages />
      <ServiewPages />
    </div>
  );
}

export default App
