// Home Page - /pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar.js';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Cricket Auction App</title>
      </Head>
      <Navbar />
      <main className="flex flex-col items-center justify-center py-10">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to the Cricket Auction</h1>
        <p className="text-lg text-gray-700 mt-4">Join live auctions and build your dream team!</p>
        <a href="/auction" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">Go to Live Auction</a>
      </main>
    </div>
  );
}