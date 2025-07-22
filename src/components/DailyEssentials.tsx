import React from 'react';

interface EssentialItem {
    id: number;
    name: string;
    discount: string;
    imageUrl: string;
}

const essentials: EssentialItem[] = [
    {
        id: 1,
        name: 'Daily Essentials',
        discount: 'UP to 50% OFF',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/3143/3143460.png', // Example basket image placeholder
    },
    {
        id: 2,
        name: 'Vegitables',
        discount: 'UP to 50% OFF',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/135/135763.png', // Example vegetables image placeholder
    },
    {
        id: 3,
        name: 'Fruits',
        discount: 'UP to 50% OFF',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/415/415680.png', // Example fruits image placeholder
    },
    {
        id: 4,
        name: 'Strawberry',
        discount: 'UP to 50% OFF',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/415/415735.png', // Example strawberry image
    },
    {
        id: 5,
        name: 'Mango',
        discount: 'UP to 50% OFF',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/415/415674.png', // Example mango image
    },
    {
        id: 6,
        name: 'Cherry',
        discount: 'UP to 50% OFF',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/415/415683.png', // Example cherry image
    },
];

export default function DailyEssentials() {
    return (
        <section className="px-6 py-8">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">
                    Daily <span className="text-blue-600">Essentials</span>
                </h3>
                <button className="text-blue-600 hover:underline text-sm">View All &gt;</button>
            </div>
            <div className="flex space-x-6 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100 p-4">
                {essentials.map(({ id, name, discount, imageUrl }) => (
                    <div
                        key={id}
                        className={`flex-shrink-0 w-24 h-28 bg-white rounded-xl shadow-md py-3 flex flex-col items-center justify-center cursor-pointer 
            ${id === 1 ? 'border border-blue-400' : ''}`}
                    >
                        <img
                            src={imageUrl}
                            alt={name}
                            className="w-14 h-14 object-contain rounded-md mb-2"
                            loading="lazy"
                        />
                        <p className="text-xs font-semibold text-center">{name}</p>
                        <p className="text-xs font-bold text-center">{discount}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
