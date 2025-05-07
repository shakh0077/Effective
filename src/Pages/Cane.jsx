// import React, { useState } from 'react';

// const ImportFromChina = () => {
//   const [products, setProducts] = useState([
//     { id: 1, name: 'Smart Watch X7', origin: 'Shenzhen', price: 25.0, unit: 'TB', size: '3.5 m', brand: 'PENA', liked: false, inCart: false },
//     { id: 2, name: 'Wireless Earbuds Pro', origin: 'Guangzhou', price: 18.5, unit: 'TB', size: '2.8 m', brand: 'Hideep', liked: false, inCart: false },
//     { id: 3, name: '4K Action Camera', origin: 'Shanghai', price: 32.0, unit: 'TB', size: '4.2 m', brand: 'PENA', liked: false, inCart: false },
//     { id: 4, name: 'Portable SSD 1TB', origin: 'Beijing', price: 42.5, unit: 'TB', size: '1.0 m', brand: 'Hideep', liked: false, inCart: false },
//   ]);

//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);
//   const [selectedBrand, setSelectedBrand] = useState(null);

//   const toggleLike = (id) => {
//     setProducts(products.map(product => 
//       product.id === id ? { ...product, liked: !product.liked } : product
//     ));
//   };

//   const addToCart = (product) => {
//     if (!cart.some(item => item.id === product.id)) {
//       setCart([...cart, product]);
//       setProducts(products.map(p => 
//         p.id === product.id ? { ...p, inCart: true } : p
//       ));
//     }
//   };

//   const removeFromCart = (id) => {
//     setCart(cart.filter(item => item.id !== id));
//     setProducts(products.map(p => 
//       p.id === id ? { ...p, inCart: false } : p
//     ));
//   };

//   const filteredProducts = selectedBrand
//     ? products.filter(product => product.brand === selectedBrand)
//     : products;

//   const brands = [...new Set(products.map(product => product.brand))];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm">
//         <div className="container mx-auto px-4 py-6">
//           <div className="flex justify-between items-center">
//             <h1 className="text-2xl font-bold text-blue-600">Endi Xitoydan buyurtma berish mumkin!</h1>
//             <div className="flex items-center space-x-4">
//               <button 
//                 onClick={() => setShowCart(true)}
//                 className="relative p-2 text-gray-600 hover:text-blue-600"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//                 {cart.length > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                     {cart.length}
//                   </span>
//                 )}
//               </button>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
//                 Kirish
//               </button>
//             </div>
//           </div>
//           <p className="mt-2 text-gray-600">Biz mahsulotlar tanlovini kengaytirdik</p>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-8">
//         {/* Hero Section */}
//         <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl p-8 mb-8 text-center">
//           <h2 className="text-2xl font-bold mb-2">Xitoydan to'g'ridan-to'g'ri yetkazib berish</h2>
//           <p className="mb-4">Eng yaxshi narxlarda original mahsulotlar</p>
//           <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition">
//             Hozir buyurtma bering
//           </button>
//         </section>

//         {/* Products Section */}
//         <section className="mb-12">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-800">Wow prices</h2>
//             <button className="text-blue-600 hover:text-blue-800 font-medium">More &gt;</button>
//           </div>

//           {/* Brand Filters */}
//           <div className="flex space-x-2 mb-6">
//             <button
//               onClick={() => setSelectedBrand(null)}
//               className={`px-4 py-2 rounded-md ${!selectedBrand ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
//             >
//               All Brands
//             </button>
//             {brands.map(brand => (
//               <button
//                 key={brand}
//                 onClick={() => setSelectedBrand(brand)}
//                 className={`px-4 py-2 rounded-md ${selectedBrand === brand ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
//               >
//                 {brand}
//               </button>
//             ))}
//           </div>

