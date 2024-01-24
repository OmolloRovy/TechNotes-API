import { Link } from "react-router-dom";

import React from 'react'

const DashHeader = () => {
 const content = (

    <header className="dash-header">
    <div className="dash-header_container">
    <Link to ="/dash/notes">
    <h1 className="dash-header_tittle">techNotes</h1>
    </Link>
    <nav className="dash-header_nav">
    {/* add nav buttons later*/}
    </nav>
    </div>
    </header>
 )
 return content
}

export default DashHeader