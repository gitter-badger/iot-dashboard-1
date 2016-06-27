webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(41);


/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _lodash = __webpack_require__(42);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	__webpack_require__(44);
	
	__webpack_require__(54);
	
	__webpack_require__(56);
	
	var _reactDom = __webpack_require__(58);
	
	var ReactDOM = _interopRequireWildcard(_reactDom);
	
	var _react = __webpack_require__(219);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRedux = __webpack_require__(225);
	
	var _pageLayout = __webpack_require__(239);
	
	var _pageLayout2 = _interopRequireDefault(_pageLayout);
	
	var _widgets = __webpack_require__(243);
	
	var Widgets = _interopRequireWildcard(_widgets);
	
	var _widgetPlugins = __webpack_require__(252);
	
	var WidgetPlugins = _interopRequireWildcard(_widgetPlugins);
	
	var _textWidget = __webpack_require__(298);
	
	var TextWidget = _interopRequireWildcard(_textWidget);
	
	var _chartWidget = __webpack_require__(299);
	
	var ChartWidget = _interopRequireWildcard(_chartWidget);
	
	var _datasourceWorker = __webpack_require__(302);
	
	var DatasourceWorker = _interopRequireWildcard(_datasourceWorker);
	
	var _randomDatasource = __webpack_require__(306);
	
	var RandomDatasource = _interopRequireWildcard(_randomDatasource);
	
	var _timeDatasource = __webpack_require__(307);
	
	var TimeDatasource = _interopRequireWildcard(_timeDatasource);
	
	var _store = __webpack_require__(303);
	
	var Store = _interopRequireWildcard(_store);
	
	var _plugins = __webpack_require__(282);
	
	var Plugins = _interopRequireWildcard(_plugins);
	
	__webpack_require__(308);
	
	__webpack_require__(310);
	
	__webpack_require__(311);
	
	__webpack_require__(313);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Store.default.dispatch(Plugins.loadPlugin(TextWidget));
	Store.default.dispatch(Plugins.loadPlugin(ChartWidget));
	
	Store.default.dispatch(Plugins.loadPlugin(RandomDatasource));
	Store.default.dispatch(Plugins.loadPlugin(TimeDatasource));
	
	Store.default.dispatch(Plugins.initializeExternalPlugins());
	
	// Would delete async loaded widgets that are not known yet.
	//cleanupState(state);
	
	//noinspection Eslint
	function cleanupState(state) {
	    _lodash2.default.valuesIn(state.widgets).forEach(function (widgetState) {
	        var widgetPlugin = WidgetPlugins.pluginRegistry.getPlugin(widgetState.type);
	        if (!widgetPlugin) {
	            console.error("No WidgetPlugin for type '" + widgetState.type + "'! Deleting the widget.");
	            Store.default.dispatch(Widgets.deleteWidget(widgetState.id));
	            return null;
	        }
	    });
	}
	
	var element = document.getElementById('app');
	
	if (element) {
	    try {
	        renderDashboard(element, Store.default);
	    } catch (e) {
	        console.warn("Failed to load dashboard. Asking user to wipe data and retry. The error will be printed below...");
	        if (confirm("Failed to load dashboard. Reset all Data?\n\nPress cancel and check the browser console for more details.")) {
	            Store.default.dispatch(Store.clearState());
	            renderDashboard(element, Store.default);
	        } else {
	            throw e;
	        }
	    }
	} else {
	    console.warn("Can not get element '#app' from DOM. Okay for headless execution.");
	}
	
	function renderDashboard(element, store) {
	    ReactDOM.render(React.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        React.createElement(_pageLayout2.default, null)
	    ), element);
	
	    DatasourceWorker.start();
	}

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Layout = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(219);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactDom = __webpack_require__(58);
	
	var ReactDOM = _interopRequireWildcard(_reactDom);
	
	var _reactRedux = __webpack_require__(225);
	
	var _dashboard = __webpack_require__(240);
	
	var Dashboard = _interopRequireWildcard(_dashboard);
	
	var _widgetGrid = __webpack_require__(242);
	
	var _widgetGrid2 = _interopRequireDefault(_widgetGrid);
	
	var _jquery = __webpack_require__(55);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _layouts = __webpack_require__(274);
	
	var _layouts2 = _interopRequireDefault(_layouts);
	
	var _widgetConfigDialog = __webpack_require__(276);
	
	var _widgetConfigDialog2 = _interopRequireDefault(_widgetConfigDialog);
	
	var _dashboardMenuEntry = __webpack_require__(280);
	
	var _dashboardMenuEntry2 = _interopRequireDefault(_dashboardMenuEntry);
	
	var _importExportDialog = __webpack_require__(290);
	
	var _importExportDialog2 = _interopRequireDefault(_importExportDialog);
	
	var _datasourceConfigDialog = __webpack_require__(291);
	
	var _datasourceConfigDialog2 = _interopRequireDefault(_datasourceConfigDialog);
	
	var _datasourceNavItem = __webpack_require__(293);
	
	var _datasourceNavItem2 = _interopRequireDefault(_datasourceNavItem);
	
	var _widgetsNavItem = __webpack_require__(294);
	
	var _widgetsNavItem2 = _interopRequireDefault(_widgetsNavItem);
	
	var _pluginNavItem = __webpack_require__(295);
	
	var _pluginNavItem2 = _interopRequireDefault(_pluginNavItem);
	
	var _pluginsDialog = __webpack_require__(296);
	
	var _pluginsDialog2 = _interopRequireDefault(_pluginsDialog);
	
	var _persistence = __webpack_require__(297);
	
	var Persistence = _interopRequireWildcard(_persistence);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Layout = exports.Layout = function (_Component) {
	    _inherits(Layout, _Component);
	
	    function Layout(props) {
	        _classCallCheck(this, Layout);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Layout).call(this, props));
	
	        _this.state = { hover: false };
	        return _this;
	    }
	
	    _createClass(Layout, [{
	        key: "onReadOnlyModeKeyPress",
	        value: function onReadOnlyModeKeyPress(e) {
	            //console.log("key pressed", event.keyCode);
	            var intKey = window.Event ? e.which : e.keyCode;
	            if (intKey === 27) {
	                this.props.setReadOnly(!this.props.isReadOnly);
	            }
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.onReadOnlyModeKeyPress = this.onReadOnlyModeKeyPress.bind(this);
	
	            ReactDOM.findDOMNode(this).offsetParent.addEventListener('keydown', this.onReadOnlyModeKeyPress);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var props = this.props;
	
	            var showMenu = !props.isReadOnly || this.state.hover;
	
	            return React.createElement(
	                "div",
	                { onKeyUp: function onKeyUp(event) {
	                        return _this2.onReadOnlyModeKeyPress(event);
	                    } },
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(_widgetConfigDialog2.default, null),
	                    React.createElement(_importExportDialog2.default, null),
	                    React.createElement(_datasourceConfigDialog2.default, null),
	                    React.createElement(_pluginsDialog2.default, null)
	                ),
	                React.createElement(
	                    "div",
	                    { className: "container" },
	                    React.createElement("div", { className: showMenu ? "" : "menu-trigger",
	                        onMouseOver: function onMouseOver() {
	                            _this2.setState({ hover: true });
	                        },
	                        onMouseEnter: function onMouseEnter() {
	                            _this2.setState({ hover: true });
	                        }
	
	                    }),
	                    React.createElement(
	                        "div",
	                        { className: "ui inverted fixed main menu " + (showMenu ? "topnav--visible" : "topnav--hidden"),
	                            onMouseOver: function onMouseOver() {
	                                _this2.setState({ hover: true });
	                            },
	                            onMouseLeave: function onMouseLeave() {
	                                _this2.setState({ hover: false });
	                            }
	                        },
	                        React.createElement(
	                            "div",
	                            { className: "ui container" },
	                            React.createElement(
	                                "a",
	                                { href: "#", className: "header item" },
	                                "Dashboard"
	                            ),
	                            React.createElement(_dashboardMenuEntry2.default, null),
	                            React.createElement(_widgetsNavItem2.default, null),
	                            React.createElement(_datasourceNavItem2.default, null),
	                            React.createElement(_pluginNavItem2.default, null),
	                            React.createElement(_layouts2.default, null),
	                            React.createElement(
	                                "a",
	                                { className: "item", onClick: function onClick() {
	                                        return Persistence.clearData();
	                                    } },
	                                React.createElement("i", { className: "red bomb icon" }),
	                                "Reset Everything!"
	                            ),
	                            React.createElement(
	                                "a",
	                                { className: "item", onClick: function onClick() {
	                                        return props.setReadOnly(!props.isReadOnly);
	                                    } },
	                                React.createElement("i", { className: (props.isReadOnly ? "lock" : "unlock alternate") + " icon" }),
	                                " "
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "ui grid" },
	                        React.createElement(_widgetGrid2.default, null)
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Layout;
	}(_react.Component);
	
	Layout.propTypes = {
	    setReadOnly: _react.PropTypes.func.isRequired,
	    isReadOnly: _react.PropTypes.bool.isRequired
	};
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        isReadOnly: state.dashboard.isReadOnly
	    };
	}, function (dispatch) {
	    return {
	        setReadOnly: function setReadOnly(isReadOnly) {
	            return dispatch(Dashboard.setReadOnly(isReadOnly));
	        }
	    };
	})(Layout);

/***/ },

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.initialState = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.setReadOnly = setReadOnly;
	exports.dashboard = dashboard;
	
	var _actionNames = __webpack_require__(241);
	
	var Action = _interopRequireWildcard(_actionNames);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialState = exports.initialState = {
	    isReadOnly: false
	};
	
	function setReadOnly(isReadOnly) {
	    return function (dispatch) {
	        dispatch(setReadOnlyAction(isReadOnly));
	    };
	}
	
	function setReadOnlyAction(isReadOnly) {
	    return {
	        type: Action.SET_READONLY,
	        isReadOnly: isReadOnly
	    };
	}
	
	function dashboard() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case Action.SET_READONLY:
	            return _extends({}, state, {
	                isReadOnly: action.isReadOnly
	            });
	        default:
	            return state;
	    }
	}

/***/ },

/***/ 241:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CLEAR_STATE = exports.CLEAR_STATE = "CLEAR_STATE";
	
	// Dashboard
	var DASHBOARD_IMPORT = exports.DASHBOARD_IMPORT = "DASHBOARD_IMPORT";
	var SET_READONLY = exports.SET_READONLY = "SET_READONLY";
	
	// Layouts
	var ADD_LAYOUT = exports.ADD_LAYOUT = "ADD_LAYOUT";
	var UPDATE_LAYOUT = exports.UPDATE_LAYOUT = "UPDATE_LAYOUT";
	var DELETE_LAYOUT = exports.DELETE_LAYOUT = "DELETE_LAYOUT";
	var LOAD_LAYOUT = exports.LOAD_LAYOUT = "LOAD_LAYOUT";
	var SET_CURRENT_LAYOUT = exports.SET_CURRENT_LAYOUT = "SET_CURRENT_LAYOUT";
	
	// Widgets
	var ADD_WIDGET = exports.ADD_WIDGET = "ADD_WIDGET";
	var UPDATE_WIDGET_PROPS = exports.UPDATE_WIDGET_PROPS = "UPDATE_WIDGET_PROPS";
	var DELETE_WIDGET = exports.DELETE_WIDGET = "DELETE_WIDGET";
	var UPDATE_WIDGET_LAYOUT = exports.UPDATE_WIDGET_LAYOUT = "UPDATE_WIDGET_LAYOUT";
	
	var START_CREATE_WIDGET = exports.START_CREATE_WIDGET = "START_CREATE_WIDGET";
	var START_CONFIGURE_WIDGET = exports.START_CONFIGURE_WIDGET = "START_CONFIGURE_WIDGET";
	
	// Datasources
	var ADD_DATASOURCE = exports.ADD_DATASOURCE = "ADD_DATASOURCE";
	var UPDATE_DATASOURCE = exports.UPDATE_DATASOURCE = "UPDATE_DATASOURCE";
	var DELETE_DATASOURCE = exports.DELETE_DATASOURCE = "DELETE_DATASOURCE";
	
	var SET_DATASOURCE_DATA = exports.SET_DATASOURCE_DATA = "SET_DATASOURCE_DATA";
	var APPEND_DATASOURCE_DATA = exports.APPEND_DATASOURCE_DATA = "APPEND_DATASOURCE_DATA";
	
	// Plugins
	var ADD_WIDGET_PLUGIN = exports.ADD_WIDGET_PLUGIN = "ADD_WIDGET_PLUGIN";
	var ADD_DATASOURCE_PLUGIN = exports.ADD_DATASOURCE_PLUGIN = "ADD_DATASOURCE_PLUGIN";
	var DELETE_WIDGET_PLUGIN = exports.DELETE_WIDGET_PLUGIN = "DELETE_WIDGET_PLUGIN";
	var DELETE_DATASOURCE_PLUGIN = exports.DELETE_DATASOURCE_PLUGIN = "DELETE_DATASOURCE_PLUGIN";
	
	// Modal
	var SHOW_MODAL = exports.SHOW_MODAL = "SHOW_MODAL";
	var HIDE_MODAL = exports.HIDE_MODAL = "HIDE_MODAL";

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(219);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRedux = __webpack_require__(225);
	
	var _lodash = __webpack_require__(42);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _widgets = __webpack_require__(243);
	
	var Widgets = _interopRequireWildcard(_widgets);
	
	var _widgetFrame = __webpack_require__(251);
	
	var _widgetFrame2 = _interopRequireDefault(_widgetFrame);
	
	var _widgetPlugins = __webpack_require__(252);
	
	var WidgetPlugins = _interopRequireWildcard(_widgetPlugins);
	
	var _widthProvider = __webpack_require__(256);
	
	var _widthProvider2 = _interopRequireDefault(_widthProvider);
	
	var _reactGridLayout = __webpack_require__(257);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ResponsiveGrid = (0, _widthProvider2.default)(_reactGridLayout.Responsive);
	
	__webpack_require__(272);
	
	var breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
	var cols = { lg: 12, md: 12, sm: 12, xs: 6, xxs: 3 };
	
	var WidgetGrid = function (_Component) {
	    _inherits(WidgetGrid, _Component);
	
	    function WidgetGrid() {
	        _classCallCheck(this, WidgetGrid);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(WidgetGrid).apply(this, arguments));
	    }
	
	    _createClass(WidgetGrid, [{
	        key: "onLayoutChange",
	        value: function onLayoutChange(layout) {
	            if (this.props.onLayoutChange) {
	                this.props.onLayoutChange(layout);
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var props = this.props;
	            var widgetStates /*:Array<object>*/ = this.props.widgets;
	
	            // TODO: Remove unknown widget from state
	            var widgets = widgetStates.map(function (widgetState) {
	                var widgetPlugin = props.widgetPlugins[widgetState.type];
	                if (!widgetPlugin) {
	                    console.warn("No WidgetPlugin for type '" + widgetState.type + "'! Skipping rendering.");
	                    return null;
	                }
	                // WidgetFrame must be loaded as function, else the grid is not working properly.
	                return (0, _widgetFrame2.default)({ widget: widgetState, widgetPlugin: widgetPlugin, isReadOnly: props.isReadOnly });
	            }).filter(function (frame) {
	                return frame !== null;
	            });
	
	            /* //Does NOT work that way:
	             let widgets = widgetData.map((data) => <WidgetFrame {...data}
	             key={data.id}
	             _grid={{x: data.col, y: data.row, w: data.width, h: data.height}}
	             />);*/
	            return React.createElement(
	                ResponsiveGrid,
	                { className: "column", rowHeight: Widgets.ROW_HEIGHT,
	                    breakpoints: breakpoints,
	                    cols: cols,
	                    draggableCancel: ".no-drag",
	                    draggableHandle: ".drag",
	                    onLayoutChange: this.onLayoutChange.bind(this)
	                },
	                widgets
	            );
	        }
	    }]);
	
	    return WidgetGrid;
	}(_react.Component);
	
	WidgetGrid.propTypes = {
	    widgets: _react.PropTypes.array.isRequired,
	    datasources: _react.PropTypes.object.isRequired,
	    widgetPlugins: _react.PropTypes.object.isRequired,
	    onLayoutChange: _react.PropTypes.func,
	    deleteWidget: _react.PropTypes.func,
	    isReadOnly: _react.PropTypes.bool.isRequired
	};
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        widgets: _lodash2.default.valuesIn(state.widgets) || [],
	        datasources: state.datasources || {},
	        widgetPlugins: state.widgetPlugins || {},
	        isReadOnly: state.dashboard.isReadOnly
	    };
	}, function (dispatch) {
	    return {
	        onLayoutChange: function onLayoutChange(layout) {
	            dispatch(Widgets.updateLayout(layout));
	        },
	        deleteWidget: function deleteWidget(id) {
	            return dispatch(Widgets.deleteWidget(id));
	        }
	    };
	})(WidgetGrid);

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.widgetPropType = exports.initialWidgets = exports.ROW_HEIGHT = exports.HEADER_HEIGHT = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.addWidget = addWidget;
	exports.configureWidget = configureWidget;
	exports.updateWidgetProps = updateWidgetProps;
	exports.deleteWidget = deleteWidget;
	exports.updateLayout = updateLayout;
	exports.widgets = widgets;
	
	var _react = __webpack_require__(219);
	
	var React = _interopRequireWildcard(_react);
	
	var _uuid = __webpack_require__(244);
	
	var Uuid = _interopRequireWildcard(_uuid);
	
	var _widgetConfig = __webpack_require__(245);
	
	var WidgetConfig = _interopRequireWildcard(_widgetConfig);
	
	var _lodash = __webpack_require__(42);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _reducer = __webpack_require__(250);
	
	var _actionNames = __webpack_require__(241);
	
	var Action = _interopRequireWildcard(_actionNames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var HEADER_HEIGHT = exports.HEADER_HEIGHT = 77;
	var ROW_HEIGHT = exports.ROW_HEIGHT = 100;
	
	var initialWidgets = exports.initialWidgets = {
	    "initial_chart": {
	        "id": "initial_chart",
	        "type": "chart",
	        "name": "chart",
	        "props": {
	            "name": "Random Values",
	            "datasource": "initial_random_source",
	            "chartType": "area-spline",
	            "dataKeys": "[\"value\"]",
	            "xKey": "x",
	            "names": "{\"value\": \"My Value\"}",
	            "gaugeData": "{\"min\":0,\"max\":100,\"units\":\" %\"}"
	        },
	        "row": 0,
	        "col": 0,
	        "width": 6,
	        "height": 2,
	        "availableHeightPx": 123
	    },
	    "initial_text": {
	        "id": "initial_text",
	        "type": "text",
	        "name": "text",
	        "props": {
	            "name": "Random data",
	            "datasource": "initial_random_source"
	        },
	        "row": 0,
	        "col": 6,
	        "width": 6,
	        "height": 3,
	        "availableHeightPx": 223
	    },
	    "106913f4-44fb-4f69-ab89-5d5ae857cf3c": {
	        "id": "106913f4-44fb-4f69-ab89-5d5ae857cf3c",
	        "type": "chart",
	        "name": "chart",
	        "props": {
	            "name": "Bars",
	            "datasource": "initial_random_source",
	            "chartType": "spline",
	            "dataKeys": "[\"value\", \"value2\"]",
	            "xKey": "x",
	            "names": "{\"value\": \"My Value\"}",
	            "gaugeData": "{\"min\":0,\"max\":100,\"units\":\" %\"}"
	        },
	        "row": 2,
	        "col": 0,
	        "width": 6,
	        "height": 2,
	        "availableHeightPx": 123
	    }
	};
	
	var widgetPropType = exports.widgetPropType = _react.PropTypes.shape({
	    id: _react.PropTypes.string.isRequired,
	    col: _react.PropTypes.number.isRequired,
	    row: _react.PropTypes.number.isRequired,
	    width: _react.PropTypes.number.isRequired,
	    height: _react.PropTypes.number.isRequired,
	    props: _react.PropTypes.shape({
	        name: _react.PropTypes.string.isRequired
	    }).isRequired
	});
	
	function addWidget(widgetType) {
	    var widgetProps = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    var width = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
	    var height = arguments.length <= 3 || arguments[3] === undefined ? 1 : arguments[3];
	
	    return function (dispatch, getState) {
	        var widgets = getState().widgets;
	
	        return dispatch(_extends({
	            type: Action.ADD_WIDGET,
	            id: Uuid.generate()
	        }, calcNewWidgetPosition(widgets), {
	            width: width,
	            height: height,
	            widgetType: widgetType,
	            widgetProps: widgetProps
	        }));
	    };
	}
	
	function configureWidget(widgetState) {
	    return function (dispatch, getState) {
	        var state = getState();
	        if (state.widgetTypes[widgetState.type].configurable) {
	            WidgetConfig.ConfigDialog.showModal(widgetState.type);
	            //dispatch();
	        }
	    };
	}
	
	function updateWidgetProps(id) {
	    var widgetProps = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    return {
	        type: Action.UPDATE_WIDGET_PROPS,
	        id: id,
	        widgetProps: widgetProps
	    };
	}
	
	function deleteWidget(id) {
	    return {
	        type: Action.DELETE_WIDGET,
	        id: id
	    };
	}
	
	function updateLayout(layout) {
	    return {
	        type: Action.UPDATE_WIDGET_LAYOUT,
	        layout: layout
	    };
	}
	
	var widgetsCrudReducer = (0, _reducer.genCrudReducer)([Action.ADD_WIDGET, Action.DELETE_WIDGET], widget);
	function widgets() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialWidgets : arguments[0];
	    var action = arguments[1];
	
	    state = widgetsCrudReducer(state, action);
	    switch (action.type) {
	        case Action.UPDATE_WIDGET_LAYOUT:
	            return _lodash2.default.valuesIn(state).reduce(function (newState, _ref) {
	                var id = _ref.id;
	
	                newState[id] = widget(newState[id], action);
	                return newState;
	            }, _extends({}, state));
	        case Action.LOAD_LAYOUT:
	            console.assert(action.layout.widgets, "Layout is missing Widgets, id: " + action.layout.id);
	            return action.layout.widgets || {};
	        case Action.DELETE_WIDGET_PLUGIN:
	            // Also delete related widgets // TODO: Or maybe not when we render an empty box instead
	            var toDelete = _lodash2.default.valuesIn(state).filter(function (widgetState) {
	                return widgetState.type == action.id;
	            });
	            var newState = _extends({}, state);
	            toDelete.forEach(function (widgetState) {
	                delete newState[widgetState.id];
	            });
	
	            return newState;
	        default:
	            return state;
	    }
	}
	
	function widget() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case Action.ADD_WIDGET:
	            return {
	                id: action.id,
	                type: action.widgetType,
	                name: action.widgetType,
	                props: action.widgetProps,
	                row: action.row,
	                col: action.col,
	                width: action.width,
	                height: action.height
	            };
	        case Action.UPDATE_WIDGET_PROPS:
	            return _extends({}, state, {
	                props: action.widgetProps
	            });
	        case Action.UPDATE_WIDGET_LAYOUT:
	            var layout = layoutById(action.layout, state.id);
	            if (layout == null) {
	                console.warn("No layout for widget. Skipping update of position. Id: " + state.id);
	                return state;
	            }
	            return _extends({}, state, {
	                row: layout.y,
	                col: layout.x,
	                width: layout.w,
	                height: layout.h,
	                availableHeightPx: layout.h * ROW_HEIGHT - HEADER_HEIGHT
	            });
	        default:
	            return state;
	    }
	}
	
	// Local functions
	
	function layoutById(layout /*:Array*/, id) {
	    return layout.find(function (l) {
	        return l.i === id;
	    });
	}
	
	function calcNewWidgetPosition(widgets /*:Object*/) {
	    var colHeights = {};
	    for (var i = 0; i < 6; i++) {
	        colHeights[i] = 0;
	    }
	    colHeights = _lodash2.default.valuesIn(widgets).reduce(function (prev, curr) {
	        prev[curr.col] = prev[curr.col] || 0;
	        var currHeight = curr.row + curr.height || 0;
	        if (prev[curr.col] < currHeight) {
	            for (var _i = curr.col; _i < curr.col + curr.width; _i++) {
	                prev[_i] = currHeight;
	            }
	        }
	        return prev;
	    }, colHeights);
	
	    var heights = _lodash2.default.valuesIn(colHeights);
	    var col = Object.keys(colHeights).reduce(function (a, b) {
	        return Number(colHeights[a] <= colHeights[b] ? a : b);
	    });
	    Math.min.apply(Math, _toConsumableArray(colHeights));
	    return { col: col, row: Math.min.apply(Math, _toConsumableArray(heights)) + 1 };
	}

