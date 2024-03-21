import { Food } from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tags';

export const sample_foods: Food[] = [
  {
    id          : '1',
    name        : 'Pizza Pepperoni',
    cooktime    : '10~20',
    price       : 10,
    favorite    : false,
    origins     : ['italy'],
    stars       : 4.5,
    imageUrl    : 'assets/food-1.jpg',
    tags        : ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id          : '2',
    name        : 'Meatball',
    price       : 20,
    cooktime    : '20~30',
    favorite    : true,
    origins     : ['persia', 'middle east', 'china'],
    stars       : 4.7,
    imageUrl    : 'assets/food-2.jpg',
    tags        : ['SlowFood', 'Lunch'],
  },
  {
    id          : '3',
    name        : 'Hamburger',
    price       : 5,
    cooktime    : '10~15',
    favorite    : false,
    origins     : ['germany', 'us'],
    stars       : 3.5,
    imageUrl    : 'assets/food-3.jpg',
    tags        : ['FastFood', 'Hamburger'],
  },
  {
    id          : '4',
    name        : 'Chicken Nuggets',
    price       : 2,
    cooktime    : '15~20',
    favorite    : true,
    origins     : ['us', 'france'],
    stars       : 3.3,
    imageUrl    : 'assets/food-4.jpg',
    tags        : ['FastFood', 'Fry'],
  },
  {
    id          : '5',
    name        : 'Ramen',
    price       : 11,
    cooktime    : '40~50',
    favorite    : false,
    origins     : ['japan', 'asia'],
    stars       : 5.0,
    imageUrl    : 'assets/food-5.jpg',
    tags        : ['SlowFood', 'Soup'],
  },
  {
    id          : '6',
    name        : 'Vegetables Pizza',
    price       : 9,
    cooktime    : '40~50',
    favorite    : false,
    origins     : ['italy'],
    stars       : 4.0,
    imageUrl    : 'assets/food-6.jpg',
    tags        : ['FastFood', 'Pizza', 'Lunch'],
  },
];

export const sample_tags: Tag[] = [
  { name        : 'All', count: 6 },
  { name        : 'FastFood', count: 4 },
  { name        : 'Pizza', count: 2 },
  { name        : 'Lunch', count: 3 },
  { name        : 'SlowFood', count: 2 },
  { name        : 'Hamburger', count: 1 },
  { name        : 'Fry', count: 1 },
  { name        : 'Soup', count: 1 },
];
