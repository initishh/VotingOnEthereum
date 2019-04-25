'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _ReactVotes = require('../../../components/ReactVotes');

var _ReactVotes2 = _interopRequireDefault(_ReactVotes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/initish/Projects/VotingOnEthereum/pages/campaigns/requests/new.js?entry';


var RequestNew = function (_Component) {
    (0, _inherits3.default)(RequestNew, _Component);

    function RequestNew() {
        (0, _classCallCheck3.default)(this, RequestNew);

        return (0, _possibleConstructorReturn3.default)(this, (RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestNew, [{
        key: 'renderVotes',
        value: function renderVotes() {
            var _this2 = this;

            console.log('It reached here');

            return this.props.requests.map(function (request, index) {
                return _react2.default.createElement(_ReactVotes2.default, {
                    request: request,
                    key: index,
                    id: index,
                    address: _this2.props.address,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'Party Logo'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Name'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Party Name'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Votes Received'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, this.renderVotes())));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, campaign, requestCount, requests;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                campaign = (0, _campaign2.default)(address);
                                _context.next = 4;
                                return campaign.methods.getRequestsCount().call();

                            case 4:
                                requestCount = _context.sent;
                                _context.next = 7;
                                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                                    return campaign.methods.requests(index).call();
                                }));

                            case 7:
                                requests = _context.sent;
                                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount });

                            case 9:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIkxhYmVsIiwiVGFibGUiLCJJbnB1dCIsIkNhbXBhaWduIiwid2ViMyIsIkxpbmsiLCJSb3V0ZXIiLCJMYXlvdXQiLCJSZWFjdFZvdGVzIiwiUmVxdWVzdE5ldyIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsInJlcXVlc3RzIiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiYWRkcmVzcyIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwicmVuZGVyVm90ZXMiLCJxdWVyeSIsImNhbXBhaWduIiwibWV0aG9kcyIsImdldFJlcXVlc3RzQ291bnQiLCJjYWxsIiwicmVxdWVzdENvdW50IiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQU0sQUFBUSxBQUFTLEFBQU0sQUFBTzs7QUFDN0MsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQU8sQUFBYzs7QUFDOUIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJQUVqQixBOzs7Ozs7Ozs7OztzQ0FnQlk7eUJBRVY7O29CQUFBLEFBQVEsSUFBUixBQUFZLEFBRVo7O3dCQUFPLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDL0M7dUNBQ0EsQUFBQzs2QkFBRCxBQUNlLEFBQ1g7eUJBRkosQUFFVyxBQUNQO3dCQUhKLEFBR1UsQUFDTjs2QkFBVyxPQUFBLEFBQUssTUFKcEIsQUFJMEI7O2tDQUoxQjtvQ0FEQSxBQUNBLEFBT0g7QUFQRztBQUNJLGlCQURKO0FBRkosQUFBTyxBQVVWLGFBVlU7Ozs7aUNBWUY7Z0JBQUEsQUFFRCxTQUZDLEFBRWlDLHVCQUZqQyxBQUVEO2dCQUZDLEFBRU8sTUFGUCxBQUVpQyx1QkFGakMsQUFFTztnQkFGUCxBQUVZLGFBRlosQUFFaUMsdUJBRmpDLEFBRVk7Z0JBRlosQUFFd0IsT0FGeEIsQUFFaUMsdUJBRmpDLEFBRXdCLEFBRTdCOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0U7QUFERjtBQUFBLCtCQUNHLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0U7QUFERjtBQUFBLCtCQUNHLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSwrQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGSixBQUVJLEFBQ0EseUJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSEosQUFHSSxBQUNBLCtCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQU5SLEFBQ0UsQUFDRSxBQUlJLEFBR1IscUNBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsb0JBWFIsQUFDSSxBQUNJLEFBU0EsQUFBTyxBQUFLLEFBTXZCOzs7OztpSEFuRDRCLEE7Ozs7O2lDQUNqQjtBLDBDQUFZLE1BQU0sQSxNQUFsQixBQUVGLEE7QSwyQ0FBVyx3QkFBQSxBQUFTLEE7O3VDQUNDLFNBQUEsQUFBUyxRQUFULEFBQWlCLG1CQUFqQixBQUFvQyxBOztpQ0FBekQ7QTs7eURBRWlCLEFBQVEsVUFDckIsU0FBTixBQUFNLEFBQVMsZUFBZixBQUE4QixPQUE5QixBQUFxQyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVMsT0FBVSxBQUN4RDsyQ0FBTyxTQUFBLEFBQVMsUUFBVCxBQUFpQixTQUFqQixBQUEwQixPQUFqQyxBQUFPLEFBQWlDLEFBQzNDO0EsQUFIa0IsQUFDbkIsaUNBQUEsQ0FEbUI7O2lDQUFqQjtBO2lFQUtDLEVBQUUsU0FBRixTQUFZLFVBQVosVUFBc0IsY0FBdEIsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWJVLEEsQUF3RHpCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9pbml0aXNoL1Byb2plY3RzL1ZvdGluZ09uRXRoZXJldW0ifQ==