/***/ },

/***/ 244:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.generate = generate;
	function generate() {
	    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	        var r = Math.random() * 16 | 0,
	            v = c == 'x' ? r : r & 0x3 | 0x8;
	        return v.toString(16);
	    });
	}

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.createWidget = createWidget;
	exports.createOrUpdateWidget = createOrUpdateWidget;
	exports.openWidgetCreateDialog = openWidgetCreateDialog;
	exports.openWidgetConfigDialog = openWidgetConfigDialog;
	exports.widgetConfigDialog = widgetConfigDialog;
	
	var _widgets = __webpack_require__(243);
	
	var Widgets = _interopRequireWildcard(_widgets);
	
	var _actionNames = __webpack_require__(241);
	
	var _modalDialog = __webpack_require__(246);
	
	var Modal = _interopRequireWildcard(_modalDialog);
	
	var _modalDialogIds = __webpack_require__(249);
	
	var ModalIds = _interopRequireWildcard(_modalDialogIds);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialState = {
	    type: null,
	    name: null,
	    props: {}
	};
	
	/**
	 * Triggered when the user intends to create a widget of a certain type
	 */
	function createWidget(type) {
	    return function (dispatch, getState) {
	        var state = getState();
	        var widgetPlugin = state.widgetPlugins[type];
	        if (!widgetPlugin.typeInfo.settings && widgetPlugin.typeInfo.settings.length > 0) {
	            dispatch(Widgets.addWidget(type));
	            return;
	        }
	        dispatch(openWidgetCreateDialog(type));
	    };
	}
	
	/**
	 * Creates or updates an actual widget
	 */
	function createOrUpdateWidget(id, type, props) {
	    return function (dispatch, getState) {
	        var state = getState();
	
	        var widget = state.widgets[id];
	
	        if (widget && widget.type !== type) {
	            throw new Error("Can not update widget of type " + widget.type + " with props of type " + type);
	        }
	        if (widget) {
	            dispatch(Widgets.updateWidgetProps(id, props));
	        } else {
	            dispatch(Widgets.addWidget(type, props));
	        }
	    };
	}
	
	function openWidgetCreateDialog(type) {
	    return function (dispatch) {
	        dispatch({
	            type: _actionNames.START_CREATE_WIDGET,
	            widgetType: type
	        });
	        dispatch(Modal.showModal(ModalIds.WIDGET_CONFIG));
	    };
	}
	
	/**
	 * Open the dialog with the settings and values of the given widget
	 */
	function openWidgetConfigDialog(id) {
	    return function (dispatch, getState) {
	        var state = getState();
	        var widget = state.widgets[id];
	        dispatch({
	            type: _actionNames.START_CONFIGURE_WIDGET,
	            widget: widget
	        });
	        dispatch(Modal.showModal(ModalIds.WIDGET_CONFIG));
	    };
	}
	
	function widgetConfigDialog() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case _actionNames.START_CREATE_WIDGET:
	            return _extends({}, state, {
	                type: action.widgetType,
	                id: null,
	                name: action.widgetType,
	                props: {}
	            });
	        case _actionNames.START_CONFIGURE_WIDGET:
	            return _extends({}, state, {
	                type: action.widget.type,
	                id: action.widget.id,
	                name: action.widget.name,
	                props: action.widget.props
	            });
	        default:
	            return state;
	    }
	}

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.showModal = showModal;
	exports.closeModal = closeModal;
	exports.modalDialog = modalDialog;
	
	var _actionNames = __webpack_require__(241);
	
	var Action = _interopRequireWildcard(_actionNames);
	
	var _modalDialogUi = __webpack_require__(247);
	
	var _modalDialogUi2 = _interopRequireDefault(_modalDialogUi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialState = {
	    dialogId: null,
	    isVisible: false,
	    data: {}
	};
	
	function showModalSideeffect(id) {
	    var $modal = $('.ui.modal.' + id);
	
	    if (!$modal.length) {
	        throw new Error("Can not find Modal with id", id, $modal);
	    }
	
	    $modal.modal('show');
	
	    // This is to update the Browser Scrollbar, at least needed in WebKit
	    if (typeof document !== 'undefined') {
	        (function () {
	            var n = document.createTextNode(' ');
	            $modal.append(n);
	            setTimeout(function () {
	                n.parentNode.removeChild(n);
	            }, 0);
	        })();
	    }
	}
	
	function closeModalSideeffect(id) {
	    $('.ui.modal.' + id).modal('hide');
	}
	
	function updateModalVisibility(stateAfter, stateBefore) {
	    var dialogBefore = stateBefore.modalDialog;
	    var dialogAfter = stateAfter.modalDialog;
	
	    if (dialogBefore.isVisible !== dialogAfter.isVisible) {
	        if (stateAfter.modalDialog.isVisible) {
	            showModalSideeffect(dialogAfter.dialogId);
	        } else {
	            closeModalSideeffect(dialogBefore.dialogId);
	        }
	    } else if (dialogBefore.dialogId && dialogAfter.dialogId && dialogBefore.dialogId !== dialogAfter.dialogId) {
	        closeModalSideeffect(dialogBefore.dialogId);
	        showModalSideeffect(dialogAfter.dialogId);
	    }
	}
	
	function showModal(id) {
	    var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    return function (dispatch, getState) {
	        var stateBefore = getState();
	        dispatch({
	            type: Action.SHOW_MODAL,
	            dialogId: id,
	            data: data
	        });
	
	        var stateAfter = getState();
	        updateModalVisibility(stateAfter, stateBefore);
	    };
	}
	
	function closeModal() {
	    return function (dispatch, getState) {
	        var stateBefore = getState();
	        dispatch({
	            type: Action.HIDE_MODAL
	        });
	
	        var stateAfter = getState();
	        updateModalVisibility(stateAfter, stateBefore);
	    };
	}
	
	function modalDialog() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case Action.SHOW_MODAL:
	            return _extends({}, state, {
	                dialogId: action.dialogId,
	                data: action.data,
	                isVisible: true
	            });
	        case Action.HIDE_MODAL:
	            return _extends({}, state, {
	                dialogId: null,
	                data: null,
	                isVisible: false
	            });
	        default:
	            return state;
	    }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(55)))

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(219);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(225);
	
	var _modalDialog = __webpack_require__(246);
	
	var Modal = _interopRequireWildcard(_modalDialog);
	
	var _elementsUi = __webpack_require__(248);
	
	var ui = _interopRequireWildcard(_elementsUi);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ModalDialog = function (_React$Component) {
	    _inherits(ModalDialog, _React$Component);
	
	    function ModalDialog() {
	        _classCallCheck(this, ModalDialog);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalDialog).apply(this, arguments));
	    }
	
	    _createClass(ModalDialog, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            $('.ui.modal.' + this.props.id).modal({
	                detachable: false,
	                closable: false,
	                observeChanges: true,
	                onApprove: function onApprove($element) {
	                    return false;
	                },
	                onDeny: function onDeny($element) {
	                    return false;
	                }
	            });
	        }
	    }, {
	        key: 'onClick',
	        value: function onClick(e, action) {
	            if (action.onClick(e)) {
	                // Closing is done externally (by redux)
	                this.props.closeDialog();
	                //ModalDialog.closeModal(this.props.id);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var key = 0;
	            var actions = this.props.actions.map(function (action) {
	                return _react2.default.createElement(
	                    'div',
	                    { key: key++, className: action.className, onClick: function onClick(e) {
	                            return _this2.onClick(e, action);
	                        } },
	                    action.label,
	                    action.iconClass ? _react2.default.createElement('i', { className: action.iconClass }) : null
	                );
	            });
	
	            var props = this.props;
	            return _react2.default.createElement(
	                'div',
	                { id: this.props.id, className: 'ui modal ' + this.props.id },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'header' },
	                    props.title
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'content' },
	                    props.children
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'actions' },
	                    actions
	                )
	            );
	        }
	    }]);
	
	    return ModalDialog;
	}(_react2.default.Component);
	
	ModalDialog.propTypes = {
	    children: _react2.default.PropTypes.element.isRequired,
	    title: _react.PropTypes.string.isRequired,
	    id: _react.PropTypes.string.isRequired,
	    actions: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	        className: _react.PropTypes.string.isRequired,
	        iconClass: _react.PropTypes.string,
	        label: _react.PropTypes.string.isRequired,
	        onClick: _react.PropTypes.func.isRequired
	    })).isRequired,
	    handlePositive: _react.PropTypes.func,
	    handleDeny: _react.PropTypes.func,
	    closeDialog: _react.PropTypes.func
	};
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {};
	}, function (dispatch) {
	    return {
	        closeDialog: function closeDialog() {
	            return dispatch(Modal.closeModal());
	        }
	    };
	})(ModalDialog);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(55)))

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Divider = exports.Icon = exports.LinkItem = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(219);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * This module contains generic UI Elements reuse in the app
	 */
	
	var LinkItem = exports.LinkItem = function LinkItem(props) {
	    var icon = void 0;
	    if (props.icon) {
	        icon = React.createElement("i", { className: props.icon + " icon" });
	    }
	
	    return React.createElement(
	        "a",
	        { className: "item" + (props.disabled ? " disabled" : ""), href: "#",
	            onClick: function onClick(e) {
	                e.stopPropagation();
	                e.preventDefault();
	                props.onClick(props);
	            } },
	        icon,
	        " ",
	        props.children,
	        " ",
	        props.text
	    );
	};
	
	LinkItem.propTypes = {
	    onClick: _react.PropTypes.func.isRequired,
	    text: _react.PropTypes.string,
	    icon: _react.PropTypes.string,
	    disabled: _react.PropTypes.bool,
	    children: _react.PropTypes.any
	};
	
	var Icon = exports.Icon = function Icon(props) {
	    var classes = [];
	    classes.push(props.type);
	    if (props.align === 'right') {
	        classes.push('right floated');
	    }
	    if (props.size !== "normal") {
	        classes.push(props.size);
	    }
	    classes.push('icon');
	    return React.createElement("i", _extends({}, props, { className: classes.join(" ") }));
	};
	
	Icon.propTypes = {
	    type: _react.PropTypes.string.isRequired,
	    onClick: _react.PropTypes.func,
	    align: _react.PropTypes.oneOf(["left", "right"]),
	    size: _react.PropTypes.oneOf(["mini", "tiny", "small", "normal", "large", "huge", "massive"])
	};
	
	var Divider = exports.Divider = function Divider(props) {
	    return React.createElement("div", { className: "ui divider" });
	};

/***/ },

