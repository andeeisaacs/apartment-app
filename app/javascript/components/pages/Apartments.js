import React from 'react';
import { Link } from 'react-router-dom';

const Apartments = (props) => {
    console.log("HEY")
    return(
        <>
        
            <h1> Apartments component: Find your apartments.</h1> 
            {props.apartments.map ((apartment, index) =>{
                return(
                    <li key ={ index }>
                        <Link to={`/apartments/${apartment.id}`}> Apartment in {apartment.city}, {apartment.state} , <img src={apartment.image} alt="Apartment Image" /> </Link>
                    </li>
                )
            }
            )}
        </>
    )
}

export default Apartments;