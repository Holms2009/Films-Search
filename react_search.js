'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector('.page-main');

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

var Form = function (_React$Component2) {
  _inherits(Form, _React$Component2);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { method: this.props.method, className: this.props.class },
        React.createElement(InputElement, { type: 'input', 'class': 'page-main__search-field', plholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0447\u0430\u0441\u0442\u044C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0444\u0438\u043B\u044C\u043C\u0430' }),
        React.createElement(InputElement, { type: 'submit', 'class': 'page-main__search-button', value: '\u041F\u043E\u0438\u0441\u043A' })
      );
    }
  }]);

  return Form;
}(React.Component);

var InputElement = function (_React$Component3) {
  _inherits(InputElement, _React$Component3);

  function InputElement() {
    _classCallCheck(this, InputElement);

    return _possibleConstructorReturn(this, (InputElement.__proto__ || Object.getPrototypeOf(InputElement)).apply(this, arguments));
  }

  _createClass(InputElement, [{
    key: 'render',
    value: function render() {
      return React.createElement('input', { type: this.props.type, className: this.props.class, value: this.props.value, placeholder: this.props.plholder });
    }
  }]);

  return InputElement;
}(React.Component);

ReactDOM.render(React.createElement(Form, { method: 'GET', 'class': 'page-main__form' }), domContainer);