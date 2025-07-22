import { FiMenu, FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between p-4 shadow-sm">
            <button><FiMenu size={24} /></button>
            <h1 className="text-xl font-bold text-blue-600">KlikCart</h1>
            <div className="flex-1 mx-4">
                <input
                    type="text"
                    placeholder="Search essentials, groceries and more..."
                    className="border rounded-full px-4 py-2 w-full"
                />
            </div>
            <div className="flex space-x-6 text-gray-600">
                <FiUser size={24} />
                <FiShoppingCart size={24} />
            </div>
        </nav>
    );
}