//           {/* Products Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {filteredProducts.map(product => (
//               <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//                 <div className="p-4">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="font-bold text-lg">{product.name}</h3>
//                       <p className="text-gray-500 text-sm">{product.origin}</p>
//                     </div>
//                     <button 
//                       onClick={() => toggleLike(product.id)}
//                       className={`p-1 ${product.liked ? 'text-red-500' : 'text-gray-300 hover:text-red-500'}`}
//                     >
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={product.liked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                       </svg>
//                     </button>
//                   </div>
                  
//                   <div className="mt-4">
//                     <table className="w-full">
//                       <tbody>
//                         <tr>
//                           <td className="py-1 text-gray-600">Size</td>
//                           <td className="py-1 font-medium">{product.size}</td>
//                         </tr>
//                         <tr>
//                           <td className="py-1 text-gray-600">Price</td>
//                           <td className="py-1 font-bold text-blue-600">{product.price} {product.unit}</td>
//                         </tr>
//                         <tr>
//                           <td className="py-1 text-gray-600">Brand</td>
//                           <td className="py-1 font-medium">{product.brand}</td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>

//                   <button
//                     onClick={() => product.inCart ? removeFromCart(product.id) : addToCart(product)}
//                     className={`w-full mt-4 py-2 rounded-md font-medium transition ${product.inCart ? 'bg-red-100 text-red-600 hover:bg-red-200' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
//                   >
//                     {product.inCart ? 'Remove from Cart' : 'Add to Cart'}
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Additional Sections */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Ko'rish</h2>
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <p className="text-gray-600 mb-4">
//               Biz Xitoydan to'g'ridan-to'g'ri import qilish imkoniyatini taqdim etamiz. 
//               Mahsulotlarimiz original va sifatli bo'lib, eng yaxshi narxlarda taqdim etiladi.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="bg-blue-50 p-4 rounded-lg">
//                 <h3 className="font-bold text-lg mb-2">Tez Yetkazib Berish</h3>
//                 <p className="text-gray-600">7-14 ish kunida yetkazib beramiz</p>
//               </div>
//               <div className="bg-blue-50 p-4 rounded-lg">
//                 <h3 className="font-bold text-lg mb-2">Original Mahsulotlar</h3>
//                 <p className="text-gray-600">Faqat sertifikatlangan tovarlar</p>
//               </div>
//               <div className="bg-blue-50 p-4 rounded-lg">
//                 <h3 className="font-bold text-lg mb-2">Qo'llab-quvvatlash</h3>
//                 <p className="text-gray-600">24/7 mijozlarga xizmat</p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Shopping Cart Sidebar */}
//       {showCart && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
//           <div className="bg-white w-full max-w-md h-full overflow-y-auto">
//             <div className="p-4 border-b flex justify-between items-center">
//               <h3 className="text-xl font-bold">Savat ({cart.length})</h3>
//               <button onClick={() => setShowCart(false)} className="text-gray-500 hover:text-gray-700">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>

//             {cart.length === 0 ? (
//               <div className="p-8 text-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//                 <p className="text-gray-500">Savat bo'sh</p>
//                 <button 
//                   onClick={() => setShowCart(false)}
//                   className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
//                 >
//                   Mahsulotlarni ko'rish
//                 </button>
//               </div>
//             ) : (
//               <>
//                 <div className="divide-y">
//                   {cart.map(item => (
//                     <div key={item.id} className="p-4 flex justify-between items-center">
//                       <div>
//                         <h4 className="font-medium">{item.name}</h4>
//                         <p className="text-gray-500 text-sm">{item.brand}</p>
//                       </div>
//                       <div className="flex items-center">
//                         <p className="text-blue-600 font-semibold mr-4">{item.price} {item.unit}</p>
//                         <button 
//                           onClick={() => removeFromCart(item.id)}
//                           className="text-red-500 hover:text-red-700"
//                         >
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="p-4 border-t">
//                   <div className="flex justify-between mb-4">
//                     <span className="font-bold">Jami:</span>
//                     <span className="font-bold text-blue-600">
//                       {cart.reduce((sum, item) => sum + item.price, 0)} TB
//                     </span>
//                   </div>
//                   <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition">
//                     Buyurtma berish
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-8">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div>
//               <h4 className="text-xl font-bold mb-4">Xitoydan Buyurtma</h4>
//               <p className="text-gray-300">Eng yaxshi narxlarda original mahsulotlar</p>
//             </div>
//             <div>
//               <h4 className="text-lg font-bold mb-4">Aloqa</h4>
//               <ul className="space-y-2">
//                 <li className="text-gray-300">+998 90 123 45 67</li>
//                 <li className="text-gray-300">info@xitoybuyurtma.uz</li>
//                 <li className="text-gray-300">Toshkent shahar, Yunusobod tumani</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-bold mb-4">Bizni kuzatib boring</h4>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-300 hover:text-white">
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-300 hover:text-white">
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-300 hover:text-white">
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
//             <p>© 2023 Xitoydan Buyurtma. Barcha huquqlar himoyalangan.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ImportFromChina;