const products = [
  {
    name: 'Baby organic bodysuit with short sleeves',
    image:
      'https://images.unsplash.com/photo-1622290319146-7b63df48a635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80',
    description:
      'Fresh air for little arms: romper with short sleeves for warmer days. With handy details for very quick donning and doffing.',
    brand: 'kfashion',
    category: 'Kids',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'BASIC CREW NECK T-SHIRT',
    image:
      'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80',
    description: 'White cotton T-shirt for kids from 4 to 5 years old.',
    brand: 'Sample',
    category: 'Kids',
    price: 9.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: 'Mens Casual Premium Slim Fit T-Shirts',
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    brand: 'fashion M',
    category: 'Men',
    price: 22.3,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: 'Mens Cotton Jacket',
    image: "https://p1.pxfuel.com/preview/899/121/125/khaki-jacket-positive.jpg",
    description:
    'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    brand: 'Store m',
    category: 'Men',
    price: 49.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: "Women's 3-in-1 Snowboard Jacket Winter Coats",
    image:  "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    description:
      'Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit.',
    brand: 'BIYLACLESEN',
    category: 'Women',
    price: 149.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: "Removable Hooded Faux Leather Moto Biker Jacket",
    image:  "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    description:
      '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
    brand: 'Leather',
    category: 'Women',
    price: 229.99,
    countInStock: 2,
    rating: 4,
    numReviews: 12,
  },
  {
    name: "Rain Jacket Women Windbreaker ",
    image:  "https://images.unsplash.com/photo-1532703321856-d512f3613d54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=677&q=80",
    description:
    "Lightweight perfect for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    brand: 'Leather',
    category: 'Women',
    price: 42.99,
    countInStock: 8,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "T Shirt Casual Cotton Short",
    image:  "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    description:
    "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    brand: 'fashion M',
    category: 'Women',
    price: 11.99,
    countInStock: 2,
    rating: 3,
    numReviews: 12,
  },
  {
    name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    image:  "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    description:
    "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    brand: 'Dk',
    category: 'Accessories',
    price: 19.99,
    countInStock: 2,
    rating: 3,
    numReviews: 12,
  },
  {
    name: "White Gold Plated Princess",
    image:  "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    description:
    "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    brand: 'Fashion D',
    category: 'Accessories',
    price: 9.99,
    countInStock: 10,
    rating: 4,
    numReviews: 12,
  }, {
    name: "Solid Gold Petite Micropave",
    image:  "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    description:
    "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    brand: 'Accessories',
    category: 'Accessories',
    price: 129.99,
    countInStock: 2,
    rating: 4,
    numReviews: 17,
  },
];

export default products;
