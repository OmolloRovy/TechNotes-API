import {Outlet} from 'react-router-dom';
import DashHeader from './DashHeader';
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