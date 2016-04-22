import React from 'react';
import ReactDOM from 'react-dom';

require('../server');

class App extends React.Component {
  render() {
    return (
      <div class="activity__container">
        <div class="activity__text-wrapper">
          <div class="activity__title">Have tea &amp; chat.</div>
          <div class="activity__subtitle">Talk about the future, or the universe or something.</div>
        </div>
        <img class="activity__image" src="img/activities/sample.jpg" alt="a sample image" />
        <a class="evaluate-button button">evaluate</a>
      </div>
    );
  }
} // End "App" component
// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );

// if (typeof window !== 'undefined') {
//     React.render(
//       <App />,
//       document.getElementById('app')
//     );
// }
