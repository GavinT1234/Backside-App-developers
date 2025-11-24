import {
    createOffer,
    findOfferById,
    findAllOffers,
    updateOffer,
    deleteOffer,
} from '../repositories/offerRepo.js';

export async function createNewOffer(data) {
    return await createOffer(data);
}

export async function getOfferById(id) {
    return await findOfferById(id);
}

export async function getAllOffers() {
    return await findAllOffers();
}

export async function modifyOffer(id, data) {
    return await updateOffer(id, data);
}

export async function removeOffer(id) {
    return await deleteOffer(id);
}