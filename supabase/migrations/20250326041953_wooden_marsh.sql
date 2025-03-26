/*
  # Add sample products

  1. Changes
    - Insert sample digital art products into the products table
    - Categories include: Digital Art, Prints, Stickers
    - Each product has a unique name, description, and image from Unsplash
*/

INSERT INTO products (name, description, price, image_url, category) VALUES
(
  'Neon Dreams',
  'A vibrant digital artwork featuring neon-lit cityscapes and abstract patterns.',
  29.99,
  'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?auto=format&fit=crop&q=80',
  'Digital Art'
),
(
  'Ocean Waves',
  'Serene digital painting of ocean waves during sunset.',
  24.99,
  'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&q=80',
  'Digital Art'
),
(
  'Abstract Geometry',
  'Modern geometric patterns in bold colors, perfect for any space.',
  19.99,
  'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?auto=format&fit=crop&q=80',
  'Prints'
),
(
  'Botanical Dreams',
  'Delicate floral patterns in watercolor style.',
  34.99,
  'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80',
  'Prints'
),
(
  'Cute Animals Pack',
  'Set of 5 adorable animal stickers in kawaii style.',
  9.99,
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&q=80',
  'Stickers'
),
(
  'Space Explorer',
  'Collection of cosmic-themed stickers featuring planets and stars.',
  12.99,
  'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80',
  'Stickers'
);