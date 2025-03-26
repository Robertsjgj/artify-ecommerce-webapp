import React from 'react';
import { Button } from './button';
import { useThemeStore } from '../../store/theme';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  const { theme } = useThemeStore();

  return (
    <div className="flex flex-wrap gap-3 mb-12 justify-center">
      <Button
        variant={selectedCategory === null ? 'primary' : 'outline'}
        onClick={() => onSelectCategory(null)}
        className={`px-6 py-2 rounded-full transition-all duration-300 ${
          selectedCategory === null 
            ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/50' 
            : theme === 'dark'
              ? 'bg-white/10 text-white hover:bg-white/20'
              : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'primary' : 'outline'}
          onClick={() => onSelectCategory(category)}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            selectedCategory === category 
              ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/50' 
              : theme === 'dark'
                ? 'bg-white/10 text-white hover:bg-white/20'
                : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}