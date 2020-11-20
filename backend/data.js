import bcrypt from 'bcryptjs';


const data = {

  users: [
    {
      name:"Douv",
      email: "admin@gmail.com",
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'JJ',
      email: 'jj@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],

    products: [
      {
       
        name: 'Canasta',
        category: 'Canasta',
        image: '/images/canasta.jpg',
        price: 120,
        brand: 'GGC',
        countInStock: 10,
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
       
        name: 'Canaste',
        category: 'Canasta',
        image: '/images/img3.jpg',
        price: 120,
        brand: 'GGC',
        countInStock: 5,
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Canast',
        category: 'Canasta',
        image: '/images/img3.jpg',
        price: 120,
        brand: 'GGC',
        countInStock: 7,
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
   
        name: 'CaCa',
        category: 'Canasta',
        image: '/images/img3.jpg',
        price: 120,
        brand: 'GGC',
        countInStock: 7,
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
   
        name: 'CaCaCa',
        category: 'Canasta',
        image: '/images/img3.jpg',
        price: 120,
        brand: 'GGC',
        countInStock: 7,
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Canas',
        category: 'Canasta',
        image: '/images/img2.jpg',
        price: 120,
        brand: 'GGC',
        countInStock: 9,
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
       
        name: 'Canastas',
        category: 'Canasta',
        image: '/images/img1.jpg',
        price: 120,
        brand: 'GGC',
        countInStock: 2,
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Canasts',
        category: 'Canasta',
        image: '/images/canaste.jpeg',
        price: 120,
        brand: 'GGC',
        countInStock: 4,
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
    ],
  };
  export default data;