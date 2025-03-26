import React, { useState, useEffect } from 'react';
import { ProductCard } from '../components/ui/product-card';
import { CategoryFilter } from '../components/ui/category-filter';
import { Product } from '../types';
import { supabase } from '../lib/supabase';
import { useThemeStore } from '../store/theme';

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { theme } = useThemeStore();

  useEffect(() => {
    async function fetchProducts() {
      let query = supabase.from('products').select('*');
      
      if (selectedCategory) {
        query = query.eq('category', selectedCategory);
      }

      const { data, error } = await query;
      
      if (error) {
        console.error('Error fetching products:', error);
        return;
      }

      setProducts(data || []);
      setLoading(false);
    }

    async function fetchCategories() {
      const { data, error } = await supabase
        .from('products')
        .select('category');

      if (error) {
        console.error('Error fetching categories:', error);
        return;
      }

      const uniqueCategories = [...new Set(data.map(item => item.category))];
      setCategories(uniqueCategories);
    }

    fetchProducts();
    fetchCategories();
  }, [selectedCategory]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="text-center mb-16">
          <h1 className={`text-5xl font-bold tracking-tight mb-4 ${
            theme === 'dark' 
              ? 'text-white' 
              : 'text-gray-900'
          }`}>
            Digital Art Collection
          </h1>
          <p className={`text-lg ${
            theme === 'dark' 
              ? 'text-gray-300' 
              : 'text-gray-600'
          } max-w-2xl mx-auto`}>
            Discover unique digital artworks, prints, and stickers created by talented artists
          </p>
        </div>
        
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}