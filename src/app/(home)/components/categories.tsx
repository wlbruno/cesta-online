import React, { useEffect, useState } from 'react';
import { getCategories } from "@/services/api";
import { Category } from '../types/Category';  // Importe a interface Category
import CategoryItem from './category-item';

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Erro ao buscar as categorias:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-y-2 gap-x-4">
      {categories.map(category => (
        <CategoryItem key={category.id} name={category.name} slug={category.slug}/>
      ))}
    </div>
  );
}

export default Categories;
