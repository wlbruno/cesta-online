import { Category } from "@/app/(home)/types/Category";
import { CloudCog } from "lucide-react";

export const getCategories = async (): Promise<Category[]> => {
    const response = await fetch('https://mocki.io/v1/756cee01-23a8-4d2f-9340-188fd85f0c2e');
    if (!response.ok) {
      throw new Error('Erro na chamada da API');
    }
  
    return response.json();
  }
  
