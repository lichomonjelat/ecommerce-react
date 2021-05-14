const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBFpV3GbhqGkIVUFjAibBqrr4MEsSjHK5I",
    authDomain: "flipper-gadgets.firebaseapp.com",
    projectId: "flipper-gadgets",
    storageBucket: "flipper-gadgets.appspot.com",
    messagingSenderId: "1053827738491",
    appId: "1:1053827738491:web:8954198a385d88bbf62bde",
    measurementId: "G-DY0X3VW232"
});

var db = firebase.firestore();

const items = [{

        product_title: "Canon EOS 7D mkII",
        product_description: "Objetivo ef-m 15-45 mm incluido",
        product_price: 1100,
        product_brand: "Canon",
        category: "camaras",
        product_photo: "https://www.canon.es/media/EOS_7D_w200_tcm86-675031.jpg"
    },
    {

        product_title: "iPhone X",
        product_description: "64gb, white",
        product_price: 510,
        product_brand: "Apple",
        category: "celulares",
        product_photo: "http://d2r9epyceweg5n.cloudfront.net/stores/001/335/204/products/apple-iphone-x-64gb-silver-used-20191122085356800-_w500_1-8532858c58bff3411615996662135414-640-0.jpg"
    },
    {

        product_title: "Samsung Galaxy S10",
        product_description: "128gb, negro",
        product_price: 420,
        product_brand: "Samsung",
        category: "celulares",
        product_photo: "https://images.samsung.com/is/image/samsung/assets/ar/smartphones/galaxy-s10/sunset/images/gallery/galaxy-s10-plus_gallery-color_s10-plus-c1-02.jpg"
    },
    {

        product_title: "Samsung A31",
        product_description: "128gb, azul coral",
        product_price: 210,
        product_brand: "samsung",
        category: "celulares",
        product_photo: "https://www.airshop.com.ar/wp-content/uploads/2020/10/SAA31s.jpg"
    },
    {

        product_title: "iPad mini",
        product_description: "32gb, rose gold",
        product_price: 375,
        product_brand: "Apple",
        category: "tablets",
        product_photo: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-ipad-mini-wifi-gold-gallery-2019?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1581026440444"
    },


];

items.forEach(function(obj) {
    db.collection("items").add({
            category: obj.category,
            product_description: obj.product_description,
            product_photo: obj.product_photo,
            product_price: obj.product_price,
            product_title: obj.product_title
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
});