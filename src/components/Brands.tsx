const brands = [
    {
        id: 1,
        name: 'iPhone',
        discountText: 'UP to 80% OFF',
        bgColor: 'bg-gray-800',
        logo: 'https://example.com/logos/apple-logo.png',
        productImage: 'https://pngimg.com/uploads/iphone_13/iphone_13_PNG2.png',
    },
    {
        id: 2,
        name: 'realme',
        discountText: 'UP to 80% OFF',
        bgColor: 'bg-yellow-200',
        logo: 'https://example.com/logos/realme-logo.png',
        productImage: 'https://www.pngall.com/wp-content/uploads/4/Realme-Smartphone.png',
    },
    {
        id: 3,
        name: 'Xiaomi',
        discountText: 'UP to 80% OFF',
        bgColor: 'bg-orange-200',
        logo: 'https://example.com/logos/xiaomi-logo.png',
        productImage: 'https://i02.appmifile.com/676_item_id/05/09/2024/f803b382e723bb2792a5759ef13e3059.png',
    },
];

export default function Brands() {
    return (
        <section className="px-6 my-6">
            <h3 className="mb-4 font-semibold">
                Top <span className="text-blue-600">Electronics Brands</span>
            </h3>
            <div className="flex space-x-4 overflow-x-auto">
                {brands.map(({ id, name, discountText, bgColor, logo, productImage }) => (
                    <div
                        key={id}
                        className={`${bgColor} rounded-lg flex flex-1 p-4 items-center justify-between space-x-4 min-w-[280px]`}
                    >
                        <div
                            className="flex flex-col justify-between text-white"
                            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }} // Add text shadow here
                        >
                            <div className="text-sm uppercase">{name}</div>
                            <div className="font-bold text-lg">{discountText}</div>
                        </div>
                        <img src={productImage} alt={`${name} product`} className="h-24 object-contain" />
                    </div>
                ))}
            </div>
        </section>
    );
}
