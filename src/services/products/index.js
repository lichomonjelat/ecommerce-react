import db from '../../db'

const postCollection = db.collection('items');

export function getProducts() {
    return postCollection.get()
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