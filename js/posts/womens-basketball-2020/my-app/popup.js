'use strict';

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var PopUp = (function(_React$Component) {
  _inherits(PopUp, _React$Component);

  function PopUp(props) {
    _classCallCheck(this, PopUp);

    var _this = _possibleConstructorReturn(
      this,
      (PopUp.__proto__ || Object.getPrototypeOf(PopUp)).call(this, props)
    );

    _this.state = {
      visible: false,
      pct: 60,
      shotsTook: 30,
      shotsMade: 50,
    };
    return _this;
  }

  _createClass(PopUp, [
    {
      key: 'load_data',
      value: function load_data(file) {
        //Bernard's function
      },
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        //load_data() before creating this component?
      },
    },
    {
      key: 'render',
      value: function render() {
        var _state = this.state,
          visible = _state.visible,
          pct = _state.pct,
          shotsTook = _state.shotsTook,
          shotsMade = _state.shotsMade;

        return React.createElement(
          'div',
          null,
          React.createElement('p', null, 'hello'),
          React.createElement(
            'p',
            null,
            visible,
            ', ',
            pct,
            '%, ',
            shotsTook,
            ', ',
            shotsMade
          )
        );
      },
    },
  ]);

  return PopUp;
})(React.Component);

ReactDOM.render(
  React.createElement(PopUp, null),
  document.getElementById('PopUp')
);
