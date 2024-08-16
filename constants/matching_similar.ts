interface sizes_available {
  xxs?: boolean;
  XS: boolean;
  S: boolean;
  M: boolean;
  L: boolean;
  XL: boolean;
  XXL: boolean;
}

interface Product {
  seller: string;
  brand: string;
  product_id: string;
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

export const matching_similar: Product[] = [
  {
    seller: 'Urban Monkey',
    brand: 'Urban Monkey',
    product_id: '8904267890969',
    product_url:
      'https://www.urbanmonkey.com/collections/oversized-hip-hop-t-shirts/products/legacy-t-shirt-002?section_title=oversized-t-shirts&?section_id=262759841876&?location_id=13',
    cover_image:
      'https://www.urbanmonkey.com/cdn/shop/files/legacy-acid-wash-boxy-tshirt-01.jpg?v=1711853292&width=720',
    images: [
      'https://www.urbanmonkey.com/cdn/shop/files/legacy-acid-wash-boxy-tshirt-02.jpg?v=1711853292&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/legacy-acid-wash-boxy-tshirt-03.jpg?v=1711853292&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/legacy-acid-wash-boxy-tshirt-05.jpg?v=1711853292&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/legacy-acid-wash-boxy-tshirt-04.jpg?v=1711853292&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/legacy-acid-wash-boxy-tshirt-06.jpg?v=1711853292&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/legacy-acid-wash-boxy-tshirt-07.jpg?v=1711853292&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/URBANMONKEY06_11_231635.jpg?v=1711853292&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/URBANMONKEY06_11_231642.jpg?v=1711853292&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/URBANMONKEY06_11_2312848.jpg?v=1711853292&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/URBANMONKEY06_11_2312871.jpg?v=1711853292&width=720',
    ],
    productName: 'Legacy T-shirt // 002',
    sizes_available: {
      XS: false,
      S: false,
      M: false,
      L: false,
      XL: false,
      XXL: false,
    },
    price: 1500,
    primary_colour: 'black',
    secondary_colour: null,
    material: '80% cotton 20% polyester',
    fit: 'oversized fit',
    occasion: null,
    season: null,
    theme: null,
    gender: 'unisex',
    pattern: null,
    master_category: 'apparels',
    sub_category: 'oversized T-shirt',
    LLM_desc: null,
    others: null,
  },
  {
    seller: 'Urban Monkey',
    brand: 'Urban Monkey',
    product_id: '8664565940505',
    product_url:
      'https://www.urbanmonkey.com/collections/oversized-hip-hop-t-shirts/products/within?section_title=oversized-t-shirts&?section_id=262759841876&?location_id=2',
    cover_image:
      'https://www.urbanmonkey.com/cdn/shop/files/within-tshirt-model-01.jpg?v=1708325318&width=720',
    images: [
      'https://www.urbanmonkey.com/cdn/shop/files/within-black-oversized-tshirt-01.jpg?v=1711683285&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/within-black-oversized-tshirt-03.jpg?v=1711683285&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/within-black-oversized-tshirt-04.jpg?v=1711683285&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/within-black-oversized-tshirt-02.jpg?v=1711683285&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/within-black-oversized-tshirt-05.jpg?v=1711683285&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/within-black-oversized-tshirt-06.jpg?v=1711683285&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/within-black-oversized-tshirt-07.jpg?v=1711683285&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/within-tshirt-model-02.jpg?v=1711683285&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/within-tshirt-04.jpg?v=1711683285&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/within-tshirt-03.jpg?v=1711683285&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/within-tshirt-10.jpg?v=1711683285&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/within-tshirt-07.jpg?v=1711683285&width=720',
    ],
    productName: 'Within',
    sizes_available: {
      XS: true,
      S: true,
      M: true,
      L: true,
      XL: true,
      XXL: true,
    },
    price: 999,
    primary_colour: 'black',
    secondary_colour: null,
    material: '100% cotton',
    fit: 'updated oversized fit',
    occasion: null,
    season: null,
    theme: null,
    gender: 'unisex',
    pattern: null,
    master_category: 'apparels',
    sub_category: 'oversized T-shirt',
    LLM_desc: null,
    others: null,
  },
  {
    seller: 'Urban Monkey',
    brand: 'Urban Monkey',
    product_id: '8904277983513',
    product_url:
      'https://www.urbanmonkey.com/collections/oversized-hip-hop-t-shirts/products/easy-t-shirt?section_title=oversized-t-shirts&?section_id=262759841876&?location_id=21',
    cover_image:
      'https://www.urbanmonkey.com/cdn/shop/files/easy-black-oversized-tshirt-01.jpg?v=1711683183&width=720',
    images: [
      'https://www.urbanmonkey.com/cdn/shop/files/easy-black-oversized-tshirt-02.jpg?v=1711683183&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/easy-black-oversized-tshirt-07.jpg?v=1711683183&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/easy-black-oversized-tshirt-03.jpg?v=1711683183&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/easy-black-oversized-tshirt-04.jpg?v=1711683183&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/easy-black-oversized-tshirt-05.jpg?v=1711683183&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/easy-black-oversized-tshirt-06.jpg?v=1711683183&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/URBANMONKEY06_11_231668-1.jpg?v=1711683183&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/URBANMONKEY06_11_231674.jpg?v=1711683183&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/URBANMONKEY06_11_2312953.jpg?v=1711683209&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/URBANMONKEY06_11_2312962.jpg?v=1711683183&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/URBANMONKEY06_11_2312977.jpg?v=1711683183&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/URBANMONKEY06_11_2312979.jpg?v=1711683183&width=720',
    ],
    productName: 'Easy T-shirt',
    sizes_available: {
      XS: false,
      S: false,
      M: false,
      L: false,
      XL: false,
      XXL: false,
    },
    price: 999,
    primary_colour: 'black',
    secondary_colour: null,
    material: '100% cotton',
    fit: 'oversized fit',
    occasion: null,
    season: null,
    theme: null,
    gender: 'unisex',
    pattern: null,
    master_category: 'apparels',
    sub_category: 'oversized T-shirt',
    LLM_desc: null,
    others: null,
  },
  {
    seller: 'Urban Monkey',
    brand: 'Urban Monkey',
    product_id: '8884162461977',
    product_url: 'https://www.urbanmonkey.com/products/legacy-t-shirt-001',
    cover_image:
      'https://www.urbanmonkey.com/cdn/shop/files/legacy-black-oversized-tshirt-06.jpg?v=1712554381&width=720',
    images: [
      'https://www.urbanmonkey.com/cdn/shop/files/legacy-black-oversized-logo-tshirt-04.jpg?v=1712554381&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/legacy-black-oversized-logo-tshirt-02.jpg?v=1712554381&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/legacy-black-oversized-logo-tshirt-01.jpg?v=1712554381&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/legacy-black-oversized-logo-tshirt-03.jpg?v=1712554376&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/legacy-black-oversized-logo-tshirt-05.jpg?v=1712554376&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/URBANMONKEY06_11_231645.jpg?v=1712554376&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/URBANMONKEY06_11_231652.jpg?v=1712554376&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/URBANMONKEY06_11_2312880.jpg?v=1712554376&width=720',
    ],
    productName: 'Legacy T-shirt // 001',
    sizes_available: {
      XS: true,
      S: true,
      M: true,
      L: true,
      XL: true,
      XXL: true,
    },
    price: 999,
    primary_colour: 'black',
    secondary_colour: null,
    material: '100% cotton',
    fit: 'oversized fit',
    occasion: null,
    season: null,
    theme: null,
    gender: 'unisex',
    pattern: null,
    master_category: 'apparels',
    sub_category: 'oversized T-shirt',
    LLM_desc: null,
    others: null,
  },
];
