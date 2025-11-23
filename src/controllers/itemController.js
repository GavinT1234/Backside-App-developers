import {
    createNewItem,
    getItemById,
    getAllItems,
    modifyItem,
    removeItem,
} from '../services/itemService.js';

export async function createItemHandler(req, res) {
    const { title, price, categoryId } = req.body;

    const item = await createNewItem({ title, price, categoryId });
    res.status(201).json(item);
}

export async function getItemHandler(req, res) {
    const { id } = req.params;

    const item = await getItemById(parseInt(id));
    if (!item) {
        return res.status(404).json({ error: 'Item not found' });
    }

    res.status(200).json(item);
}

export async function getAllItemsHandler(req, res) {
    const items = await getAllItems();
    res.status(200).json(items);
}

export async function updateItemHandler(req, res) {
    const { id } = req.params;
    const { title, price, categoryId } = req.body;

    const updates = {};
    if (title) updates.title = title;
    if (price) updates.price = price;
    if (categoryId) updates.categoryId = categoryId;

    const item = await modifyItem(parseInt(id), updates);
    res.status(200).json(item);
}

export async function deleteItemHandler(req, res) {
    const { id } = req.params;

    await removeItem(parseInt(id));
    res.status(204).send();
}