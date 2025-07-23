"use client";

import React from 'react';
import useStore from '../stores/store';  // adjust the path accordingly

interface Deal {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  discount: string;
  saveAmount: string;
  image: string;
}

const deals: Deal[] = [
  {
    id: 1,
    name: 'Galaxy S22 Ultra',
    price: '32.999',
    originalPrice: '74.999',
    discount: '56% OFF',
    saveAmount: '42.000',
    image: 'https://images-cdn.ubuy.co.id/64d7ab1514f22962442655be-samsung-galaxy-s22-ultra-sm-s908b-ds.jpg',
  },
  {
    id: 2,
    name: 'Galaxy M13 (4GB | 64 GB )',
    price: '10.499',
    originalPrice: '14.999',
    discount: '56% OFF',
    saveAmount: '4500',
    image: 'https://m.media-amazon.com/images/I/81kkRZALXQL.jpg',
  },
  // add more deals...
];

export default function Deals() {
  const quantities = useStore((state) => state.quantities);
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);

  return (
    <section className="px-6 my-6">
      <h3 className="mb-4 font-semibold">
        Grab the best deal on <span className="text-blue-900">Smartphones</span>
      </h3>
      <div className="flex space-x-4 overflow-x-auto">
        {deals.map(({ id, name, price, originalPrice, discount, saveAmount, image }) => (
          <div
            key={id}
            className="border border-gray-200 rounded-lg p-4 min-w-[160px] cursor-pointer hover:shadow-lg transition"
          >
            <div className="relative">
              <img src={image} alt={name} className="h-32 w-full object-contain" />
              <span className="absolute top-1 right-1 bg-blue-600 text-white text-xs px-2 rounded">
                {discount}
              </span>
            </div>
            <div className="mt-2 text-sm">
              <p>{name}</p>
              <p className="font-semibold">Rp. {price}</p>
              <p className="line-through text-gray-400">Rp. {originalPrice}</p>
              <p className="text-green-600">Save - Rp. {saveAmount}</p>
              <div className="mt-2 text-center">
                <button
                  onClick={() => decreaseQuantity(id)}
                  disabled={!quantities[id]}
                  className="bg-red-500 text-white px-2 py-1 mr-2 rounded disabled:opacity-50"
                  style={{ width: 25 }}
                >
                  -
                </button>
                <span className="px-2">{quantities[id] || 0}</span>
                <button
                  onClick={() => increaseQuantity(id)}
                  className="bg-green-500 text-white px-2 py-1 ml-2 rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
