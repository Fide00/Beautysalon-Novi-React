import '../App/App.css'
import './Calculator.css'
import React from 'react'
import calculatorCalculator from '../../assets/images/calculatorCalculator.png'
import CalculatorForm from './CalculatorForm'

function Calculator () {
  return (
        <section className="calculator">
            {/* Box-container */}
            <div className="grid-container">

                {/* Box 3: Content */}
                <div className="grid-box3">

                    <div className="page-title"> Kassasysteem</div>
                    <div className="content">
                        Vink de gewenste behandelingen en/of producten aan en de eventuele Vaste klanten korting.
                        Hiervan wordt een totaalbedrag berekend en onderaan de lijst weergegeven.
                    </div>

                    {/* Foto */}
                    <img className="photo-calculator" src={calculatorCalculator} alt="calculator"/>

                    {/* Checkboxes met behandelingen en producten */}
                    <CalculatorForm/>
                </div>

            </div>
        </section>
  )
}

export default Calculator