/***/ 249:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var DASHBOARD_IMPORT_EXPORT = exports.DASHBOARD_IMPORT_EXPORT = "dashboard-import-export-dialog";
	var DATASOURCE_CONFIG = exports.DATASOURCE_CONFIG = "datasource-config-dialog";
	var WIDGET_CONFIG = exports.WIDGET_CONFIG = "widget-config-dialog";
	var PLUGINS = exports.PLUGINS = "plugins-dialog";

/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.genCrudReducer = genCrudReducer;
	
	var _lodash = __webpack_require__(42);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * Creates an reducer that works on an object where you can create, delete and update properties of type Object.
	 * The key of properties always matches the id property of the value object.
	 *
	 * @param actionNames
	 * Object with: create, update, delete action names
	 * @param elementReducer
	 * A reducer for a single object that supports the actionNames.create and actionNames.update action.
	 * @param initialState (optional)
	 * @param idProperty
	 * The name of the property to fetch the id from the action. Default: 'id'
	 * @returns {crudReducer}
	 */
	function genCrudReducer(actionNames /*:Array<String>*/, elementReducer /*:Function*/) {
	    var idProperty = arguments.length <= 2 || arguments[2] === undefined ? 'id' : arguments[2];
	
	    console.assert(actionNames.length === 2, "ActionNames must contain 2 names for create, delete in that order");
	
	    var _actionNames = _slicedToArray(actionNames, 2);
	
	    var CREATE_ACTION = _actionNames[0];
	    var DELETE_ACTION = _actionNames[1];
	
	    console.assert(_lodash2.default.includes(CREATE_ACTION, "ADD") || _lodash2.default.includes(CREATE_ACTION, "CREATE"), "The create action name should probably contain ADD or DELETE, but is: " + CREATE_ACTION);
	    console.assert(_lodash2.default.includes(DELETE_ACTION, "DELETE") || _lodash2.default.includes(DELETE_ACTION, "REMOVE"), "The delete action name should probably contain DELETE or REMOVE, but is: " + DELETE_ACTION);
	
	    return function crudReducer(state, action) {
	        var id = action[idProperty];
	        switch (action.type) {
	            case CREATE_ACTION:
	                return _extends({}, state, _defineProperty({}, id, elementReducer(undefined, action)));
	            case DELETE_ACTION:
	                var deleted = state[id];
	
	                var newState = _objectWithoutProperties(state, [id]);
	
	                return newState;
	            default:
	                // Update if we have an id property
	                if (id === undefined) return state;
	                var elementState = state[id];
	                if (elementState == undefined) {
	                    // Do not update what we don't have.
	                    // TODO: Log warning, or document why not.
	                    return state;
	                }
	                var updatedElement = elementReducer(elementState, action);
	                if (updatedElement == undefined) {
	                    console.error("ElementReducer has some problem: ", elementReducer, " with action: ", action);
	                    throw new Error("Reducer must return the original state if they not implement the action. Check action " + action.type + ".");
	                }
	
	                return _extends({}, state, _defineProperty({}, id, updatedElement));
	        }
	    };
	}

/***/ },

/***/ 251:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(219);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRedux = __webpack_require__(225);
	
	var _widgetConfig = __webpack_require__(245);
	
	var WidgetConfig = _interopRequireWildcard(_widgetConfig);
	
	var _widgetPlugins = __webpack_require__(252);
	
	var WidgetPlugins = _interopRequireWildcard(_widgetPlugins);
	
	var _widgets = __webpack_require__(243);
	
	var Widgets = _interopRequireWildcard(_widgets);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * The Dragable Frame of a Widget.
	 * Contains generic UI controls, shared by all Widgets
	 */
	var WidgetFrame = function WidgetFrame(props) {
	    var widgetState = props.widget;
	
	    var widgetFactory = WidgetPlugins.pluginRegistry.getPlugin(widgetState.type);
	    console.assert(widgetFactory, "No registered widget factory with type: " + widgetState.type);
	
	    return React.createElement(
	        'div',
	        { className: 'ui raised segments',
	            style: { margin: 0, overflow: "hidden" },
	            key: widgetState.id,
	            _grid: { x: widgetState.col, y: widgetState.row, w: widgetState.width, h: widgetState.height } },
	        React.createElement(
	            'div',
	            { className: "ui inverted segment" + (props.isReadOnly ? "" : " drag") },
	            props.isReadOnly ? null : React.createElement(
	                'div',
	                { className: 'ui tiny horizontal right floated inverted list' },
	                React.createElement(ConfigWidgetButton, { className: 'right item', widgetState: widgetState,
	                    visible: props.widgetPlugin.typeInfo.settings ? true : false,
	                    icon: 'configure' }),
	                React.createElement(DeleteWidgetButton, { className: 'right floated item', widgetState: widgetState, icon: 'remove' })
	            ),
	            React.createElement(
	                'div',
	                { className: "ui item top attached" + (props.isReadOnly ? "" : " drag") },
	                widgetState.props.name || ' '
	            )
	        ),
	        React.createElement(
	            'div',
	            { className: 'ui segment' },
	            widgetFactory.getOrCreateInstance(widgetState.id)
	        )
	    );
	};
	
	WidgetFrame.propTypes = {
	    widget: Widgets.widgetPropType.isRequired,
	    widgetPlugin: WidgetPlugins.widgetPluginType.isRequired,
	    isReadOnly: _react.PropTypes.bool.isRequired
	};
	
	exports.default = WidgetFrame;
	
	var WidgetButton = function (_React$Component) {
	    _inherits(WidgetButton, _React$Component);
	
	    function WidgetButton() {
	        _classCallCheck(this, WidgetButton);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(WidgetButton).apply(this, arguments));
	    }
	
	    _createClass(WidgetButton, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var data = this.props.widgetState;
	            return React.createElement(
	                'a',
	                { className: this.props.className + (this.props.visible !== false ? "" : " hidden transition"),
	                    onClick: function onClick() {
	                        return _this2.props.onClick(data);
	                    } },
	                React.createElement('i', { className: this.props.icon + " icon" })
	            );
	        }
	    }]);
	
	    return WidgetButton;
	}(React.Component);
	
	WidgetButton.propTypes = {
	    widgetState: Widgets.widgetPropType.isRequired,
	    icon: _react.PropTypes.string.isRequired,
	    visible: _react.PropTypes.bool,
	    className: _react.PropTypes.string.isRequired,
	    onClick: _react.PropTypes.func.isRequired
	};
	
	var DeleteWidgetButton = (0, _reactRedux.connect)(function (state) {
	    return {};
	}, function (dispatch) {
	    return {
	        onClick: function onClick(widgetState) {
	            dispatch((0, _widgets.deleteWidget)(widgetState.id));
	        }
	    };
	})(WidgetButton);
	
	var ConfigWidgetButton = (0, _reactRedux.connect)(function (state) {
	    return {};
	}, function (dispatch) {
	    return {
	        onClick: function onClick(widgetState) {
	            dispatch(WidgetConfig.openWidgetConfigDialog(widgetState.id));
	        }
	    };
	})(WidgetButton);

/***/ },

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.pluginRegistry = exports.widgetPluginType = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.unloadPlugin = unloadPlugin;
	exports.widgetPlugins = widgetPlugins;
	
	var _widgetPlugin = __webpack_require__(253);
	
	var _widgetPlugin2 = _interopRequireDefault(_widgetPlugin);
	
	var _pluginRegistry = __webpack_require__(254);
	
	var _pluginRegistry2 = _interopRequireDefault(_pluginRegistry);
	
	var _actionNames = __webpack_require__(241);
	
	var Action = _interopRequireWildcard(_actionNames);
	
	var _reducer = __webpack_require__(250);
	
	var _react = __webpack_require__(219);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// TODO: Later load all plugins from external URL's ?
	var initialState = {};
	
	var widgetPluginType = exports.widgetPluginType = _react.PropTypes.shape({
	    id: _react.PropTypes.string.isRequired,
	    typeInfo: _react.PropTypes.shape({
	        type: _react.PropTypes.string.isRequired,
	        name: _react.PropTypes.string.isRequired,
	        settings: _react.PropTypes.array
	    })
	});
	
	var WidgetPluginRegistry = function (_PluginRegistry) {
	    _inherits(WidgetPluginRegistry, _PluginRegistry);
	
	    function WidgetPluginRegistry() {
	        _classCallCheck(this, WidgetPluginRegistry);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(WidgetPluginRegistry).apply(this, arguments));
	    }
	
	    _createClass(WidgetPluginRegistry, [{
	        key: 'createPluginFromModule',
	        value: function createPluginFromModule(module) {
	            return new _widgetPlugin2.default(module, this.store);
	        }
	    }]);
	
	    return WidgetPluginRegistry;
	}(_pluginRegistry2.default);
	
	var pluginRegistry = exports.pluginRegistry = new WidgetPluginRegistry();
	
	function unloadPlugin(type) {
	    return function (dispatch) {
	        var widgetPlugin = pluginRegistry.getPlugin(type);
	        widgetPlugin.dispose();
	        dispatch(deletePlugin(type));
	    };
	}
	
	function deletePlugin(type) {
	    return {
	        type: Action.DELETE_WIDGET_PLUGIN,
	        id: type
	    };
	}
	
	var pluginsCrudReducer = (0, _reducer.genCrudReducer)([Action.ADD_WIDGET_PLUGIN, Action.DELETE_WIDGET_PLUGIN], widgetPlugin);
	function widgetPlugins() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	
	    state = pluginsCrudReducer(state, action);
	    switch (action.type) {
	        default:
	            return state;
	    }
	}
	
	function widgetPlugin(state, action) {
	    switch (action.type) {
	        case Action.ADD_WIDGET_PLUGIN:
	            if (!action.typeInfo.type) {
	                // TODO: Catch this earlier
	                throw new Error("A Plugin needs a type name.");
	            }
	
	            return {
	                id: action.typeInfo.type,
	                url: action.url,
	                typeInfo: action.typeInfo,
	                isDatasource: action.pluginType === "datasource",
	                isWidget: action.pluginType === "widget"
	            };
	        default:
	            return state;
	    }
	}

/***/ },

