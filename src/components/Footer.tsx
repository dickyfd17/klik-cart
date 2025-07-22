import React from 'react';

const popularCategories = [
    'Staples',
    'Beverages',
    'Personal Care',
    'Home Care',
    'Baby Care',
    'Vegetables & Fruits',
    'Snacks & Foods',
    'Dairy & Bakery',
];

const customerServices = [
    'About Us',
    'Terms & Conditions',
    'FAQ',
    'Privacy Policy',
    'E-waste Policy',
    'Cancellation & Return Policy',
];

export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white px-6 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* KlikCart + Contact + Download App */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">KlikCart</h2>
                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">Contact Us</h3>
                        <p className="flex items-center gap-2 mb-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 10h2l4 8 6-16 4 8h2"
                                />
                            </svg>
                            Whats App +1 202-918-2132
                        </p>
                        <p className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 10h2l4 8 6-16 4 8h2"
                                />
                            </svg>
                            Call Us +1 202-918-2132
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Download App</h3>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                aria-label="Download on the App Store"
                                className="block"
                            >
                                <img
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="App Store"
                                    className="h-12"
                                />
                            </a>
                            <a
                                href="#"
                                aria-label="Get it on Google Play"
                                className="block"
                            >
                                <img
                                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                    alt="Google Play"
                                    className="h-12"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Most Popular Categories */}
                <div>
                    <h3 className="font-semibold mb-6 border-b border-white pb-1">
                        Most Popular Categories
                    </h3>
                    <ul className="space-y-2">
                        {popularCategories.map((category) => (
                            <li key={category} className="hover:underline cursor-pointer">
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Customer Services */}
                <div>
                    <h3 className="font-semibold mb-6 border-b border-white pb-1">
                        Customer Services
                    </h3>
                    <ul className="space-y-2">
                        {customerServices.map((service) => (
                            <li key={service} className="hover:underline cursor-pointer">
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-10 text-center text-sm">
                © 2022 All rights reserved. Reliance Retail Ltd.
            </div>
        </footer>
    );
}
