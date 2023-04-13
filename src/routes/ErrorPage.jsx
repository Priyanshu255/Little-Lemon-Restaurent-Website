import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
            <div className="notfound-404">
                <h1>404</h1>
            </div>
            <h1>Page Not Found!</h1>
            <h4>The page you are looking for might have been removed or it is temporarily unavailable.</h4>
            <Link to='/Little-Lemon-Restaurent-Website' >Back to Home Page</Link>
        </div>
      </div>
    </>
  )
}

export default ErrorPage
