import '../App/App.css';
import './Treatments.css';
import React from 'react';
import Product from "../Product/Product";
import Products from "../../json/Products.json";

function Treatments() {
    return (
        <section className="treatments">
            {/*Box-container*/}
            <div className="grid-container">

                {/*Box 3: Content*/}
                <div className="grid-box3">
                    <div className="page-title"> Behandelingen</div>

                    {/*Geef informatie vanuit json file weer*/}
                    <div className="content products">
                        {Products.filter(prod => prod.price > 0).map(product => {
                            return (
                                <Product image={product.image} name={product.name} price={product.price}
                                         key={product.id}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Treatments;
