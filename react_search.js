'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector('main');
var films = [];

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { className: 'page' });
    }
  }]);

  return App;
}(React.Component);

var SearchBlock = function (_React$Component2) {
  _inherits(SearchBlock, _React$Component2);

  function SearchBlock(props) {
    _classCallCheck(this, SearchBlock);

    var _this2 = _possibleConstructorReturn(this, (SearchBlock.__proto__ || Object.getPrototypeOf(SearchBlock)).call(this, props));

    _this2.state = {
      activeSearch: false
    };
    return _this2;
  }

  _createClass(SearchBlock, [{
    key: 'searchState',
    value: function searchState() {
      this.setState({
        activeSearch: !this.state.activeSearch
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: this.props.class },
          React.createElement(Header, { 'class': 'page-main__header', text: '\u041F\u043E\u0438\u0441\u043A \u0444\u0438\u043B\u044C\u043C\u043E\u0432' }),
          React.createElement(Form, { method: 'GET', 'class': 'page-main__form', handler: this.searchState.bind(this) }),
          React.createElement(
            'div',
            { className: 'page-main__results', id: 'search-results' },
            React.createElement(ResultCard, { state: this.state.activeSearch })
          )
        )
      );
    }
  }]);

  return SearchBlock;
}(React.Component);

var Header = function (_React$Component3) {
  _inherits(Header, _React$Component3);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'h1',
        { className: this.props.class },
        this.props.text
      );
    }
  }]);

  return Header;
}(React.Component);

var Form = function (_React$Component4) {
  _inherits(Form, _React$Component4);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this4 = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this4.clickHandler = _this4.clickHandler.bind(_this4);
    _this4.changeFormState = _this4.changeFormState.bind(_this4);
    return _this4;
  }

  _createClass(Form, [{
    key: 'changeFormState',
    value: function changeFormState() {
      this.props.handler();
    }
  }, {
    key: 'clickHandler',
    value: function clickHandler(evt) {
      var _this5 = this;

      evt.preventDefault();
      while (results.firstChild) {
        results.removeChild(results.lastChild);
      }

      var request = 'https://api.kinopoisk.dev/' + searchType + '?field=name&search=' + searchField.value;
      var start = fetch(request + ('&isStrict=false&token=' + token)).then(function (resp) {
        return resp.json();
      }).then(function (result) {
        films = result.docs.map(function (item) {
          return item;
        });
        log(films);
      }).then(function () {
        return _this5.changeFormState();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { method: this.props.method, className: this.props.class },
        React.createElement(InputElement, { type: 'input', 'class': 'page-main__search-field', plholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0447\u0430\u0441\u0442\u044C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0444\u0438\u043B\u044C\u043C\u0430' }),
        React.createElement(InputElement, { type: 'submit', 'class': 'page-main__search-button', value: '\u041F\u043E\u0438\u0441\u043A', click: this.clickHandler })
      );
    }
  }]);

  return Form;
}(React.Component);

var InputElement = function (_React$Component5) {
  _inherits(InputElement, _React$Component5);

  function InputElement() {
    _classCallCheck(this, InputElement);

    return _possibleConstructorReturn(this, (InputElement.__proto__ || Object.getPrototypeOf(InputElement)).apply(this, arguments));
  }

  _createClass(InputElement, [{
    key: 'render',
    value: function render() {
      return React.createElement('input', {
        type: this.props.type,
        className: this.props.class,
        value: this.props.value,
        placeholder: this.props.plholder,
        onClick: this.props.click
      });
    }
  }]);

  return InputElement;
}(React.Component);

var ResultCard = function (_React$Component6) {
  _inherits(ResultCard, _React$Component6);

  function ResultCard() {
    _classCallCheck(this, ResultCard);

    return _possibleConstructorReturn(this, (ResultCard.__proto__ || Object.getPrototypeOf(ResultCard)).apply(this, arguments));
  }

  _createClass(ResultCard, [{
    key: 'render',
    value: function render() {
      films.forEach(function (film) {
        return React.createElement(
          'section',
          { className: 'page-main__card' },
          React.createElement('img', { src: film.poster.url, className: 'page-main__poster' }),
          React.createElement(
            'h2',
            { className: 'page-main__title' },
            film.name
          ),
          React.createElement(
            'span',
            { className: 'page-main__kp-id' },
            'ID: ' + film.id
          ),
          React.createElement(
            'p',
            { className: 'page-main__description' },
            film.description
          ),
          React.createElement(
            'span',
            { className: 'page-main__release-year' },
            'Год выпуска: ' + film.year
          )
        );
      });
      return null;
    }
  }]);

  return ResultCard;
}(React.Component);

ReactDOM.render(React.createElement(SearchBlock, { 'class': 'page-main' }), domContainer);