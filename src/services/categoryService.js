import {
    createCategory,
    findCategoryById,
    findAllCategories,
    updateCategory,
    deleteCategory,
} from '../repositories/categoryRepo.js';

export async function createNewCategory(data) {
    return await createCategory(data);
}

export async function getCategoryById(id) {
    return await findCategoryById(id);
}

export async function getAllCategories() {
    return await findAllCategories();
}

export async function modifyCategory(id, data) {
    return await updateCategory(id, data);
}

export async function removeCategory(id) {
    return await deleteCategory(id);
}