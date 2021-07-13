'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector('#root');
var token = 'A0MN5MW-D2WMV7F-GDWHJG6-ZBCA14Y';
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
      return React.createElement(
        'div',
        { className: 'page' },
        React.createElement(PageHeader, { src: 'img/logo.png' }),
        React.createElement(SearchBlock, { 'class': 'page-main' })
      );
    }
  }]);

  return App;
}(React.Component);

var PageHeader = function (_React$Component2) {
  _inherits(PageHeader, _React$Component2);

  function PageHeader() {
    _classCallCheck(this, PageHeader);

    return _possibleConstructorReturn(this, (PageHeader.__proto__ || Object.getPrototypeOf(PageHeader)).apply(this, arguments));
  }

  _createClass(PageHeader, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'page-header' },
        React.createElement(
          'div',
          { className: 'container' },
          React.createElement(
            'div',
            { className: 'page-header__row' },
            React.createElement('img', { className: 'page-header__logo', alt: '\u041B\u043E\u0433\u043E\u0442\u0438\u043F', src: this.props.src }),
            React.createElement(HeaderMenu, { items: [{ class: 'films-btn', name: 'Фильмы' }, { class: 'persons-btn', name: 'Люди' }, { class: 'info-btn', name: 'Информация' }] })
          )
        )
      );
    }
  }]);

  return PageHeader;
}(React.Component);

var HeaderMenu = function (_React$Component3) {
  _inherits(HeaderMenu, _React$Component3);

  function HeaderMenu() {
    _classCallCheck(this, HeaderMenu);

    return _possibleConstructorReturn(this, (HeaderMenu.__proto__ || Object.getPrototypeOf(HeaderMenu)).apply(this, arguments));
  }

  _createClass(HeaderMenu, [{
    key: 'render',
    value: function render() {
      var menuItems = this.props.items.map(function (item, index) {
        return React.createElement(HeaderItem, { key: index, 'class': item.class, name: item.name });
      });

      return React.createElement(
        'nav',
        { className: 'page-header__nav' },
        React.createElement(
          'ul',
          { className: 'page-header__list' },
          menuItems
        )
      );
    }
  }]);

  return HeaderMenu;
}(React.Component);

var HeaderItem = function (_React$Component4) {
  _inherits(HeaderItem, _React$Component4);

  function HeaderItem() {
    _classCallCheck(this, HeaderItem);

    return _possibleConstructorReturn(this, (HeaderItem.__proto__ || Object.getPrototypeOf(HeaderItem)).apply(this, arguments));
  }

  _createClass(HeaderItem, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'li',
        { className: 'page-header__item' },
        React.createElement(
          'a',
          { href: '#', className: "page-header__link " + this.props.class },
          this.props.name
        )
      );
    }
  }]);

  return HeaderItem;
}(React.Component);

var SearchBlock = function (_React$Component5) {
  _inherits(SearchBlock, _React$Component5);

  function SearchBlock(props) {
    _classCallCheck(this, SearchBlock);

    var _this5 = _possibleConstructorReturn(this, (SearchBlock.__proto__ || Object.getPrototypeOf(SearchBlock)).call(this, props));

    _this5.state = {
      activeSearch: false,
      header: 'Поиск фильмов'
    };
    return _this5;
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
      var results = void 0;
      if (films.length > 0) {
        results = films.map(function (film) {
          return React.createElement(ResultCard, {
            poster: film.poster.url,
            name: film.name,
            id: film.id,
            desc: film.description,
            year: film.year,
            key: film.id });
        });
      } else {
        results = null;
      }

      return React.createElement(
        'div',
        { className: this.props.class },
        React.createElement(
          'div',
          { className: 'container' },
          React.createElement(
            'h1',
            { className: 'page-main__header' },
            this.state.header
          ),
          React.createElement(Form, { method: 'GET', 'class': 'page-main__form', handler: this.searchState.bind(this) }),
          React.createElement(
            'div',
            { className: 'page-main__results', id: 'search-results' },
            results
          )
        )
      );
    }
  }]);

  return SearchBlock;
}(React.Component);

var Header = function (_React$Component6) {
  _inherits(Header, _React$Component6);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return;
    }
  }]);

  return Header;
}(React.Component);

var Form = function (_React$Component7) {
  _inherits(Form, _React$Component7);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this7 = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this7.clickHandler = _this7.clickHandler.bind(_this7);
    _this7.changeFormState = _this7.changeFormState.bind(_this7);
    _this7.sortMethods = {
      rating: function rating(a, b) {
        return b.rating.kp - a.rating.kp;
      }
    };
    return _this7;
  }

  _createClass(Form, [{
    key: 'changeFormState',
    value: function changeFormState() {
      this.props.handler();
    }
  }, {
    key: 'clickHandler',
    value: function clickHandler(evt) {
      var _this8 = this;

      evt.preventDefault();
      var request = 'https://api.kinopoisk.dev/' + searchType + '?field=name&search=' + searchField.value;
      var start = fetch(request + ('&limit=100&isStrict=false&token=' + token)).then(function (resp) {
        return resp.json();
      }).then(function (result) {
        films = result.docs.filter(function (item) {
          return item.description !== null;
        }).sort(_this8.sortMethods.rating);
      }).then(function () {
        return log(films);
      }).then(function () {
        return _this8.changeFormState();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { method: this.props.method, className: this.props.class },
        React.createElement(InputElement, { type: 'input', 'class': 'page-main__search-field', plholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0447\u0430\u0441\u0442\u044C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0444\u0438\u043B\u044C\u043C\u0430' }),
        React.createElement(
          'div',
          { className: 'page-main__checkboxes' },
          React.createElement(
            'label',
            { className: 'page-main__label' },
            React.createElement(InputElement, { type: 'checkbox', 'class': 'page-main__checkbox' }),
            '\u0413\u043E\u0434 \u0432\u044B\u0445\u043E\u0434\u0430'
          ),
          React.createElement(
            'label',
            { className: 'page-main__label' },
            React.createElement(InputElement, { type: 'checkbox', 'class': 'page-main__checkbox' }),
            '\u0420\u0435\u0439\u0442\u0438\u043D\u0433'
          )
        ),
        React.createElement(InputElement, { type: 'submit', 'class': 'page-main__search-button', value: '\u041F\u043E\u0438\u0441\u043A', click: this.clickHandler })
      );
    }
  }]);

  return Form;
}(React.Component);

var InputElement = function (_React$Component8) {
  _inherits(InputElement, _React$Component8);

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

var ResultCard = function (_React$Component9) {
  _inherits(ResultCard, _React$Component9);

  function ResultCard() {
    _classCallCheck(this, ResultCard);

    return _possibleConstructorReturn(this, (ResultCard.__proto__ || Object.getPrototypeOf(ResultCard)).apply(this, arguments));
  }

  _createClass(ResultCard, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'section',
        { className: 'page-main__card' },
        React.createElement('img', { src: this.props.poster, className: 'page-main__poster' }),
        React.createElement(
          'h2',
          { className: 'page-main__title' },
          this.props.name
        ),
        React.createElement(
          'span',
          { className: 'page-main__kp-id' },
          'ID: ' + this.props.id
        ),
        React.createElement(
          'p',
          { className: 'page-main__description' },
          this.props.desc
        ),
        React.createElement(
          'span',
          { className: 'page-main__release-year' },
          'Год выпуска: ' + this.props.year
        )
      );
    }
  }]);

  return ResultCard;
}(React.Component);

ReactDOM.render(React.createElement(App, null), domContainer);