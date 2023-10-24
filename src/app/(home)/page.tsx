"use client";

import PromoBanner from '@/app/(home)/components/promoBanner';
import Categories from './components/categories';


export default function Home() {
  return (
    <div>
      <PromoBanner src="/banner01.png" />
    
      <div className="mt-8">
        <Categories />  
      </div>
    </div>
 
)}
