// pages/products.js
import { Store } from 'lucide-react';
import Image from 'next/image';

const products = [
  {
    name: 'HARGRAVE ANKLE BOOT',
    brand: 'Superbalist',
    price: 'R 500',
    discount: '40% Off',
    image: '/Boots01.png',
    lowStock: false,
  },
  {
    name: 'CAMERON LEATHER',
    brand: 'Superbalist',
    price: 'R 539',
    discount: null,
    image: '/Boots02.png',
    lowStock: true,
  },
  {
    name: 'GRAYSON BROGUE',
    brand: 'Superbalist',
    price: 'R 420',
    discount: '40% Off',
    image: '/Boots03.png',
    lowStock: true,
  },
  {
    name: 'ORCA',
    brand: 'Jack and Jones',
    price: 'R 500',
    discount: '40% Off',
    image: '/Boots04.png',
    lowStock: true,
  },
  {
    name: 'JEAN HIKER BOOTS',
    brand: 'Superbalist',
    price: 'R 600',
    discount: null,
    image: '/Boots05.png',
    lowStock: false,
  },
];

const Products = () => {
  return (
    <div className="products-grid flex flex-wrap">
      {products.map((product, index) => (
        <div key={index} className="product-card hover:border-sky-500 hover:border-4 ">
          <div className="product-image">
            <Image src={product.image} alt={product.name} width={300} height={200} />
            {product.lowStock && <span className="text-small low-stock">LOW STOCK</span>}
            {product.discount && <span className="discount">{product.discount}</span>}
          </div>
          <div className="product-details">
            <h2 className='text-large'>{product.name}</h2>
            <p className='text-sm flex gap-2 text-small text-gray-400 font-bold'><Store size={16}/> {product.brand}</p>
            <p className="price text-large text-sky-500 flex justify-between">{product.price}<a className="text-small text-sky-500" href="#" >View</a></p>
            
          </div>
        </div>
      ))}
      <style jsx>{`
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding: 20px;
          font-family: Arial, sans-serif;

          @media screen and (max-width: 968px) {
            grid-template-columns: repeat(2, 1fr);
          }
          @media screen and (max-width: 468px) {
            grid-template-columns: repeat(1, 1fr);
          }
        }
        .product-card {
          border: 1px solid #ddd;
          padding: 10px;
          position: relative;
          &:hover {
            border-color: #0070f3;
            border-width: 4px;

          }
        }
        .product-image {
          position: relative;
        }
        .product-image img {
          width: 100%;
          height: auto;
        }
        .low-stock {
          position: absolute;
          top: 10px;
          left: 10px;
          background-color: black;
          color: white;
          padding: 5px;
          font-size: 12px;
        }
        .discount {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: #0070f3;
          color: white;
          padding: 5px;
          font-size: 12px;
        }
        .product-details {
          margin-top: 10px;
        }
        .product-details h2 {
          font-size: 18px;
          margin: 10px 0;
        }
        .product-details p {
          margin: 5px 0;
        }
        .price {
          font-weight: bold;
          .button {

          }
        }
        .product-details a {
          color: #0070f3;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default Products;
