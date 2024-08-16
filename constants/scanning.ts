interface sizes_available {
  xxs?: boolean,
  XS: boolean,
  S:boolean,
  M:boolean,
  L:boolean,
  XL: boolean,
  XXL: boolean,
}

interface Product {
  seller: string;
  brand: string;
  _id: string;
  product_url: string;
  cover_image: string;
  images: string[];
  productName: string;
  sizes_available: sizes_available;
  price: number;
  primary_colour: string;
  secondary_colour: string | null;
  material: string;
  fit: string;
  occasion: string | null;
  season: string | null;
  theme: string | null;
  gender: string;
  pattern: string | null;
  master_category: string;
  sub_category: string;
  LLM_desc: string | null;
  others: string | null;
}

export const ScanningProducts: Product[] = [
  {
    seller: 'Bonkers corner',
    brand: 'Bonkers corner',
    _id: '2946080',
    product_url:
      'https://www.bonkerscorner.com/product/black-wingman-oversized-t-shirt/',
    cover_image:
      'https://assets.bonkerscorner.com/uploads/2021/10/22132840/wingman-black1-1-1200x1800.jpg',
    images: [
      'https://assets.bonkerscorner.com/uploads/2022/03/19181609/Bonkerscorner_wingmen_black_08.jpg',
      'https://assets.bonkerscorner.com/uploads/2022/03/19181625/Bonkerscorner_wingmen_black_02.jpg',
      'https://assets.bonkerscorner.com/uploads/2022/03/19181615/Bonkerscorner_wingmen_black_09.jpg',
    ],
    productName: 'Black Wingman Oversized T-Shirt',
    sizes_available: {
      xxs: false,
      XS: false,
      S: true,
      M: true,
      L: true,
      XL: false,
      XXL: false,
    },
    price: 699,
    primary_colour: 'Black',
    secondary_colour: null,
    material: '100% cotton',
    fit: 'Oversized drop shoulder tee',
    occasion: null,
    season: null,
    theme: null,
    gender: 'men',
    pattern: null,
    master_category: 'apparels',
    sub_category: 'Oversized T-shirt',
    LLM_desc: null,
    others: null,
  },
    {
    seller: 'Bonkers corner',
    brand: 'Bonkers corner',
    _id: '2946081',
    product_url:
      'https://www.bonkerscorner.com/product/orange-wingman-oversized-t-shirt/',
    cover_image:
      'https://assets.bonkerscorner.com/uploads/2021/10/22133008/wingman-orange-1-2.jpg',
    images: [
      'https://assets.bonkerscorner.com/uploads/2021/10/22133002/wingman-orange-1-1.jpg',
      'https://assets.bonkerscorner.com/uploads/2022/03/22101326/Bonkerscorner_wingmen_orange_01.jpg',
      'https://assets.bonkerscorner.com/uploads/2022/03/22101321/Bonkerscorner_wingmen_orange_07.jpg',
    ],
    productName: 'Orange Wingman Oversized T-Shirt',
    sizes_available: {
      xxs: false,
      XS: true,
      S: true,
      M: true,
      L: true,
      XL: true,
      XXL: true,
    },
    price: 699,
    primary_colour: 'orange',
    secondary_colour: null,
    material: '100% cotton',
    fit: 'Oversized drop shoulder tee',
    occasion: null,
    season: null,
    theme: null,
    gender: 'men',
    pattern: null,
    master_category: 'apparels',
    sub_category: 'Oversized T-shirt',
    LLM_desc: null,
    others: null,
  },
  {
    seller: 'Bonkers corner',
    brand: 'Bonkers corner',
    _id: '2946082',
    product_url:
      'https://www.bonkerscorner.com/product/lilac-wingman-oversized-t-shirt/',
    cover_image:
      'https://assets.bonkerscorner.com/uploads/2022/03/24141509/Bonkerscorner_wingman_purple_02.jpg',
    images: [
      'https://assets.bonkerscorner.com/uploads/2022/03/24141529/Bonkerscorner_wingman_purple_06.jpg',
      'https://assets.bonkerscorner.com/uploads/2022/03/24141458/Bonkerscorner_wingman_purple_01.jpg',
      'https://assets.bonkerscorner.com/uploads/2022/03/24141519/Bonkerscorner_wingman_purple_03.jpg',
    ],
    productName: 'Lilac Wingman Oversized T-Shirt',
    sizes_available: {
      xxs: false,
      XS: false,
      S: false,
      M: false,
      L: false,
      XL: false,
      XXL: false,
    },
    price: 699,
    primary_colour: 'lilac',
    secondary_colour: null,
    material: '100% cotton',
    fit: 'Oversized drop shoulder tee',
    occasion: null,
    season: null,
    theme: null,
    gender: 'men',
    pattern: null,
    master_category: 'apparels',
    sub_category: 'Oversized T-shirt',
    LLM_desc: null,
    others: null,
  },


  {
    seller: 'Bonkers corner',
    brand: 'Bonkers corner',
    _id: '2946083',
    product_url:
      'https://www.bonkerscorner.com/product/head-empty-oversized-t-shirt/',
    cover_image:
      'https://assets.bonkerscorner.com/uploads/2022/11/28141839/20221118_063228000_iOS-2.jpg',
    images: [
      'https://assets.bonkerscorner.com/uploads/2022/11/28141814/20221118_063228000_iOS-4.jpg',
      'https://assets.bonkerscorner.com/uploads/2022/11/28141831/Bonkerscorner_head_empty_ost06.jpg',
      'https://assets.bonkerscorner.com/uploads/2022/11/28141859/Bonkerscorner_head_empty_ost02.jpg',
    ],
    productName: 'Head Empty Oversized T-shirt',
    sizes_available: {
      xxs: false,
      XS: true,
      S: true,
      M: true,
      L: true,
      XL: true,
      XXL: true,
    },
    price: 699,
    primary_colour: 'navy',
    secondary_colour: null,
    material: '100% cotton',
    fit: 'Oversized drop shoulder tee',
    occasion: null,
    season: null,
    theme: null,
    gender: 'men',
    pattern: null,
    master_category: 'apparels',
    sub_category: 'Oversized T-shirt',
    LLM_desc: null,
    others: null,
  },
  {
    seller: 'Bonkers corner',
    brand: 'Bonkers corner',
    _id: '2946084',
    product_url:
      'https://www.bonkerscorner.com/product/mystical-mushroom-oversized-t-shirt/',
    cover_image:
      'https://assets.bonkerscorner.com/uploads/2023/05/29160142/Bonkerscorner_Mistical_02.jpg',
    images: [
      'https://assets.bonkerscorner.com/uploads/2023/05/29160144/Bonkerscorner_Mistical_03.jpg',
      'https://assets.bonkerscorner.com/uploads/2023/05/29160139/Bonkerscorner_Mistical_01.jpg',
      'https://assets.bonkerscorner.com/uploads/2023/05/29160147/Bonkerscorner_Mistical_04.jpg',
    ],
    productName: 'Mystical Mushroom Oversized T-shirt',
    sizes_available: {
      xxs: false,
      XS: true,
      S: true,
      M: true,
      L: true,
      XL: true,
      XXL: true,
    },
    price: 699,
    primary_colour: 'black',
    secondary_colour: null,
    material: '100% cotton',
    fit: 'Oversized drop shoulder tee',
    occasion: null,
    season: null,
    theme: null,
    gender: 'men',
    pattern: null,
    master_category: 'apparels',
    sub_category: 'Oversized T-shirt',
    LLM_desc: null,
    others: null,
  },
];
