const categories = [
    { id: 1, name: 'Mobile', image: 'https://tiimg.tistatic.com/fp/1/007/574/vivo-mobile-phone-7-38mm-ultra-smooth-body-170g-light-2-5d-adjusted-outline-for-a-great-hold-703.jpg' },
    { id: 2, name: 'Cosmetics', image: 'https://png.pngtree.com/png-vector/20240818/ourmid/pngtree-geset-of-luxury-beauty-cosmetic-makeup-bdifferent-png-image_13532167.png' },
    { id: 3, name: 'Electronics', image: 'https://hpp.arkema.com/files/live/sites/shared_arkema/files/images/markets/Electronics%20electrical/electronics.jpg' },
    { id: 4, name: 'Furniture', image: 'https://png.pngtree.com/png-vector/20240827/ourmid/pngtree-outdoor-furniture-black-and-white-furniture-png-image_13419578.png' },
    { id: 5, name: 'Watches', image: 'https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-wristwatch-analog-classic-brown-leather-strap-watch-png-image_10001801.png' },
    { id: 6, name: 'Decor', image: 'https://img.freepik.com/free-psd/still-life-modern-vase-isolated_23-2150683304.jpg?semt=ais_hybrid&w=740' },
    { id: 7, name: 'Accessories', image: 'https://i.pinimg.com/736x/24/d4/95/24d495921813691bbca304c2dd574615.jpg' },
];

export default function Categories() {
    return (
        <section className="px-6 my-6">
            <h3 className="mb-4 font-semibold">
                Shop From <span className="text-blue-900">Top Categories</span>
            </h3>
            <div className="flex space-x-6 overflow-x-auto p-4">
                {categories.map(({ id, name, image }) => (
                    <div
                        key={id}
                        className="flex flex-col items-center space-y-2 border border-gray-300 rounded-full px-4 py-3 min-w-[90px] cursor-pointer hover:ring-2 hover:ring-blue-600"
                    >
                        <img src={image} alt={name} className="h-12 w-12 object-contain" />
                        <span className="text-xs text-center">{name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
