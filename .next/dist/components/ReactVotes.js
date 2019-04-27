'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/initish/Projects/VotingOnEthereum/components/ReactVotes.js';


var RequestVotes = function (_Component) {
    (0, _inherits3.default)(RequestVotes, _Component);

    function RequestVotes() {
        (0, _classCallCheck3.default)(this, RequestVotes);

        return (0, _possibleConstructorReturn3.default)(this, (RequestVotes.__proto__ || (0, _getPrototypeOf2.default)(RequestVotes)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestVotes, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                request = _props.request,
                approversCount = _props.approversCount;

            return _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement(_semanticUiReact.Image, { size: 'small', src: request.imageLink, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            })), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, request.name), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, request.partyName), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, request.voteCount));
        }
    }]);

    return RequestVotes;
}(_react.Component);

exports.default = RequestVotes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVhY3RWb3Rlcy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiSW1hZ2UiLCJSZXF1ZXN0Vm90ZXMiLCJSb3ciLCJDZWxsIiwicHJvcHMiLCJpZCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsImltYWdlTGluayIsIm5hbWUiLCJwYXJ0eU5hbWUiLCJ2b3RlQ291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTzs7Ozs7OztJLEFBRVY7Ozs7Ozs7Ozs7O2lDQUVPO2dCQUFBLEFBRUcsTUFGSCxBQUVpQix1QkFGakIsQUFFRztnQkFGSCxBQUVRLE9BRlIsQUFFaUIsdUJBRmpCLEFBRVE7eUJBQzBCLEtBSGxDLEFBR3VDO2dCQUh2QyxBQUdFLFlBSEYsQUFHRTtnQkFIRixBQUdNLGlCQUhOLEFBR007Z0JBSE4sQUFHZSx3QkFIZixBQUdlLEFBRXBCOzttQ0FDYyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBLEFBQ0c7QUFESDtBQUFBLGFBQUEsa0JBQ0ksY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUFZO0FBQVo7QUFBQSwrQkFBWSxBQUFDLHdDQUFNLE1BQVAsQUFBYyxTQUFRLEtBQU8sUUFBN0IsQUFBcUM7OEJBQXJDO2dDQURmLEFBQ0csQUFBWSxBQUNaO0FBRFk7aUNBQ1gsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUFhO0FBQWI7QUFBQSx1QkFGSCxBQUVHLEFBQXFCLEFBQ3JCLHVCQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFBYTtBQUFiO0FBQUEsdUJBSEgsQUFHRyxBQUFxQixBQUNyQiw0QkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBLEFBQWE7QUFBYjtBQUFBLHVCQUxoQixBQUNhLEFBSUcsQUFBcUIsQUFHeEM7Ozs7O0FBZnNCLEEsQUFrQjNCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlJlYWN0Vm90ZXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvaW5pdGlzaC9Qcm9qZWN0cy9Wb3RpbmdPbkV0aGVyZXVtIn0=