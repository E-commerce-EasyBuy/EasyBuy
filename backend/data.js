import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'user',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      _id: '1',
      name: 'Elora Frock',
      category: 'Frock',
      image: '/images/p1.jpg',
      price: 1200,
      countInStock: 10,
      brand: 'Elora',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      _id: '2',
      name: 'DreesMore Frock',
      category: 'Frock',
      image: '/images/p2.jpg',
      price: 1000,
      countInStock: 20,
      brand: 'DressMore',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      _id: '3',
      name: 'Nolimite Frock',
      category: 'Frock',
      image: '/images/p3.jpg',
      price: 2200,
      countInStock: 0,
      brand: 'Nolimite',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      _id: '4',
      name: 'Nolimite Frock',
      category: 'Frock',
      image: '/images/p4.jpg',
      price: 1078,
      countInStock: 15,
      brand: 'Nolimite',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      _id: '5',
      name: 'Elora Frock',
      category: 'Frock',
      image: '/images/p5.jpg',
      price: 1565,
      countInStock: 5,
      brand: 'Elora',
      rating: 4.5,
      numReviews: 1000,
      description: 'high quality product',
    },
    {
      _id: '6',
      name: 'DreesMore Frock',
      category: 'Frock',
      image: '/images/p6.jpg',
      price: 1390,
      countInStock: 12,
      brand: 'Dressmore',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
  ],
};
export default data;
