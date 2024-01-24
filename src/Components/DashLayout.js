import {Outlet} from 'react-router-dom';

import React from 'react'

function DashLayout() {
  return (
    <>
    <div className='dash-container'>
    
    <Outlet />
        </div>
    </>
  )
}

export default DashLayout