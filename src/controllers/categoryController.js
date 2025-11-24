import {
    createNewCategory,
    getCategoryById,
    getAllCategories,
    modifyCategory,
    removeCategory,
} from '../services/categoryService.js';

export async function createCategoryHandler(req, res) {
    const { name } = req.body;

    const category = await createNewCategory({ name });
    res.status(201).json(category);
}

export async function getCategoryHandler(req, res) {
    const { id } = req.params;

    const category = await getCategoryById(parseInt(id));
    if (!category) {
        return res.status(404).json({ error: 'Category not found' });
    }

    res.status(200).json(category);
}

export async function getAllCategoriesHandler(req, res) {
    const categories = await getAllCategories();
    res.status(200).json(categories);
}

export async function updateCategoryHandler(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const cat = await getCategoryById(parseInt(id));
    if (!cat) {
        return res.status(404).json({ error: 'Category not found' });
    }

    const category = await modifyCategory(parseInt(id), { name });

    res.status(200).json(category);
}

export async function deleteCategoryHandler(req, res) {
    const { id } = req.params;

    await removeCategory(parseInt(id));
    res.status(204).send();
}