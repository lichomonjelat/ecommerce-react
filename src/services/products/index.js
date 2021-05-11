import db from '../../db'

const postCollection = db.collection('items');

export function getProducts() {
    return postCollection.get()
        .then(snapshot => {
            return snapshot.docs.map(doc => doc.data())
        })
}

export function getDetail(id) {
    return postCollection.doc(id).get()
        .then(snapshot => {
            return console.log(snapshot.doc.data())
        })
}