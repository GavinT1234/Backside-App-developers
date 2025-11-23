import {
    createNewOffer,
    getOfferById,
    getAllOffers,
    modifyOffer,
    removeOffer,
} from '../services/offerService.js';

export async function createOfferHandler(req, res) {
    const { amount, type, status, itemId, userId } = req.body;

    const offer = await createNewOffer({ amount, type, status, itemId, userId });
    res.status(201).json(offer);
}

export async function getOfferHandler(req, res) {
    const { id } = req.params;

    const offer = await getOfferById(parseInt(id));
    if (!offer) {
        return res.status(404).json({ error: 'Offer not found' });
    }

    res.status(200).json(offer);
}

export async function getAllOffersHandler(req, res) {
    const offers = await getAllOffers();
    res.status(200).json(offers);
}

export async function updateOfferHandler(req, res) {
    const { id } = req.params;
    const { amount, type, status } = req.body;

    const updates = {};
    if (amount) updates.amount = amount;
    if (type) updates.type = type;
    if (status) updates.status = status;

    const offer = await modifyOffer(parseInt(id), updates);
    res.status(200).json(offer);
}

export async function deleteOfferHandler(req, res) {
    const { id } = req.params;

    await removeOffer(parseInt(id));
    res.status(204).send();
}