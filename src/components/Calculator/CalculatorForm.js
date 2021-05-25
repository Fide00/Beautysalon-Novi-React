import React, { useState } from 'react'
import FormProduct from '../FormProduct/FormProduct'
import ProductCategories from '../../json/ProductCategories.json'
import Products from '../../json/Products.json'

const { submitHandler } = e => {
  e.preventDefault()
}

function CalculatorForm () {
  const [details, setDetails] = useState({ totalePrijs: 0 })

  // Functie die aangeroepen wordt bij het aanvinken van een item. Parameter e is hierin het klik event
  const handlePriceChange = e => {
    const itemToegevoegd = e.target.checked
    const itemPrijs = Number(e.target.value)

    // Als de checkbox is aangevinkt, dan totale prijs verhogen, anders verlagen
    if (itemToegevoegd) {
      setDetails({ totalePrijs: details.totalePrijs += itemPrijs })
    } else {
      setDetails({ totalePrijs: details.totalePrijs -= itemPrijs })
    }
  }

  return (
        <form className="calculate-treatments" onSubmit={submitHandler}>
            {/* Itereer over alle product categorieen */}
            {ProductCategories.map(category => (
                // Maak een div aan voor elke category waar de producten in komen
                <div className="product-list" key={category.id}>
                    {/* Laat de categorie uit de iteratie zien */}
                    <span className="product-category">{category.name}</span>

                    {/* Itereer over alle producten die bij de geiterreerde categorie horen */}
                    {Products.filter(prod => prod.categoryId === category.id).map(product => (
                        // Laat de product zien vanuit zijn eigen component op basis van de meegegeven properties
                        <FormProduct id={'prod' + product.id} title={product.name} price={product.price} onChange={handlePriceChange} key={product.id}/>
                    ))}
                </div>
            ))
            }
            <div>
                {/* <label htmlFor="price1"> <h3><b>Totaalprijs:</b></h3></label> */}
                <div className="label"> Totaalprijs:</div>
                <input type="text" name="item" id="price1" value={details.totalePrijs} disabled={true}/>
            </div>
        </form>
  )
}

export default CalculatorForm
