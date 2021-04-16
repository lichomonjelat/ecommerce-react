import React from 'react';
import Products from '../Products/Products';
import './Home.css'
import Carousel from '../../components/Carousel/Carousel'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
function Home(props){

    return(
        <>
        
        <div className="home-intro">
            <div className="home-container">
                <h1>Welcome to the site</h1>
            </div>
        </div>
        <ItemListContainer greeting={"Aca van los productos"}/>
        </>
    )
};

export default Home