/***/ 253:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactRedux = __webpack_require__(225);
	
	var _react = __webpack_require__(219);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(42);
	
	var _ = _interopRequireWildcard(_lodash);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// TODO: Rename to ...Factory
	
	var WidgetPlugin = function () {
	    function WidgetPlugin(module, store) {
	        _classCallCheck(this, WidgetPlugin);
	
	        console.assert(module.TYPE_INFO, "Missing TYPE_INFO on widget module. Every module must export TYPE_INFO");
	        this._type = module.TYPE_INFO.type;
	        this.Widget = module.Widget;
	        this.store = store;
	        this.instances = {};
	        this.disposed = false;
	
	        // only bind the getData function once, so it can be safely used in the connect function
	        this.getData = function (getState, dsId) {
	            var ds = getState().datasources[dsId];
	            if (!ds) {
	                return [];
	            }
	            return ds.data || [];
	        }.bind(this, this.store.getState);
	    }
	
	    _createClass(WidgetPlugin, [{
	        key: 'getOrCreateInstance',
	        value: function getOrCreateInstance(id) {
	            var _this = this;
	
	            if (this.disposed === true) {
	                throw new Error("Try to get or create widget of destroyed type: " + this.type);
	            }
	
	            if (this.instances[id]) {
	                return this.instances[id];
	            }
	
	            // TODO: check if module.Widget is a react component
	            var widgetPlugin = this.store.getState().widgetPlugins[this.type];
	            var rendering = widgetPlugin.typeInfo.rendering || "react";
	
	            var widgetComponent = this.Widget;
	            if (rendering === "dom") {
	                widgetComponent = DomWidgetContainer;
	            }
	
	            var widget = (0, _reactRedux.connect)(function (state) {
	                // This method will be used as mapStateToProps, leading to a constant "getData()" function per instance
	                // Therefor the update is only called when actual state changes
	                return function (state) {
	                    var widgetState = state.widgets[id];
	                    return {
	                        config: widgetState.props,
	                        _state: widgetState,
	                        _datasources: state.datasources,
	                        getData: _this.getData
	                    };
	                };
	            })(widgetComponent);
	
	            this.instances[id] = _react2.default.createElement(widget, { _widgetClass: this.Widget });
	            // Should we create here or always outside?
	            return this.instances[id];
	        }
	    }, {
	        key: 'dispose',
	        value: function dispose() {
	            this.disposed = true;
	            this.instances = [];
	        }
	    }, {
	        key: 'type',
	        get: function get() {
	            return this._type;
	        }
	    }]);
	
	    return WidgetPlugin;
	}();
	
	exports.default = WidgetPlugin;
	
	var DomWidgetContainer = function (_React$Component) {
	    _inherits(DomWidgetContainer, _React$Component);
	
	    function DomWidgetContainer(props) {
	        _classCallCheck(this, DomWidgetContainer);
	
	        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(DomWidgetContainer).call(this, props));
	
	        _this2.state = {
	            widget: new props._widgetClass(props)
	        };
	        return _this2;
	    }
	
	    _createClass(DomWidgetContainer, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            if (this.state.widget.componentWillMount) {
	                this.state.widget.componentWillMount();
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.state.widget.render(this.props, this.refs.container);
	            if (this.state.widget.componentDidMount) {
	                this.state.widget.componentDidMount();
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.state.widget.componentWillReceiveProps) {
	                this.state.widget.componentWillReceiveProps(nextProps);
	            }
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            if (this.state.widget.shouldComponentUpdate) {
	                return this.state.widget.shouldComponentUpdate(nextProps, nextState);
	            }
	            return true;
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {
	            if (this.state.widget.componentWillUpdate) {
	                this.state.widget.componentWillUpdate(nextProps, nextState);
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {
	            this.state.widget.render(this.props, this.refs.container);
	            if (this.state.widget.componentDidUpdate) {
	                this.state.widget.componentDidUpdate(prevProps, prevState);
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            if (this.state.widget.componentWillUnmount) {
	                this.state.widget.componentWillUnmount();
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { ref: 'container' },
	                'Widget Plugin missing rendering!'
	            );
	        }
	    }]);
	
	    return DomWidgetContainer;
	}(_react2.default.Component);
	
	DomWidgetContainer.propTypes = {
	    _widgetClass: _react.PropTypes.func.isRequired
	};

/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _datasourcePlugin = __webpack_require__(255);
	
	var DsPlugin = _interopRequireWildcard(_datasourcePlugin);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PluginRegistry = function () {
	    function PluginRegistry() {
	        _classCallCheck(this, PluginRegistry);
	
	        this.plugins = {};
	    }
	
	    _createClass(PluginRegistry, [{
	        key: "register",
	        value: function register(module) {
	            if (!this._store === undefined) {
	                throw new Error("PluginRegistry has no store. Set the store property before registering modules!");
	            }
	
	            console.assert(module.TYPE_INFO, "Missing TYPE_INFO on plugin module. Every module must export TYPE_INFO");
	            console.assert(module.TYPE_INFO.type, "Missing TYPE_INFO.type on plugin TYPE_INFO.");
	
	            console.log("registering plugin: ", module);
	            this.plugins[module.TYPE_INFO.type] = this.createPluginFromModule(module);
	        }
	    }, {
	        key: "createPluginFromModule",
	        value: function createPluginFromModule(module) {
	            throw new Error("PluginRegistry must implement createPluginFromModule");
	        }
	    }, {
	        key: "getPlugin",
	        value: function getPlugin(type /*:String*/) {
	            return this.plugins[type];
	        }
	    }, {
	        key: "getPlugins",
	        value: function getPlugins() {
	            return _extends({}, this.plugins);
	        }
	    }, {
	        key: "store",
	        set: function set(store) {
	            this._store = store;
	        },
	        get: function get() {
	            return this._store;
	        }
	    }]);
	
	    return PluginRegistry;
	}();
	
	exports.default = PluginRegistry;

/***/ },

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DataSourcePlugin = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(42);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Connects a datasource to the application state
	 */
	// TODO: Rename to ...Factory
	
	var DataSourcePlugin = exports.DataSourcePlugin = function () {
	    function DataSourcePlugin(module, store) {
	        _classCallCheck(this, DataSourcePlugin);
	
	        console.assert(module.TYPE_INFO, "Missing TYPE_INFO on datasource module. Every module must export TYPE_INFO");
	        this._type = module.TYPE_INFO.type;
	        this.Datasource = module.Datasource;
	
	        this.store = store;
	
	        this.instances = {};
	
	        this.unsubscribe = store.subscribe(this.handleStateChange.bind(this));
	        this.disposed = false;
	    }
	
	    _createClass(DataSourcePlugin, [{
	        key: "getDatasourceState",
	        value: function getDatasourceState(id) {
	            var state = this.store.getState();
	            return state.datasources[id];
	        }
	    }, {
	        key: "getOrCreateInstance",
	        value: function getOrCreateInstance(id) {
	            if (this.disposed === true) {
	                throw new Error("Try to get or create datasource of destroyed type: " + this.type);
	            }
	            var instance = this.instances[id];
	            if (!instance) {
	                var dsState = this.getDatasourceState(id);
	                instance = new this.Datasource(dsState.props, dsState.data);
	                instance.props = dsState.props;
	                this.instances[id] = instance;
	            }
	            return instance;
	        }
	    }, {
	        key: "getInstance",
	        value: function getInstance(id) {
	            return this.instances[id];
	        }
	    }, {
	        key: "dispose",
	        value: function dispose() {
	            this.disposed = true;
	            _lodash2.default.valuesIn(this.instances).forEach(function (instance) {
	                if (_lodash2.default.isFunction(instance.dispose)) {
	                    try {
	                        instance.dispose();
	                    } catch (e) {
	                        console.error("Failed to destroy Datasource instance", instance);
	                    }
	                }
	            });
	            this.instances = [];
	            this.unsubscribe();
	        }
	    }, {
	        key: "handleStateChange",
	        value: function handleStateChange() {
	            var _this = this;
	
	            var state = this.store.getState();
	            _lodash2.default.valuesIn(state.datasources).forEach(function (dsState) {
	                return _this.updateDatasource(dsState);
	            });
	        }
	    }, {
	        key: "updateDatasource",
	        value: function updateDatasource(dsState) {
	            var instance = this.getInstance(dsState.id);
	            if (!instance) {
	                // This is normal to happen when the app starts,
	                // since the state already contains the id's before plugin instances are loaded
	                //console.warn("Can not find Datasource instance with id " + dsState.id + ". Skipping Update!");
	                return;
	            }
	
	            var oldProps = instance.props;
	            var newProps = dsState.props;
	            if (oldProps !== newProps) {
	                if (_lodash2.default.isFunction(instance.propsWillUpdate)) {
	                    instance.propsWillUpdate(newProps);
	                }
	                instance.props = newProps;
	            }
	        }
	    }, {
	        key: "type",
	        get: function get() {
	            return this._type;
	        }
	    }]);

	    return DataSourcePlugin;
	}();

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(219);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(58);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @noflow
	// Intentional; Flow can't handle the bind on L20
	
	
	/*
	 * A simple HOC that provides facility for listening to container resizes.
	 */
	
	exports.default = function (ComposedComponent) {
	    var WidthProvider = function (_React$Component) {
	        _inherits(WidthProvider, _React$Component);
	
	        function WidthProvider(props) {
	            _classCallCheck(this, WidthProvider);
	
	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WidthProvider).call(this, props));
	
	            _this.state = {
	                mounted: false,
	                width: 1280
	            };
	            return _this;
	        }
	
	        _createClass(WidthProvider, [{
	            key: 'componentDidMount',
	            value: function componentDidMount() {
	                this.setState({ mounted: true });
	
	                window.addEventListener('resize', this.onWindowResize.bind(this));
	                // Call to properly set the breakpoint and resize the elements.
	                // Note that if you're doing a full-width element, this can get a little wonky if a scrollbar
	                // appears because of the grid. In that case, fire your own resize event, or set `overflow: scroll` on your body.
	                this.onWindowResize();
	            }
	        }, {
	            key: 'componentWillUnmount',
	            value: function componentWillUnmount() {
	                window.removeEventListener('resize', this.onWindowResize);
	            }
	        }, {
	            key: 'onWindowResize',
	            value: function onWindowResize(_event /*:Event*/, cb /*:Function*/) {
	                var node = _reactDom2.default.findDOMNode(this);
	
	                var padLeft = window.getComputedStyle(node, null).getPropertyValue('padding-left') || 0;
	                padLeft = parseInt(padLeft) || 0;
	
	                var padRight = window.getComputedStyle(node, null).getPropertyValue('padding-right') || 0;
	                padRight = parseInt(padRight) || 0;
	
	                this.setState({ width: node.offsetWidth - padLeft - padRight }, cb);
	            }
	        }, {
	            key: 'render',
	            value: function render() {
	                if (this.props.measureBeforeMount && !this.state.mounted) return _react2.default.createElement('div', _extends({}, this.props, this.state));
	                return _react2.default.createElement(ComposedComponent, _extends({}, this.props, this.state));
	            }
	        }]);
	
	        return WidthProvider;
	    }(_react2.default.Component);
	
	    WidthProvider.defaultProps = {
	        measureBeforeMount: false
	    };
	
	    WidthProvider.propTypes = {
	        // If true, will not render children until mounted. Useful for getting the exact width before
	        // rendering, to prevent any unsightly resizing.
	        measureBeforeMount: _react2.default.PropTypes.bool
	    };
	
	    return WidthProvider;
	};

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(219);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(225);
	
	var _lodash = __webpack_require__(42);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _layouts = __webpack_require__(275);
	
	var Layouts = _interopRequireWildcard(_layouts);
	
	var _elements = __webpack_require__(248);
	
	var ui = _interopRequireWildcard(_elements);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*TODO: Add remove button next to each loadable layout
	 * - Connect with Actions
	 * */
	var LayoutsTopNavItem = function LayoutsTopNavItem(props) {
	    return _react2.default.createElement(
	        'div',
	        { className: 'ui simple dropdown item' },
	        'Layout',
	        _react2.default.createElement('i', { className: 'dropdown icon' }),
	        _react2.default.createElement(
	            'div',
	            { className: 'ui menu' },
	            _react2.default.createElement(SaveLayout, null),
	            _react2.default.createElement(ResetLayoutButton, { text: 'Reset Current Layout', icon: 'undo' }),
	            _react2.default.createElement(SaveLayoutButton, { text: 'Save Layout', icon: 'save' }),
	            _react2.default.createElement('div', { className: 'ui divider' }),
	            _react2.default.createElement(
	                'div',
	                { className: 'header' },
	                'Load Layout'
	            ),
	            props.layouts.map(function (layout) {
	                return _react2.default.createElement(LayoutItem, { text: layout.name, icon: 'plus', layout: layout,
	                    key: layout.id });
	            })
	        )
	    );
	};
	
	LayoutsTopNavItem.propTypes = {
	    layouts: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	        name: _react.PropTypes.string
	    })),
	    widgets: _react.PropTypes.object,
	    currentLayout: _react.PropTypes.object
	};
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        layouts: _lodash2.default.valuesIn(state.layouts),
	        currentLayout: state.currentLayout,
	        widgets: state.widgets
	    };
	}, function (dispatch) {
	    return {};
	})(LayoutsTopNavItem);
	
	var SaveInput = function (_React$Component) {
	    _inherits(SaveInput, _React$Component);
	
	    function SaveInput() {
	        _classCallCheck(this, SaveInput);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(SaveInput).apply(this, arguments));
	    }
	
	    _createClass(SaveInput, [{
	        key: 'onEnter',
	        value: function onEnter(e) {
	            if (e.key === 'Enter') {
	                this.props.onEnter(this.refs.input.value, this.props);
	                this.refs.input.value = '';
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'item' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'ui icon input' },
	                    _react2.default.createElement('input', { type: 'text', placeholder: 'Save as...', ref: 'input', onKeyPress: this.onEnter.bind(this) }),
	                    _react2.default.createElement('i', { className: 'save icon', onClick: this.onEnter.bind(this), style: { cursor: "pointer", zIndex: 90000 } })
	                )
	            );
	        }
	    }]);
	
	    return SaveInput;
	}(_react2.default.Component);
	
	SaveInput.propTypes = {
	    onEnter: _react.PropTypes.func,
	    widgets: _react.PropTypes.object
	};
	
	var SaveLayout = (0, _reactRedux.connect)(function (state) {
	    return {
	        layouts: _lodash2.default.valuesIn(state.layouts),
	        widgets: state.widgets
	    };
	}, function (dispatch, props) {
	    return {
	        onEnter: function onEnter(name, props) {
	            dispatch(Layouts.addLayout(name, props.widgets));
	        }
	    };
	}, function (stateProps, dispatchProps, ownProps) {
	    return _extends({}, ownProps, stateProps, dispatchProps);
	})(SaveInput);
	
	var MyLayoutItem = function (_React$Component2) {
	    _inherits(MyLayoutItem, _React$Component2);
	
	    function MyLayoutItem() {
	        _classCallCheck(this, MyLayoutItem);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(MyLayoutItem).apply(this, arguments));
	    }
	
	    _createClass(MyLayoutItem, [{
	        key: 'render',
	        value: function render() {
	            var props = this.props;
	
	            var indexIconClass = null;
	            if (props.currentLayout.id == props.layout.id) {
	                indexIconClass = "tiny selected radio icon";
	            } else {
	                indexIconClass = "tiny radio icon";
	            }
	
	            return _react2.default.createElement(
	                'a',
	                { className: 'item', href: '#', onClick: function onClick() {
	                        return props.onClick(props);
	                    } },
	                _react2.default.createElement('i', { className: indexIconClass }),
	                _react2.default.createElement('i', { className: 'right floated remove huge icon', onClick: function onClick(e) {
	                        props.deleteLayout(props);
	                        e.stopPropagation();
	                    } }),
	                ' ',
	                props.text
	            );
	        }
	    }]);
	
	    return MyLayoutItem;
	}(_react2.default.Component);
	
	MyLayoutItem.propTypes = {
	    deleteLayout: _react.PropTypes.func.isRequired,
	    onClick: _react.PropTypes.func.isRequired,
	    layout: _react.PropTypes.object.isRequired,
	    currentLayout: _react.PropTypes.object
	};
	
	var LayoutItem = (0, _reactRedux.connect)(function (state) {
	    return {
	        currentLayout: state.currentLayout
	    };
	}, function (dispatch, props) {
	    return {
	        deleteLayout: function deleteLayout(props) {
	            return dispatch(Layouts.deleteLayout(props.layout.id));
	        },
	        onClick: function onClick(props) {
	            return dispatch(Layouts.loadLayout(props.layout.id));
	        }
	    };
	})(MyLayoutItem);
	
	/*
	 const ResetLayoutButtonc = (props) => {
	 return <ui.LinkItem
	 onClick={this.props.resetLayout.bind(this, this.props)}></ui.LinkItem>
	 };*/
	
	var ResetLayoutButton = (0, _reactRedux.connect)(function (state) {
	    return {
	        id: state.currentLayout.id,
	        disabled: !state.currentLayout.id
	    };
	}, function (dispatch, props) {
	    return {
	        onClick: function onClick(props) {
	            return dispatch(Layouts.loadLayout(props.id));
	        }
	    };
	})(ui.LinkItem);
	
	var SaveLayoutButton = (0, _reactRedux.connect)(function (state) {
	    return {
	        id: state.currentLayout.id,
	        widgets: state.widgets,
	        disabled: !state.currentLayout.id
	    };
	}, function (dispatch) {
	    return {
	        onClick: function onClick(props) {
	            return dispatch(Layouts.updateLayout(props.id, props.widgets));
	        }
	    };
	})(ui.LinkItem);

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.addLayout = addLayout;
	exports.updateLayout = updateLayout;
	exports.deleteLayout = deleteLayout;
	exports.setCurrentLayout = setCurrentLayout;
	exports.loadEmptyLayout = loadEmptyLayout;
	exports.loadLayout = loadLayout;
	exports.layouts = layouts;
	exports.layout = layout;
	exports.currentLayout = currentLayout;
	
	var _widgets = __webpack_require__(243);
	
	var Widgets = _interopRequireWildcard(_widgets);
	
	var _uuid = __webpack_require__(244);
	
	var _reducer = __webpack_require__(250);
	
	var _actionNames = __webpack_require__(241);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialLayouts = {
	    "default": {
	        id: "default",
	        name: "Default Layout",
	        widgets: Widgets.initialWidgets
	    }
	};
	
	function addLayout(name, widgets) {
	    return function (dispatch) {
	
	        var addLayout = dispatch({
	            type: _actionNames.ADD_LAYOUT,
	            id: (0, _uuid.generate)(),
	            name: name,
	            widgets: widgets
	        });
	
	        dispatch(setCurrentLayout(addLayout.id));
	    };
	}
	
	function updateLayout(id, widgets) {
	    return {
	        type: _actionNames.UPDATE_LAYOUT,
	        id: id,
	        widgets: widgets
	    };
	}
	
	function deleteLayout(id) {
	    return {
	        type: _actionNames.DELETE_LAYOUT,
	        id: id
	    };
	}
	
	function setCurrentLayout(id) {
	    return {
	        type: _actionNames.SET_CURRENT_LAYOUT,
	        id: id
	    };
	}
	
	function loadEmptyLayout() {
	    return {
	        type: _actionNames.LOAD_LAYOUT,
	        layout: {
	            id: "empty",
	            widgets: {}
	        }
	    };
	}
	
	function loadLayout(id) {
	    return function (dispatch, getState) {
	        var state = getState();
	
	        var layout = state.layouts[id];
	        // Bad hack to force the grid layout to update correctly
	        dispatch(loadEmptyLayout());
	
	        if (!layout) {
	            return;
	        }
	        setTimeout(function () {
	            dispatch(setCurrentLayout(layout.id));
	            dispatch({
	                type: _actionNames.LOAD_LAYOUT,
	                layout: layout
	            });
	        }, 0);
	    };
	}
	
	var layoutCrudReducer = (0, _reducer.genCrudReducer)([_actionNames.ADD_LAYOUT, _actionNames.DELETE_LAYOUT], layout);
	function layouts() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialLayouts : arguments[0];
	    var action = arguments[1];
	
	    state = layoutCrudReducer(state, action);
	    switch (action.type) {
	        default:
	            return state;
	    }
	}
	
	function layout(state, action) {
	    switch (action.type) {
	        case _actionNames.ADD_LAYOUT:
	            return {
	                id: action.id,
	                name: action.name,
	                widgets: action.widgets
	            };
	        case _actionNames.UPDATE_LAYOUT:
	            return _extends({}, state, {
	                widgets: action.widgets
	            });
	        default:
	            return state;
	    }
	}
	
	function currentLayout() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case _actionNames.SET_CURRENT_LAYOUT:
	            return _extends({}, state, {
	                id: action.id
	            });
	        case _actionNames.DELETE_LAYOUT:
	            if (action.id == state.id) {
	                return _extends({}, state, {
	                    id: undefined
	                });
	            }
	            return state;
	        default:
	            return state;
	    }
	}

