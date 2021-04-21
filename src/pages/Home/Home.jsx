import React from 'react';
import Products from '../Products/Products';
import './Home.scss'
import CarouselHome from '../../components/Carousel/Carousel'
import ItemListContainer from '../ItemListContainer/ItemListContainer';

function Home(props) {

    return (
        <>

            <div className="home-intro">
                <div className="text-container">
                    <div>
                        <h1>We are</h1>
                        <span>flipper</span>
                    </div>
                </div>
            </div>
            <section id="featured">
                <h2>Productos destacados</h2>
                <ItemListContainer greeting={"Aca van los productos"} />
            </section>

           
        </>
    )
};

export default Home