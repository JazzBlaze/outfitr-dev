interface Product {
    seller: string;
    brand: string;
    _id: string;
    product_url: string;
    cover_image: string;
    images: string[];
    productName: string;
    sizes_available: {
      xxs?: boolean;
      XS: boolean;
      S: boolean;
      M: boolean;
      L: boolean;
      XL: boolean;
      XXL: boolean;
    };
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
  
  const womenProducts: Product[] = [
    {
      seller: "Freakins",
      brand: "Freakins",
      _id: "FKE11902-XS",
      product_url: "https://freakins.com/products/midnight-dark-bodysuit?_pos=4&_fid=215a4b8e8&_ss=c",
      cover_image: "https://freakins.com/cdn/shop/products/DSC05930.jpg?v=1670497482&width=800",
      images: [
        "https://freakins.com/cdn/shop/files/4thjuly24_part2_16110.jpg?v=1720273975&width=800",
        "https://freakins.com/cdn/shop/files/4thjuly24_part2_16086.jpg?v=1720273975&width=800",
        "https://freakins.com/cdn/shop/files/4thjuly24_part2_16093.jpg?v=1720273975&width=800"
      ],
      productName: "Midnight Dark Bodysuit Denim Top",
      sizes_available: {
        XS: true,
        S: true,
        M: true,
        L: true,
        XL: true,
        XXL: true
      },
      price: 999,
      primary_colour: "midnight dark",
      secondary_colour: null,
      material: "denim",
      fit: "Bodysuit",
      occasion: null,
      season: null,
      theme: null,
      gender: "female",
      pattern: null,
      master_category: "apparels",
      sub_category: "bodysuit",
      LLM_desc: null,
      others: null
    },
    {
      seller: "Freakins",
      brand: "Freakins",
      _id: "FKE10743-26",
      product_url: "https://freakins.com/products/wide-cargo-utility-pants-in-black?_pos=26&_fid=184730318&_ss=c",
      cover_image: "https://freakins.com/cdn/shop/products/DSC01067-Edit.jpg?v=1644573498&width=800",
      images: [
        "https://freakins.com/cdn/shop/products/DSC01089-Edit.jpg?v=1644573503&width=800",
        "https://freakins.com/cdn/shop/products/DSC01077-Edit.jpg?v=1644573503&width=800"
      ],
      productName: "Wide Cargo Utility Jeans in Black",
      sizes_available: {
        XS: true,
        S: true,
        M: true,
        L: true,
        XL: true,
        XXL: true
      },
      price: 1399,
      primary_colour: "black",
      secondary_colour: null,
      material: "100% Cotton",
      fit: "High Waist",
      occasion: null,
      season: null,
      theme: null,
      gender: "female",
      pattern: null,
      master_category: "apparels",
      sub_category: "cargo jeans",
      LLM_desc: null,
      others: null
    }
  ];
  