/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.unshiftIfNotExists = unshiftIfNotExists;
	
	var _react = __webpack_require__(219);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _modalDialogUi = __webpack_require__(247);
	
	var _modalDialogUi2 = _interopRequireDefault(_modalDialogUi);
	
	var _widgetPlugins = __webpack_require__(252);
	
	var WidgetPlugins = _interopRequireWildcard(_widgetPlugins);
	
	var _widgetConfig = __webpack_require__(245);
	
	var WidgetConfig = _interopRequireWildcard(_widgetConfig);
	
	var _reactRedux = __webpack_require__(225);
	
	var _settingsForm = __webpack_require__(277);
	
	var _settingsForm2 = _interopRequireDefault(_settingsForm);
	
	var _reduxForm = __webpack_require__(278);
	
	var _modalDialogIds = __webpack_require__(249);
	
	var ModalIds = _interopRequireWildcard(_modalDialogIds);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DIALOG_ID = ModalIds.WIDGET_CONFIG;
	var FORM_ID = "widget-settings-form";
	
	function unshiftIfNotExists(array /*:Array*/, element) {
	    var isEqual = arguments.length <= 2 || arguments[2] === undefined ? function (a, b) {
	        return a.id == b.id;
	    } : arguments[2];
	
	    if (array.find(function (e) {
	        return isEqual(e, element);
	    }) == undefined) {
	        array.unshift(element);
	    }
	}
	
	var WidgetConfigModal = function (_React$Component) {
	    _inherits(WidgetConfigModal, _React$Component);
	
	    function WidgetConfigModal(props) {
	        _classCallCheck(this, WidgetConfigModal);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(WidgetConfigModal).call(this, props));
	    }
	
	    _createClass(WidgetConfigModal, [{
	        key: "onSubmit",
	        value: function onSubmit(formData, dispatch) {
	            dispatch(WidgetConfig.createOrUpdateWidget(this.props.widgetId, this.props.widgetType, formData));
	            return true;
	        }
	    }, {
	        key: "resetForm",
	        value: function resetForm() {
	            this.props.resetForm(FORM_ID);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var props = this.props;
	            var actions = [{
	                className: "ui right button",
	                label: "Reset",
	                onClick: function onClick() {
	                    _this2.resetForm();
	                    return false;
	                }
	            }, {
	                className: "ui right red button",
	                label: "Cancel",
	                onClick: function onClick() {
	                    _this2.resetForm();
	                    return true;
	                }
	            }, {
	                className: "ui right labeled icon positive button",
	                iconClass: "save icon",
	                label: "Save",
	                onClick: function onClick() {
	                    var success = _this2.refs.form.submit();
	                    if (success) _this2.resetForm();
	                    return success;
	                }
	            }];
	
	            //const selectedWidgetPlugin = WidgetPlugins.getPlugin(this.props.widgetType) || {settings: []};
	            var selectedWidgetPlugin = props.widgetPlugin;
	
	            // TODO: Get typeInfo from selectedWidgetPlugin.typeInfo
	            if (!selectedWidgetPlugin) {
	                // TODO: Find a better (more generic way) to deal with uninitialized data for modals
	                // TODO: The widgetConfig in the state is a bad idea. Solve this via state.modalDialog.data
	                // This is needed for the very first time the page is rendered and the selected widget type is undefined
	                return _react2.default.createElement(
	                    _modalDialogUi2.default,
	                    { id: DIALOG_ID,
	                        title: "Configure " + props.widgetType + " Widget",
	                        actions: actions
	                    },
	                    _react2.default.createElement(
	                        "div",
	                        null,
	                        "Unknown WidgetType: ",
	                        props.widgetType
	                    )
	                );
	            }
	
	            // Add additional fields
	            var settings = selectedWidgetPlugin ? [].concat(_toConsumableArray(selectedWidgetPlugin.typeInfo.settings)) : [];
	
	            unshiftIfNotExists(settings, {
	                id: 'name',
	                name: 'Name',
	                type: 'string',
	                defaultValue: ""
	            });
	
	            var fields = settings.map(function (setting) {
	                return setting.id;
	            });
	            var initialValues = settings.reduce(function (initialValues, setting) {
	                if (setting.defaultValue !== undefined) {
	                    initialValues[setting.id] = setting.defaultValue;
	                }
	                return initialValues;
	            }, {});
	            // Overwrite with current widget props
	            initialValues = _extends({}, initialValues, props.widgetProps);
	
	            return _react2.default.createElement(
	                _modalDialogUi2.default,
	                { id: DIALOG_ID,
	                    title: "Configure " + props.widgetType + " Widget",
	                    actions: actions
	                },
	                _react2.default.createElement(
	                    "div",
	                    { className: "ui one column grid" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "column" },
	                        selectedWidgetPlugin.description ? _react2.default.createElement(
	                            "div",
	                            { className: "ui icon message" },
	                            _react2.default.createElement("i", { className: "idea icon" }),
	                            _react2.default.createElement(
	                                "div",
	                                { className: "content" },
	                                selectedWidgetPlugin.description
	                            )
	                        ) : null,
	                        _react2.default.createElement(_settingsForm2.default, { ref: "form",
	                            form: FORM_ID,
	                            settings: settings,
	                            onSubmit: this.onSubmit.bind(this),
	                            fields: [].concat(_toConsumableArray(fields)),
	                            initialValues: initialValues
	                        })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return WidgetConfigModal;
	}(_react2.default.Component);
	
	WidgetConfigModal.propTypes = {
	    widgetId: _react.PropTypes.string,
	    resetForm: _react.PropTypes.func.isRequired, // reset
	    widgetType: _react.PropTypes.string,
	    widgetProps: _react.PropTypes.object.isRequired,
	    widgetPlugin: WidgetPlugins.widgetPluginType
	};
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        widgetId: state.widgetConfig.id,
	        widgetType: state.widgetConfig.type,
	        widgetProps: state.widgetConfig.props,
	        widgetPlugin: state.widgetPlugins[state.widgetConfig.type]
	    };
	}, function (dispatch) {
	    return {
	        resetForm: function resetForm(id) {
	            return dispatch((0, _reduxForm.reset)(id));
	        }
	    };
	})(WidgetConfigModal);

/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(219);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(225);
	
	var _elements = __webpack_require__(248);
	
	var ui = _interopRequireWildcard(_elements);
	
	var _reduxForm = __webpack_require__(278);
	
	var _collection = __webpack_require__(279);
	
	var _lodash = __webpack_require__(42);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SettingsForm = function (_React$Component) {
	    _inherits(SettingsForm, _React$Component);
	
	    function SettingsForm() {
	        _classCallCheck(this, SettingsForm);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(SettingsForm).apply(this, arguments));
	    }
	
	    _createClass(SettingsForm, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._initSemanticUi();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this._initSemanticUi();
	        }
	    }, {
	        key: '_initSemanticUi',
	        value: function _initSemanticUi() {
	            $('.icon.help.circle').popup({
	                position: "top left",
	                offset: -10
	            });
	            $('.ui.checkbox').checkbox();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = this.props;
	            var fields = props.fields;
	
	            return _react2.default.createElement(
	                'form',
	                { className: 'ui form' },
	                (0, _collection.chunk)(this.props.settings, 1).map(function (chunk) {
	                    return _react2.default.createElement(
	                        'div',
	                        { key: chunk[0].id, className: 'field' },
	                        chunk.map(function (setting) {
	                            return _react2.default.createElement(Field, _extends({ key: setting.id }, setting, { field: fields[setting.id] }));
	                        })
	                    );
	                })
	            );
	        }
	    }]);
	
	    return SettingsForm;
	}(_react2.default.Component);
	
	SettingsForm.propTypes = {
	    settings: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	        id: _react.PropTypes.string.isRequired,
	        type: _react.PropTypes.string.isRequired,
	        name: _react.PropTypes.string.isRequired
	    })).isRequired
	};
	
	exports.default = (0, _reduxForm.reduxForm)({})(SettingsForm);
	
	
	function Field(props) {
	    return _react2.default.createElement(
	        'div',
	        { className: 'field' },
	        _react2.default.createElement(
	            'label',
	            null,
	            props.name,
	            props.description && props.type !== 'boolean' ? _react2.default.createElement(ui.Icon, { type: 'help circle', 'data-content': props.description }) : null
	        ),
	        _react2.default.createElement(SettingsInput, props)
	    );
	}
	
	Field.propTypes = {
	    field: _react.PropTypes.object.isRequired, // redux-form field info
	    name: _react.PropTypes.string.isRequired,
	    type: _react.PropTypes.string.isRequired,
	    description: _react.PropTypes.string
	};
	
	function SettingsInput(props) {
	    switch (props.type) {
	        case "text":
	            return _react2.default.createElement('textarea', _extends({ rows: '3', placeholder: props.description }, props.field));
	        case "string":
	            return _react2.default.createElement('input', _extends({ placeholder: props.description }, props.field));
	        case "json":
	            // TODO: Offer better editor + validation
	            return _react2.default.createElement('textarea', _extends({ rows: '3', placeholder: props.description }, props.field));
	        case "number":
	            // TODO: Validate numbers, distinct between integers and decimals?
	            return _react2.default.createElement('input', _extends({ type: 'number', min: props.min, max: props.max,
	                placeholder: props.description }, props.field));
	        case "boolean":
	            return _react2.default.createElement('input', _extends({ type: 'checkbox' }, props.field));
	        case "option":
	            return _react2.default.createElement(
	                'select',
	                _extends({ className: 'ui fluid dropdown' }, props.field),
	                _react2.default.createElement(
	                    'option',
	                    null,
	                    "Select " + props.name + " ..."
	                ),
	                props.options.map(function (option) {
	                    var optionValue = _lodash2.default.isObject(option) ? option.value : option;
	                    var optionName = _lodash2.default.isObject(option) ? option.name : option;
	                    return _react2.default.createElement(
	                        'option',
	                        { key: optionValue, value: optionValue },
	                        optionName
	                    );
	                })
	            );
	        case "datasource":
	            return _react2.default.createElement(DatasourceInputContainer, props);
	        default:
	            console.error("Unknown type for settings field with id '" + props.id + "': " + props.type);
	            return _react2.default.createElement('input', { placeholder: props.description, readonly: true, value: "Unknown field type: " + props.type });
	    }
	}
	
	SettingsInput.propTypes = {
	    field: _react.PropTypes.object.isRequired, // redux-form field info
	    type: _react.PropTypes.string.isRequired,
	    id: _react.PropTypes.string.isRequired,
	    name: _react.PropTypes.string.isRequired,
	    description: _react.PropTypes.string,
	    min: _react.PropTypes.number, // for number
	    max: _react.PropTypes.number, // for number
	    options: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf( // For option
	    _react.PropTypes.shape({
	        name: _react.PropTypes.string,
	        value: _react.PropTypes.string.isRequired
	    }.isRequired)).isRequired, _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired])
	};
	
	var DatasourceInput = function DatasourceInput(props) {
	    var datasources = props.datasources;
	
	    return _react2.default.createElement(
	        'select',
	        _extends({ className: 'ui fluid dropdown' }, props.field),
	        _react2.default.createElement(
	            'option',
	            null,
	            "Select " + props.name + " ..."
	        ),
	        _lodash2.default.toPairs(datasources).map(function (_ref) {
	            var _ref2 = _slicedToArray(_ref, 2);
	
	            var id = _ref2[0];
	            var ds = _ref2[1];
	
	            return _react2.default.createElement(
	                'option',
	                { key: id, value: id },
	                ds.props.name + " (" + ds.type + ")"
	            );
	        })
	    );
	};
	
	DatasourceInput.propTypes = {
	    datasources: _react.PropTypes.object.isRequired,
	    field: _react.PropTypes.object.isRequired,
	    name: _react.PropTypes.string.isRequired
	};
	
	var DatasourceInputContainer = (0, _reactRedux.connect)(function (state) {
	    return {
	        datasources: state.datasources
	    };
	})(DatasourceInput);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(55)))

/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.chunk = chunk;
	
	var _lodash = __webpack_require__(42);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function chunk(array /*:array*/, chunkSize /*:number*/, handle /*:Function*/) /*: Array*/ {
	    var i = void 0,
	        j = void 0,
	        chunk = void 0;
	    var chunkNum = 0;
	    var chunks = [];
	
	    if (!array) {
	        return chunks;
	    }
	    for (i = 0, j = array.length; i < j; i += chunkSize) {
	        chunk = array.slice(i, i + chunkSize);
	        if (handle) {
	            handle(chunk, chunkNum);
	        }
	        chunkNum++;
	        chunks.push(chunk);
	    }
	    return chunks;
	}

/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(219);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(225);
	
	var _import = __webpack_require__(281);
	
	var Import = _interopRequireWildcard(_import);
	
	var _modalDialog = __webpack_require__(247);
	
	var _modalDialog2 = _interopRequireDefault(_modalDialog);
	
	var _modalDialog3 = __webpack_require__(246);
	
	var Modal = _interopRequireWildcard(_modalDialog3);
	
	var _modalDialogIds = __webpack_require__(249);
	
	var ModalIds = _interopRequireWildcard(_modalDialogIds);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DashboardTopNavItem = function DashboardTopNavItem(props) {
	    return _react2.default.createElement(
	        'div',
	        { className: 'ui simple dropdown item' },
	        'Board',
	        _react2.default.createElement('i', { className: 'dropdown icon' }),
	        _react2.default.createElement(
	            'div',
	            { className: 'ui menu' },
	            _react2.default.createElement(
	                'a',
	                { className: 'item', onClick: function onClick() {
	                        return props.showModal(ModalIds.DASHBOARD_IMPORT_EXPORT);
	                    } },
	                _react2.default.createElement('i', { className: 'folder open outline icon' }),
	                'Import / Export'
	            )
	        )
	    );
	};
	
	DashboardTopNavItem.propTypes = {
	    showModal: _react.PropTypes.func.isRequired
	};
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        state: state
	    };
	}, function (dispatch) {
	    return {
	        showModal: function showModal(id) {
	            return dispatch(Modal.showModal(id));
	        }
	    };
	})(DashboardTopNavItem);

/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.serialize = serialize;
	exports.importReducer = importReducer;
	exports.deserialize = deserialize;
	exports.doImport = doImport;
	
	var _actionNames = __webpack_require__(241);
	
	var Action = _interopRequireWildcard(_actionNames);
	
	var _layouts = __webpack_require__(275);
	
	var _plugins = __webpack_require__(282);
	
	var Plugins = _interopRequireWildcard(_plugins);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * To extend the import/export by another property you just need to add the property to the exported data
	 * See: serialize()
	 *
	 * If there are any action needed after a property got imported, call them after the import.
	 * See: afterImport()
	 */
	
	function serialize(state) {
	    return JSON.stringify({
	        widgets: state.widgets,
	        datasources: state.datasources,
	        plugins: state.plugins
	    });
	}
	
	function afterImport(dispatch, getState) {
	    dispatch(Plugins.initializeExternalPlugins());
	}
	
	function importReducer(state, action) {
	    switch (action.type) {
	        case Action.DASHBOARD_IMPORT:
	            var newState = _extends({}, state, action.state);
	            console.log("new State:", state, action.state, newState);
	            return newState;
	        default:
	            return state;
	    }
	}
	
	function deserialize(data) {
	    if (typeof data === "string") {
	        return JSON.parse(data);
	    } else {
	        throw new Error("Dashboard data for import must be of type string but is " + (typeof data === "undefined" ? "undefined" : _typeof(data)));
	    }
	}
	
	function doImport(data) {
	    var state = deserialize(data);
	    return function (dispatch, getState) {
	        // Bad hack to force the grid layout to update correctly
	        dispatch((0, _layouts.loadEmptyLayout)());
	        setTimeout(function () {
	            dispatch({
	                type: _actionNames.DASHBOARD_IMPORT,
	                state: state
	            });
	            afterImport(dispatch, getState);
	        }, 0);
	    };
	}

/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.loadPlugin = loadPlugin;
	exports.loadPluginFromUrl = loadPluginFromUrl;
	exports.initializeExternalPlugins = initializeExternalPlugins;
	exports.addPlugin = addPlugin;
	
	var _actionNames = __webpack_require__(241);
	
	var Action = _interopRequireWildcard(_actionNames);
	
	var _reducer = __webpack_require__(250);
	
	var _datasourcePlugins = __webpack_require__(283);
	
	var DatasourcePlugins = _interopRequireWildcard(_datasourcePlugins);
	
	var _widgetPlugins = __webpack_require__(252);
	
	var WidgetPlugins = _interopRequireWildcard(_widgetPlugins);
	
	var _loadjs = __webpack_require__(284);
	
	var _loadjs2 = _interopRequireDefault(_loadjs);
	
	var _pluginCache = __webpack_require__(285);
	
	var PluginCache = _interopRequireWildcard(_pluginCache);
	
	var _lodash = __webpack_require__(42);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _urijs = __webpack_require__(286);
	
	var _urijs2 = _interopRequireDefault(_urijs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function loadPlugin(plugin) {
	    return addPlugin(plugin);
	}
	
	function loadPluginFromUrl(url) {
	    return function (dispatch) {
	        (0, _loadjs2.default)([url], { success: function success() {
	                return onScriptLoaded(url, dispatch);
	            } });
	    };
	}
	
	function onScriptLoaded(url, dispatch) {
	    if (PluginCache.hasPlugin()) {
	        var paths;
	
	        (function () {
	            var plugin = PluginCache.popLoadedPlugin();
	
	            var dependencies = plugin.TYPE_INFO.dependencies;
	            if (_lodash2.default.isArray(dependencies)) {
	                paths = dependencies.map(function (dependency) {
	                    return (0, _urijs2.default)(dependency).absoluteTo(url).toString();
	                });
	
	
	                console.log("Loading Dependencies for Plugin", paths);
	
	                // TODO: Load Plugins into a sandbox / iframe, and pass as "deps" object
	                // Let's wait for the dependency hell before introducing this.
	                // Until then we can try to just provide shared libs by the Dashboard, e.g. jQuery, d3, etc.
	                // That should avoid that people add too many custom libs.
	                /*sandie([dependencies],
	                 function (deps) {
	                 plugin.deps = deps;
	                 console.log("deps loaded", deps);
	                 dispatch(addPlugin(plugin, url));
	                 }
	                 );  */
	
	                (0, _loadjs2.default)(paths, {
	                    success: function success() {
	                        dispatch(addPlugin(plugin, url));
	                    }
	                });
	            } else {
	                dispatch(addPlugin(plugin, url));
	            }
	        })();
	    } else {
	        console.error("Failed to load Plugin. Make sure it called window.iotDashboardApi.register***Plugin from url " + url);
	    }
	}
	
	function initializeExternalPlugins() {
	    return function (dispatch, getState) {
	        var state = getState();
	        var plugins = _lodash2.default.valuesIn(state.plugins);
	
	        plugins.filter(function (pluginState) {
	            return !_lodash2.default.isEmpty(pluginState.url);
	        }).forEach(function (plugin) {
	            dispatch(loadPluginFromUrl(plugin.url));
	        });
	    };
	}
	
	function registerPlugin(plugin) {
	    var type = plugin.TYPE_INFO.type;
	    if (plugin.Datasource) {
	        var dsPlugin = DatasourcePlugins.pluginRegistry.getPlugin(type);
	        if (!dsPlugin) {
	            DatasourcePlugins.pluginRegistry.register(plugin);
	        } else {
	            console.warn("Plugin of type " + type + " already loaded:", dsPlugin, ". Tried to load: ", plugin);
	        }
	    } else if (plugin.Widget) {
	        var widgetPlugin = WidgetPlugins.pluginRegistry.getPlugin(type);
	        if (!widgetPlugin) {
	            WidgetPlugins.pluginRegistry.register(plugin);
	        } else {
	            console.warn("Plugin of type " + type + " already loaded:", widgetPlugin, ". Tried to load: ", plugin);
	        }
	    } else {
	        throw new Error("Plugin neither defines a Datasource nor a Widget.", plugin);
	    }
	}
	
	// Add plugin to store and register it in the PluginRegistry
	function addPlugin(plugin) {
	    var url = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	    console.log("Adding plugin from " + url, plugin);
	
	    return function (dispatch, getState) {
	        var state = getState();
	        var plugins = state.plugins;
	
	        var existentPluginState = _lodash2.default.valuesIn(plugins).find(function (pluginState) {
	            return plugin.TYPE_INFO.type === pluginState.pluginType;
	        });
	
	        if (existentPluginState) {
	            registerPlugin(plugin);
	            return;
	        }
	
	        var actionType = "unknown-add-widget-action";
	        if (plugin.Datasource !== undefined) {
	            actionType = Action.ADD_DATASOURCE_PLUGIN;
	        }
	        if (plugin.Widget !== undefined) {
	            actionType = Action.ADD_WIDGET_PLUGIN;
	        }
	
	        // TODO: Just put the raw plugin + url here and let the reducer do the logic
	        dispatch({
	            type: actionType,
	            id: plugin.TYPE_INFO.type, // needed for crud reducer
	            typeInfo: plugin.TYPE_INFO,
	            url: url
	        });
	        // TODO: Maybe use redux sideeffect and move this call to the reducer
	        registerPlugin(plugin);
	    };
	}

/***/ },

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.pluginRegistry = exports.DatasourcePluginRegistry = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.unloadPlugin = unloadPlugin;
	exports.datasourcePlugins = datasourcePlugins;
	
	var _datasourcePlugin = __webpack_require__(255);
	
	var DsPlugin = _interopRequireWildcard(_datasourcePlugin);
	
	var _pluginRegistry = __webpack_require__(254);
	
	var _pluginRegistry2 = _interopRequireDefault(_pluginRegistry);
	
	var _actionNames = __webpack_require__(241);
	
	var Action = _interopRequireWildcard(_actionNames);
	
	var _reducer = __webpack_require__(250);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// TODO: Later load all plugins from external URL's ?
	var initialState = {};
	
	var DatasourcePluginRegistry = exports.DatasourcePluginRegistry = function (_PluginRegistry) {
	    _inherits(DatasourcePluginRegistry, _PluginRegistry);
	
	    function DatasourcePluginRegistry() {
	        _classCallCheck(this, DatasourcePluginRegistry);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(DatasourcePluginRegistry).apply(this, arguments));
	    }
	
	    _createClass(DatasourcePluginRegistry, [{
	        key: 'createPluginFromModule',
	        value: function createPluginFromModule(module) {
	            return new DsPlugin.DataSourcePlugin(module, this.store);
	        }
	    }]);
	
	    return DatasourcePluginRegistry;
	}(_pluginRegistry2.default);
	
	var pluginRegistry = exports.pluginRegistry = new DatasourcePluginRegistry();
	
	function unloadPlugin(type) {
	    return function (dispatch) {
	        var dsFactory = pluginRegistry.getPlugin(type);
	        dsFactory.dispose();
	        dispatch(deletePlugin(type));
	    };
	}
	
	function deletePlugin(type) {
	    return {
	        type: Action.DELETE_DATASOURCE_PLUGIN,
	        id: type
	    };
	}
	
	var pluginsCrudReducer = (0, _reducer.genCrudReducer)([Action.ADD_DATASOURCE_PLUGIN, Action.DELETE_DATASOURCE_PLUGIN], datasourcePlugin);
	function datasourcePlugins() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	
	    state = pluginsCrudReducer(state, action);
	    switch (action.type) {
	        default:
	            return state;
	    }
	}
	
	function datasourcePlugin(state, action) {
	    switch (action.type) {
	        case Action.ADD_DATASOURCE_PLUGIN:
	            if (!action.typeInfo.type) {
	                // TODO: Catch this earlier
	                throw new Error("A Plugin needs a type name.");
	            }
	
	            return {
	                id: action.typeInfo.type,
	                url: action.url,
	                typeInfo: action.typeInfo,
	                isDatasource: action.pluginType === "datasource",
	                isWidget: action.pluginType === "widget"
	            };
	        default:
	            return state;
	    }
	}

