import React from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import Header from './Header.js'
import Gallery from './Gallery.js'
import Footer from './Footer.js'
import * as serviceWorker from './serviceWorker';

function Home() {
  return (
    <div>
      <Header />
      <div>

      </div>
      <Gallery />
      <div>

      </div>
      <Footer />
    </div>
  );
}

ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
