import { Link } from "react-router-dom";


import React from 'react'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1> Welcome To <span className="nowrap">IntoTech Repairs</span></h1>
            </header>
            <main className="public_main">
                <p>
                    Located in Kendu-Bay Town, IntoTech Repairs provides a tarined staff ready to meet your tech repair needs.
                </p>
                <address className="public_adrr" >
                IntoTech Repairs <br />
                555 Kendu-Bay Drive <br />
                Homa-bay, CA 5764 <br />
                <a href="tel:+254714924394">(+254) 714-924-394)</a>
                </address>
                <br />
            </main>
            <footer>
        <Link to="/login"> Employee Login</Link>
        </footer>
        </section>
      
   )
   return content
}

export default Public