/***/ },

/***/ 285:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.popLoadedPlugin = popLoadedPlugin;
	exports.hasPlugin = hasPlugin;
	exports.registerDatasourcePlugin = registerDatasourcePlugin;
	exports.registerWidgetPlugin = registerWidgetPlugin;
	/**
	 * When a Plugin is loaded via the UI, an action is called to do so.
	 * The action will load an external script, containing the plugin code, which calles one of the API methods here.
	 * By calling the API method the plugin is put to the pluginCache where it can be fetched by the application to initialize it
	 *
	 * The application can not call the Plugin since it could (and should) be wrapped into a module.
	 * @type {null}
	 */
	
	var pluginCache = null;
	
	function popLoadedPlugin() {
	    var plugin = pluginCache;
	    pluginCache = null;
	    return plugin;
	}
	
	function hasPlugin() {
	    return pluginCache !== null;
	}
	
	function registerDatasourcePlugin(typeInfo, Datasource) {
	    console.assert(!hasPlugin(), "Plugin must be finished loading before another can be registered", pluginCache);
	    pluginCache = {
	        TYPE_INFO: typeInfo,
	        Datasource: Datasource
	    };
	}
	
	function registerWidgetPlugin(typeInfo, Widget) {
	    console.assert(!hasPlugin(), "Plugin must be finished loading before another can be registered", pluginCache);
	    pluginCache = {
	        TYPE_INFO: typeInfo,
	        Widget: Widget
	    };
	}

/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(219);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(225);
	
	var _import = __webpack_require__(281);
	
	var Import = _interopRequireWildcard(_import);
	
	var _modalDialogUi = __webpack_require__(247);
	
	var _modalDialogUi2 = _interopRequireDefault(_modalDialogUi);
	
	var _modalDialogIds = __webpack_require__(249);
	
	var ModalIds = _interopRequireWildcard(_modalDialogIds);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ImportExportDialog = function (_React$Component) {
	    _inherits(ImportExportDialog, _React$Component);
	
	    function ImportExportDialog(props) {
	        _classCallCheck(this, ImportExportDialog);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImportExportDialog).call(this, props));
	
	        _this.state = { state: null };
	        return _this;
	    }
	
	    _createClass(ImportExportDialog, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            //this.refs.data.value = Import.serialize(nextProps.state);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: '_loadData',
	        value: function _loadData() {
	            this.refs.data.value = Import.serialize(this.props.state);
	            this.refs.data.focus();
	            this.refs.data.select();
	        }
	    }, {
	        key: '_clearData',
	        value: function _clearData() {
	            this.refs.data.value = "";
	            this.refs.data.focus();
	            this.refs.data.select();
	        }
	    }, {
	        key: '_exportToClipboard',
	        value: function _exportToClipboard() {
	            this.refs.data.focus();
	            this.refs.data.select();
	
	            try {
	                var successful = document.execCommand('copy');
	                var msg = successful ? 'successful' : 'unsuccessful';
	                console.log('Copying text command was ' + msg);
	            } catch (err) {
	                alert('Oops, unable to copy');
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var props = this.props;
	            var actions = [{
	                className: "ui right black button",
	                label: "Close",
	                onClick: function onClick() {
	                    return true;
	                }
	            }, {
	                className: "ui right labeled icon positive button",
	                iconClass: "folder open icon",
	                label: "Import",
	                onClick: function onClick() {
	                    props.doImport(_this2.refs.data.value);
	                    return true;
	                }
	            }];
	
	            return _react2.default.createElement(
	                _modalDialogUi2.default,
	                { id: ModalIds.DASHBOARD_IMPORT_EXPORT,
	                    title: 'Import / Export Dashboard',
	                    actions: actions
	                },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'ui one column grid' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column' },
	                        _react2.default.createElement(
	                            'button',
	                            { className: 'ui compact labeled icon button', onClick: this._loadData.bind(this) },
	                            _react2.default.createElement('i', { className: 'refresh icon' }),
	                            'Load Data'
	                        ),
	                        _react2.default.createElement(
	                            'button',
	                            { className: 'ui compact labeled icon button', onClick: this._exportToClipboard.bind(this) },
	                            _react2.default.createElement('i', { className: 'upload icon' }),
	                            'Copy to Clipboard'
	                        ),
	                        _react2.default.createElement(
	                            'button',
	                            { className: 'ui compact labeled icon button', onClick: this._clearData.bind(this) },
	                            _react2.default.createElement('i', { className: 'erase icon' }),
	                            'Clear Data'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column' },
	                        _react2.default.createElement(
	                            'form',
	                            { className: 'ui form' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'field' },
	                                _react2.default.createElement(
	                                    'label',
	                                    null,
	                                    'Data'
	                                ),
	                                _react2.default.createElement('textarea', { ref: 'data', rows: '10', onFocus: function onFocus(e) {
	                                        return e.target.select();
	                                    },
	                                    placeholder: 'Click "Load Data" to get data for export or paste your data here ...' })
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return ImportExportDialog;
	}(_react2.default.Component);
	
	ImportExportDialog.propTypes = {
	    state: _react.PropTypes.object,
	    doImport: _react.PropTypes.func.isRequired
	};
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        state: state
	    };
	}, function (dispatch) {
	    return {
	        doImport: function doImport(state) {
	            return dispatch(Import.doImport(state));
	        }
	    };
	})(ImportExportDialog);

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.unshiftIfNotExists = unshiftIfNotExists;
	
	var _react = __webpack_require__(219);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _modalDialogUi = __webpack_require__(247);
	
	var _modalDialogUi2 = _interopRequireDefault(_modalDialogUi);
	
	var _datasource = __webpack_require__(292);
	
	var Datasource = _interopRequireWildcard(_datasource);
	
	var _reactRedux = __webpack_require__(225);
	
	var _lodash = __webpack_require__(42);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _elements = __webpack_require__(248);
	
	var ui = _interopRequireWildcard(_elements);
	
	var _settingsForm = __webpack_require__(277);
	
	var _settingsForm2 = _interopRequireDefault(_settingsForm);
	
	var _reduxForm = __webpack_require__(278);
	
	var _modalDialogIds = __webpack_require__(249);
	
	var ModalIds = _interopRequireWildcard(_modalDialogIds);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DIALOG_ID = ModalIds.DATASOURCE_CONFIG;
	var FORM_ID = "datasource-settings-form";
	
	function unshiftIfNotExists(array /*:Array*/, element) {
	    var isEqual = arguments.length <= 2 || arguments[2] === undefined ? function (a, b) {
	        return a.id == b.id;
	    } : arguments[2];
	
	    if (array.find(function (e) {
	        return isEqual(e, element);
	    }) == undefined) {
	        array.unshift(element);
	    }
	}
	
	var DatasourceConfigModal = function (_React$Component) {
	    _inherits(DatasourceConfigModal, _React$Component);
	
	    function DatasourceConfigModal(props) {
	        _classCallCheck(this, DatasourceConfigModal);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DatasourceConfigModal).call(this, props));
	
	        _this.state = {
	            selectedType: ''
	        };
	        return _this;
	    }
	
	    _createClass(DatasourceConfigModal, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.dialogData.datasource) {
	                var selectedType = nextProps.dialogData.datasource.type;
	                this.state = {
	                    selectedType: selectedType
	                };
	            }
	        }
	    }, {
	        key: 'onSubmit',
	        value: function onSubmit(formData, dispatch) {
	            var id = undefined;
	            if (this._isEditing()) {
	                id = this._getEditingDatasource().id;
	            }
	            this.props.createOrUpdateDatasource(id, this.state.selectedType, formData);
	            return true;
	        }
	    }, {
	        key: 'resetForm',
	        value: function resetForm() {
	            this.props.resetForm(FORM_ID);
	        }
	    }, {
	        key: '_isEditing',
	        value: function _isEditing() {
	            return !!this.props.dialogData.datasource;
	        }
	    }, {
	        key: '_getEditingDatasource',
	        value: function _getEditingDatasource() {
	            return this.props.dialogData.datasource;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var props = this.props;
	            var actions = [{
	                className: "ui right button",
	                label: "Reset",
	                onClick: function onClick() {
	                    _this2.resetForm();
	                    return false;
	                }
	            }, {
	                className: "ui right red button",
	                label: "Cancel",
	                onClick: function onClick() {
	                    _this2.resetForm();
	                    return true;
	                }
	            }, {
	                className: "ui right labeled icon positive button",
	                iconClass: "save icon",
	                label: this._isEditing() ? "Save" : "Create",
	                onClick: function onClick() {
	                    var success = _this2.refs.form.submit();
	                    if (success) _this2.resetForm();
	                    return success;
	                }
	            }];
	
	            var selectedSource = void 0;
	            if (this.state.selectedType) {
	                selectedSource = props.datasourcePlugins[this.state.selectedType];
	            }
	
	            var settings = [];
	            if (selectedSource && selectedSource.typeInfo.settings) {
	                settings = [].concat(_toConsumableArray(selectedSource.typeInfo.settings));
	            } else {
	                settings = [];
	            }
	
	            unshiftIfNotExists(settings, {
	                id: 'name',
	                name: 'Name',
	                type: 'string',
	                defaultValue: ""
	            });
	
	            var fields = settings.map(function (setting) {
	                return setting.id;
	            });
	            var initialValues = {};
	            if (this._isEditing()) {
	                initialValues = _extends({}, this._getEditingDatasource().props);
	            } else {
	                initialValues = settings.reduce(function (initialValues, setting) {
	                    if (setting.defaultValue !== undefined) {
	                        initialValues[setting.id] = setting.defaultValue;
	                    }
	                    return initialValues;
	                }, {});
	            }
	
	            var title = "Create Datasource";
	            if (this._isEditing()) {
	                title = "Edit Datasource";
	            }
	
	            return _react2.default.createElement(
	                _modalDialogUi2.default,
	                { id: DIALOG_ID,
	                    title: title,
	                    actions: actions
	                },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'ui one column grid' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'field' },
	                            _react2.default.createElement(
	                                'label',
	                                null,
	                                'Type'
	                            ),
	                            _react2.default.createElement(
	                                'select',
	                                _extends({ className: 'ui fluid dropdown', name: 'type', value: this.state.selectedType,
	                                    onChange: function onChange(e) {
	                                        _this2.setState({ selectedType: e.target.value });
	                                    }
	                                }, fields.type),
	                                _react2.default.createElement(
	                                    'option',
	                                    { key: 'none', value: '' },
	                                    'Select Type...'
	                                ),
	                                _lodash2.default.valuesIn(props.datasourcePlugins).map(function (dsPlugin) {
	                                    return _react2.default.createElement(
	                                        'option',
	                                        { key: dsPlugin.id, value: dsPlugin.id },
	                                        dsPlugin.typeInfo.name
	                                    );
	                                })
	                            )
	                        ),
	                        _react2.default.createElement(ui.Divider, null),
	                        _react2.default.createElement(_settingsForm2.default, { ref: 'form',
	                            form: FORM_ID,
	                            onSubmit: this.onSubmit.bind(this),
	                            fields: ["type", "name", "interval"].concat(_toConsumableArray(fields)),
	                            settings: settings,
	                            initialValues: initialValues
	                        })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return DatasourceConfigModal;
	}(_react2.default.Component);
	
	DatasourceConfigModal.propTypes = {
	    createOrUpdateDatasource: _react.PropTypes.func.isRequired,
	    resetForm: _react.PropTypes.func.isRequired,
	    dialogData: _react.PropTypes.object.isRequired,
	    datasourcePlugins: _react.PropTypes.object.isRequired
	};
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        dialogData: state.modalDialog.data || {},
	        datasourcePlugins: state.datasourcePlugins
	    };
	}, function (dispatch) {
	    return {
	        resetForm: function resetForm(id) {
	            return dispatch((0, _reduxForm.reset)(id));
	        },
	        createOrUpdateDatasource: function createOrUpdateDatasource(id, type, dsProps) {
	            dispatch(Datasource.createOrUpdateDatasource(id, type, dsProps));
	        }
	    };
	})(DatasourceConfigModal);

/***/ },

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.createOrUpdateDatasource = createOrUpdateDatasource;
	exports.addDatasource = addDatasource;
	exports.updateDatasourceProps = updateDatasourceProps;
	exports.startCreateDatasource = startCreateDatasource;
	exports.startEditDatasource = startEditDatasource;
	exports.deleteDatasource = deleteDatasource;
	exports.setDatasourceData = setDatasourceData;
	exports.appendDatasourceData = appendDatasourceData;
	exports.fetchDatasourceData = fetchDatasourceData;
	exports.datasources = datasources;
	
	var _datasourcePlugins = __webpack_require__(283);
	
	var DatasourcePlugins = _interopRequireWildcard(_datasourcePlugins);
	
	var _reducer = __webpack_require__(250);
	
	var _actionNames = __webpack_require__(241);
	
	var Action = _interopRequireWildcard(_actionNames);
	
	var _uuid = __webpack_require__(244);
	
	var Uuid = _interopRequireWildcard(_uuid);
	
	var _lodash = __webpack_require__(42);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _modalDialogIds = __webpack_require__(249);
	
	var ModalIds = _interopRequireWildcard(_modalDialogIds);
	
	var _modalDialog = __webpack_require__(246);
	
	var Modal = _interopRequireWildcard(_modalDialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var initialDatasources = {
	    "initial_random_source": {
	        id: "initial_random_source",
	        type: "random",
	        props: {
	            name: "Random",
	            min: 10,
	            max: 20,
	            maxValues: 20
	        }
	    }
	};
	
	function createOrUpdateDatasource(id, type, props) {
	    return function (dispatch, getState) {
	        var state = getState();
	
	        var dsState = state.datasources[id];
	
	        if (dsState && dsState.type !== type) {
	            throw new Error("Can not update datasource of type " + dsState.type + " with props of type " + type);
	        }
	        if (dsState) {
	            dispatch(updateDatasourceProps(id, props));
	        } else {
	            dispatch(addDatasource(type, props));
	        }
	    };
	}
	
	function addDatasource(dsType, props) {
	    if (!dsType) {
	        console.warn("dsType: ", dsType);
	        console.warn("props: ", props);
	        throw new Error("Can not add Datasource without Type");
	    }
	
	    return function (dispatch, getState) {
	        dispatch({
	            type: Action.ADD_DATASOURCE,
	            id: Uuid.generate(),
	            dsType: dsType,
	            props: props
	        });
	        //const state = getState();
	        //DatasourceWorker.initializeWorkers(state.datasources, dispatch);
	    };
	}
	
	function updateDatasourceProps(id, props) {
	    return {
	        type: Action.UPDATE_DATASOURCE,
	        id: id,
	        props: props
	    };
	}
	
	function startCreateDatasource() {
	    return Modal.showModal(ModalIds.DATASOURCE_CONFIG);
	}
	function startEditDatasource(id) {
	    return function (dispatch, getState) {
	        // TODO: This show dialog stuff should be hanbdles with actions as well. Not as Side effects.
	        //DatasourceConfigDialog.showDialog();
	        var state = getState();
	        var dsState = state.datasources[id];
	        dispatch(Modal.showModal(ModalIds.DATASOURCE_CONFIG, { datasource: dsState }));
	    };
	}
	
	function deleteDatasource(id) {
	    return {
	        type: Action.DELETE_DATASOURCE,
	        id: id
	    };
	}
	
	function setDatasourceData(id, data) {
	    return {
	        type: Action.SET_DATASOURCE_DATA,
	        id: id,
	        data: data
	    };
	}
	
	function appendDatasourceData(id, data) {
	    return {
	        type: Action.APPEND_DATASOURCE_DATA,
	        id: id,
	        data: data
	    };
	}
	
	function fetchDatasourceData() {
	    return function (dispatch, getState) {
	        var state = getState();
	        var dsStates = state.datasources;
	
	        _lodash2.default.valuesIn(dsStates).forEach(function (dsState) {
	            var dsFactory = DatasourcePlugins.pluginRegistry.getPlugin(dsState.type);
	
	            if (dsFactory === undefined) {
	                console.warn("Can not fetch data from non existent datasource plugin of type ", dsState.type);
	                return;
	            }
	
	            var dsInstance = dsFactory.getOrCreateInstance(dsState.id);
	            var newData = dsInstance.getValues();
	
	            /*
	             if (!dsState.data) {
	             const pastData = dsInstance.getPastValues();
	             dispatch(setDatasourceData(dsState.id, pastData));
	             }*/
	            var action = setDatasourceData(dsState.id, newData);
	            action.doNotLog = true;
	            dispatch(action);
	        });
	    };
	}
	
	var datasourceCrudReducer = (0, _reducer.genCrudReducer)([Action.ADD_DATASOURCE, Action.DELETE_DATASOURCE], datasource);
	function datasources() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialDatasources : arguments[0];
	    var action = arguments[1];
	
	    state = datasourceCrudReducer(state, action);
	    switch (action.type) {
	        case Action.DELETE_DATASOURCE_PLUGIN:
	            // Also delete related datasources
	            var toDelete = _lodash2.default.valuesIn(state).filter(function (dsState) {
	                return dsState.type == action.id;
	            });
	            var newState = _extends({}, state);
	            toDelete.forEach(function (dsState) {
	                delete newState[dsState.id];
	            });
	
	            return newState;
	        default:
	            return state;
	    }
	}
	
	function datasource(state, action) {
	    switch (action.type) {
	        case Action.ADD_DATASOURCE:
	            return {
	                id: action.id,
	                type: action.dsType,
	                props: action.props
	            };
	        case Action.SET_DATASOURCE_DATA:
	            return _extends({}, state, {
	                data: action.data
	            });
	        case Action.APPEND_DATASOURCE_DATA:
	            var stateData = state.data || [];
	            return _extends({}, state, {
	                data: [].concat(_toConsumableArray(stateData), _toConsumableArray(action.data))
	            });
	        case Action.UPDATE_DATASOURCE:
	            return _extends({}, state, {
	                props: action.props
	            });
	        default:
	            return state;
	    }
	}

