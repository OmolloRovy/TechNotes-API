import {Link } from 'react-router-dom'
import React from 'react'


const Welcome = () => {

const date = new Date()
const  today = new Intl.DateTimeFormart('en-us', { dateStyle: 'full', timeStyle: 'long'}).format(date)

const content  = (
  <section classNmae='welcome'>
  <p>{today}</p>

  <h1>Welcome!</h1>
  
  <p><Link to="/dash/notes">View techNotes</Link></p>

  <p><Link to="/dash/users">View user Settings</Link></p>

  </section>
)
return content

}

export default Welcome