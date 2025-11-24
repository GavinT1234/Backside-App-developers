import {
    createItem,
    findItemById,
    findAllItems,
    updateItem,
    deleteItem,
} from '../repositories/itemRepo.js';

export async function createNewItem(data) {
    return await createItem(data);
}

export async function getItemById(id) {
    return await findItemById(id);
}

export async function getAllItems() {
    return await findAllItems();
}

export async function modifyItem(id, data) {
    return await updateItem(id, data);
}

export async function removeItem(id) {
    return await deleteItem(id);
}