/***/ },

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(219);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _datasource = __webpack_require__(292);
	
	var Datasource = _interopRequireWildcard(_datasource);
	
	var _reactRedux = __webpack_require__(225);
	
	var _lodash = __webpack_require__(42);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _elements = __webpack_require__(248);
	
	var ui = _interopRequireWildcard(_elements);
	
	var _reduxForm = __webpack_require__(278);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DatasourceTopNavItem = function DatasourceTopNavItem(props) {
	    return _react2.default.createElement(
	        "div",
	        { className: "ui simple dropdown item" },
	        "Datasources",
	        _react2.default.createElement("i", { className: "dropdown icon" }),
	        _react2.default.createElement(
	            "div",
	            { className: "ui menu" },
	            _react2.default.createElement(
	                ui.LinkItem,
	                { icon: "plus", onClick: function onClick() {
	                        props.createDatasource();
	                    } },
	                "Add Datasource"
	            ),
	            _react2.default.createElement(ui.Divider, null),
	            _lodash2.default.valuesIn(props.datasources).map(function (ds) {
	                return _react2.default.createElement(
	                    ui.LinkItem,
	                    { key: ds.id, onClick: function onClick() {
	                            props.editDatasource(ds.id);
	                        } },
	                    _react2.default.createElement(ui.Icon, { type: "delete", size: "huge", align: "right",
	                        onClick: function onClick(e) {
	                            e.stopPropagation();
	                            e.preventDefault();
	                            props.deleteDatasource(ds.id);
	                        }
	                    }),
	                    ds.props.name
	                );
	            })
	        )
	    );
	};
	
	DatasourceTopNavItem.propTypes = {
	    createDatasource: _react.PropTypes.func.isRequired,
	    editDatasource: _react.PropTypes.func.isRequired,
	    deleteDatasource: _react.PropTypes.func.isRequired,
	    datasources: _react.PropTypes.objectOf(_react.PropTypes.shape({
	        type: _react.PropTypes.string.isRequired,
	        id: _react.PropTypes.string.isRequired,
	        props: _react.PropTypes.object.isRequired
	    })).isRequired
	};
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        datasources: state.datasources
	    };
	}, function (dispatch) {
	    return {
	        createDatasource: function createDatasource() {
	            return dispatch(Datasource.startCreateDatasource());
	        },
	        editDatasource: function editDatasource(id) {
	            return dispatch(Datasource.startEditDatasource(id));
	        },
	        deleteDatasource: function deleteDatasource(id) {
	            return dispatch(Datasource.deleteDatasource(id));
	        }
	    };
	})(DatasourceTopNavItem);

/***/ },

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(219);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _widgets = __webpack_require__(243);
	
	var Widgets = _interopRequireWildcard(_widgets);
	
	var _reactRedux = __webpack_require__(225);
	
	var _widgetConfig = __webpack_require__(245);
	
	var WidgetConfig = _interopRequireWildcard(_widgetConfig);
	
	var _lodash = __webpack_require__(42);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _elements = __webpack_require__(248);
	
	var ui = _interopRequireWildcard(_elements);
	
	var _widgetPlugins = __webpack_require__(252);
	
	var WidgetPlugins = _interopRequireWildcard(_widgetPlugins);
	
	var _reduxForm = __webpack_require__(278);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var WidgetsNavItem = function WidgetsNavItem(props) {
	
	    return _react2.default.createElement(
	        "div",
	        { className: "ui simple dropdown item" },
	        "Add Widget",
	        _react2.default.createElement("i", { className: "dropdown icon" }),
	        _react2.default.createElement(
	            "div",
	            { className: "ui menu" },
	            _react2.default.createElement(ui.Divider, null),
	            _lodash2.default.valuesIn(props.widgetPlugins).map(function (widgetPlugin) {
	                return _react2.default.createElement(AddWidget, { key: widgetPlugin.id,
	                    text: widgetPlugin.typeInfo.name,
	                    type: widgetPlugin.typeInfo.type });
	            })
	        )
	    );
	};
	
	WidgetsNavItem.propTypes = {
	    widgetPlugins: _react.PropTypes.objectOf(WidgetPlugins.widgetPluginType)
	};
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        widgetPlugins: state.widgetPlugins
	    };
	})(WidgetsNavItem);
	
	
	var AddWidget = (0, _reactRedux.connect)(function (state) {
	    return {};
	}, function (dispatch) {
	    return {
	        onClick: function onClick(props) {
	            dispatch(WidgetConfig.createWidget(props.type));
	        }
	    };
	})(ui.LinkItem);

/***/ },

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(219);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(42);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _elements = __webpack_require__(248);
	
	var ui = _interopRequireWildcard(_elements);
	
	var _reactRedux = __webpack_require__(225);
	
	var _reduxForm = __webpack_require__(278);
	
	var _modalDialogIds = __webpack_require__(249);
	
	var ModalIds = _interopRequireWildcard(_modalDialogIds);
	
	var _modalDialog = __webpack_require__(246);
	
	var Modal = _interopRequireWildcard(_modalDialog);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PluginsTopNavItem = function PluginsTopNavItem(props) {
	    return _react2.default.createElement(
	        "a",
	        { className: "item", onClick: function onClick() {
	                return props.showPluginsDialog();
	            } },
	        "Plugins"
	    );
	};
	
	PluginsTopNavItem.propTypes = {
	    showPluginsDialog: _react.PropTypes.func.isRequired
	};
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {};
	}, function (dispatch) {
	    return {
	        showPluginsDialog: function showPluginsDialog() {
	            dispatch(Modal.showModal(ModalIds.PLUGINS));
	        }
	    };
	})(PluginsTopNavItem);

/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(219);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _modalDialogUi = __webpack_require__(247);
	
	var _modalDialogUi2 = _interopRequireDefault(_modalDialogUi);
	
	var _reactRedux = __webpack_require__(225);
	
	var _lodash = __webpack_require__(42);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _reduxForm = __webpack_require__(278);
	
	var _elements = __webpack_require__(248);
	
	var ui = _interopRequireWildcard(_elements);
	
	var _modalDialogIds = __webpack_require__(249);
	
	var ModalIds = _interopRequireWildcard(_modalDialogIds);
	
	var _modalDialog = __webpack_require__(246);
	
	var Modal = _interopRequireWildcard(_modalDialog);
	
	var _plugins = __webpack_require__(282);
	
	var Plugins = _interopRequireWildcard(_plugins);
	
	var _widgetPlugins = __webpack_require__(252);
	
	var WidgetsPlugins = _interopRequireWildcard(_widgetPlugins);
	
	var _datasourcePlugins = __webpack_require__(283);
	
	var DatasourcePlugins = _interopRequireWildcard(_datasourcePlugins);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PluginsModal = function (_React$Component) {
	    _inherits(PluginsModal, _React$Component);
	
	    function PluginsModal() {
	        _classCallCheck(this, PluginsModal);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(PluginsModal).apply(this, arguments));
	    }
	
	    _createClass(PluginsModal, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var props = this.props;
	
	            var actions = [{
	                className: "ui right labeled icon positive button",
	                iconClass: "save icon",
	                label: "Close",
	                onClick: function onClick() {
	                    props.closeDialog();
	                }
	            }];
	
	            var datasourcePluginStates = _lodash2.default.valuesIn(props.datasourcePlugins);
	            var widgetPluginStates = _lodash2.default.valuesIn(props.widgetPlugins);
	
	            return _react2.default.createElement(
	                _modalDialogUi2.default,
	                { id: ModalIds.PLUGINS,
	                    title: 'Plugins',
	                    actions: actions
	                },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'ui one column grid' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column' },
	                        _react2.default.createElement(
	                            'form',
	                            { className: 'ui form' },
	                            _react2.default.createElement(
	                                'h4',
	                                { className: 'ui dividing header' },
	                                'Load Plugin'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'field' },
	                                _react2.default.createElement(
	                                    'label',
	                                    null,
	                                    'From URL'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'field' },
	                                    _react2.default.createElement('input', { ref: 'pluginUrl', type: 'text', name: 'plugin-url',
	                                        placeholder: 'http://my-page.com/myPlugin.js',
	                                        defaultValue: 'plugins/TestWidgetPlugin.js'
	                                    })
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'ui button', onClick: function onClick() {
	                                        return props.loadPlugin(_this2.refs.pluginUrl.value);
	                                    },
	                                    tabIndex: '0' },
	                                'Load Plugin'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'h4',
	                            { className: 'ui dividing header' },
	                            'Datasource Plugins'
	                        ),
	                        _react2.default.createElement(DatasourcePluginList, _extends({ datasourceStates: datasourcePluginStates }, props)),
	                        _react2.default.createElement(
	                            'h4',
	                            { className: 'ui dividing header' },
	                            'Widget Plugins'
	                        ),
	                        _react2.default.createElement(WidgetPluginList, _extends({ widgetPluginStates: widgetPluginStates }, props))
	                    )
	                )
	            );
	        }
	    }]);
	
	    return PluginsModal;
	}(_react2.default.Component);
	
	PluginsModal.propTypes = {
	    datasourcePlugins: _react.PropTypes.object.isRequired,
	    widgetPlugins: _react.PropTypes.object.isRequired,
	    closeDialog: _react.PropTypes.func.isRequired,
	    loadPlugin: _react.PropTypes.func.isRequired
	};
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        widgetPlugins: state.widgetPlugins,
	        datasourcePlugins: state.datasourcePlugins
	    };
	}, function (dispatch) {
	    return {
	        closeDialog: function closeDialog() {
	            return dispatch(Modal.closeModal());
	        },
	        // TODO: Render loading indicator while Plugin loads
	        // maybe build some generic solution for Ajax calls where the state can hold all information to render loading indicators / retry buttons etc...
	        loadPlugin: function loadPlugin(url) {
	            return dispatch(Plugins.loadPluginFromUrl(url));
	        }
	    };
	})(PluginsModal);
	
	
	var DatasourcePluginList = function DatasourcePluginList(props) {
	    return _react2.default.createElement(
	        'div',
	        { className: 'ui five cards' },
	        props.datasourceStates.map(function (dsState) {
	            return _react2.default.createElement(DatasourcePluginCard, _extends({ key: dsState.id, pluginState: dsState }, props));
	        })
	    );
	};
	
	DatasourcePluginList.propTypes = {
	    datasourceStates: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	        id: _react.PropTypes.string.isRequired
	    })).isRequired
	};
	
	var WidgetPluginList = function WidgetPluginList(props) {
	    return _react2.default.createElement(
	        'div',
	        { className: 'ui five cards' },
	        props.widgetPluginStates.map(function (dsState) {
	            return _react2.default.createElement(WidgetPluginCard, _extends({ key: dsState.id, pluginState: dsState }, props));
	        })
	    );
	};
	
	WidgetPluginList.propTypes = {
	    widgetPluginStates: _react.PropTypes.arrayOf(WidgetsPlugins.widgetPluginType)
	};
	
	var PluginCard = function (_React$Component2) {
	    _inherits(PluginCard, _React$Component2);
	
	    function PluginCard() {
	        _classCallCheck(this, PluginCard);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(PluginCard).apply(this, arguments));
	    }
	
	    _createClass(PluginCard, [{
	        key: '_copyUrl',
	        value: function _copyUrl() {
	            this.refs.url.focus();
	            this.refs.url.select();
	            document.execCommand('copy');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this4 = this;
	
	            var props = this.props;
	            var pluginState = props.pluginState;
	            return _react2.default.createElement(
	                'div',
	                { className: 'card' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'content' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'header' },
	                        pluginState.typeInfo.name
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'description' },
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            'Type: ',
	                            pluginState.typeInfo.type
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            pluginState.typeInfo.description ? pluginState.typeInfo.description : "No Description."
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'extra content' },
	                    _react2.default.createElement('i', { className: 'copy outline icon', onClick: function onClick() {
	                            _this4._copyUrl();
	                        }, style: { display: "inline" } }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'ui large transparent input' },
	                        _react2.default.createElement('input', { type: 'text', ref: 'url',
	                            readOnly: true,
	                            style: { width: "100%", paddingLeft: 0, paddingRight: 0 },
	                            placeholder: 'Plugin Url ...',
	                            defaultValue: pluginState.url ? pluginState.url : "Packaged" })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'ui bottom attached button', onClick: function onClick() {
	                            return props.removePlugin(pluginState.id);
	                        } },
	                    _react2.default.createElement('i', { className: 'trash icon' }),
	                    'Remove'
	                )
	            );
	        }
	    }]);
	
	    return PluginCard;
	}(_react2.default.Component);
	
	PluginCard.propTypes = {
	    pluginState: _react.PropTypes.object.isRequired,
	    removePlugin: _react.PropTypes.func.isRequired
	};
	
	var WidgetPluginCard = (0, _reactRedux.connect)(function (state) {
	    return {};
	}, function (dispatch) {
	    return {
	        removePlugin: function removePlugin(type) {
	            return dispatch(WidgetsPlugins.unloadPlugin(type));
	        }
	    };
	})(PluginCard);
	
	var DatasourcePluginCard = (0, _reactRedux.connect)(function (state) {
	    return {};
	}, function (dispatch) {
	    return {
	        removePlugin: function removePlugin(type) {
	            return dispatch(DatasourcePlugins.unloadPlugin(type));
	        }
	    };
	})(PluginCard);

/***/ },

/***/ 297:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.clearData = clearData;
	exports.persistenceMiddleware = persistenceMiddleware;
	exports.saveToLocalStorage = saveToLocalStorage;
	exports.loadFromLocalStorage = loadFromLocalStorage;
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var lastSave = new Date();
	
	function clearData() {
	    lastSave = new Date();
	    if (window.confirm("Wipe app data and reload page?")) {
	        window.localStorage.setItem("appState", undefined);
	        location.reload();
	    }
	}
	
	function persistenceMiddleware(_ref) {
	    var getState = _ref.getState;
	
	    return function (next) {
	        return function (action) {
	
	            var nextState = next(action);
	
	            var now = new Date();
	            if (now.getTime() - lastSave.getTime() < 10000) {
	                return nextState;
	            }
	
	            saveToLocalStorage(getState());
	            console.log('Saved state ...');
	            lastSave = new Date();
	            return nextState;
	        };
	    };
	}
	
	function saveToLocalStorage(state) {
	    if (typeof window === 'undefined') {
	        console.warn("Can not save to local storage in current environment.");
	        return;
	    }
	
	    var form = state.form;
	    var modalDialog = state.modalDialog;
	
	    var savableState = _objectWithoutProperties(state, ["form", "modalDialog"]);
	
	    window.localStorage.setItem("appState", JSON.stringify(savableState));
	}
	
	function loadFromLocalStorage() {
	    if (typeof window === 'undefined') {
	        console.warn("Can not load from local storage in current environment.");
	        return undefined;
	    }
	
	    var stateString = window.localStorage.getItem("appState");
	    var state = undefined;
	    try {
	        if (stateString !== undefined && stateString !== "undefined") {
	            state = JSON.parse(stateString);
	        }
	    } catch (e) {
	        console.error("Failed to load state from local storage. Data:", stateString, e.message);
	    }
	    console.log("Loaded state:", state);
	    return state !== null ? state : undefined;
	}

