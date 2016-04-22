console.log('In the app.js');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Hello',
      subtitle: 'do something cool.',
      image: 'sample'
    };
  }

  successHandler(data) {
    console.log('Success');
    this.setState({ name: data.name }, function () {
    });

    this.setState({ subtitle: data.subtitle });
    this.setState({ image: data.image });
  }

  loadNewActivity() {
    Ajax.request(
      '/random',
      'GET',
      null,
      this.successHandler.bind(this),
      function () {
        console.log('failed');
      }
    );
  }

  componentDidMount() {
    var text = document.getElementsByClassName('activity__text-wrapper')[0];
    var image = document.getElementsByClassName('activity__image')[0];
    text.classList.add('enter');
    image.classList.add('enter');
    setTimeout(function () {
      text.classList.remove('enter');
      image.classList.remove('enter');
    }, 500);
  }

  componentWillUpdate() {
    var text = document.getElementsByClassName('activity__text-wrapper')[0];
    var image = document.getElementsByClassName('activity__image')[0];
    text.classList.add('update');
    image.classList.add('update');
  }

  componentDidUpdate() {
    var text = document.getElementsByClassName('activity__text-wrapper')[0];
    var image = document.getElementsByClassName('activity__image')[0];
    setTimeout(function () {
      text.classList.remove('update');
      image.classList.remove('update');
    }, 500);
  }

  render() {
    return (
      <div className='activity__container'>
        <div className='activity__text-wrapper'>
          <div className='activity__title' key={ this.state.name }>{ this.state.name }</div>
          <div className='activity__subtitle' key={ this.state.subtitle }>
            { this.state.subtitle }
          </div>
        </div>
        <img className='activity__image'
          src={`img/activities/${this.state.image}.jpg`}
          alt='a sample image' />
        <a className='evaluate-button button' onClick={this.loadNewActivity.bind(this)}>evaluate</a>
      </div>
    );
  }
} // End 'App' component

ReactDOM.render(
  <App />,
  document.getElementById('site-container')
);

// from idiallo.com's ajax without jquery post
// http://idiallo.com/javascript/ajax-without-jquery
var Ajax = {
  xhr: null,
  request: function (url, method, data, success, failure) {
    if (!this.xhr) {
      this.xhr = window.ActiveX ? new ActiveXObject('Microsoft.XMLHTTP'): new XMLHttpRequest();
    }

    var self = this.xhr;
    self.onreadystatechange = function () {
      if (self.readyState === 4 && self.status === 200) {
        // the request is complete, parse data and call callback
        var response = JSON.parse(self.responseText);
        success(response);
      }else if (self.readyState === 4) { // something went wrong but complete
        failure();
      }
    };

    this.xhr.open(method, url, true);
    this.xhr.send();
  },
};

// Use:
// Ajax.request(
//   '/hello-world/ajax',
//   'GET',
//   null,
//   function (data) {
//     console.log('Success');
//   },
//   function () {
//     console.log('failed');
//   },
// );
