import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { Button } from './button';
import { useCartStore } from '../../store/cart';
import { useThemeStore } from '../../store/theme';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const { theme } = useThemeStore();

  return (
    <div className="group relative hover-card">
      <div className="aspect-square w-full overflow-hidden rounded-2xl glass-card">
        <img
          src={product.image_url}
          alt={product.name}
          className="h-full w-full object-cover object-center transform transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="text-white">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-300 mt-1">{product.category}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between items-center">
          <Link 
            to={`/products/${product.id}`} 
            className={`${
              theme === 'dark' 
                ? 'text-white hover:text-primary-300' 
                : 'text-gray-800 hover:text-primary-600'
            } transition-colors`}
          >
            <h3 className="text-lg font-medium">{product.name}</h3>
          </Link>
          <p className={`text-lg font-semibold ${
            theme === 'dark' ? 'text-primary-300' : 'text-primary-600'
          }`}>
            ${product.price}
          </p>
        </div>
        <Button
          onClick={() => addItem(product)}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white"
          variant="primary"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}