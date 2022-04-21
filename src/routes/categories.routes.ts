import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoryRepository = new CategoriesRepository();

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  categoryRepository.create({ name, description });

  return res.status(201).json({
    status: 'success',
    message: 'category created',
  });
});

categoriesRoutes.get('/', (req, res) => {
  const allCategories = categoryRepository.list();

  return res.status(200).json({
    status: 'success',
    data: {
      categories: allCategories,
    },
  });
});

export { categoriesRoutes };