/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Widget = exports.TYPE_INFO = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(219);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TYPE_INFO = exports.TYPE_INFO = {
	    type: "text",
	    name: "Text",
	    description: "Display content of a datasource as plain text",
	    settings: [{
	        id: 'datasource',
	        name: 'Datasource',
	        type: 'datasource',
	        description: "Datasource to get the text"
	    }]
	};
	
	var Widget = exports.Widget = function (_Component) {
	    _inherits(Widget, _Component);
	
	    function Widget() {
	        _classCallCheck(this, Widget);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Widget).apply(this, arguments));
	    }
	
	    _createClass(Widget, [{
	        key: 'render',
	        value: function render() {
	            var props = this.props;
	            var data = props.getData(this.props.config.datasource);
	
	            if (!data || data.length == 0) {
	                return React.createElement(
	                    'p',
	                    null,
	                    'No data'
	                );
	            }
	
	            return React.createElement(
	                'p',
	                null,
	                JSON.stringify(data)
	            );
	        }
	    }]);
	
	    return Widget;
	}(_react.Component);
	
	// TODO: Move to core, for simple reuse
	
	
	Widget.propTypes = {
	    config: _react.PropTypes.object.isRequired
	};

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Widget = exports.TYPE_INFO = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(219);
	
	var React = _interopRequireWildcard(_react);
	
	var _c = __webpack_require__(300);
	
	var c3 = _interopRequireWildcard(_c);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TYPE_INFO = exports.TYPE_INFO = {
	    type: "chart",
	    name: "Chart",
	    description: "Renders a chart. Will be way more flexible in future.",
	    settings: [{
	        id: 'datasource',
	        name: 'Datasource',
	        type: 'datasource'
	    }, {
	        id: 'chartType',
	        name: 'Chart Type',
	        type: 'option',
	        defaultValue: 'spline',
	        options: ['line', 'spline', 'step', 'area', 'area-spline', 'area-step', 'bar', 'scatter', 'pie', 'donut', 'gauge']
	    }, {
	        id: 'dataKeys',
	        type: "json",
	        name: "Data Keys",
	        description: "An array of Keys of an data object that define the data sets",
	        defaultValue: '["value"]'
	    }, {
	        id: 'xKey',
	        type: "string",
	        name: "X Key",
	        description: "Key of an data object that defines the X value",
	        defaultValue: "x"
	    }, {
	        id: 'names',
	        type: "json",
	        name: "Data Names",
	        description: "Json object that maps Data Keys to displayed names",
	        defaultValue: '{"value": "My Value"}'
	    }, {
	        id: 'gaugeData',
	        type: "json",
	        name: "Gauge Data",
	        description: "Json object that is passed as configuration for gauge chats",
	        defaultValue: JSON.stringify({ "min": 0, "max": 100, units: ' %' })
	    } /*,
	      {
	      id: 'donutData',
	      type: "json",
	      name: "Gauge Data",
	      description: "Json object that maps Data Keys to displayed names",
	      defaultValue: JSON.stringify({title: 'Title'})
	      }*/
	    ]
	};
	
	function safeParseJsonObject(string) {
	    try {
	        return JSON.parse(string);
	    } catch (e) {
	        console.error("Was not able to parse JSON: " + string);
	        return {};
	    }
	}
	
	function safeParseJsonArray(string) {
	    try {
	        return JSON.parse(string);
	    } catch (e) {
	        console.error("Was not able to parse JSON: " + string);
	        return {};
	    }
	}
	
	var Widget = exports.Widget = function (_Component) {
	    _inherits(Widget, _Component);
	
	    function Widget() {
	        _classCallCheck(this, Widget);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Widget).apply(this, arguments));
	    }
	
	    _createClass(Widget, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._createChart(this.props);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.config !== this.props.config || nextProps._state.height !== this.props._state.height) {
	                this._createChart(nextProps);
	            }
	        }
	    }, {
	        key: '_createChart',
	        value: function _createChart(props) {
	            var config = props.config;
	            var data = props.getData(config.datasource);
	            this.chart = c3.generate({
	                bindto: '#chart-' + props._state.id,
	                size: {
	                    height: props._state.availableHeightPx
	                },
	                data: {
	                    json: data,
	                    type: config.chartType,
	                    // Seems not to work with chart.load, so on update props we have to recreate the chart to update
	                    names: safeParseJsonObject(config.names),
	                    keys: {
	                        x: config.xKey ? config.xKey : undefined,
	                        value: safeParseJsonArray(config.dataKeys)
	                    }
	                },
	                axis: {
	                    x: {
	                        tick: {
	                            culling: false
	                        }
	                    }
	                },
	                gauge: safeParseJsonObject(config.gaugeData),
	                donut: {
	                    label: {
	                        show: false
	                    }
	                },
	                transition: {
	                    duration: 0
	                }
	            });
	        }
	    }, {
	        key: '_renderChart',
	        value: function _renderChart() {
	            if (!this.chart) {
	                return;
	            }
	            var props = this.props;
	            var config = props.config;
	            var data = props.getData(config.datasource);
	
	            // TODO: Do not take last element, but all new elements ;)
	            var lastElement = data.length > 0 ? data[data.length - 1] : {};
	
	            /* chart.flow does not work with x axis categories and messes up the x values.
	             this.chart.flow({
	             json: [lastElement],
	             keys: {
	             //x: "x",//config.xKey || undefined,
	             value: safeParseJsonObject(config.dataKeys)
	             },
	             labels: false,
	             //to: firstElement[config.xKey],
	             duration: 500
	             });     */
	
	            this.chart.load({
	                json: data,
	                keys: {
	                    x: config.xKey || undefined,
	                    value: safeParseJsonObject(config.dataKeys)
	                },
	                labels: false
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this._renderChart();
	            return React.createElement('div', { className: '', id: 'chart-' + this.props._state.id });
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            console.log("Unmounted Chart Widget");
	        }
	    }, {
	        key: 'dispose',
	        value: function dispose() {
	            console.log("Disposed Chart Widget");
	        }
	    }]);
	
	    return Widget;
	}(_react.Component);
	
	// TODO: Move to core, for simple reuse
	
	
	Widget.propTypes = {
	    config: _react.PropTypes.object.isRequired,
	    _state: _react.PropTypes.shape({
	        height: _react.PropTypes.number.isRequired,
	        id: _react.PropTypes.string.isRequired
	    }).isRequired
	};

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.start = start;
	exports.stop = stop;
	
	var _datasource = __webpack_require__(292);
	
	var Datasource = _interopRequireWildcard(_datasource);
	
	var _datasourcePlugins = __webpack_require__(283);
	
	var _datasourcePlugins2 = _interopRequireDefault(_datasourcePlugins);
	
	var _store = __webpack_require__(303);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var heartbeat = void 0;
	
	function start() {
	    if (heartbeat) {
	        clearInterval(heartbeat);
	    }
	    heartbeat = setInterval(function () {
	        _store2.default.dispatch(Datasource.fetchDatasourceData());
	    }, 1000);
	}
	
	function stop() {
	    if (heartbeat) {
	        clearInterval(heartbeat);
	        heartbeat = null;
	    }
	}

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.clearState = clearState;
	
	var _redux = __webpack_require__(226);
	
	var Redux = _interopRequireWildcard(_redux);
	
	var _reduxThunk = __webpack_require__(304);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reduxLogger = __webpack_require__(305);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _widgets = __webpack_require__(243);
	
	var Widgets = _interopRequireWildcard(_widgets);
	
	var _widgetConfig = __webpack_require__(245);
	
	var WidgetConfig = _interopRequireWildcard(_widgetConfig);
	
	var _layouts = __webpack_require__(275);
	
	var Layouts = _interopRequireWildcard(_layouts);
	
	var _datasource = __webpack_require__(292);
	
	var Datasource = _interopRequireWildcard(_datasource);
	
	var _dashboard = __webpack_require__(240);
	
	var Dashboard = _interopRequireWildcard(_dashboard);
	
	var _import = __webpack_require__(281);
	
	var Import = _interopRequireWildcard(_import);
	
	var _modalDialog = __webpack_require__(246);
	
	var Modal = _interopRequireWildcard(_modalDialog);
	
	var _persistence = __webpack_require__(297);
	
	var Persist = _interopRequireWildcard(_persistence);
	
	var _plugins = __webpack_require__(282);
	
	var Plugins = _interopRequireWildcard(_plugins);
	
	var _reduxForm = __webpack_require__(278);
	
	var _actionNames = __webpack_require__(241);
	
	var Action = _interopRequireWildcard(_actionNames);
	
	var _widgetPlugins = __webpack_require__(252);
	
	var WidgetPlugins = _interopRequireWildcard(_widgetPlugins);
	
	var _datasourcePlugins = __webpack_require__(283);
	
	var DatasourcePlugins = _interopRequireWildcard(_datasourcePlugins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var store = void 0;
	
	var appReducer = Redux.combineReducers({
	    widgets: Widgets.widgets,
	    widgetConfig: WidgetConfig.widgetConfigDialog, // TODO: Still used or replaced by modalDialog
	    layouts: Layouts.layouts,
	    currentLayout: Layouts.currentLayout,
	    datasources: Datasource.datasources,
	    form: _reduxForm.reducer,
	    modalDialog: Modal.modalDialog,
	    widgetPlugins: WidgetPlugins.widgetPlugins,
	    datasourcePlugins: DatasourcePlugins.datasourcePlugins,
	    dashboard: Dashboard.dashboard
	});
	
	var reducer = function reducer(state, action) {
	    if (action.type === Action.CLEAR_STATE) {
	        state = undefined;
	    }
	
	    state = Import.importReducer(state, action);
	
	    return appReducer(state, action);
	};
	
	var logger = (0, _reduxLogger2.default)({
	    duration: false, // Print the duration of each action?
	    timestamp: true, // Print the timestamp with each action?
	    logErrors: true, // Should the logger catch, log, and re-throw errors?
	    predicate: function predicate(getState, action) {
	        var foo = "";
	        if (action.type.startsWith("redux-form")) {
	            return false;
	        }
	
	        return !action.doNotLog;
	    }
	});
	
	store = Redux.createStore(reducer, Persist.loadFromLocalStorage(), Redux.applyMiddleware(_reduxThunk2.default, Persist.persistenceMiddleware, logger // must be last
	));
	
	DatasourcePlugins.pluginRegistry.store = store;
	WidgetPlugins.pluginRegistry.store = store;
	
	function clearState() {
	    return {
	        type: Action.CLEAR_STATE
	    };
	}
	
	exports.default = store;

/***/ },

/***/ 306:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TYPE_INFO = exports.TYPE_INFO = {
	    type: "random",
	    name: "Random",
	    description: "A datasource that provides a random value each tick",
	    settings: [{
	        id: "maxValues",
	        name: "Max Values",
	        description: "Maximum number of values stored",
	        type: "number"
	    }, {
	        id: "min",
	        name: "Min Value",
	        type: "number",
	        defaultValue: 0
	    }, {
	        id: "max",
	        name: "Max Value",
	        type: "number",
	        defaultValue: 100
	    }]
	};
	
	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	var Datasource = exports.Datasource = function () {
	    function Datasource() {
	        var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	        var history = arguments[1];
	
	        _classCallCheck(this, Datasource);
	
	        this.props = props;
	        // Initialize with non random values to demonstrate loading of historic values
	        this.history = history || []; // [{value: 10}, {value: 20}, {value: 30}, {value: 40}, {value: 50}]
	        this.x = 0;
	
	        if (this.history.length > 1) {
	            this.x = history[history.length - 1].x + 1 || 0;
	        }
	    }
	
	    // TODO: We can not edit datasources yet :)
	
	
	    _createClass(Datasource, [{
	        key: "updateProps",
	        value: function updateProps(props) {
	            this.props = props;
	        }
	    }, {
	        key: "getValues",
	        value: function getValues() {
	            this.history.push(this.fetchValue());
	
	            var maxValues = Number(this.props.maxValues) || 1000;
	            while (this.history.length > maxValues) {
	                this.history.shift();
	            }
	
	            return [].concat(_toConsumableArray(this.history));
	        }
	    }, {
	        key: "fetchValue",
	        value: function fetchValue() {
	            var props = this.props;
	            var min = Number(props.min || 0);
	            var max = Number(props.max || 100);
	            var newValue = { x: this.x++, value: getRandomInt(min, max), value2: getRandomInt(min, max) };
	            return newValue;
	        }
	    }, {
	        key: "dispose",
	        value: function dispose() {
	            this.history = [];
	            console.log("Random Datasource destroyed");
	        }
	    }]);

	    return Datasource;
	}();

/***/ },

/***/ 307:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TYPE_INFO = exports.TYPE_INFO = {
	    type: "time",
	    name: "Time"
	};
	
	var Datasource = exports.Datasource = function () {
	    function Datasource() {
	        _classCallCheck(this, Datasource);
	    }
	
	    _createClass(Datasource, [{
	        key: "renderTime",
	        value: function renderTime() {
	            var currentTime = new Date();
	            var diem = 'AM';
	            var h = currentTime.getHours();
	            var m = currentTime.getMinutes();
	            var s = currentTime.getSeconds();
	
	            if (h === 0) {
	                h = 12;
	            } else if (h > 12) {
	                h = h - 12;
	                diem = 'PM';
	            }
	
	            if (m < 10) {
	                m = '0' + m;
	            }
	            if (s < 10) {
	                s = '0' + s;
	            }
	            return {
	                hours: h,
	                minutes: m,
	                seconds: s,
	                diem: diem
	            };
	        }
	    }, {
	        key: "getValues",
	        value: function getValues() {
	            var now = new Date();
	            return [{ date: now }];
	        }
	    }]);

	    return Datasource;
	}();

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _freeboardDatasource = __webpack_require__(309);
	
	var FreeboardDatasource = _interopRequireWildcard(_freeboardDatasource);
	
	var _plugins = __webpack_require__(282);
	
	var Plugins = _interopRequireWildcard(_plugins);
	
	var _pluginCache = __webpack_require__(285);
	
	var PluginCache = _interopRequireWildcard(_pluginCache);
	
	var _store = __webpack_require__(303);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function mapSettings(settings) {
	    return settings.map(function (setting) {
	        return {
	            id: setting["name"],
	            name: setting["display_name"],
	            description: setting["description"],
	            type: setting["type"],
	            defaultValue: setting["default_value"],
	            required: setting["required"]
	        };
	    });
	}
	
	var freeboardPluginApi = {
	
	    /**
	     * Method to register a DatasourcePlugin as you would with the IoT-Dashboard API
	     * But supporting the Freeboard syntax
	     * @param plugin A Freeboard Datasource Plugin.
	     * See: https://freeboard.github.io/freeboard/docs/plugin_example.html
	     */
	
	    loadDatasourcePlugin: function loadDatasourcePlugin(plugin) {
	        console.log("Loading freeboard Plugin: ", plugin);
	
	        var typeName = plugin["type_name"];
	        var displayName = plugin["display_name"];
	        var description = plugin["description"];
	        var externalScripts = plugin["external_scripts"];
	        var settings = plugin["settings"];
	        var newInstance = plugin["newInstance"];
	
	        var TYPE_INFO = {
	            type: typeName,
	            name: displayName,
	            description: description,
	            dependencies: externalScripts,
	            settings: mapSettings(settings)
	        };
	
	        var dsPlugin = {
	            TYPE_INFO: TYPE_INFO,
	            Datasource: FreeboardDatasource.create(newInstance, TYPE_INFO)
	        };
	
	        PluginCache.registerDatasourcePlugin(dsPlugin.TYPE_INFO, dsPlugin.Datasource);
	    }
	};
	
	window.freeboard = freeboardPluginApi;
	
	exports.default = freeboardPluginApi;

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.create = create;
	
	var _loadjs = __webpack_require__(284);
	
	var _loadjs2 = _interopRequireDefault(_loadjs);
	
	var _lodash = __webpack_require__(42);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	// **newInstance(settings, newInstanceCallback, updateCallback)** (required) : A function that will be called when a new instance of this plugin is requested.
	// * **settings** : A javascript object with the initial settings set by the user. The names of the properties in the object will correspond to the setting names defined above.
	// * **newInstanceCallback** : A callback function that you'll call when the new instance of the plugin is ready. This function expects a single argument, which is the new instance of your plugin object.
	// * **updateCallback** : A callback function that you'll call if and when your datasource has an update for freeboard to recalculate. This function expects a single parameter which is a javascript object with the new, updated data. You should hold on to this reference and call it when needed.
	
	function create(newInstance, TYPE_INFO) {
	
	    return function FreeboardDatasource(newInstance) {
	        var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	        var history = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
	
	        this.instance = null;
	        this.data = history;
	        this.getValues = function () {
	            if (_lodash2.default.isArray(this.data)) {
	                return this.data;
	            }
	            return [this.data];
	        }.bind(this);
	
	        this.updateProps = function (newProps) {
	            console.log("Updating Datasource props");
	            this.instance.onSettingsChanged(newProps);
	        }.bind(this);
	
	        var newInstanceCallback = function (instance) {
	            this.instance = instance;
	            instance.updateNow();
	        }.bind(this);
	
	        var updateCallback = function (newData) {
	            this.data = newData;
	        }.bind(this);
	
	        // TODO: Maybe no needed anymore when we take care of dependencies elsewhere
	        if (TYPE_INFO.dependencies) {
	            (0, _loadjs2.default)([].concat(_toConsumableArray(TYPE_INFO.dependencies)), { success: createNewInstance });
	        } else {
	            createNewInstance();
	        }
	
	        function createNewInstance() {
	            newInstance(props, newInstanceCallback, updateCallback);
	        }
	    }.bind(this, newInstance);
	}

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _pluginCache = __webpack_require__(285);
	
	var PluginCache = _interopRequireWildcard(_pluginCache);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	window.iotDashboardApi = {
	    registerDatasourcePlugin: PluginCache.registerDatasourcePlugin,
	    registerWidgetPlugin: PluginCache.registerWidgetPlugin
	};

/***/ },

/***/ 311:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ }

});
//# sourceMappingURL=app.bundle.js.map