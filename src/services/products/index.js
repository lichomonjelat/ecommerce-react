import db from '../../db'

const postCollection = db.collection('items');

export function getProducts() {
    return postCollection.get()
        .then(snapshot => {
            return snapshot.docs.map(doc => ({...doc.data(), id: doc.id }))
        })
};
export function getFeatured() {
    return postCollection.where("featured", "==", "true").get()
        .then(snapshot => {
            return snapshot.docs.map(doc => ({...doc.data(), id: doc.id }))
        })
}
export function getCategory(category) {
    return postCollection.where("category", "==", category).get()
        .then(snapshot => {
            return snapshot.docs.map(doc => ({...doc.data(), id: doc.id }))
        })
}

export function getDetail(id) {
    return postCollection.doc(id).get()
        .then(snapshot => {
            return ({...snapshot.data(), id: snapshot.id })
        })
}