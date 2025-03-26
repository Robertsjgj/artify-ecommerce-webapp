import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ShoppingCart, Menu, Sun, Moon } from 'lucide-react';
import { Button } from './components/ui/button';
import { useCartStore } from './store/cart';
import { useThemeStore } from './store/theme';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Success } from './pages/Success';

function Navbar() {
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const { theme, toggleTheme } = useThemeStore();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card" data-theme={theme}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Button 
              variant="outline" 
              size="sm" 
              className={theme === 'dark' ? 'bg-white/10 text-white border-white/20' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link 
              to="/" 
              className={`ml-4 font-semibold text-xl ${
                theme === 'dark' 
                  ? 'text-white hover:text-primary-300' 
                  : 'text-gray-800 hover:text-primary-600'
              } transition-colors`}
            >
              Artify
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className={theme === 'dark' ? 'bg-white/10 text-white border-white/20' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Link to="/cart">
              <Button 
                variant="outline" 
                size="sm" 
                className={`${
                  theme === 'dark' 
                    ? 'bg-white/10 text-white border-white/20' 
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
                } relative`}
              >
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App