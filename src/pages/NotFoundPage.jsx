import React from 'react'
import '../styleSheet/NotFound.css';

function NotFoundPage() {
  return (
    <div className="not-found__wrapper">
      <div className="not-found__container">
        <div className="not-found__cloak-wrapper">
          <div className="not-found__cloak-container">
            <div className="not-found__cloak"></div>
          </div>
        </div>
        <div className="not-found__info">
          <h1>404</h1>
          <h2>Ooops...Page not found</h2>
          <p>
            It's either you followed a broken link or tried accessing a non-existing page
          </p>
          <a href="/">Take me home</a>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage