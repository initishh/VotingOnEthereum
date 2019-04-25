'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/initish/Projects/VotingOnEthereum/components/RequestRow.js';


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var accounts, campaign;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _web2.default.eth.getAccounts();

                        case 2:
                            accounts = _context.sent;
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context.next = 6;
                            return campaign.methods.approveRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                id = _props.id,
                request = _props.request;

            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onApprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Cell, { textAlign: 'left', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement(_semanticUiReact.Image, { size: 'small', src: request.imageLink, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            })), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', textAlign: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, request.partyName)), _react2.default.createElement(_semanticUiReact.Table.Cell, { textAlign: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { size: 'huge', fluid: true, inverted: true, color: 'green', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, 'VOTE')))));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiSW1hZ2UiLCJGb3JtIiwiSGVhZGVyIiwiVGFiIiwiR3JpZCIsIndlYjMiLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJvbkFwcHJvdmUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwicmVxdWVzdCIsImltYWdlTGluayIsInBhcnR5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU8sQUFBUSxBQUFPLEFBQU0sQUFBUSxBQUFJOztBQUNqRCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs7Ozs7d04sQUFFSCxxRkFBWSxtQkFBQTswQkFBQTswRUFBQTswQkFBQTtxREFBQTs2QkFBQTs0Q0FBQTttQ0FDZ0IsY0FBQSxBQUFLLElBRHJCLEFBQ2dCLEFBQVM7OzZCQUExQjtBQURDLGdEQUVEO0FBRkMsdUNBRVUsd0JBQVMsTUFBQSxBQUFLLE1BRnhCLEFBRVUsQUFBb0I7NENBRjlCOzRDQUlELEFBQVMsUUFBVCxBQUFpQixlQUFlLE1BQUEsQUFBSyxNQUFyQyxBQUEyQyxJQUEzQyxBQUErQztzQ0FDM0MsU0FMSCxBQUlELEFBQW9ELEFBQ2hELEFBQVM7QUFEdUMsQUFDdEQsNkJBREU7OzZCQUpDOzZCQUFBOzRDQUFBOztBQUFBO3dCQUFBO0E7Ozs7O2lDQVNGO3lCQUVrQixLQUZsQixBQUV1QjtnQkFGdkIsQUFFRSxZQUZGLEFBRUU7Z0JBRkYsQUFFTSxpQkFGTixBQUVNLEFBRVg7O21DQUNRLEFBQUMsdUNBQUssVUFBWSxLQUFsQixBQUF1Qjs4QkFBdkI7Z0NBQUEsQUFFQTtBQUZBO2FBQUEsa0JBRUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHVCQUFBLEFBQU8sUUFBSyxXQUFaLEFBQXNCOzhCQUF0QjtnQ0FBQSxBQUNRO0FBRFI7K0JBQ1EsQUFBQyx3Q0FBTSxNQUFQLEFBQVksU0FBUSxLQUFLLFFBQXpCLEFBQWlDOzhCQUFqQztnQ0FGWixBQUNJLEFBQ1EsQUFFUjtBQUZRO2lDQUVQLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxJQUFSLEFBQVcsTUFBSyxXQUFoQixBQUEwQjs4QkFBMUI7Z0NBQUEsQUFDSztBQURMO3VCQUxSLEFBSUksQUFDSSxBQUNhLEFBR2pCLDZCQUFDLGNBQUQsdUJBQUEsQUFBTyxRQUFLLFdBQVosQUFBc0I7OEJBQXRCO2dDQUFBLEFBQ0E7QUFEQTsrQkFDQSxBQUFDLHlDQUFPLE1BQVIsQUFBZSxRQUFPLE9BQXRCLE1BQTRCLFVBQTVCLE1BQXFDLE9BQXJDLEFBQTJDOzhCQUEzQztnQ0FBQTtBQUFBO2VBZGhCLEFBQ1EsQUFFQSxBQUNJLEFBU0ksQUFDQSxBQU9uQjs7Ozs7QUFwQ29CLEEsQUF1Q3pCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlJlcXVlc3RSb3cuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvaW5pdGlzaC9Qcm9qZWN0cy9Wb3RpbmdPbkV0aGVyZXVtIn0=