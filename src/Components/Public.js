import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">IntoTech Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown  City, IntoTech Repairs. Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                IntoTech Repairs<br />
                    555 Night Drive<br />
                    Downtown City,  13345<br />
                    <a href="tel:+254714924394">(+254) 7149-24394</a>
                </address>
                <br />
               
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public