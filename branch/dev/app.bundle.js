webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _lodash = __webpack_require__(2);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	__webpack_require__(4);
	
	__webpack_require__(14);
	
	__webpack_require__(16);
	
	var _reactDom = __webpack_require__(18);
	
	var ReactDOM = _interopRequireWildcard(_reactDom);
	
	var _react = __webpack_require__(179);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRedux = __webpack_require__(185);
	
	var _pageLayout = __webpack_require__(199);
	
	var _pageLayout2 = _interopRequireDefault(_pageLayout);
	
	var _widgets = __webpack_require__(201);
	
	var Widgets = _interopRequireWildcard(_widgets);
	
	var _widgetPlugins = __webpack_require__(211);
	
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
	
	var _plugins = __webpack_require__(242);
	
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
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(179);
	
	var React = _interopRequireWildcard(_react);
	
	var _widgetGrid = __webpack_require__(200);
	
	var _widgetGrid2 = _interopRequireDefault(_widgetGrid);
	
	var _jquery = __webpack_require__(15);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _layouts = __webpack_require__(234);
	
	var _layouts2 = _interopRequireDefault(_layouts);
	
	var _widgetConfigDialog = __webpack_require__(236);
	
	var _widgetConfigDialog2 = _interopRequireDefault(_widgetConfigDialog);
	
	var _dashboardMenuEntry = __webpack_require__(240);
	
	var _dashboardMenuEntry2 = _interopRequireDefault(_dashboardMenuEntry);
	
	var _importExportDialog = __webpack_require__(250);
	
	var _importExportDialog2 = _interopRequireDefault(_importExportDialog);
	
	var _datasourceConfigDialog = __webpack_require__(251);
	
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
	
	var Layout = function (_Component) {
	    _inherits(Layout, _Component);
	
	    function Layout() {
	        _classCallCheck(this, Layout);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Layout).apply(this, arguments));
	    }
	
	    _createClass(Layout, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                null,
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
	                    React.createElement(
	                        "div",
	                        { className: "ui fixed inverted main menu" },
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
	
	exports.default = Layout;

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(179);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRedux = __webpack_require__(185);
	
	var _lodash = __webpack_require__(2);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _widgets = __webpack_require__(201);
	
	var Widgets = _interopRequireWildcard(_widgets);
	
	var _widgetFrame = __webpack_require__(210);
	
	var _widgetFrame2 = _interopRequireDefault(_widgetFrame);
	
	var _widgetPlugins = __webpack_require__(211);
	
	var WidgetPlugins = _interopRequireWildcard(_widgetPlugins);
	
	var _widthProvider = __webpack_require__(215);
	
	var _widthProvider2 = _interopRequireDefault(_widthProvider);
	
	var _reactGridLayout = __webpack_require__(216);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ResponsiveGrid = (0, _widthProvider2.default)(_reactGridLayout.Responsive);
	
	__webpack_require__(232);
	
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
	                return (0, _widgetFrame2.default)({ widget: widgetState, widgetPlugin: widgetPlugin });
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
	                    breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
	                    cols: { lg: 12, md: 12, sm: 12, xs: 6, xxs: 3 },
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
	    deleteWidget: _react.PropTypes.func
	};
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        widgets: _lodash2.default.valuesIn(state.widgets) || [],
	        datasources: state.datasources || {},
	        widgetPlugins: state.widgetPlugins || {}
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
/* 201 */
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
	
	var _react = __webpack_require__(179);
	
	var React = _interopRequireWildcard(_react);
	
	var _uuid = __webpack_require__(202);
	
	var Uuid = _interopRequireWildcard(_uuid);
	
	var _widgetConfig = __webpack_require__(203);
	
	var WidgetConfig = _interopRequireWildcard(_widgetConfig);
	
	var _lodash = __webpack_require__(2);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _reducer = __webpack_require__(209);
	
	var _actionNames = __webpack_require__(204);
	
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
/* 202 */
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
/* 203 */
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
	
	var _widgets = __webpack_require__(201);
	
	var Widgets = _interopRequireWildcard(_widgets);
	
	var _actionNames = __webpack_require__(204);
	
	var _modalDialog = __webpack_require__(205);
	
	var Modal = _interopRequireWildcard(_modalDialog);
	
	var _modalDialogIds = __webpack_require__(208);
	
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
/* 204 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CLEAR_STATE = exports.CLEAR_STATE = "CLEAR_STATE";
	
	// Dashboard
	var DASHBOARD_IMPORT = exports.DASHBOARD_IMPORT = "DASHBOARD_IMPORT";
	
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
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.showModal = showModal;
	exports.closeModal = closeModal;
	exports.modalDialog = modalDialog;
	
	var _actionNames = __webpack_require__(204);
	
	var Action = _interopRequireWildcard(_actionNames);
	
	var _modalDialogUi = __webpack_require__(206);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(179);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(185);
	
	var _modalDialog = __webpack_require__(205);
	
	var Modal = _interopRequireWildcard(_modalDialog);
	
	var _elementsUi = __webpack_require__(207);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Divider = exports.Icon = exports.LinkItem = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(179);
	
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
/* 208 */
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
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.genCrudReducer = genCrudReducer;
	
	var _lodash = __webpack_require__(2);
	
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
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(179);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRedux = __webpack_require__(185);
	
	var _widgetConfig = __webpack_require__(203);
	
	var WidgetConfig = _interopRequireWildcard(_widgetConfig);
	
	var _widgetPlugins = __webpack_require__(211);
	
	var WidgetPlugins = _interopRequireWildcard(_widgetPlugins);
	
	var _widgets = __webpack_require__(201);
	
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
	            { className: 'ui inverted segment' },
	            React.createElement(
	                'div',
	                { className: 'ui tiny horizontal right floated inverted list' },
	                React.createElement(ConfigWidgetButton, { className: 'right item', widgetState: widgetState,
	                    visible: props.widgetPlugin.typeInfo.settings ? true : false,
	                    icon: 'configure' }),
	                React.createElement(
	                    'a',
	                    { className: 'right item drag' },
	                    React.createElement('i', { className: 'move icon drag' })
	                ),
	                React.createElement(DeleteWidgetButton, { className: 'right floated item', widgetState: widgetState, icon: 'remove' })
	            ),
	            React.createElement(
	                'div',
	                { className: 'ui item top attached' },
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
	    widgetPlugin: WidgetPlugins.widgetPluginType.isRequired
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
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.pluginRegistry = exports.widgetPluginType = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.unloadPlugin = unloadPlugin;
	exports.widgetPlugins = widgetPlugins;
	
	var _widgetPlugin = __webpack_require__(212);
	
	var _widgetPlugin2 = _interopRequireDefault(_widgetPlugin);
	
	var _pluginRegistry = __webpack_require__(213);
	
	var _pluginRegistry2 = _interopRequireDefault(_pluginRegistry);
	
	var _actionNames = __webpack_require__(204);
	
	var Action = _interopRequireWildcard(_actionNames);
	
	var _reducer = __webpack_require__(209);
	
	var _react = __webpack_require__(179);
	
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
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactRedux = __webpack_require__(185);
	
	var _react = __webpack_require__(179);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(2);
	
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
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _datasourcePlugin = __webpack_require__(214);
	
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
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DataSourcePlugin = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(2);
	
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
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(179);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(18);
	
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
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(179);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(185);
	
	var _lodash = __webpack_require__(2);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _layouts = __webpack_require__(235);
	
	var Layouts = _interopRequireWildcard(_layouts);
	
	var _elements = __webpack_require__(207);
	
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
/* 235 */
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
	
	var _widgets = __webpack_require__(201);
	
	var Widgets = _interopRequireWildcard(_widgets);
	
	var _uuid = __webpack_require__(202);
	
	var _reducer = __webpack_require__(209);
	
	var _actionNames = __webpack_require__(204);
	
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
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.unshiftIfNotExists = unshiftIfNotExists;
	
	var _react = __webpack_require__(179);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _modalDialogUi = __webpack_require__(206);
	
	var _modalDialogUi2 = _interopRequireDefault(_modalDialogUi);
	
	var _widgetPlugins = __webpack_require__(211);
	
	var WidgetPlugins = _interopRequireWildcard(_widgetPlugins);
	
	var _widgetConfig = __webpack_require__(203);
	
	var WidgetConfig = _interopRequireWildcard(_widgetConfig);
	
	var _reactRedux = __webpack_require__(185);
	
	var _settingsForm = __webpack_require__(237);
	
	var _settingsForm2 = _interopRequireDefault(_settingsForm);
	
	var _reduxForm = __webpack_require__(238);
	
	var _modalDialogIds = __webpack_require__(208);
	
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
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(179);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(185);
	
	var _elements = __webpack_require__(207);
	
	var ui = _interopRequireWildcard(_elements);
	
	var _reduxForm = __webpack_require__(238);
	
	var _collection = __webpack_require__(239);
	
	var _lodash = __webpack_require__(2);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 238 */,
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.chunk = chunk;
	
	var _lodash = __webpack_require__(2);
	
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
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(179);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(185);
	
	var _import = __webpack_require__(241);
	
	var Import = _interopRequireWildcard(_import);
	
	var _modalDialog = __webpack_require__(206);
	
	var _modalDialog2 = _interopRequireDefault(_modalDialog);
	
	var _modalDialog3 = __webpack_require__(205);
	
	var Modal = _interopRequireWildcard(_modalDialog3);
	
	var _modalDialogIds = __webpack_require__(208);
	
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
/* 241 */
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
	
	var _actionNames = __webpack_require__(204);
	
	var Action = _interopRequireWildcard(_actionNames);
	
	var _layouts = __webpack_require__(235);
	
	var _plugins = __webpack_require__(242);
	
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
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.loadPlugin = loadPlugin;
	exports.loadPluginFromUrl = loadPluginFromUrl;
	exports.initializeExternalPlugins = initializeExternalPlugins;
	exports.addPlugin = addPlugin;
	
	var _actionNames = __webpack_require__(204);
	
	var Action = _interopRequireWildcard(_actionNames);
	
	var _reducer = __webpack_require__(209);
	
	var _datasourcePlugins = __webpack_require__(243);
	
	var DatasourcePlugins = _interopRequireWildcard(_datasourcePlugins);
	
	var _widgetPlugins = __webpack_require__(211);
	
	var WidgetPlugins = _interopRequireWildcard(_widgetPlugins);
	
	var _loadjs = __webpack_require__(244);
	
	var _loadjs2 = _interopRequireDefault(_loadjs);
	
	var _pluginCache = __webpack_require__(245);
	
	var PluginCache = _interopRequireWildcard(_pluginCache);
	
	var _lodash = __webpack_require__(2);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _urijs = __webpack_require__(246);
	
	var _urijs2 = _interopRequireDefault(_urijs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function loadPlugin(plugin) {
	    return addPlugin(plugin);
	}
	
	function loadPluginFromUrl(url) {
	    return function (dispatch) {
	        (0, _loadjs2.default)([url], function () {
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
	
	                        (0, _loadjs2.default)(paths, function () {
	                            dispatch(addPlugin(plugin, url));
	                        });
	                    } else {
	                        dispatch(addPlugin(plugin, url));
	                    }
	                })();
	            } else {
	                console.error("Failed to load Plugin. Make sure it called window.iotDashboardApi.register***Plugin from url " + url);
	            }
	        });
	    };
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
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.pluginRegistry = exports.DatasourcePluginRegistry = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.unloadPlugin = unloadPlugin;
	exports.datasourcePlugins = datasourcePlugins;
	
	var _datasourcePlugin = __webpack_require__(214);
	
	var DsPlugin = _interopRequireWildcard(_datasourcePlugin);
	
	var _pluginRegistry = __webpack_require__(213);
	
	var _pluginRegistry2 = _interopRequireDefault(_pluginRegistry);
	
	var _actionNames = __webpack_require__(204);
	
	var Action = _interopRequireWildcard(_actionNames);
	
	var _reducer = __webpack_require__(209);
	
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
/* 244 */,
/* 245 */
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
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(179);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(185);
	
	var _import = __webpack_require__(241);
	
	var Import = _interopRequireWildcard(_import);
	
	var _modalDialogUi = __webpack_require__(206);
	
	var _modalDialogUi2 = _interopRequireDefault(_modalDialogUi);
	
	var _modalDialogIds = __webpack_require__(208);
	
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
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.unshiftIfNotExists = unshiftIfNotExists;
	
	var _react = __webpack_require__(179);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _modalDialogUi = __webpack_require__(206);
	
	var _modalDialogUi2 = _interopRequireDefault(_modalDialogUi);
	
	var _datasource = __webpack_require__(252);
	
	var Datasource = _interopRequireWildcard(_datasource);
	
	var _reactRedux = __webpack_require__(185);
	
	var _lodash = __webpack_require__(2);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _elements = __webpack_require__(207);
	
	var ui = _interopRequireWildcard(_elements);
	
	var _settingsForm = __webpack_require__(237);
	
	var _settingsForm2 = _interopRequireDefault(_settingsForm);
	
	var _reduxForm = __webpack_require__(238);
	
	var _modalDialogIds = __webpack_require__(208);
	
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
/* 252 */
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
	
	var _chai = __webpack_require__(253);
	
	var _datasourcePlugins = __webpack_require__(243);
	
	var DatasourcePlugins = _interopRequireWildcard(_datasourcePlugins);
	
	var _reducer = __webpack_require__(209);
	
	var _actionNames = __webpack_require__(204);
	
	var Action = _interopRequireWildcard(_actionNames);
	
	var _uuid = __webpack_require__(202);
	
	var Uuid = _interopRequireWildcard(_uuid);
	
	var _lodash = __webpack_require__(2);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _modalDialogIds = __webpack_require__(208);
	
	var ModalIds = _interopRequireWildcard(_modalDialogIds);
	
	var _modalDialog = __webpack_require__(205);
	
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
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(254);


/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	var used = []
	  , exports = module.exports = {};
	
	/*!
	 * Chai version
	 */
	
	exports.version = '3.5.0';
	
	/*!
	 * Assertion Error
	 */
	
	exports.AssertionError = __webpack_require__(255);
	
	/*!
	 * Utils for plugins (not exported)
	 */
	
	var util = __webpack_require__(256);
	
	/**
	 * # .use(function)
	 *
	 * Provides a way to extend the internals of Chai
	 *
	 * @param {Function}
	 * @returns {this} for chaining
	 * @api public
	 */
	
	exports.use = function (fn) {
	  if (!~used.indexOf(fn)) {
	    fn(this, util);
	    used.push(fn);
	  }
	
	  return this;
	};
	
	/*!
	 * Utility Functions
	 */
	
	exports.util = util;
	
	/*!
	 * Configuration
	 */
	
	var config = __webpack_require__(269);
	exports.config = config;
	
	/*!
	 * Primary `Assertion` prototype
	 */
	
	var assertion = __webpack_require__(288);
	exports.use(assertion);
	
	/*!
	 * Core Assertions
	 */
	
	var core = __webpack_require__(289);
	exports.use(core);
	
	/*!
	 * Expect interface
	 */
	
	var expect = __webpack_require__(290);
	exports.use(expect);
	
	/*!
	 * Should interface
	 */
	
	var should = __webpack_require__(291);
	exports.use(should);
	
	/*!
	 * Assert interface
	 */
	
	var assert = __webpack_require__(292);
	exports.use(assert);


/***/ },
/* 255 */
/***/ function(module, exports) {

	/*!
	 * assertion-error
	 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Return a function that will copy properties from
	 * one object to another excluding any originally
	 * listed. Returned function will create a new `{}`.
	 *
	 * @param {String} excluded properties ...
	 * @return {Function}
	 */
	
	function exclude () {
	  var excludes = [].slice.call(arguments);
	
	  function excludeProps (res, obj) {
	    Object.keys(obj).forEach(function (key) {
	      if (!~excludes.indexOf(key)) res[key] = obj[key];
	    });
	  }
	
	  return function extendExclude () {
	    var args = [].slice.call(arguments)
	      , i = 0
	      , res = {};
	
	    for (; i < args.length; i++) {
	      excludeProps(res, args[i]);
	    }
	
	    return res;
	  };
	};
	
	/*!
	 * Primary Exports
	 */
	
	module.exports = AssertionError;
	
	/**
	 * ### AssertionError
	 *
	 * An extension of the JavaScript `Error` constructor for
	 * assertion and validation scenarios.
	 *
	 * @param {String} message
	 * @param {Object} properties to include (optional)
	 * @param {callee} start stack function (optional)
	 */
	
	function AssertionError (message, _props, ssf) {
	  var extend = exclude('name', 'message', 'stack', 'constructor', 'toJSON')
	    , props = extend(_props || {});
	
	  // default values
	  this.message = message || 'Unspecified AssertionError';
	  this.showDiff = false;
	
	  // copy from properties
	  for (var key in props) {
	    this[key] = props[key];
	  }
	
	  // capture stack trace
	  ssf = ssf || arguments.callee;
	  if (ssf && Error.captureStackTrace) {
	    Error.captureStackTrace(this, ssf);
	  } else {
	    try {
	      throw new Error();
	    } catch(e) {
	      this.stack = e.stack;
	    }
	  }
	}
	
	/*!
	 * Inherit from Error.prototype
	 */
	
	AssertionError.prototype = Object.create(Error.prototype);
	
	/*!
	 * Statically set name
	 */
	
	AssertionError.prototype.name = 'AssertionError';
	
	/*!
	 * Ensure correct constructor
	 */
	
	AssertionError.prototype.constructor = AssertionError;
	
	/**
	 * Allow errors to be converted to JSON for static transfer.
	 *
	 * @param {Boolean} include stack (default: `true`)
	 * @return {Object} object that can be `JSON.stringify`
	 */
	
	AssertionError.prototype.toJSON = function (stack) {
	  var extend = exclude('constructor', 'toJSON', 'stack')
	    , props = extend({ name: this.name }, this);
	
	  // include stack if exists and not turned off
	  if (false !== stack && this.stack) {
	    props.stack = this.stack;
	  }
	
	  return props;
	};


/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Main exports
	 */
	
	var exports = module.exports = {};
	
	/*!
	 * test utility
	 */
	
	exports.test = __webpack_require__(257);
	
	/*!
	 * type utility
	 */
	
	exports.type = __webpack_require__(259);
	
	/*!
	 * expectTypes utility
	 */
	exports.expectTypes = __webpack_require__(261);
	
	/*!
	 * message utility
	 */
	
	exports.getMessage = __webpack_require__(262);
	
	/*!
	 * actual utility
	 */
	
	exports.getActual = __webpack_require__(263);
	
	/*!
	 * Inspect util
	 */
	
	exports.inspect = __webpack_require__(264);
	
	/*!
	 * Object Display util
	 */
	
	exports.objDisplay = __webpack_require__(268);
	
	/*!
	 * Flag utility
	 */
	
	exports.flag = __webpack_require__(258);
	
	/*!
	 * Flag transferring utility
	 */
	
	exports.transferFlags = __webpack_require__(270);
	
	/*!
	 * Deep equal utility
	 */
	
	exports.eql = __webpack_require__(271);
	
	/*!
	 * Deep path value
	 */
	
	exports.getPathValue = __webpack_require__(279);
	
	/*!
	 * Deep path info
	 */
	
	exports.getPathInfo = __webpack_require__(280);
	
	/*!
	 * Check if a property exists
	 */
	
	exports.hasProperty = __webpack_require__(281);
	
	/*!
	 * Function name
	 */
	
	exports.getName = __webpack_require__(265);
	
	/*!
	 * add Property
	 */
	
	exports.addProperty = __webpack_require__(282);
	
	/*!
	 * add Method
	 */
	
	exports.addMethod = __webpack_require__(283);
	
	/*!
	 * overwrite Property
	 */
	
	exports.overwriteProperty = __webpack_require__(284);
	
	/*!
	 * overwrite Method
	 */
	
	exports.overwriteMethod = __webpack_require__(285);
	
	/*!
	 * Add a chainable method
	 */
	
	exports.addChainableMethod = __webpack_require__(286);
	
	/*!
	 * Overwrite chainable method
	 */
	
	exports.overwriteChainableMethod = __webpack_require__(287);


/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - test utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Module dependancies
	 */
	
	var flag = __webpack_require__(258);
	
	/**
	 * # test(object, expression)
	 *
	 * Test and object for expression.
	 *
	 * @param {Object} object (constructed Assertion)
	 * @param {Arguments} chai.Assertion.prototype.assert arguments
	 * @namespace Utils
	 * @name test
	 */
	
	module.exports = function (obj, args) {
	  var negate = flag(obj, 'negate')
	    , expr = args[0];
	  return negate ? !expr : expr;
	};


/***/ },
/* 258 */
/***/ function(module, exports) {

	/*!
	 * Chai - flag utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### flag(object, key, [value])
	 *
	 * Get or set a flag value on an object. If a
	 * value is provided it will be set, else it will
	 * return the currently set value or `undefined` if
	 * the value is not set.
	 *
	 *     utils.flag(this, 'foo', 'bar'); // setter
	 *     utils.flag(this, 'foo'); // getter, returns `bar`
	 *
	 * @param {Object} object constructed Assertion
	 * @param {String} key
	 * @param {Mixed} value (optional)
	 * @namespace Utils
	 * @name flag
	 * @api private
	 */
	
	module.exports = function (obj, key, value) {
	  var flags = obj.__flags || (obj.__flags = Object.create(null));
	  if (arguments.length === 3) {
	    flags[key] = value;
	  } else {
	    return flags[key];
	  }
	};


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(260);


/***/ },
/* 260 */
/***/ function(module, exports) {

	/*!
	 * type-detect
	 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Primary Exports
	 */
	
	var exports = module.exports = getType;
	
	/**
	 * ### typeOf (obj)
	 *
	 * Use several different techniques to determine
	 * the type of object being tested.
	 *
	 *
	 * @param {Mixed} object
	 * @return {String} object type
	 * @api public
	 */
	var objectTypeRegexp = /^\[object (.*)\]$/;
	
	function getType(obj) {
	  var type = Object.prototype.toString.call(obj).match(objectTypeRegexp)[1].toLowerCase();
	  // Let "new String('')" return 'object'
	  if (typeof Promise === 'function' && obj instanceof Promise) return 'promise';
	  // PhantomJS has type "DOMWindow" for null
	  if (obj === null) return 'null';
	  // PhantomJS has type "DOMWindow" for undefined
	  if (obj === undefined) return 'undefined';
	  return type;
	}
	
	exports.Library = Library;
	
	/**
	 * ### Library
	 *
	 * Create a repository for custom type detection.
	 *
	 * ```js
	 * var lib = new type.Library;
	 * ```
	 *
	 */
	
	function Library() {
	  if (!(this instanceof Library)) return new Library();
	  this.tests = {};
	}
	
	/**
	 * #### .of (obj)
	 *
	 * Expose replacement `typeof` detection to the library.
	 *
	 * ```js
	 * if ('string' === lib.of('hello world')) {
	 *   // ...
	 * }
	 * ```
	 *
	 * @param {Mixed} object to test
	 * @return {String} type
	 */
	
	Library.prototype.of = getType;
	
	/**
	 * #### .define (type, test)
	 *
	 * Add a test to for the `.test()` assertion.
	 *
	 * Can be defined as a regular expression:
	 *
	 * ```js
	 * lib.define('int', /^[0-9]+$/);
	 * ```
	 *
	 * ... or as a function:
	 *
	 * ```js
	 * lib.define('bln', function (obj) {
	 *   if ('boolean' === lib.of(obj)) return true;
	 *   var blns = [ 'yes', 'no', 'true', 'false', 1, 0 ];
	 *   if ('string' === lib.of(obj)) obj = obj.toLowerCase();
	 *   return !! ~blns.indexOf(obj);
	 * });
	 * ```
	 *
	 * @param {String} type
	 * @param {RegExp|Function} test
	 * @api public
	 */
	
	Library.prototype.define = function(type, test) {
	  if (arguments.length === 1) return this.tests[type];
	  this.tests[type] = test;
	  return this;
	};
	
	/**
	 * #### .test (obj, test)
	 *
	 * Assert that an object is of type. Will first
	 * check natives, and if that does not pass it will
	 * use the user defined custom tests.
	 *
	 * ```js
	 * assert(lib.test('1', 'int'));
	 * assert(lib.test('yes', 'bln'));
	 * ```
	 *
	 * @param {Mixed} object
	 * @param {String} type
	 * @return {Boolean} result
	 * @api public
	 */
	
	Library.prototype.test = function(obj, type) {
	  if (type === getType(obj)) return true;
	  var test = this.tests[type];
	
	  if (test && 'regexp' === getType(test)) {
	    return test.test(obj);
	  } else if (test && 'function' === getType(test)) {
	    return test(obj);
	  } else {
	    throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
	  }
	};


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - expectTypes utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### expectTypes(obj, types)
	 *
	 * Ensures that the object being tested against is of a valid type.
	 *
	 *     utils.expectTypes(this, ['array', 'object', 'string']);
	 *
	 * @param {Mixed} obj constructed Assertion
	 * @param {Array} type A list of allowed types for this assertion
	 * @namespace Utils
	 * @name expectTypes
	 * @api public
	 */
	
	var AssertionError = __webpack_require__(255);
	var flag = __webpack_require__(258);
	var type = __webpack_require__(259);
	
	module.exports = function (obj, types) {
	  var obj = flag(obj, 'object');
	  types = types.map(function (t) { return t.toLowerCase(); });
	  types.sort();
	
	  // Transforms ['lorem', 'ipsum'] into 'a lirum, or an ipsum'
	  var str = types.map(function (t, index) {
	    var art = ~[ 'a', 'e', 'i', 'o', 'u' ].indexOf(t.charAt(0)) ? 'an' : 'a';
	    var or = types.length > 1 && index === types.length - 1 ? 'or ' : '';
	    return or + art + ' ' + t;
	  }).join(', ');
	
	  if (!types.some(function (expected) { return type(obj) === expected; })) {
	    throw new AssertionError(
	      'object tested must be ' + str + ', but ' + type(obj) + ' given'
	    );
	  }
	};


/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - message composition utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Module dependancies
	 */
	
	var flag = __webpack_require__(258)
	  , getActual = __webpack_require__(263)
	  , inspect = __webpack_require__(264)
	  , objDisplay = __webpack_require__(268);
	
	/**
	 * ### .getMessage(object, message, negateMessage)
	 *
	 * Construct the error message based on flags
	 * and template tags. Template tags will return
	 * a stringified inspection of the object referenced.
	 *
	 * Message template tags:
	 * - `#{this}` current asserted object
	 * - `#{act}` actual value
	 * - `#{exp}` expected value
	 *
	 * @param {Object} object (constructed Assertion)
	 * @param {Arguments} chai.Assertion.prototype.assert arguments
	 * @namespace Utils
	 * @name getMessage
	 * @api public
	 */
	
	module.exports = function (obj, args) {
	  var negate = flag(obj, 'negate')
	    , val = flag(obj, 'object')
	    , expected = args[3]
	    , actual = getActual(obj, args)
	    , msg = negate ? args[2] : args[1]
	    , flagMsg = flag(obj, 'message');
	
	  if(typeof msg === "function") msg = msg();
	  msg = msg || '';
	  msg = msg
	    .replace(/#\{this\}/g, function () { return objDisplay(val); })
	    .replace(/#\{act\}/g, function () { return objDisplay(actual); })
	    .replace(/#\{exp\}/g, function () { return objDisplay(expected); });
	
	  return flagMsg ? flagMsg + ': ' + msg : msg;
	};


/***/ },
/* 263 */
/***/ function(module, exports) {

	/*!
	 * Chai - getActual utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * # getActual(object, [actual])
	 *
	 * Returns the `actual` value for an Assertion
	 *
	 * @param {Object} object (constructed Assertion)
	 * @param {Arguments} chai.Assertion.prototype.assert arguments
	 * @namespace Utils
	 * @name getActual
	 */
	
	module.exports = function (obj, args) {
	  return args.length > 4 ? args[4] : obj._obj;
	};


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	// This is (almost) directly from Node.js utils
	// https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/util.js
	
	var getName = __webpack_require__(265);
	var getProperties = __webpack_require__(266);
	var getEnumerableProperties = __webpack_require__(267);
	
	module.exports = inspect;
	
	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Boolean} showHidden Flag that shows hidden (not enumerable)
	 *    properties of objects.
	 * @param {Number} depth Depth in which to descend in object. Default is 2.
	 * @param {Boolean} colors Flag to turn on ANSI escape codes to color the
	 *    output. Default is false (no coloring).
	 * @namespace Utils
	 * @name inspect
	 */
	function inspect(obj, showHidden, depth, colors) {
	  var ctx = {
	    showHidden: showHidden,
	    seen: [],
	    stylize: function (str) { return str; }
	  };
	  return formatValue(ctx, obj, (typeof depth === 'undefined' ? 2 : depth));
	}
	
	// Returns true if object is a DOM element.
	var isDOMElement = function (object) {
	  if (typeof HTMLElement === 'object') {
	    return object instanceof HTMLElement;
	  } else {
	    return object &&
	      typeof object === 'object' &&
	      object.nodeType === 1 &&
	      typeof object.nodeName === 'string';
	  }
	};
	
	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (value && typeof value.inspect === 'function' &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes);
	    if (typeof ret !== 'string') {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }
	
	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }
	
	  // If this is a DOM element, try to get the outer HTML.
	  if (isDOMElement(value)) {
	    if ('outerHTML' in value) {
	      return value.outerHTML;
	      // This value does not have an outerHTML attribute,
	      //   it could still be an XML element
	    } else {
	      // Attempt to serialize it
	      try {
	        if (document.xmlVersion) {
	          var xmlSerializer = new XMLSerializer();
	          return xmlSerializer.serializeToString(value);
	        } else {
	          // Firefox 11- do not support outerHTML
	          //   It does, however, support innerHTML
	          //   Use the following to render the element
	          var ns = "http://www.w3.org/1999/xhtml";
	          var container = document.createElementNS(ns, '_');
	
	          container.appendChild(value.cloneNode(false));
	          html = container.innerHTML
	            .replace('><', '>' + value.innerHTML + '<');
	          container.innerHTML = '';
	          return html;
	        }
	      } catch (err) {
	        // This could be a non-native DOM implementation,
	        //   continue with the normal flow:
	        //   printing the element as if it is an object.
	      }
	    }
	  }
	
	  // Look up the keys of the object.
	  var visibleKeys = getEnumerableProperties(value);
	  var keys = ctx.showHidden ? getProperties(value) : visibleKeys;
	
	  // Some type of object without properties can be shortcutted.
	  // In IE, errors have a single `stack` property, or if they are vanilla `Error`,
	  // a `stack` plus `description` property; ignore those for consistency.
	  if (keys.length === 0 || (isError(value) && (
	      (keys.length === 1 && keys[0] === 'stack') ||
	      (keys.length === 2 && keys[0] === 'description' && keys[1] === 'stack')
	     ))) {
	    if (typeof value === 'function') {
	      var name = getName(value);
	      var nameSuffix = name ? ': ' + name : '';
	      return ctx.stylize('[Function' + nameSuffix + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toUTCString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }
	
	  var base = '', array = false, braces = ['{', '}'];
	
	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }
	
	  // Make functions say that they are functions
	  if (typeof value === 'function') {
	    var name = getName(value);
	    var nameSuffix = name ? ': ' + name : '';
	    base = ' [Function' + nameSuffix + ']';
	  }
	
	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }
	
	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }
	
	  // Make error with message first say the error
	  if (isError(value)) {
	    return formatError(value);
	  }
	
	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }
	
	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }
	
	  ctx.seen.push(value);
	
	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }
	
	  ctx.seen.pop();
	
	  return reduceToSingleString(output, base, braces);
	}
	
	
	function formatPrimitive(ctx, value) {
	  switch (typeof value) {
	    case 'undefined':
	      return ctx.stylize('undefined', 'undefined');
	
	    case 'string':
	      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                               .replace(/'/g, "\\'")
	                                               .replace(/\\"/g, '"') + '\'';
	      return ctx.stylize(simple, 'string');
	
	    case 'number':
	      if (value === 0 && (1/value) === -Infinity) {
	        return ctx.stylize('-0', 'number');
	      }
	      return ctx.stylize('' + value, 'number');
	
	    case 'boolean':
	      return ctx.stylize('' + value, 'boolean');
	  }
	  // For some reason typeof null is "object", so special case here.
	  if (value === null) {
	    return ctx.stylize('null', 'null');
	  }
	}
	
	
	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}
	
	
	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (Object.prototype.hasOwnProperty.call(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}
	
	
	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str;
	  if (value.__lookupGetter__) {
	    if (value.__lookupGetter__(key)) {
	      if (value.__lookupSetter__(key)) {
	        str = ctx.stylize('[Getter/Setter]', 'special');
	      } else {
	        str = ctx.stylize('[Getter]', 'special');
	      }
	    } else {
	      if (value.__lookupSetter__(key)) {
	        str = ctx.stylize('[Setter]', 'special');
	      }
	    }
	  }
	  if (visibleKeys.indexOf(key) < 0) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(value[key]) < 0) {
	      if (recurseTimes === null) {
	        str = formatValue(ctx, value[key], null);
	      } else {
	        str = formatValue(ctx, value[key], recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (typeof name === 'undefined') {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }
	
	  return name + ': ' + str;
	}
	
	
	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.length + 1;
	  }, 0);
	
	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }
	
	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}
	
	function isArray(ar) {
	  return Array.isArray(ar) ||
	         (typeof ar === 'object' && objectToString(ar) === '[object Array]');
	}
	
	function isRegExp(re) {
	  return typeof re === 'object' && objectToString(re) === '[object RegExp]';
	}
	
	function isDate(d) {
	  return typeof d === 'object' && objectToString(d) === '[object Date]';
	}
	
	function isError(e) {
	  return typeof e === 'object' && objectToString(e) === '[object Error]';
	}
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


/***/ },
/* 265 */
/***/ function(module, exports) {

	/*!
	 * Chai - getName utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * # getName(func)
	 *
	 * Gets the name of a function, in a cross-browser way.
	 *
	 * @param {Function} a function (usually a constructor)
	 * @namespace Utils
	 * @name getName
	 */
	
	module.exports = function (func) {
	  if (func.name) return func.name;
	
	  var match = /^\s?function ([^(]*)\(/.exec(func);
	  return match && match[1] ? match[1] : "";
	};


/***/ },
/* 266 */
/***/ function(module, exports) {

	/*!
	 * Chai - getProperties utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### .getProperties(object)
	 *
	 * This allows the retrieval of property names of an object, enumerable or not,
	 * inherited or not.
	 *
	 * @param {Object} object
	 * @returns {Array}
	 * @namespace Utils
	 * @name getProperties
	 * @api public
	 */
	
	module.exports = function getProperties(object) {
	  var result = Object.getOwnPropertyNames(object);
	
	  function addProperty(property) {
	    if (result.indexOf(property) === -1) {
	      result.push(property);
	    }
	  }
	
	  var proto = Object.getPrototypeOf(object);
	  while (proto !== null) {
	    Object.getOwnPropertyNames(proto).forEach(addProperty);
	    proto = Object.getPrototypeOf(proto);
	  }
	
	  return result;
	};


/***/ },
/* 267 */
/***/ function(module, exports) {

	/*!
	 * Chai - getEnumerableProperties utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### .getEnumerableProperties(object)
	 *
	 * This allows the retrieval of enumerable property names of an object,
	 * inherited or not.
	 *
	 * @param {Object} object
	 * @returns {Array}
	 * @namespace Utils
	 * @name getEnumerableProperties
	 * @api public
	 */
	
	module.exports = function getEnumerableProperties(object) {
	  var result = [];
	  for (var name in object) {
	    result.push(name);
	  }
	  return result;
	};


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - flag utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Module dependancies
	 */
	
	var inspect = __webpack_require__(264);
	var config = __webpack_require__(269);
	
	/**
	 * ### .objDisplay (object)
	 *
	 * Determines if an object or an array matches
	 * criteria to be inspected in-line for error
	 * messages or should be truncated.
	 *
	 * @param {Mixed} javascript object to inspect
	 * @name objDisplay
	 * @namespace Utils
	 * @api public
	 */
	
	module.exports = function (obj) {
	  var str = inspect(obj)
	    , type = Object.prototype.toString.call(obj);
	
	  if (config.truncateThreshold && str.length >= config.truncateThreshold) {
	    if (type === '[object Function]') {
	      return !obj.name || obj.name === ''
	        ? '[Function]'
	        : '[Function: ' + obj.name + ']';
	    } else if (type === '[object Array]') {
	      return '[ Array(' + obj.length + ') ]';
	    } else if (type === '[object Object]') {
	      var keys = Object.keys(obj)
	        , kstr = keys.length > 2
	          ? keys.splice(0, 2).join(', ') + ', ...'
	          : keys.join(', ');
	      return '{ Object (' + kstr + ') }';
	    } else {
	      return str;
	    }
	  } else {
	    return str;
	  }
	};


/***/ },
/* 269 */
/***/ function(module, exports) {

	module.exports = {
	
	  /**
	   * ### config.includeStack
	   *
	   * User configurable property, influences whether stack trace
	   * is included in Assertion error message. Default of false
	   * suppresses stack trace in the error message.
	   *
	   *     chai.config.includeStack = true;  // enable stack on error
	   *
	   * @param {Boolean}
	   * @api public
	   */
	
	   includeStack: false,
	
	  /**
	   * ### config.showDiff
	   *
	   * User configurable property, influences whether or not
	   * the `showDiff` flag should be included in the thrown
	   * AssertionErrors. `false` will always be `false`; `true`
	   * will be true when the assertion has requested a diff
	   * be shown.
	   *
	   * @param {Boolean}
	   * @api public
	   */
	
	  showDiff: true,
	
	  /**
	   * ### config.truncateThreshold
	   *
	   * User configurable property, sets length threshold for actual and
	   * expected values in assertion errors. If this threshold is exceeded, for
	   * example for large data structures, the value is replaced with something
	   * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
	   *
	   * Set it to zero if you want to disable truncating altogether.
	   *
	   * This is especially userful when doing assertions on arrays: having this
	   * set to a reasonable large value makes the failure messages readily
	   * inspectable.
	   *
	   *     chai.config.truncateThreshold = 0;  // disable truncating
	   *
	   * @param {Number}
	   * @api public
	   */
	
	  truncateThreshold: 40
	
	};


/***/ },
/* 270 */
/***/ function(module, exports) {

	/*!
	 * Chai - transferFlags utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### transferFlags(assertion, object, includeAll = true)
	 *
	 * Transfer all the flags for `assertion` to `object`. If
	 * `includeAll` is set to `false`, then the base Chai
	 * assertion flags (namely `object`, `ssfi`, and `message`)
	 * will not be transferred.
	 *
	 *
	 *     var newAssertion = new Assertion();
	 *     utils.transferFlags(assertion, newAssertion);
	 *
	 *     var anotherAsseriton = new Assertion(myObj);
	 *     utils.transferFlags(assertion, anotherAssertion, false);
	 *
	 * @param {Assertion} assertion the assertion to transfer the flags from
	 * @param {Object} object the object to transfer the flags to; usually a new assertion
	 * @param {Boolean} includeAll
	 * @namespace Utils
	 * @name transferFlags
	 * @api private
	 */
	
	module.exports = function (assertion, object, includeAll) {
	  var flags = assertion.__flags || (assertion.__flags = Object.create(null));
	
	  if (!object.__flags) {
	    object.__flags = Object.create(null);
	  }
	
	  includeAll = arguments.length === 3 ? includeAll : true;
	
	  for (var flag in flags) {
	    if (includeAll ||
	        (flag !== 'object' && flag !== 'ssfi' && flag != 'message')) {
	      object.__flags[flag] = flags[flag];
	    }
	  }
	};


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(272);


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * deep-eql
	 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Module dependencies
	 */
	
	var type = __webpack_require__(273);
	
	/*!
	 * Buffer.isBuffer browser shim
	 */
	
	var Buffer;
	try { Buffer = __webpack_require__(275).Buffer; }
	catch(ex) {
	  Buffer = {};
	  Buffer.isBuffer = function() { return false; }
	}
	
	/*!
	 * Primary Export
	 */
	
	module.exports = deepEqual;
	
	/**
	 * Assert super-strict (egal) equality between
	 * two objects of any type.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @param {Array} memoised (optional)
	 * @return {Boolean} equal match
	 */
	
	function deepEqual(a, b, m) {
	  if (sameValue(a, b)) {
	    return true;
	  } else if ('date' === type(a)) {
	    return dateEqual(a, b);
	  } else if ('regexp' === type(a)) {
	    return regexpEqual(a, b);
	  } else if (Buffer.isBuffer(a)) {
	    return bufferEqual(a, b);
	  } else if ('arguments' === type(a)) {
	    return argumentsEqual(a, b, m);
	  } else if (!typeEqual(a, b)) {
	    return false;
	  } else if (('object' !== type(a) && 'object' !== type(b))
	  && ('array' !== type(a) && 'array' !== type(b))) {
	    return sameValue(a, b);
	  } else {
	    return objectEqual(a, b, m);
	  }
	}
	
	/*!
	 * Strict (egal) equality test. Ensures that NaN always
	 * equals NaN and `-0` does not equal `+0`.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} equal match
	 */
	
	function sameValue(a, b) {
	  if (a === b) return a !== 0 || 1 / a === 1 / b;
	  return a !== a && b !== b;
	}
	
	/*!
	 * Compare the types of two given objects and
	 * return if they are equal. Note that an Array
	 * has a type of `array` (not `object`) and arguments
	 * have a type of `arguments` (not `array`/`object`).
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */
	
	function typeEqual(a, b) {
	  return type(a) === type(b);
	}
	
	/*!
	 * Compare two Date objects by asserting that
	 * the time values are equal using `saveValue`.
	 *
	 * @param {Date} a
	 * @param {Date} b
	 * @return {Boolean} result
	 */
	
	function dateEqual(a, b) {
	  if ('date' !== type(b)) return false;
	  return sameValue(a.getTime(), b.getTime());
	}
	
	/*!
	 * Compare two regular expressions by converting them
	 * to string and checking for `sameValue`.
	 *
	 * @param {RegExp} a
	 * @param {RegExp} b
	 * @return {Boolean} result
	 */
	
	function regexpEqual(a, b) {
	  if ('regexp' !== type(b)) return false;
	  return sameValue(a.toString(), b.toString());
	}
	
	/*!
	 * Assert deep equality of two `arguments` objects.
	 * Unfortunately, these must be sliced to arrays
	 * prior to test to ensure no bad behavior.
	 *
	 * @param {Arguments} a
	 * @param {Arguments} b
	 * @param {Array} memoize (optional)
	 * @return {Boolean} result
	 */
	
	function argumentsEqual(a, b, m) {
	  if ('arguments' !== type(b)) return false;
	  a = [].slice.call(a);
	  b = [].slice.call(b);
	  return deepEqual(a, b, m);
	}
	
	/*!
	 * Get enumerable properties of a given object.
	 *
	 * @param {Object} a
	 * @return {Array} property names
	 */
	
	function enumerable(a) {
	  var res = [];
	  for (var key in a) res.push(key);
	  return res;
	}
	
	/*!
	 * Simple equality for flat iterable objects
	 * such as Arrays or Node.js buffers.
	 *
	 * @param {Iterable} a
	 * @param {Iterable} b
	 * @return {Boolean} result
	 */
	
	function iterableEqual(a, b) {
	  if (a.length !==  b.length) return false;
	
	  var i = 0;
	  var match = true;
	
	  for (; i < a.length; i++) {
	    if (a[i] !== b[i]) {
	      match = false;
	      break;
	    }
	  }
	
	  return match;
	}
	
	/*!
	 * Extension to `iterableEqual` specifically
	 * for Node.js Buffers.
	 *
	 * @param {Buffer} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */
	
	function bufferEqual(a, b) {
	  if (!Buffer.isBuffer(b)) return false;
	  return iterableEqual(a, b);
	}
	
	/*!
	 * Block for `objectEqual` ensuring non-existing
	 * values don't get in.
	 *
	 * @param {Mixed} object
	 * @return {Boolean} result
	 */
	
	function isValue(a) {
	  return a !== null && a !== undefined;
	}
	
	/*!
	 * Recursively check the equality of two objects.
	 * Once basic sameness has been established it will
	 * defer to `deepEqual` for each enumerable key
	 * in the object.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */
	
	function objectEqual(a, b, m) {
	  if (!isValue(a) || !isValue(b)) {
	    return false;
	  }
	
	  if (a.prototype !== b.prototype) {
	    return false;
	  }
	
	  var i;
	  if (m) {
	    for (i = 0; i < m.length; i++) {
	      if ((m[i][0] === a && m[i][1] === b)
	      ||  (m[i][0] === b && m[i][1] === a)) {
	        return true;
	      }
	    }
	  } else {
	    m = [];
	  }
	
	  try {
	    var ka = enumerable(a);
	    var kb = enumerable(b);
	  } catch (ex) {
	    return false;
	  }
	
	  ka.sort();
	  kb.sort();
	
	  if (!iterableEqual(ka, kb)) {
	    return false;
	  }
	
	  m.push([ a, b ]);
	
	  var key;
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], m)) {
	      return false;
	    }
	  }
	
	  return true;
	}


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(274);


/***/ },
/* 274 */
/***/ function(module, exports) {

	/*!
	 * type-detect
	 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Primary Exports
	 */
	
	var exports = module.exports = getType;
	
	/*!
	 * Detectable javascript natives
	 */
	
	var natives = {
	    '[object Array]': 'array'
	  , '[object RegExp]': 'regexp'
	  , '[object Function]': 'function'
	  , '[object Arguments]': 'arguments'
	  , '[object Date]': 'date'
	};
	
	/**
	 * ### typeOf (obj)
	 *
	 * Use several different techniques to determine
	 * the type of object being tested.
	 *
	 *
	 * @param {Mixed} object
	 * @return {String} object type
	 * @api public
	 */
	
	function getType (obj) {
	  var str = Object.prototype.toString.call(obj);
	  if (natives[str]) return natives[str];
	  if (obj === null) return 'null';
	  if (obj === undefined) return 'undefined';
	  if (obj === Object(obj)) return 'object';
	  return typeof obj;
	}
	
	exports.Library = Library;
	
	/**
	 * ### Library
	 *
	 * Create a repository for custom type detection.
	 *
	 * ```js
	 * var lib = new type.Library;
	 * ```
	 *
	 */
	
	function Library () {
	  this.tests = {};
	}
	
	/**
	 * #### .of (obj)
	 *
	 * Expose replacement `typeof` detection to the library.
	 *
	 * ```js
	 * if ('string' === lib.of('hello world')) {
	 *   // ...
	 * }
	 * ```
	 *
	 * @param {Mixed} object to test
	 * @return {String} type
	 */
	
	Library.prototype.of = getType;
	
	/**
	 * #### .define (type, test)
	 *
	 * Add a test to for the `.test()` assertion.
	 *
	 * Can be defined as a regular expression:
	 *
	 * ```js
	 * lib.define('int', /^[0-9]+$/);
	 * ```
	 *
	 * ... or as a function:
	 *
	 * ```js
	 * lib.define('bln', function (obj) {
	 *   if ('boolean' === lib.of(obj)) return true;
	 *   var blns = [ 'yes', 'no', 'true', 'false', 1, 0 ];
	 *   if ('string' === lib.of(obj)) obj = obj.toLowerCase();
	 *   return !! ~blns.indexOf(obj);
	 * });
	 * ```
	 *
	 * @param {String} type
	 * @param {RegExp|Function} test
	 * @api public
	 */
	
	Library.prototype.define = function (type, test) {
	  if (arguments.length === 1) return this.tests[type];
	  this.tests[type] = test;
	  return this;
	};
	
	/**
	 * #### .test (obj, test)
	 *
	 * Assert that an object is of type. Will first
	 * check natives, and if that does not pass it will
	 * use the user defined custom tests.
	 *
	 * ```js
	 * assert(lib.test('1', 'int'));
	 * assert(lib.test('yes', 'bln'));
	 * ```
	 *
	 * @param {Mixed} object
	 * @param {String} type
	 * @return {Boolean} result
	 * @api public
	 */
	
	Library.prototype.test = function (obj, type) {
	  if (type === getType(obj)) return true;
	  var test = this.tests[type];
	
	  if (test && 'regexp' === getType(test)) {
	    return test.test(obj);
	  } else if (test && 'function' === getType(test)) {
	    return test(obj);
	  } else {
	    throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
	  }
	};


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict'
	
	var base64 = __webpack_require__(276)
	var ieee754 = __webpack_require__(277)
	var isArray = __webpack_require__(278)
	
	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	Buffer.poolSize = 8192 // not used by this implementation
	
	var rootParent = {}
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
	 *     on objects.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.
	
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()
	
	function typedArraySupport () {
	  function Bar () {}
	  try {
	    var arr = new Uint8Array(1)
	    arr.foo = function () { return 42 }
	    arr.constructor = Bar
	    return arr.foo() === 42 && // typed array instances can be augmented
	        arr.constructor === Bar && // constructor can be set
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}
	
	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}
	
	/**
	 * Class: Buffer
	 * =============
	 *
	 * The Buffer constructor returns instances of `Uint8Array` that are augmented
	 * with function properties for all the node `Buffer` API functions. We use
	 * `Uint8Array` so that square bracket notation works as expected -- it returns
	 * a single octet.
	 *
	 * By augmenting the instances, we can avoid modifying the `Uint8Array`
	 * prototype.
	 */
	function Buffer (arg) {
	  if (!(this instanceof Buffer)) {
	    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
	    if (arguments.length > 1) return new Buffer(arg, arguments[1])
	    return new Buffer(arg)
	  }
	
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    this.length = 0
	    this.parent = undefined
	  }
	
	  // Common case.
	  if (typeof arg === 'number') {
	    return fromNumber(this, arg)
	  }
	
	  // Slightly less common case.
	  if (typeof arg === 'string') {
	    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
	  }
	
	  // Unusual.
	  return fromObject(this, arg)
	}
	
	function fromNumber (that, length) {
	  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < length; i++) {
	      that[i] = 0
	    }
	  }
	  return that
	}
	
	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'
	
	  // Assumption: byteLength() return value is always < kMaxLength.
	  var length = byteLength(string, encoding) | 0
	  that = allocate(that, length)
	
	  that.write(string, encoding)
	  return that
	}
	
	function fromObject (that, object) {
	  if (Buffer.isBuffer(object)) return fromBuffer(that, object)
	
	  if (isArray(object)) return fromArray(that, object)
	
	  if (object == null) {
	    throw new TypeError('must start with number, buffer, array or string')
	  }
	
	  if (typeof ArrayBuffer !== 'undefined') {
	    if (object.buffer instanceof ArrayBuffer) {
	      return fromTypedArray(that, object)
	    }
	    if (object instanceof ArrayBuffer) {
	      return fromArrayBuffer(that, object)
	    }
	  }
	
	  if (object.length) return fromArrayLike(that, object)
	
	  return fromJsonObject(that, object)
	}
	
	function fromBuffer (that, buffer) {
	  var length = checked(buffer.length) | 0
	  that = allocate(that, length)
	  buffer.copy(that, 0, 0, length)
	  return that
	}
	
	function fromArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	// Duplicate of fromArray() to keep fromArray() monomorphic.
	function fromTypedArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  // Truncating the elements is probably not what people expect from typed
	  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
	  // of the old Buffer constructor.
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	function fromArrayBuffer (that, array) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    array.byteLength
	    that = Buffer._augment(new Uint8Array(array))
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromTypedArray(that, new Uint8Array(array))
	  }
	  return that
	}
	
	function fromArrayLike (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
	// Returns a zero-length buffer for inputs that don't conform to the spec.
	function fromJsonObject (that, object) {
	  var array
	  var length = 0
	
	  if (object.type === 'Buffer' && isArray(object.data)) {
	    array = object.data
	    length = checked(array.length) | 0
	  }
	  that = allocate(that, length)
	
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	} else {
	  // pre-set for values that may exist in the future
	  Buffer.prototype.length = undefined
	  Buffer.prototype.parent = undefined
	}
	
	function allocate (that, length) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = Buffer._augment(new Uint8Array(length))
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that.length = length
	    that._isBuffer = true
	  }
	
	  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
	  if (fromPool) that.parent = rootParent
	
	  return that
	}
	
	function checked (length) {
	  // Note: cannot use `length < kMaxLength` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	
	function SlowBuffer (subject, encoding) {
	  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)
	
	  var buf = new Buffer(subject, encoding)
	  delete buf.parent
	  return buf
	}
	
	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}
	
	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }
	
	  if (a === b) return 0
	
	  var x = a.length
	  var y = b.length
	
	  var i = 0
	  var len = Math.min(x, y)
	  while (i < len) {
	    if (a[i] !== b[i]) break
	
	    ++i
	  }
	
	  if (i !== len) {
	    x = a[i]
	    y = b[i]
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'binary':
	    case 'base64':
	    case 'raw':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')
	
	  if (list.length === 0) {
	    return new Buffer(0)
	  }
	
	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; i++) {
	      length += list[i].length
	    }
	  }
	
	  var buf = new Buffer(length)
	  var pos = 0
	  for (i = 0; i < list.length; i++) {
	    var item = list[i]
	    item.copy(buf, pos)
	    pos += item.length
	  }
	  return buf
	}
	
	function byteLength (string, encoding) {
	  if (typeof string !== 'string') string = '' + string
	
	  var len = string.length
	  if (len === 0) return 0
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'binary':
	      // Deprecated
	      case 'raw':
	      case 'raws':
	        return len
	      case 'utf8':
	      case 'utf-8':
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength
	
	function slowToString (encoding, start, end) {
	  var loweredCase = false
	
	  start = start | 0
	  end = end === undefined || end === Infinity ? this.length : end | 0
	
	  if (!encoding) encoding = 'utf8'
	  if (start < 0) start = 0
	  if (end > this.length) end = this.length
	  if (end <= start) return ''
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'binary':
	        return binarySlice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}
	
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}
	
	Buffer.prototype.compare = function compare (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return 0
	  return Buffer.compare(this, b)
	}
	
	Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
	  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
	  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
	  byteOffset >>= 0
	
	  if (this.length === 0) return -1
	  if (byteOffset >= this.length) return -1
	
	  // Negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)
	
	  if (typeof val === 'string') {
	    if (val.length === 0) return -1 // special case: looking for empty string always fails
	    return String.prototype.indexOf.call(this, val, byteOffset)
	  }
	  if (Buffer.isBuffer(val)) {
	    return arrayIndexOf(this, val, byteOffset)
	  }
	  if (typeof val === 'number') {
	    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
	      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
	    }
	    return arrayIndexOf(this, [ val ], byteOffset)
	  }
	
	  function arrayIndexOf (arr, val, byteOffset) {
	    var foundIndex = -1
	    for (var i = 0; byteOffset + i < arr.length; i++) {
	      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
	      } else {
	        foundIndex = -1
	      }
	    }
	    return -1
	  }
	
	  throw new TypeError('val must be string, number or Buffer')
	}
	
	// `get` is deprecated
	Buffer.prototype.get = function get (offset) {
	  console.log('.get() is deprecated. Access using array indexes instead.')
	  return this.readUInt8(offset)
	}
	
	// `set` is deprecated
	Buffer.prototype.set = function set (v, offset) {
	  console.log('.set() is deprecated. Access using array indexes instead.')
	  return this.writeUInt8(v, offset)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new Error('Invalid hex string')
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; i++) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) throw new Error('Invalid hex string')
	    buf[offset + i] = parsed
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	
	function binaryWrite (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    var swap = encoding
	    encoding = offset
	    offset = length | 0
	    length = swap
	  }
	
	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining
	
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('attempt to write outside buffer bounds')
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	
	      case 'ascii':
	        return asciiWrite(this, string, offset, length)
	
	      case 'binary':
	        return binaryWrite(this, string, offset, length)
	
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []
	
	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }
	
	    res.push(codePoint)
	    i += bytesPerSequence
	  }
	
	  return decodeCodePointsArray(res)
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000
	
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}
	
	function binarySlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; i++) {
	    out += toHex(buf[i])
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}
	
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start) end = start
	
	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = Buffer._augment(this.subarray(start, end))
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; i++) {
	      newBuf[i] = this[i + start]
	    }
	  }
	
	  if (newBuf.length) newBuf.parent = this.parent || this
	
	  return newBuf
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }
	
	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}
	
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)
	
	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)
	
	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = 0
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	  if (offset < 0) throw new RangeError('index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	
	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }
	
	  var len = end - start
	  var i
	
	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; i--) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; i++) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    target._set(this.subarray(start, start + len), targetStart)
	  }
	
	  return len
	}
	
	// fill(value, start=0, end=buffer.length)
	Buffer.prototype.fill = function fill (value, start, end) {
	  if (!value) value = 0
	  if (!start) start = 0
	  if (!end) end = this.length
	
	  if (end < start) throw new RangeError('end < start')
	
	  // Fill 0 bytes; we're done
	  if (end === start) return
	  if (this.length === 0) return
	
	  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
	  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')
	
	  var i
	  if (typeof value === 'number') {
	    for (i = start; i < end; i++) {
	      this[i] = value
	    }
	  } else {
	    var bytes = utf8ToBytes(value.toString())
	    var len = bytes.length
	    for (i = start; i < end; i++) {
	      this[i] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	/**
	 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
	 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
	 */
	Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
	  if (typeof Uint8Array !== 'undefined') {
	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      return (new Buffer(this)).buffer
	    } else {
	      var buf = new Uint8Array(this.length)
	      for (var i = 0, len = buf.length; i < len; i += 1) {
	        buf[i] = this[i]
	      }
	      return buf.buffer
	    }
	  } else {
	    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
	  }
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var BP = Buffer.prototype
	
	/**
	 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
	 */
	Buffer._augment = function _augment (arr) {
	  arr.constructor = Buffer
	  arr._isBuffer = true
	
	  // save reference to original Uint8Array set method before overwriting
	  arr._set = arr.set
	
	  // deprecated
	  arr.get = BP.get
	  arr.set = BP.set
	
	  arr.write = BP.write
	  arr.toString = BP.toString
	  arr.toLocaleString = BP.toString
	  arr.toJSON = BP.toJSON
	  arr.equals = BP.equals
	  arr.compare = BP.compare
	  arr.indexOf = BP.indexOf
	  arr.copy = BP.copy
	  arr.slice = BP.slice
	  arr.readUIntLE = BP.readUIntLE
	  arr.readUIntBE = BP.readUIntBE
	  arr.readUInt8 = BP.readUInt8
	  arr.readUInt16LE = BP.readUInt16LE
	  arr.readUInt16BE = BP.readUInt16BE
	  arr.readUInt32LE = BP.readUInt32LE
	  arr.readUInt32BE = BP.readUInt32BE
	  arr.readIntLE = BP.readIntLE
	  arr.readIntBE = BP.readIntBE
	  arr.readInt8 = BP.readInt8
	  arr.readInt16LE = BP.readInt16LE
	  arr.readInt16BE = BP.readInt16BE
	  arr.readInt32LE = BP.readInt32LE
	  arr.readInt32BE = BP.readInt32BE
	  arr.readFloatLE = BP.readFloatLE
	  arr.readFloatBE = BP.readFloatBE
	  arr.readDoubleLE = BP.readDoubleLE
	  arr.readDoubleBE = BP.readDoubleBE
	  arr.writeUInt8 = BP.writeUInt8
	  arr.writeUIntLE = BP.writeUIntLE
	  arr.writeUIntBE = BP.writeUIntBE
	  arr.writeUInt16LE = BP.writeUInt16LE
	  arr.writeUInt16BE = BP.writeUInt16BE
	  arr.writeUInt32LE = BP.writeUInt32LE
	  arr.writeUInt32BE = BP.writeUInt32BE
	  arr.writeIntLE = BP.writeIntLE
	  arr.writeIntBE = BP.writeIntBE
	  arr.writeInt8 = BP.writeInt8
	  arr.writeInt16LE = BP.writeInt16LE
	  arr.writeInt16BE = BP.writeInt16BE
	  arr.writeInt32LE = BP.writeInt32LE
	  arr.writeInt32BE = BP.writeInt32BE
	  arr.writeFloatLE = BP.writeFloatLE
	  arr.writeFloatBE = BP.writeFloatBE
	  arr.writeDoubleLE = BP.writeDoubleLE
	  arr.writeDoubleBE = BP.writeDoubleBE
	  arr.fill = BP.fill
	  arr.inspect = BP.inspect
	  arr.toArrayBuffer = BP.toArrayBuffer
	
	  return arr
	}
	
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
	
	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	
	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	
	  for (var i = 0; i < length; i++) {
	    codePoint = string.charCodeAt(i)
	
	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }
	
	        // valid lead
	        leadSurrogate = codePoint
	
	        continue
	      }
	
	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }
	
	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }
	
	    leadSurrogate = null
	
	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	
	  return bytes
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    if ((units -= 2) < 0) break
	
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; i++) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(275).Buffer, (function() { return this; }())))

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	
	;(function (exports) {
		'use strict';
	
	  var Arr = (typeof Uint8Array !== 'undefined')
	    ? Uint8Array
	    : Array
	
		var PLUS   = '+'.charCodeAt(0)
		var SLASH  = '/'.charCodeAt(0)
		var NUMBER = '0'.charCodeAt(0)
		var LOWER  = 'a'.charCodeAt(0)
		var UPPER  = 'A'.charCodeAt(0)
		var PLUS_URL_SAFE = '-'.charCodeAt(0)
		var SLASH_URL_SAFE = '_'.charCodeAt(0)
	
		function decode (elt) {
			var code = elt.charCodeAt(0)
			if (code === PLUS ||
			    code === PLUS_URL_SAFE)
				return 62 // '+'
			if (code === SLASH ||
			    code === SLASH_URL_SAFE)
				return 63 // '/'
			if (code < NUMBER)
				return -1 //no match
			if (code < NUMBER + 10)
				return code - NUMBER + 26 + 26
			if (code < UPPER + 26)
				return code - UPPER
			if (code < LOWER + 26)
				return code - LOWER + 26
		}
	
		function b64ToByteArray (b64) {
			var i, j, l, tmp, placeHolders, arr
	
			if (b64.length % 4 > 0) {
				throw new Error('Invalid string. Length must be a multiple of 4')
			}
	
			// the number of equal signs (place holders)
			// if there are two placeholders, than the two characters before it
			// represent one byte
			// if there is only one, then the three characters before it represent 2 bytes
			// this is just a cheap hack to not do indexOf twice
			var len = b64.length
			placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0
	
			// base64 is 4/3 + up to two characters of the original data
			arr = new Arr(b64.length * 3 / 4 - placeHolders)
	
			// if there are placeholders, only get up to the last complete 4 chars
			l = placeHolders > 0 ? b64.length - 4 : b64.length
	
			var L = 0
	
			function push (v) {
				arr[L++] = v
			}
	
			for (i = 0, j = 0; i < l; i += 4, j += 3) {
				tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
				push((tmp & 0xFF0000) >> 16)
				push((tmp & 0xFF00) >> 8)
				push(tmp & 0xFF)
			}
	
			if (placeHolders === 2) {
				tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
				push(tmp & 0xFF)
			} else if (placeHolders === 1) {
				tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
				push((tmp >> 8) & 0xFF)
				push(tmp & 0xFF)
			}
	
			return arr
		}
	
		function uint8ToBase64 (uint8) {
			var i,
				extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
				output = "",
				temp, length
	
			function encode (num) {
				return lookup.charAt(num)
			}
	
			function tripletToBase64 (num) {
				return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
			}
	
			// go through the array every three bytes, we'll deal with trailing stuff later
			for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
				temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
				output += tripletToBase64(temp)
			}
	
			// pad the end with zeros, but make sure to not forget the extra bytes
			switch (extraBytes) {
				case 1:
					temp = uint8[uint8.length - 1]
					output += encode(temp >> 2)
					output += encode((temp << 4) & 0x3F)
					output += '=='
					break
				case 2:
					temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
					output += encode(temp >> 10)
					output += encode((temp >> 4) & 0x3F)
					output += encode((temp << 2) & 0x3F)
					output += '='
					break
			}
	
			return output
		}
	
		exports.toByteArray = b64ToByteArray
		exports.fromByteArray = uint8ToBase64
	}( false ? (this.base64js = {}) : exports))


/***/ },
/* 277 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]
	
	  i += d
	
	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}
	
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
	
	  value = Math.abs(value)
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 278 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getPathValue utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * @see https://github.com/logicalparadox/filtr
	 * MIT Licensed
	 */
	
	var getPathInfo = __webpack_require__(280);
	
	/**
	 * ### .getPathValue(path, object)
	 *
	 * This allows the retrieval of values in an
	 * object given a string path.
	 *
	 *     var obj = {
	 *         prop1: {
	 *             arr: ['a', 'b', 'c']
	 *           , str: 'Hello'
	 *         }
	 *       , prop2: {
	 *             arr: [ { nested: 'Universe' } ]
	 *           , str: 'Hello again!'
	 *         }
	 *     }
	 *
	 * The following would be the results.
	 *
	 *     getPathValue('prop1.str', obj); // Hello
	 *     getPathValue('prop1.att[2]', obj); // b
	 *     getPathValue('prop2.arr[0].nested', obj); // Universe
	 *
	 * @param {String} path
	 * @param {Object} object
	 * @returns {Object} value or `undefined`
	 * @namespace Utils
	 * @name getPathValue
	 * @api public
	 */
	module.exports = function(path, obj) {
	  var info = getPathInfo(path, obj);
	  return info.value;
	};


/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getPathInfo utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	var hasProperty = __webpack_require__(281);
	
	/**
	 * ### .getPathInfo(path, object)
	 *
	 * This allows the retrieval of property info in an
	 * object given a string path.
	 *
	 * The path info consists of an object with the
	 * following properties:
	 *
	 * * parent - The parent object of the property referenced by `path`
	 * * name - The name of the final property, a number if it was an array indexer
	 * * value - The value of the property, if it exists, otherwise `undefined`
	 * * exists - Whether the property exists or not
	 *
	 * @param {String} path
	 * @param {Object} object
	 * @returns {Object} info
	 * @namespace Utils
	 * @name getPathInfo
	 * @api public
	 */
	
	module.exports = function getPathInfo(path, obj) {
	  var parsed = parsePath(path),
	      last = parsed[parsed.length - 1];
	
	  var info = {
	    parent: parsed.length > 1 ? _getPathValue(parsed, obj, parsed.length - 1) : obj,
	    name: last.p || last.i,
	    value: _getPathValue(parsed, obj)
	  };
	  info.exists = hasProperty(info.name, info.parent);
	
	  return info;
	};
	
	
	/*!
	 * ## parsePath(path)
	 *
	 * Helper function used to parse string object
	 * paths. Use in conjunction with `_getPathValue`.
	 *
	 *      var parsed = parsePath('myobject.property.subprop');
	 *
	 * ### Paths:
	 *
	 * * Can be as near infinitely deep and nested
	 * * Arrays are also valid using the formal `myobject.document[3].property`.
	 * * Literal dots and brackets (not delimiter) must be backslash-escaped.
	 *
	 * @param {String} path
	 * @returns {Object} parsed
	 * @api private
	 */
	
	function parsePath (path) {
	  var str = path.replace(/([^\\])\[/g, '$1.[')
	    , parts = str.match(/(\\\.|[^.]+?)+/g);
	  return parts.map(function (value) {
	    var re = /^\[(\d+)\]$/
	      , mArr = re.exec(value);
	    if (mArr) return { i: parseFloat(mArr[1]) };
	    else return { p: value.replace(/\\([.\[\]])/g, '$1') };
	  });
	}
	
	
	/*!
	 * ## _getPathValue(parsed, obj)
	 *
	 * Helper companion function for `.parsePath` that returns
	 * the value located at the parsed address.
	 *
	 *      var value = getPathValue(parsed, obj);
	 *
	 * @param {Object} parsed definition from `parsePath`.
	 * @param {Object} object to search against
	 * @param {Number} object to search against
	 * @returns {Object|Undefined} value
	 * @api private
	 */
	
	function _getPathValue (parsed, obj, index) {
	  var tmp = obj
	    , res;
	
	  index = (index === undefined ? parsed.length : index);
	
	  for (var i = 0, l = index; i < l; i++) {
	    var part = parsed[i];
	    if (tmp) {
	      if ('undefined' !== typeof part.p)
	        tmp = tmp[part.p];
	      else if ('undefined' !== typeof part.i)
	        tmp = tmp[part.i];
	      if (i == (l - 1)) res = tmp;
	    } else {
	      res = undefined;
	    }
	  }
	  return res;
	}


/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - hasProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	var type = __webpack_require__(259);
	
	/**
	 * ### .hasProperty(object, name)
	 *
	 * This allows checking whether an object has
	 * named property or numeric array index.
	 *
	 * Basically does the same thing as the `in`
	 * operator but works properly with natives
	 * and null/undefined values.
	 *
	 *     var obj = {
	 *         arr: ['a', 'b', 'c']
	 *       , str: 'Hello'
	 *     }
	 *
	 * The following would be the results.
	 *
	 *     hasProperty('str', obj);  // true
	 *     hasProperty('constructor', obj);  // true
	 *     hasProperty('bar', obj);  // false
	 *
	 *     hasProperty('length', obj.str); // true
	 *     hasProperty(1, obj.str);  // true
	 *     hasProperty(5, obj.str);  // false
	 *
	 *     hasProperty('length', obj.arr);  // true
	 *     hasProperty(2, obj.arr);  // true
	 *     hasProperty(3, obj.arr);  // false
	 *
	 * @param {Objuect} object
	 * @param {String|Number} name
	 * @returns {Boolean} whether it exists
	 * @namespace Utils
	 * @name getPathInfo
	 * @api public
	 */
	
	var literals = {
	    'number': Number
	  , 'string': String
	};
	
	module.exports = function hasProperty(name, obj) {
	  var ot = type(obj);
	
	  // Bad Object, obviously no props at all
	  if(ot === 'null' || ot === 'undefined')
	    return false;
	
	  // The `in` operator does not work with certain literals
	  // box these before the check
	  if(literals[ot] && typeof obj !== 'object')
	    obj = new literals[ot](obj);
	
	  return name in obj;
	};


/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - addProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	var config = __webpack_require__(269);
	var flag = __webpack_require__(258);
	
	/**
	 * ### addProperty (ctx, name, getter)
	 *
	 * Adds a property to the prototype of an object.
	 *
	 *     utils.addProperty(chai.Assertion.prototype, 'foo', function () {
	 *       var obj = utils.flag(this, 'object');
	 *       new chai.Assertion(obj).to.be.instanceof(Foo);
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.addProperty('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.be.foo;
	 *
	 * @param {Object} ctx object to which the property is added
	 * @param {String} name of property to add
	 * @param {Function} getter function to be used for name
	 * @namespace Utils
	 * @name addProperty
	 * @api public
	 */
	
	module.exports = function (ctx, name, getter) {
	  Object.defineProperty(ctx, name,
	    { get: function addProperty() {
	        var old_ssfi = flag(this, 'ssfi');
	        if (old_ssfi && config.includeStack === false)
	          flag(this, 'ssfi', addProperty);
	
	        var result = getter.call(this);
	        return result === undefined ? this : result;
	      }
	    , configurable: true
	  });
	};


/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - addMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	var config = __webpack_require__(269);
	
	/**
	 * ### .addMethod (ctx, name, method)
	 *
	 * Adds a method to the prototype of an object.
	 *
	 *     utils.addMethod(chai.Assertion.prototype, 'foo', function (str) {
	 *       var obj = utils.flag(this, 'object');
	 *       new chai.Assertion(obj).to.be.equal(str);
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.addMethod('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(fooStr).to.be.foo('bar');
	 *
	 * @param {Object} ctx object to which the method is added
	 * @param {String} name of method to add
	 * @param {Function} method function to be used for name
	 * @namespace Utils
	 * @name addMethod
	 * @api public
	 */
	var flag = __webpack_require__(258);
	
	module.exports = function (ctx, name, method) {
	  ctx[name] = function () {
	    var old_ssfi = flag(this, 'ssfi');
	    if (old_ssfi && config.includeStack === false)
	      flag(this, 'ssfi', ctx[name]);
	    var result = method.apply(this, arguments);
	    return result === undefined ? this : result;
	  };
	};


/***/ },
/* 284 */
/***/ function(module, exports) {

	/*!
	 * Chai - overwriteProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### overwriteProperty (ctx, name, fn)
	 *
	 * Overwites an already existing property getter and provides
	 * access to previous value. Must return function to use as getter.
	 *
	 *     utils.overwriteProperty(chai.Assertion.prototype, 'ok', function (_super) {
	 *       return function () {
	 *         var obj = utils.flag(this, 'object');
	 *         if (obj instanceof Foo) {
	 *           new chai.Assertion(obj.name).to.equal('bar');
	 *         } else {
	 *           _super.call(this);
	 *         }
	 *       }
	 *     });
	 *
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.overwriteProperty('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.be.ok;
	 *
	 * @param {Object} ctx object whose property is to be overwritten
	 * @param {String} name of property to overwrite
	 * @param {Function} getter function that returns a getter function to be used for name
	 * @namespace Utils
	 * @name overwriteProperty
	 * @api public
	 */
	
	module.exports = function (ctx, name, getter) {
	  var _get = Object.getOwnPropertyDescriptor(ctx, name)
	    , _super = function () {};
	
	  if (_get && 'function' === typeof _get.get)
	    _super = _get.get
	
	  Object.defineProperty(ctx, name,
	    { get: function () {
	        var result = getter(_super).call(this);
	        return result === undefined ? this : result;
	      }
	    , configurable: true
	  });
	};


/***/ },
/* 285 */
/***/ function(module, exports) {

	/*!
	 * Chai - overwriteMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### overwriteMethod (ctx, name, fn)
	 *
	 * Overwites an already existing method and provides
	 * access to previous function. Must return function
	 * to be used for name.
	 *
	 *     utils.overwriteMethod(chai.Assertion.prototype, 'equal', function (_super) {
	 *       return function (str) {
	 *         var obj = utils.flag(this, 'object');
	 *         if (obj instanceof Foo) {
	 *           new chai.Assertion(obj.value).to.equal(str);
	 *         } else {
	 *           _super.apply(this, arguments);
	 *         }
	 *       }
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.overwriteMethod('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.equal('bar');
	 *
	 * @param {Object} ctx object whose method is to be overwritten
	 * @param {String} name of method to overwrite
	 * @param {Function} method function that returns a function to be used for name
	 * @namespace Utils
	 * @name overwriteMethod
	 * @api public
	 */
	
	module.exports = function (ctx, name, method) {
	  var _method = ctx[name]
	    , _super = function () { return this; };
	
	  if (_method && 'function' === typeof _method)
	    _super = _method;
	
	  ctx[name] = function () {
	    var result = method(_super).apply(this, arguments);
	    return result === undefined ? this : result;
	  }
	};


/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - addChainingMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Module dependencies
	 */
	
	var transferFlags = __webpack_require__(270);
	var flag = __webpack_require__(258);
	var config = __webpack_require__(269);
	
	/*!
	 * Module variables
	 */
	
	// Check whether `__proto__` is supported
	var hasProtoSupport = '__proto__' in Object;
	
	// Without `__proto__` support, this module will need to add properties to a function.
	// However, some Function.prototype methods cannot be overwritten,
	// and there seems no easy cross-platform way to detect them (@see chaijs/chai/issues/69).
	var excludeNames = /^(?:length|name|arguments|caller)$/;
	
	// Cache `Function` properties
	var call  = Function.prototype.call,
	    apply = Function.prototype.apply;
	
	/**
	 * ### addChainableMethod (ctx, name, method, chainingBehavior)
	 *
	 * Adds a method to an object, such that the method can also be chained.
	 *
	 *     utils.addChainableMethod(chai.Assertion.prototype, 'foo', function (str) {
	 *       var obj = utils.flag(this, 'object');
	 *       new chai.Assertion(obj).to.be.equal(str);
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.addChainableMethod('foo', fn, chainingBehavior);
	 *
	 * The result can then be used as both a method assertion, executing both `method` and
	 * `chainingBehavior`, or as a language chain, which only executes `chainingBehavior`.
	 *
	 *     expect(fooStr).to.be.foo('bar');
	 *     expect(fooStr).to.be.foo.equal('foo');
	 *
	 * @param {Object} ctx object to which the method is added
	 * @param {String} name of method to add
	 * @param {Function} method function to be used for `name`, when called
	 * @param {Function} chainingBehavior function to be called every time the property is accessed
	 * @namespace Utils
	 * @name addChainableMethod
	 * @api public
	 */
	
	module.exports = function (ctx, name, method, chainingBehavior) {
	  if (typeof chainingBehavior !== 'function') {
	    chainingBehavior = function () { };
	  }
	
	  var chainableBehavior = {
	      method: method
	    , chainingBehavior: chainingBehavior
	  };
	
	  // save the methods so we can overwrite them later, if we need to.
	  if (!ctx.__methods) {
	    ctx.__methods = {};
	  }
	  ctx.__methods[name] = chainableBehavior;
	
	  Object.defineProperty(ctx, name,
	    { get: function () {
	        chainableBehavior.chainingBehavior.call(this);
	
	        var assert = function assert() {
	          var old_ssfi = flag(this, 'ssfi');
	          if (old_ssfi && config.includeStack === false)
	            flag(this, 'ssfi', assert);
	          var result = chainableBehavior.method.apply(this, arguments);
	          return result === undefined ? this : result;
	        };
	
	        // Use `__proto__` if available
	        if (hasProtoSupport) {
	          // Inherit all properties from the object by replacing the `Function` prototype
	          var prototype = assert.__proto__ = Object.create(this);
	          // Restore the `call` and `apply` methods from `Function`
	          prototype.call = call;
	          prototype.apply = apply;
	        }
	        // Otherwise, redefine all properties (slow!)
	        else {
	          var asserterNames = Object.getOwnPropertyNames(ctx);
	          asserterNames.forEach(function (asserterName) {
	            if (!excludeNames.test(asserterName)) {
	              var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
	              Object.defineProperty(assert, asserterName, pd);
	            }
	          });
	        }
	
	        transferFlags(this, assert);
	        return assert;
	      }
	    , configurable: true
	  });
	};


/***/ },
/* 287 */
/***/ function(module, exports) {

	/*!
	 * Chai - overwriteChainableMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### overwriteChainableMethod (ctx, name, method, chainingBehavior)
	 *
	 * Overwites an already existing chainable method
	 * and provides access to the previous function or
	 * property.  Must return functions to be used for
	 * name.
	 *
	 *     utils.overwriteChainableMethod(chai.Assertion.prototype, 'length',
	 *       function (_super) {
	 *       }
	 *     , function (_super) {
	 *       }
	 *     );
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.overwriteChainableMethod('foo', fn, fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.have.length(3);
	 *     expect(myFoo).to.have.length.above(3);
	 *
	 * @param {Object} ctx object whose method / property is to be overwritten
	 * @param {String} name of method / property to overwrite
	 * @param {Function} method function that returns a function to be used for name
	 * @param {Function} chainingBehavior function that returns a function to be used for property
	 * @namespace Utils
	 * @name overwriteChainableMethod
	 * @api public
	 */
	
	module.exports = function (ctx, name, method, chainingBehavior) {
	  var chainableBehavior = ctx.__methods[name];
	
	  var _chainingBehavior = chainableBehavior.chainingBehavior;
	  chainableBehavior.chainingBehavior = function () {
	    var result = chainingBehavior(_chainingBehavior).call(this);
	    return result === undefined ? this : result;
	  };
	
	  var _method = chainableBehavior.method;
	  chainableBehavior.method = function () {
	    var result = method(_method).apply(this, arguments);
	    return result === undefined ? this : result;
	  };
	};


/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * http://chaijs.com
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	var config = __webpack_require__(269);
	
	module.exports = function (_chai, util) {
	  /*!
	   * Module dependencies.
	   */
	
	  var AssertionError = _chai.AssertionError
	    , flag = util.flag;
	
	  /*!
	   * Module export.
	   */
	
	  _chai.Assertion = Assertion;
	
	  /*!
	   * Assertion Constructor
	   *
	   * Creates object for chaining.
	   *
	   * @api private
	   */
	
	  function Assertion (obj, msg, stack) {
	    flag(this, 'ssfi', stack || arguments.callee);
	    flag(this, 'object', obj);
	    flag(this, 'message', msg);
	  }
	
	  Object.defineProperty(Assertion, 'includeStack', {
	    get: function() {
	      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
	      return config.includeStack;
	    },
	    set: function(value) {
	      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
	      config.includeStack = value;
	    }
	  });
	
	  Object.defineProperty(Assertion, 'showDiff', {
	    get: function() {
	      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
	      return config.showDiff;
	    },
	    set: function(value) {
	      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
	      config.showDiff = value;
	    }
	  });
	
	  Assertion.addProperty = function (name, fn) {
	    util.addProperty(this.prototype, name, fn);
	  };
	
	  Assertion.addMethod = function (name, fn) {
	    util.addMethod(this.prototype, name, fn);
	  };
	
	  Assertion.addChainableMethod = function (name, fn, chainingBehavior) {
	    util.addChainableMethod(this.prototype, name, fn, chainingBehavior);
	  };
	
	  Assertion.overwriteProperty = function (name, fn) {
	    util.overwriteProperty(this.prototype, name, fn);
	  };
	
	  Assertion.overwriteMethod = function (name, fn) {
	    util.overwriteMethod(this.prototype, name, fn);
	  };
	
	  Assertion.overwriteChainableMethod = function (name, fn, chainingBehavior) {
	    util.overwriteChainableMethod(this.prototype, name, fn, chainingBehavior);
	  };
	
	  /**
	   * ### .assert(expression, message, negateMessage, expected, actual, showDiff)
	   *
	   * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn't pass.
	   *
	   * @name assert
	   * @param {Philosophical} expression to be tested
	   * @param {String|Function} message or function that returns message to display if expression fails
	   * @param {String|Function} negatedMessage or function that returns negatedMessage to display if negated expression fails
	   * @param {Mixed} expected value (remember to check for negation)
	   * @param {Mixed} actual (optional) will default to `this.obj`
	   * @param {Boolean} showDiff (optional) when set to `true`, assert will display a diff in addition to the message if expression fails
	   * @api private
	   */
	
	  Assertion.prototype.assert = function (expr, msg, negateMsg, expected, _actual, showDiff) {
	    var ok = util.test(this, arguments);
	    if (true !== showDiff) showDiff = false;
	    if (true !== config.showDiff) showDiff = false;
	
	    if (!ok) {
	      var msg = util.getMessage(this, arguments)
	        , actual = util.getActual(this, arguments);
	      throw new AssertionError(msg, {
	          actual: actual
	        , expected: expected
	        , showDiff: showDiff
	      }, (config.includeStack) ? this.assert : flag(this, 'ssfi'));
	    }
	  };
	
	  /*!
	   * ### ._obj
	   *
	   * Quick reference to stored `actual` value for plugin developers.
	   *
	   * @api private
	   */
	
	  Object.defineProperty(Assertion.prototype, '_obj',
	    { get: function () {
	        return flag(this, 'object');
	      }
	    , set: function (val) {
	        flag(this, 'object', val);
	      }
	  });
	};


/***/ },
/* 289 */
/***/ function(module, exports) {

	/*!
	 * chai
	 * http://chaijs.com
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	module.exports = function (chai, _) {
	  var Assertion = chai.Assertion
	    , toString = Object.prototype.toString
	    , flag = _.flag;
	
	  /**
	   * ### Language Chains
	   *
	   * The following are provided as chainable getters to
	   * improve the readability of your assertions. They
	   * do not provide testing capabilities unless they
	   * have been overwritten by a plugin.
	   *
	   * **Chains**
	   *
	   * - to
	   * - be
	   * - been
	   * - is
	   * - that
	   * - which
	   * - and
	   * - has
	   * - have
	   * - with
	   * - at
	   * - of
	   * - same
	   *
	   * @name language chains
	   * @namespace BDD
	   * @api public
	   */
	
	  [ 'to', 'be', 'been'
	  , 'is', 'and', 'has', 'have'
	  , 'with', 'that', 'which', 'at'
	  , 'of', 'same' ].forEach(function (chain) {
	    Assertion.addProperty(chain, function () {
	      return this;
	    });
	  });
	
	  /**
	   * ### .not
	   *
	   * Negates any of assertions following in the chain.
	   *
	   *     expect(foo).to.not.equal('bar');
	   *     expect(goodFn).to.not.throw(Error);
	   *     expect({ foo: 'baz' }).to.have.property('foo')
	   *       .and.not.equal('bar');
	   *
	   * @name not
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('not', function () {
	    flag(this, 'negate', true);
	  });
	
	  /**
	   * ### .deep
	   *
	   * Sets the `deep` flag, later used by the `equal` and
	   * `property` assertions.
	   *
	   *     expect(foo).to.deep.equal({ bar: 'baz' });
	   *     expect({ foo: { bar: { baz: 'quux' } } })
	   *       .to.have.deep.property('foo.bar.baz', 'quux');
	   *
	   * `.deep.property` special characters can be escaped
	   * by adding two slashes before the `.` or `[]`.
	   *
	   *     var deepCss = { '.link': { '[target]': 42 }};
	   *     expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);
	   *
	   * @name deep
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('deep', function () {
	    flag(this, 'deep', true);
	  });
	
	  /**
	   * ### .any
	   *
	   * Sets the `any` flag, (opposite of the `all` flag)
	   * later used in the `keys` assertion.
	   *
	   *     expect(foo).to.have.any.keys('bar', 'baz');
	   *
	   * @name any
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('any', function () {
	    flag(this, 'any', true);
	    flag(this, 'all', false)
	  });
	
	
	  /**
	   * ### .all
	   *
	   * Sets the `all` flag (opposite of the `any` flag)
	   * later used by the `keys` assertion.
	   *
	   *     expect(foo).to.have.all.keys('bar', 'baz');
	   *
	   * @name all
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('all', function () {
	    flag(this, 'all', true);
	    flag(this, 'any', false);
	  });
	
	  /**
	   * ### .a(type)
	   *
	   * The `a` and `an` assertions are aliases that can be
	   * used either as language chains or to assert a value's
	   * type.
	   *
	   *     // typeof
	   *     expect('test').to.be.a('string');
	   *     expect({ foo: 'bar' }).to.be.an('object');
	   *     expect(null).to.be.a('null');
	   *     expect(undefined).to.be.an('undefined');
	   *     expect(new Error).to.be.an('error');
	   *     expect(new Promise).to.be.a('promise');
	   *     expect(new Float32Array()).to.be.a('float32array');
	   *     expect(Symbol()).to.be.a('symbol');
	   *
	   *     // es6 overrides
	   *     expect({[Symbol.toStringTag]:()=>'foo'}).to.be.a('foo');
	   *
	   *     // language chain
	   *     expect(foo).to.be.an.instanceof(Foo);
	   *
	   * @name a
	   * @alias an
	   * @param {String} type
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function an (type, msg) {
	    if (msg) flag(this, 'message', msg);
	    type = type.toLowerCase();
	    var obj = flag(this, 'object')
	      , article = ~[ 'a', 'e', 'i', 'o', 'u' ].indexOf(type.charAt(0)) ? 'an ' : 'a ';
	
	    this.assert(
	        type === _.type(obj)
	      , 'expected #{this} to be ' + article + type
	      , 'expected #{this} not to be ' + article + type
	    );
	  }
	
	  Assertion.addChainableMethod('an', an);
	  Assertion.addChainableMethod('a', an);
	
	  /**
	   * ### .include(value)
	   *
	   * The `include` and `contain` assertions can be used as either property
	   * based language chains or as methods to assert the inclusion of an object
	   * in an array or a substring in a string. When used as language chains,
	   * they toggle the `contains` flag for the `keys` assertion.
	   *
	   *     expect([1,2,3]).to.include(2);
	   *     expect('foobar').to.contain('foo');
	   *     expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
	   *
	   * @name include
	   * @alias contain
	   * @alias includes
	   * @alias contains
	   * @param {Object|String|Number} obj
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function includeChainingBehavior () {
	    flag(this, 'contains', true);
	  }
	
	  function include (val, msg) {
	    _.expectTypes(this, ['array', 'object', 'string']);
	
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    var expected = false;
	
	    if (_.type(obj) === 'array' && _.type(val) === 'object') {
	      for (var i in obj) {
	        if (_.eql(obj[i], val)) {
	          expected = true;
	          break;
	        }
	      }
	    } else if (_.type(val) === 'object') {
	      if (!flag(this, 'negate')) {
	        for (var k in val) new Assertion(obj).property(k, val[k]);
	        return;
	      }
	      var subset = {};
	      for (var k in val) subset[k] = obj[k];
	      expected = _.eql(subset, val);
	    } else {
	      expected = (obj != undefined) && ~obj.indexOf(val);
	    }
	    this.assert(
	        expected
	      , 'expected #{this} to include ' + _.inspect(val)
	      , 'expected #{this} to not include ' + _.inspect(val));
	  }
	
	  Assertion.addChainableMethod('include', include, includeChainingBehavior);
	  Assertion.addChainableMethod('contain', include, includeChainingBehavior);
	  Assertion.addChainableMethod('contains', include, includeChainingBehavior);
	  Assertion.addChainableMethod('includes', include, includeChainingBehavior);
	
	  /**
	   * ### .ok
	   *
	   * Asserts that the target is truthy.
	   *
	   *     expect('everything').to.be.ok;
	   *     expect(1).to.be.ok;
	   *     expect(false).to.not.be.ok;
	   *     expect(undefined).to.not.be.ok;
	   *     expect(null).to.not.be.ok;
	   *
	   * @name ok
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('ok', function () {
	    this.assert(
	        flag(this, 'object')
	      , 'expected #{this} to be truthy'
	      , 'expected #{this} to be falsy');
	  });
	
	  /**
	   * ### .true
	   *
	   * Asserts that the target is `true`.
	   *
	   *     expect(true).to.be.true;
	   *     expect(1).to.not.be.true;
	   *
	   * @name true
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('true', function () {
	    this.assert(
	        true === flag(this, 'object')
	      , 'expected #{this} to be true'
	      , 'expected #{this} to be false'
	      , this.negate ? false : true
	    );
	  });
	
	  /**
	   * ### .false
	   *
	   * Asserts that the target is `false`.
	   *
	   *     expect(false).to.be.false;
	   *     expect(0).to.not.be.false;
	   *
	   * @name false
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('false', function () {
	    this.assert(
	        false === flag(this, 'object')
	      , 'expected #{this} to be false'
	      , 'expected #{this} to be true'
	      , this.negate ? true : false
	    );
	  });
	
	  /**
	   * ### .null
	   *
	   * Asserts that the target is `null`.
	   *
	   *     expect(null).to.be.null;
	   *     expect(undefined).to.not.be.null;
	   *
	   * @name null
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('null', function () {
	    this.assert(
	        null === flag(this, 'object')
	      , 'expected #{this} to be null'
	      , 'expected #{this} not to be null'
	    );
	  });
	
	  /**
	   * ### .undefined
	   *
	   * Asserts that the target is `undefined`.
	   *
	   *     expect(undefined).to.be.undefined;
	   *     expect(null).to.not.be.undefined;
	   *
	   * @name undefined
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('undefined', function () {
	    this.assert(
	        undefined === flag(this, 'object')
	      , 'expected #{this} to be undefined'
	      , 'expected #{this} not to be undefined'
	    );
	  });
	
	  /**
	   * ### .NaN
	   * Asserts that the target is `NaN`.
	   *
	   *     expect('foo').to.be.NaN;
	   *     expect(4).not.to.be.NaN;
	   *
	   * @name NaN
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('NaN', function () {
	    this.assert(
	        isNaN(flag(this, 'object'))
	        , 'expected #{this} to be NaN'
	        , 'expected #{this} not to be NaN'
	    );
	  });
	
	  /**
	   * ### .exist
	   *
	   * Asserts that the target is neither `null` nor `undefined`.
	   *
	   *     var foo = 'hi'
	   *       , bar = null
	   *       , baz;
	   *
	   *     expect(foo).to.exist;
	   *     expect(bar).to.not.exist;
	   *     expect(baz).to.not.exist;
	   *
	   * @name exist
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('exist', function () {
	    this.assert(
	        null != flag(this, 'object')
	      , 'expected #{this} to exist'
	      , 'expected #{this} to not exist'
	    );
	  });
	
	
	  /**
	   * ### .empty
	   *
	   * Asserts that the target's length is `0`. For arrays and strings, it checks
	   * the `length` property. For objects, it gets the count of
	   * enumerable keys.
	   *
	   *     expect([]).to.be.empty;
	   *     expect('').to.be.empty;
	   *     expect({}).to.be.empty;
	   *
	   * @name empty
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('empty', function () {
	    var obj = flag(this, 'object')
	      , expected = obj;
	
	    if (Array.isArray(obj) || 'string' === typeof object) {
	      expected = obj.length;
	    } else if (typeof obj === 'object') {
	      expected = Object.keys(obj).length;
	    }
	
	    this.assert(
	        !expected
	      , 'expected #{this} to be empty'
	      , 'expected #{this} not to be empty'
	    );
	  });
	
	  /**
	   * ### .arguments
	   *
	   * Asserts that the target is an arguments object.
	   *
	   *     function test () {
	   *       expect(arguments).to.be.arguments;
	   *     }
	   *
	   * @name arguments
	   * @alias Arguments
	   * @namespace BDD
	   * @api public
	   */
	
	  function checkArguments () {
	    var obj = flag(this, 'object')
	      , type = Object.prototype.toString.call(obj);
	    this.assert(
	        '[object Arguments]' === type
	      , 'expected #{this} to be arguments but got ' + type
	      , 'expected #{this} to not be arguments'
	    );
	  }
	
	  Assertion.addProperty('arguments', checkArguments);
	  Assertion.addProperty('Arguments', checkArguments);
	
	  /**
	   * ### .equal(value)
	   *
	   * Asserts that the target is strictly equal (`===`) to `value`.
	   * Alternately, if the `deep` flag is set, asserts that
	   * the target is deeply equal to `value`.
	   *
	   *     expect('hello').to.equal('hello');
	   *     expect(42).to.equal(42);
	   *     expect(1).to.not.equal(true);
	   *     expect({ foo: 'bar' }).to.not.equal({ foo: 'bar' });
	   *     expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });
	   *
	   * @name equal
	   * @alias equals
	   * @alias eq
	   * @alias deep.equal
	   * @param {Mixed} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertEqual (val, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'deep')) {
	      return this.eql(val);
	    } else {
	      this.assert(
	          val === obj
	        , 'expected #{this} to equal #{exp}'
	        , 'expected #{this} to not equal #{exp}'
	        , val
	        , this._obj
	        , true
	      );
	    }
	  }
	
	  Assertion.addMethod('equal', assertEqual);
	  Assertion.addMethod('equals', assertEqual);
	  Assertion.addMethod('eq', assertEqual);
	
	  /**
	   * ### .eql(value)
	   *
	   * Asserts that the target is deeply equal to `value`.
	   *
	   *     expect({ foo: 'bar' }).to.eql({ foo: 'bar' });
	   *     expect([ 1, 2, 3 ]).to.eql([ 1, 2, 3 ]);
	   *
	   * @name eql
	   * @alias eqls
	   * @param {Mixed} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertEql(obj, msg) {
	    if (msg) flag(this, 'message', msg);
	    this.assert(
	        _.eql(obj, flag(this, 'object'))
	      , 'expected #{this} to deeply equal #{exp}'
	      , 'expected #{this} to not deeply equal #{exp}'
	      , obj
	      , this._obj
	      , true
	    );
	  }
	
	  Assertion.addMethod('eql', assertEql);
	  Assertion.addMethod('eqls', assertEql);
	
	  /**
	   * ### .above(value)
	   *
	   * Asserts that the target is greater than `value`.
	   *
	   *     expect(10).to.be.above(5);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a minimum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.above(2);
	   *     expect([ 1, 2, 3 ]).to.have.length.above(2);
	   *
	   * @name above
	   * @alias gt
	   * @alias greaterThan
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertAbove (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len > n
	        , 'expected #{this} to have a length above #{exp} but got #{act}'
	        , 'expected #{this} to not have a length above #{exp}'
	        , n
	        , len
	      );
	    } else {
	      this.assert(
	          obj > n
	        , 'expected #{this} to be above ' + n
	        , 'expected #{this} to be at most ' + n
	      );
	    }
	  }
	
	  Assertion.addMethod('above', assertAbove);
	  Assertion.addMethod('gt', assertAbove);
	  Assertion.addMethod('greaterThan', assertAbove);
	
	  /**
	   * ### .least(value)
	   *
	   * Asserts that the target is greater than or equal to `value`.
	   *
	   *     expect(10).to.be.at.least(10);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a minimum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.of.at.least(2);
	   *     expect([ 1, 2, 3 ]).to.have.length.of.at.least(3);
	   *
	   * @name least
	   * @alias gte
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertLeast (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len >= n
	        , 'expected #{this} to have a length at least #{exp} but got #{act}'
	        , 'expected #{this} to have a length below #{exp}'
	        , n
	        , len
	      );
	    } else {
	      this.assert(
	          obj >= n
	        , 'expected #{this} to be at least ' + n
	        , 'expected #{this} to be below ' + n
	      );
	    }
	  }
	
	  Assertion.addMethod('least', assertLeast);
	  Assertion.addMethod('gte', assertLeast);
	
	  /**
	   * ### .below(value)
	   *
	   * Asserts that the target is less than `value`.
	   *
	   *     expect(5).to.be.below(10);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a maximum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.below(4);
	   *     expect([ 1, 2, 3 ]).to.have.length.below(4);
	   *
	   * @name below
	   * @alias lt
	   * @alias lessThan
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertBelow (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len < n
	        , 'expected #{this} to have a length below #{exp} but got #{act}'
	        , 'expected #{this} to not have a length below #{exp}'
	        , n
	        , len
	      );
	    } else {
	      this.assert(
	          obj < n
	        , 'expected #{this} to be below ' + n
	        , 'expected #{this} to be at least ' + n
	      );
	    }
	  }
	
	  Assertion.addMethod('below', assertBelow);
	  Assertion.addMethod('lt', assertBelow);
	  Assertion.addMethod('lessThan', assertBelow);
	
	  /**
	   * ### .most(value)
	   *
	   * Asserts that the target is less than or equal to `value`.
	   *
	   *     expect(5).to.be.at.most(5);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a maximum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.of.at.most(4);
	   *     expect([ 1, 2, 3 ]).to.have.length.of.at.most(3);
	   *
	   * @name most
	   * @alias lte
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertMost (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len <= n
	        , 'expected #{this} to have a length at most #{exp} but got #{act}'
	        , 'expected #{this} to have a length above #{exp}'
	        , n
	        , len
	      );
	    } else {
	      this.assert(
	          obj <= n
	        , 'expected #{this} to be at most ' + n
	        , 'expected #{this} to be above ' + n
	      );
	    }
	  }
	
	  Assertion.addMethod('most', assertMost);
	  Assertion.addMethod('lte', assertMost);
	
	  /**
	   * ### .within(start, finish)
	   *
	   * Asserts that the target is within a range.
	   *
	   *     expect(7).to.be.within(5,10);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a length range. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.within(2,4);
	   *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
	   *
	   * @name within
	   * @param {Number} start lowerbound inclusive
	   * @param {Number} finish upperbound inclusive
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addMethod('within', function (start, finish, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object')
	      , range = start + '..' + finish;
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len >= start && len <= finish
	        , 'expected #{this} to have a length within ' + range
	        , 'expected #{this} to not have a length within ' + range
	      );
	    } else {
	      this.assert(
	          obj >= start && obj <= finish
	        , 'expected #{this} to be within ' + range
	        , 'expected #{this} to not be within ' + range
	      );
	    }
	  });
	
	  /**
	   * ### .instanceof(constructor)
	   *
	   * Asserts that the target is an instance of `constructor`.
	   *
	   *     var Tea = function (name) { this.name = name; }
	   *       , Chai = new Tea('chai');
	   *
	   *     expect(Chai).to.be.an.instanceof(Tea);
	   *     expect([ 1, 2, 3 ]).to.be.instanceof(Array);
	   *
	   * @name instanceof
	   * @param {Constructor} constructor
	   * @param {String} message _optional_
	   * @alias instanceOf
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertInstanceOf (constructor, msg) {
	    if (msg) flag(this, 'message', msg);
	    var name = _.getName(constructor);
	    this.assert(
	        flag(this, 'object') instanceof constructor
	      , 'expected #{this} to be an instance of ' + name
	      , 'expected #{this} to not be an instance of ' + name
	    );
	  };
	
	  Assertion.addMethod('instanceof', assertInstanceOf);
	  Assertion.addMethod('instanceOf', assertInstanceOf);
	
	  /**
	   * ### .property(name, [value])
	   *
	   * Asserts that the target has a property `name`, optionally asserting that
	   * the value of that property is strictly equal to  `value`.
	   * If the `deep` flag is set, you can use dot- and bracket-notation for deep
	   * references into objects and arrays.
	   *
	   *     // simple referencing
	   *     var obj = { foo: 'bar' };
	   *     expect(obj).to.have.property('foo');
	   *     expect(obj).to.have.property('foo', 'bar');
	   *
	   *     // deep referencing
	   *     var deepObj = {
	   *         green: { tea: 'matcha' }
	   *       , teas: [ 'chai', 'matcha', { tea: 'konacha' } ]
	   *     };
	   *
	   *     expect(deepObj).to.have.deep.property('green.tea', 'matcha');
	   *     expect(deepObj).to.have.deep.property('teas[1]', 'matcha');
	   *     expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha');
	   *
	   * You can also use an array as the starting point of a `deep.property`
	   * assertion, or traverse nested arrays.
	   *
	   *     var arr = [
	   *         [ 'chai', 'matcha', 'konacha' ]
	   *       , [ { tea: 'chai' }
	   *         , { tea: 'matcha' }
	   *         , { tea: 'konacha' } ]
	   *     ];
	   *
	   *     expect(arr).to.have.deep.property('[0][1]', 'matcha');
	   *     expect(arr).to.have.deep.property('[1][2].tea', 'konacha');
	   *
	   * Furthermore, `property` changes the subject of the assertion
	   * to be the value of that property from the original object. This
	   * permits for further chainable assertions on that property.
	   *
	   *     expect(obj).to.have.property('foo')
	   *       .that.is.a('string');
	   *     expect(deepObj).to.have.property('green')
	   *       .that.is.an('object')
	   *       .that.deep.equals({ tea: 'matcha' });
	   *     expect(deepObj).to.have.property('teas')
	   *       .that.is.an('array')
	   *       .with.deep.property('[2]')
	   *         .that.deep.equals({ tea: 'konacha' });
	   *
	   * Note that dots and bracket in `name` must be backslash-escaped when
	   * the `deep` flag is set, while they must NOT be escaped when the `deep`
	   * flag is not set.
	   *
	   *     // simple referencing
	   *     var css = { '.link[target]': 42 };
	   *     expect(css).to.have.property('.link[target]', 42);
	   *
	   *     // deep referencing
	   *     var deepCss = { '.link': { '[target]': 42 }};
	   *     expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);
	   *
	   * @name property
	   * @alias deep.property
	   * @param {String} name
	   * @param {Mixed} value (optional)
	   * @param {String} message _optional_
	   * @returns value of property for chaining
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addMethod('property', function (name, val, msg) {
	    if (msg) flag(this, 'message', msg);
	
	    var isDeep = !!flag(this, 'deep')
	      , descriptor = isDeep ? 'deep property ' : 'property '
	      , negate = flag(this, 'negate')
	      , obj = flag(this, 'object')
	      , pathInfo = isDeep ? _.getPathInfo(name, obj) : null
	      , hasProperty = isDeep
	        ? pathInfo.exists
	        : _.hasProperty(name, obj)
	      , value = isDeep
	        ? pathInfo.value
	        : obj[name];
	
	    if (negate && arguments.length > 1) {
	      if (undefined === value) {
	        msg = (msg != null) ? msg + ': ' : '';
	        throw new Error(msg + _.inspect(obj) + ' has no ' + descriptor + _.inspect(name));
	      }
	    } else {
	      this.assert(
	          hasProperty
	        , 'expected #{this} to have a ' + descriptor + _.inspect(name)
	        , 'expected #{this} to not have ' + descriptor + _.inspect(name));
	    }
	
	    if (arguments.length > 1) {
	      this.assert(
	          val === value
	        , 'expected #{this} to have a ' + descriptor + _.inspect(name) + ' of #{exp}, but got #{act}'
	        , 'expected #{this} to not have a ' + descriptor + _.inspect(name) + ' of #{act}'
	        , val
	        , value
	      );
	    }
	
	    flag(this, 'object', value);
	  });
	
	
	  /**
	   * ### .ownProperty(name)
	   *
	   * Asserts that the target has an own property `name`.
	   *
	   *     expect('test').to.have.ownProperty('length');
	   *
	   * @name ownProperty
	   * @alias haveOwnProperty
	   * @param {String} name
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertOwnProperty (name, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    this.assert(
	        obj.hasOwnProperty(name)
	      , 'expected #{this} to have own property ' + _.inspect(name)
	      , 'expected #{this} to not have own property ' + _.inspect(name)
	    );
	  }
	
	  Assertion.addMethod('ownProperty', assertOwnProperty);
	  Assertion.addMethod('haveOwnProperty', assertOwnProperty);
	
	  /**
	   * ### .ownPropertyDescriptor(name[, descriptor[, message]])
	   *
	   * Asserts that the target has an own property descriptor `name`, that optionally matches `descriptor`.
	   *
	   *     expect('test').to.have.ownPropertyDescriptor('length');
	   *     expect('test').to.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 4 });
	   *     expect('test').not.to.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 3 });
	   *     expect('test').ownPropertyDescriptor('length').to.have.property('enumerable', false);
	   *     expect('test').ownPropertyDescriptor('length').to.have.keys('value');
	   *
	   * @name ownPropertyDescriptor
	   * @alias haveOwnPropertyDescriptor
	   * @param {String} name
	   * @param {Object} descriptor _optional_
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertOwnPropertyDescriptor (name, descriptor, msg) {
	    if (typeof descriptor === 'string') {
	      msg = descriptor;
	      descriptor = null;
	    }
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    var actualDescriptor = Object.getOwnPropertyDescriptor(Object(obj), name);
	    if (actualDescriptor && descriptor) {
	      this.assert(
	          _.eql(descriptor, actualDescriptor)
	        , 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to match ' + _.inspect(descriptor) + ', got ' + _.inspect(actualDescriptor)
	        , 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to not match ' + _.inspect(descriptor)
	        , descriptor
	        , actualDescriptor
	        , true
	      );
	    } else {
	      this.assert(
	          actualDescriptor
	        , 'expected #{this} to have an own property descriptor for ' + _.inspect(name)
	        , 'expected #{this} to not have an own property descriptor for ' + _.inspect(name)
	      );
	    }
	    flag(this, 'object', actualDescriptor);
	  }
	
	  Assertion.addMethod('ownPropertyDescriptor', assertOwnPropertyDescriptor);
	  Assertion.addMethod('haveOwnPropertyDescriptor', assertOwnPropertyDescriptor);
	
	  /**
	   * ### .length
	   *
	   * Sets the `doLength` flag later used as a chain precursor to a value
	   * comparison for the `length` property.
	   *
	   *     expect('foo').to.have.length.above(2);
	   *     expect([ 1, 2, 3 ]).to.have.length.above(2);
	   *     expect('foo').to.have.length.below(4);
	   *     expect([ 1, 2, 3 ]).to.have.length.below(4);
	   *     expect('foo').to.have.length.within(2,4);
	   *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
	   *
	   * *Deprecation notice:* Using `length` as an assertion will be deprecated
	   * in version 2.4.0 and removed in 3.0.0. Code using the old style of
	   * asserting for `length` property value using `length(value)` should be
	   * switched to use `lengthOf(value)` instead.
	   *
	   * @name length
	   * @namespace BDD
	   * @api public
	   */
	
	  /**
	   * ### .lengthOf(value[, message])
	   *
	   * Asserts that the target's `length` property has
	   * the expected value.
	   *
	   *     expect([ 1, 2, 3]).to.have.lengthOf(3);
	   *     expect('foobar').to.have.lengthOf(6);
	   *
	   * @name lengthOf
	   * @param {Number} length
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertLengthChain () {
	    flag(this, 'doLength', true);
	  }
	
	  function assertLength (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    new Assertion(obj, msg).to.have.property('length');
	    var len = obj.length;
	
	    this.assert(
	        len == n
	      , 'expected #{this} to have a length of #{exp} but got #{act}'
	      , 'expected #{this} to not have a length of #{act}'
	      , n
	      , len
	    );
	  }
	
	  Assertion.addChainableMethod('length', assertLength, assertLengthChain);
	  Assertion.addMethod('lengthOf', assertLength);
	
	  /**
	   * ### .match(regexp)
	   *
	   * Asserts that the target matches a regular expression.
	   *
	   *     expect('foobar').to.match(/^foo/);
	   *
	   * @name match
	   * @alias matches
	   * @param {RegExp} RegularExpression
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	  function assertMatch(re, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    this.assert(
	        re.exec(obj)
	      , 'expected #{this} to match ' + re
	      , 'expected #{this} not to match ' + re
	    );
	  }
	
	  Assertion.addMethod('match', assertMatch);
	  Assertion.addMethod('matches', assertMatch);
	
	  /**
	   * ### .string(string)
	   *
	   * Asserts that the string target contains another string.
	   *
	   *     expect('foobar').to.have.string('bar');
	   *
	   * @name string
	   * @param {String} string
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addMethod('string', function (str, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    new Assertion(obj, msg).is.a('string');
	
	    this.assert(
	        ~obj.indexOf(str)
	      , 'expected #{this} to contain ' + _.inspect(str)
	      , 'expected #{this} to not contain ' + _.inspect(str)
	    );
	  });
	
	
	  /**
	   * ### .keys(key1, [key2], [...])
	   *
	   * Asserts that the target contains any or all of the passed-in keys.
	   * Use in combination with `any`, `all`, `contains`, or `have` will affect
	   * what will pass.
	   *
	   * When used in conjunction with `any`, at least one key that is passed
	   * in must exist in the target object. This is regardless whether or not
	   * the `have` or `contain` qualifiers are used. Note, either `any` or `all`
	   * should be used in the assertion. If neither are used, the assertion is
	   * defaulted to `all`.
	   *
	   * When both `all` and `contain` are used, the target object must have at
	   * least all of the passed-in keys but may have more keys not listed.
	   *
	   * When both `all` and `have` are used, the target object must both contain
	   * all of the passed-in keys AND the number of keys in the target object must
	   * match the number of keys passed in (in other words, a target object must
	   * have all and only all of the passed-in keys).
	   *
	   *     expect({ foo: 1, bar: 2 }).to.have.any.keys('foo', 'baz');
	   *     expect({ foo: 1, bar: 2 }).to.have.any.keys('foo');
	   *     expect({ foo: 1, bar: 2 }).to.contain.any.keys('bar', 'baz');
	   *     expect({ foo: 1, bar: 2 }).to.contain.any.keys(['foo']);
	   *     expect({ foo: 1, bar: 2 }).to.contain.any.keys({'foo': 6});
	   *     expect({ foo: 1, bar: 2 }).to.have.all.keys(['bar', 'foo']);
	   *     expect({ foo: 1, bar: 2 }).to.have.all.keys({'bar': 6, 'foo': 7});
	   *     expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys(['bar', 'foo']);
	   *     expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys({'bar': 6});
	   *
	   *
	   * @name keys
	   * @alias key
	   * @param {...String|Array|Object} keys
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertKeys (keys) {
	    var obj = flag(this, 'object')
	      , str
	      , ok = true
	      , mixedArgsMsg = 'keys must be given single argument of Array|Object|String, or multiple String arguments';
	
	    switch (_.type(keys)) {
	      case "array":
	        if (arguments.length > 1) throw (new Error(mixedArgsMsg));
	        break;
	      case "object":
	        if (arguments.length > 1) throw (new Error(mixedArgsMsg));
	        keys = Object.keys(keys);
	        break;
	      default:
	        keys = Array.prototype.slice.call(arguments);
	    }
	
	    if (!keys.length) throw new Error('keys required');
	
	    var actual = Object.keys(obj)
	      , expected = keys
	      , len = keys.length
	      , any = flag(this, 'any')
	      , all = flag(this, 'all');
	
	    if (!any && !all) {
	      all = true;
	    }
	
	    // Has any
	    if (any) {
	      var intersection = expected.filter(function(key) {
	        return ~actual.indexOf(key);
	      });
	      ok = intersection.length > 0;
	    }
	
	    // Has all
	    if (all) {
	      ok = keys.every(function(key){
	        return ~actual.indexOf(key);
	      });
	      if (!flag(this, 'negate') && !flag(this, 'contains')) {
	        ok = ok && keys.length == actual.length;
	      }
	    }
	
	    // Key string
	    if (len > 1) {
	      keys = keys.map(function(key){
	        return _.inspect(key);
	      });
	      var last = keys.pop();
	      if (all) {
	        str = keys.join(', ') + ', and ' + last;
	      }
	      if (any) {
	        str = keys.join(', ') + ', or ' + last;
	      }
	    } else {
	      str = _.inspect(keys[0]);
	    }
	
	    // Form
	    str = (len > 1 ? 'keys ' : 'key ') + str;
	
	    // Have / include
	    str = (flag(this, 'contains') ? 'contain ' : 'have ') + str;
	
	    // Assertion
	    this.assert(
	        ok
	      , 'expected #{this} to ' + str
	      , 'expected #{this} to not ' + str
	      , expected.slice(0).sort()
	      , actual.sort()
	      , true
	    );
	  }
	
	  Assertion.addMethod('keys', assertKeys);
	  Assertion.addMethod('key', assertKeys);
	
	  /**
	   * ### .throw(constructor)
	   *
	   * Asserts that the function target will throw a specific error, or specific type of error
	   * (as determined using `instanceof`), optionally with a RegExp or string inclusion test
	   * for the error's message.
	   *
	   *     var err = new ReferenceError('This is a bad function.');
	   *     var fn = function () { throw err; }
	   *     expect(fn).to.throw(ReferenceError);
	   *     expect(fn).to.throw(Error);
	   *     expect(fn).to.throw(/bad function/);
	   *     expect(fn).to.not.throw('good function');
	   *     expect(fn).to.throw(ReferenceError, /bad function/);
	   *     expect(fn).to.throw(err);
	   *
	   * Please note that when a throw expectation is negated, it will check each
	   * parameter independently, starting with error constructor type. The appropriate way
	   * to check for the existence of a type of error but for a message that does not match
	   * is to use `and`.
	   *
	   *     expect(fn).to.throw(ReferenceError)
	   *        .and.not.throw(/good function/);
	   *
	   * @name throw
	   * @alias throws
	   * @alias Throw
	   * @param {ErrorConstructor} constructor
	   * @param {String|RegExp} expected error message
	   * @param {String} message _optional_
	   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	   * @returns error for chaining (null if no error)
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertThrows (constructor, errMsg, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    new Assertion(obj, msg).is.a('function');
	
	    var thrown = false
	      , desiredError = null
	      , name = null
	      , thrownError = null;
	
	    if (arguments.length === 0) {
	      errMsg = null;
	      constructor = null;
	    } else if (constructor && (constructor instanceof RegExp || 'string' === typeof constructor)) {
	      errMsg = constructor;
	      constructor = null;
	    } else if (constructor && constructor instanceof Error) {
	      desiredError = constructor;
	      constructor = null;
	      errMsg = null;
	    } else if (typeof constructor === 'function') {
	      name = constructor.prototype.name;
	      if (!name || (name === 'Error' && constructor !== Error)) {
	        name = constructor.name || (new constructor()).name;
	      }
	    } else {
	      constructor = null;
	    }
	
	    try {
	      obj();
	    } catch (err) {
	      // first, check desired error
	      if (desiredError) {
	        this.assert(
	            err === desiredError
	          , 'expected #{this} to throw #{exp} but #{act} was thrown'
	          , 'expected #{this} to not throw #{exp}'
	          , (desiredError instanceof Error ? desiredError.toString() : desiredError)
	          , (err instanceof Error ? err.toString() : err)
	        );
	
	        flag(this, 'object', err);
	        return this;
	      }
	
	      // next, check constructor
	      if (constructor) {
	        this.assert(
	            err instanceof constructor
	          , 'expected #{this} to throw #{exp} but #{act} was thrown'
	          , 'expected #{this} to not throw #{exp} but #{act} was thrown'
	          , name
	          , (err instanceof Error ? err.toString() : err)
	        );
	
	        if (!errMsg) {
	          flag(this, 'object', err);
	          return this;
	        }
	      }
	
	      // next, check message
	      var message = 'error' === _.type(err) && "message" in err
	        ? err.message
	        : '' + err;
	
	      if ((message != null) && errMsg && errMsg instanceof RegExp) {
	        this.assert(
	            errMsg.exec(message)
	          , 'expected #{this} to throw error matching #{exp} but got #{act}'
	          , 'expected #{this} to throw error not matching #{exp}'
	          , errMsg
	          , message
	        );
	
	        flag(this, 'object', err);
	        return this;
	      } else if ((message != null) && errMsg && 'string' === typeof errMsg) {
	        this.assert(
	            ~message.indexOf(errMsg)
	          , 'expected #{this} to throw error including #{exp} but got #{act}'
	          , 'expected #{this} to throw error not including #{act}'
	          , errMsg
	          , message
	        );
	
	        flag(this, 'object', err);
	        return this;
	      } else {
	        thrown = true;
	        thrownError = err;
	      }
	    }
	
	    var actuallyGot = ''
	      , expectedThrown = name !== null
	        ? name
	        : desiredError
	          ? '#{exp}' //_.inspect(desiredError)
	          : 'an error';
	
	    if (thrown) {
	      actuallyGot = ' but #{act} was thrown'
	    }
	
	    this.assert(
	        thrown === true
	      , 'expected #{this} to throw ' + expectedThrown + actuallyGot
	      , 'expected #{this} to not throw ' + expectedThrown + actuallyGot
	      , (desiredError instanceof Error ? desiredError.toString() : desiredError)
	      , (thrownError instanceof Error ? thrownError.toString() : thrownError)
	    );
	
	    flag(this, 'object', thrownError);
	  };
	
	  Assertion.addMethod('throw', assertThrows);
	  Assertion.addMethod('throws', assertThrows);
	  Assertion.addMethod('Throw', assertThrows);
	
	  /**
	   * ### .respondTo(method)
	   *
	   * Asserts that the object or class target will respond to a method.
	   *
	   *     Klass.prototype.bar = function(){};
	   *     expect(Klass).to.respondTo('bar');
	   *     expect(obj).to.respondTo('bar');
	   *
	   * To check if a constructor will respond to a static function,
	   * set the `itself` flag.
	   *
	   *     Klass.baz = function(){};
	   *     expect(Klass).itself.to.respondTo('baz');
	   *
	   * @name respondTo
	   * @alias respondsTo
	   * @param {String} method
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function respondTo (method, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object')
	      , itself = flag(this, 'itself')
	      , context = ('function' === _.type(obj) && !itself)
	        ? obj.prototype[method]
	        : obj[method];
	
	    this.assert(
	        'function' === typeof context
	      , 'expected #{this} to respond to ' + _.inspect(method)
	      , 'expected #{this} to not respond to ' + _.inspect(method)
	    );
	  }
	
	  Assertion.addMethod('respondTo', respondTo);
	  Assertion.addMethod('respondsTo', respondTo);
	
	  /**
	   * ### .itself
	   *
	   * Sets the `itself` flag, later used by the `respondTo` assertion.
	   *
	   *     function Foo() {}
	   *     Foo.bar = function() {}
	   *     Foo.prototype.baz = function() {}
	   *
	   *     expect(Foo).itself.to.respondTo('bar');
	   *     expect(Foo).itself.not.to.respondTo('baz');
	   *
	   * @name itself
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('itself', function () {
	    flag(this, 'itself', true);
	  });
	
	  /**
	   * ### .satisfy(method)
	   *
	   * Asserts that the target passes a given truth test.
	   *
	   *     expect(1).to.satisfy(function(num) { return num > 0; });
	   *
	   * @name satisfy
	   * @alias satisfies
	   * @param {Function} matcher
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function satisfy (matcher, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    var result = matcher(obj);
	    this.assert(
	        result
	      , 'expected #{this} to satisfy ' + _.objDisplay(matcher)
	      , 'expected #{this} to not satisfy' + _.objDisplay(matcher)
	      , this.negate ? false : true
	      , result
	    );
	  }
	
	  Assertion.addMethod('satisfy', satisfy);
	  Assertion.addMethod('satisfies', satisfy);
	
	  /**
	   * ### .closeTo(expected, delta)
	   *
	   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
	   *
	   *     expect(1.5).to.be.closeTo(1, 0.5);
	   *
	   * @name closeTo
	   * @alias approximately
	   * @param {Number} expected
	   * @param {Number} delta
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function closeTo(expected, delta, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	
	    new Assertion(obj, msg).is.a('number');
	    if (_.type(expected) !== 'number' || _.type(delta) !== 'number') {
	      throw new Error('the arguments to closeTo or approximately must be numbers');
	    }
	
	    this.assert(
	        Math.abs(obj - expected) <= delta
	      , 'expected #{this} to be close to ' + expected + ' +/- ' + delta
	      , 'expected #{this} not to be close to ' + expected + ' +/- ' + delta
	    );
	  }
	
	  Assertion.addMethod('closeTo', closeTo);
	  Assertion.addMethod('approximately', closeTo);
	
	  function isSubsetOf(subset, superset, cmp) {
	    return subset.every(function(elem) {
	      if (!cmp) return superset.indexOf(elem) !== -1;
	
	      return superset.some(function(elem2) {
	        return cmp(elem, elem2);
	      });
	    })
	  }
	
	  /**
	   * ### .members(set)
	   *
	   * Asserts that the target is a superset of `set`,
	   * or that the target and `set` have the same strictly-equal (===) members.
	   * Alternately, if the `deep` flag is set, set members are compared for deep
	   * equality.
	   *
	   *     expect([1, 2, 3]).to.include.members([3, 2]);
	   *     expect([1, 2, 3]).to.not.include.members([3, 2, 8]);
	   *
	   *     expect([4, 2]).to.have.members([2, 4]);
	   *     expect([5, 2]).to.not.have.members([5, 2, 1]);
	   *
	   *     expect([{ id: 1 }]).to.deep.include.members([{ id: 1 }]);
	   *
	   * @name members
	   * @param {Array} set
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addMethod('members', function (subset, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	
	    new Assertion(obj).to.be.an('array');
	    new Assertion(subset).to.be.an('array');
	
	    var cmp = flag(this, 'deep') ? _.eql : undefined;
	
	    if (flag(this, 'contains')) {
	      return this.assert(
	          isSubsetOf(subset, obj, cmp)
	        , 'expected #{this} to be a superset of #{act}'
	        , 'expected #{this} to not be a superset of #{act}'
	        , obj
	        , subset
	      );
	    }
	
	    this.assert(
	        isSubsetOf(obj, subset, cmp) && isSubsetOf(subset, obj, cmp)
	        , 'expected #{this} to have the same members as #{act}'
	        , 'expected #{this} to not have the same members as #{act}'
	        , obj
	        , subset
	    );
	  });
	
	  /**
	   * ### .oneOf(list)
	   *
	   * Assert that a value appears somewhere in the top level of array `list`.
	   *
	   *     expect('a').to.be.oneOf(['a', 'b', 'c']);
	   *     expect(9).to.not.be.oneOf(['z']);
	   *     expect([3]).to.not.be.oneOf([1, 2, [3]]);
	   *
	   *     var three = [3];
	   *     // for object-types, contents are not compared
	   *     expect(three).to.not.be.oneOf([1, 2, [3]]);
	   *     // comparing references works
	   *     expect(three).to.be.oneOf([1, 2, three]);
	   *
	   * @name oneOf
	   * @param {Array<*>} list
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function oneOf (list, msg) {
	    if (msg) flag(this, 'message', msg);
	    var expected = flag(this, 'object');
	    new Assertion(list).to.be.an('array');
	
	    this.assert(
	        list.indexOf(expected) > -1
	      , 'expected #{this} to be one of #{exp}'
	      , 'expected #{this} to not be one of #{exp}'
	      , list
	      , expected
	    );
	  }
	
	  Assertion.addMethod('oneOf', oneOf);
	
	
	  /**
	   * ### .change(function)
	   *
	   * Asserts that a function changes an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val += 3 };
	   *     var noChangeFn = function() { return 'foo' + 'bar'; }
	   *     expect(fn).to.change(obj, 'val');
	   *     expect(noChangeFn).to.not.change(obj, 'val')
	   *
	   * @name change
	   * @alias changes
	   * @alias Change
	   * @param {String} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertChanges (object, prop, msg) {
	    if (msg) flag(this, 'message', msg);
	    var fn = flag(this, 'object');
	    new Assertion(object, msg).to.have.property(prop);
	    new Assertion(fn).is.a('function');
	
	    var initial = object[prop];
	    fn();
	
	    this.assert(
	      initial !== object[prop]
	      , 'expected .' + prop + ' to change'
	      , 'expected .' + prop + ' to not change'
	    );
	  }
	
	  Assertion.addChainableMethod('change', assertChanges);
	  Assertion.addChainableMethod('changes', assertChanges);
	
	  /**
	   * ### .increase(function)
	   *
	   * Asserts that a function increases an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 15 };
	   *     expect(fn).to.increase(obj, 'val');
	   *
	   * @name increase
	   * @alias increases
	   * @alias Increase
	   * @param {String} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertIncreases (object, prop, msg) {
	    if (msg) flag(this, 'message', msg);
	    var fn = flag(this, 'object');
	    new Assertion(object, msg).to.have.property(prop);
	    new Assertion(fn).is.a('function');
	
	    var initial = object[prop];
	    fn();
	
	    this.assert(
	      object[prop] - initial > 0
	      , 'expected .' + prop + ' to increase'
	      , 'expected .' + prop + ' to not increase'
	    );
	  }
	
	  Assertion.addChainableMethod('increase', assertIncreases);
	  Assertion.addChainableMethod('increases', assertIncreases);
	
	  /**
	   * ### .decrease(function)
	   *
	   * Asserts that a function decreases an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 5 };
	   *     expect(fn).to.decrease(obj, 'val');
	   *
	   * @name decrease
	   * @alias decreases
	   * @alias Decrease
	   * @param {String} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertDecreases (object, prop, msg) {
	    if (msg) flag(this, 'message', msg);
	    var fn = flag(this, 'object');
	    new Assertion(object, msg).to.have.property(prop);
	    new Assertion(fn).is.a('function');
	
	    var initial = object[prop];
	    fn();
	
	    this.assert(
	      object[prop] - initial < 0
	      , 'expected .' + prop + ' to decrease'
	      , 'expected .' + prop + ' to not decrease'
	    );
	  }
	
	  Assertion.addChainableMethod('decrease', assertDecreases);
	  Assertion.addChainableMethod('decreases', assertDecreases);
	
	  /**
	   * ### .extensible
	   *
	   * Asserts that the target is extensible (can have new properties added to
	   * it).
	   *
	   *     var nonExtensibleObject = Object.preventExtensions({});
	   *     var sealedObject = Object.seal({});
	   *     var frozenObject = Object.freeze({});
	   *
	   *     expect({}).to.be.extensible;
	   *     expect(nonExtensibleObject).to.not.be.extensible;
	   *     expect(sealedObject).to.not.be.extensible;
	   *     expect(frozenObject).to.not.be.extensible;
	   *
	   * @name extensible
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('extensible', function() {
	    var obj = flag(this, 'object');
	
	    // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
	    // In ES6, a non-object argument will be treated as if it was a non-extensible ordinary object, simply return false.
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
	    // The following provides ES6 behavior when a TypeError is thrown under ES5.
	
	    var isExtensible;
	
	    try {
	      isExtensible = Object.isExtensible(obj);
	    } catch (err) {
	      if (err instanceof TypeError) isExtensible = false;
	      else throw err;
	    }
	
	    this.assert(
	      isExtensible
	      , 'expected #{this} to be extensible'
	      , 'expected #{this} to not be extensible'
	    );
	  });
	
	  /**
	   * ### .sealed
	   *
	   * Asserts that the target is sealed (cannot have new properties added to it
	   * and its existing properties cannot be removed).
	   *
	   *     var sealedObject = Object.seal({});
	   *     var frozenObject = Object.freeze({});
	   *
	   *     expect(sealedObject).to.be.sealed;
	   *     expect(frozenObject).to.be.sealed;
	   *     expect({}).to.not.be.sealed;
	   *
	   * @name sealed
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('sealed', function() {
	    var obj = flag(this, 'object');
	
	    // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
	    // In ES6, a non-object argument will be treated as if it was a sealed ordinary object, simply return true.
	    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
	    // The following provides ES6 behavior when a TypeError is thrown under ES5.
	
	    var isSealed;
	
	    try {
	      isSealed = Object.isSealed(obj);
	    } catch (err) {
	      if (err instanceof TypeError) isSealed = true;
	      else throw err;
	    }
	
	    this.assert(
	      isSealed
	      , 'expected #{this} to be sealed'
	      , 'expected #{this} to not be sealed'
	    );
	  });
	
	  /**
	   * ### .frozen
	   *
	   * Asserts that the target is frozen (cannot have new properties added to it
	   * and its existing properties cannot be modified).
	   *
	   *     var frozenObject = Object.freeze({});
	   *
	   *     expect(frozenObject).to.be.frozen;
	   *     expect({}).to.not.be.frozen;
	   *
	   * @name frozen
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('frozen', function() {
	    var obj = flag(this, 'object');
	
	    // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
	    // In ES6, a non-object argument will be treated as if it was a frozen ordinary object, simply return true.
	    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
	    // The following provides ES6 behavior when a TypeError is thrown under ES5.
	
	    var isFrozen;
	
	    try {
	      isFrozen = Object.isFrozen(obj);
	    } catch (err) {
	      if (err instanceof TypeError) isFrozen = true;
	      else throw err;
	    }
	
	    this.assert(
	      isFrozen
	      , 'expected #{this} to be frozen'
	      , 'expected #{this} to not be frozen'
	    );
	  });
	};


/***/ },
/* 290 */
/***/ function(module, exports) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	module.exports = function (chai, util) {
	  chai.expect = function (val, message) {
	    return new chai.Assertion(val, message);
	  };
	
	  /**
	   * ### .fail(actual, expected, [message], [operator])
	   *
	   * Throw a failure.
	   *
	   * @name fail
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @param {String} operator
	   * @namespace Expect
	   * @api public
	   */
	
	  chai.expect.fail = function (actual, expected, message, operator) {
	    message = message || 'expect.fail()';
	    throw new chai.AssertionError(message, {
	        actual: actual
	      , expected: expected
	      , operator: operator
	    }, chai.expect.fail);
	  };
	};


/***/ },
/* 291 */
/***/ function(module, exports) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	module.exports = function (chai, util) {
	  var Assertion = chai.Assertion;
	
	  function loadShould () {
	    // explicitly define this method as function as to have it's name to include as `ssfi`
	    function shouldGetter() {
	      if (this instanceof String || this instanceof Number || this instanceof Boolean ) {
	        return new Assertion(this.valueOf(), null, shouldGetter);
	      }
	      return new Assertion(this, null, shouldGetter);
	    }
	    function shouldSetter(value) {
	      // See https://github.com/chaijs/chai/issues/86: this makes
	      // `whatever.should = someValue` actually set `someValue`, which is
	      // especially useful for `global.should = require('chai').should()`.
	      //
	      // Note that we have to use [[DefineProperty]] instead of [[Put]]
	      // since otherwise we would trigger this very setter!
	      Object.defineProperty(this, 'should', {
	        value: value,
	        enumerable: true,
	        configurable: true,
	        writable: true
	      });
	    }
	    // modify Object.prototype to have `should`
	    Object.defineProperty(Object.prototype, 'should', {
	      set: shouldSetter
	      , get: shouldGetter
	      , configurable: true
	    });
	
	    var should = {};
	
	    /**
	     * ### .fail(actual, expected, [message], [operator])
	     *
	     * Throw a failure.
	     *
	     * @name fail
	     * @param {Mixed} actual
	     * @param {Mixed} expected
	     * @param {String} message
	     * @param {String} operator
	     * @namespace Should
	     * @api public
	     */
	
	    should.fail = function (actual, expected, message, operator) {
	      message = message || 'should.fail()';
	      throw new chai.AssertionError(message, {
	          actual: actual
	        , expected: expected
	        , operator: operator
	      }, should.fail);
	    };
	
	    /**
	     * ### .equal(actual, expected, [message])
	     *
	     * Asserts non-strict equality (`==`) of `actual` and `expected`.
	     *
	     *     should.equal(3, '3', '== coerces values to strings');
	     *
	     * @name equal
	     * @param {Mixed} actual
	     * @param {Mixed} expected
	     * @param {String} message
	     * @namespace Should
	     * @api public
	     */
	
	    should.equal = function (val1, val2, msg) {
	      new Assertion(val1, msg).to.equal(val2);
	    };
	
	    /**
	     * ### .throw(function, [constructor/string/regexp], [string/regexp], [message])
	     *
	     * Asserts that `function` will throw an error that is an instance of
	     * `constructor`, or alternately that it will throw an error with message
	     * matching `regexp`.
	     *
	     *     should.throw(fn, 'function throws a reference error');
	     *     should.throw(fn, /function throws a reference error/);
	     *     should.throw(fn, ReferenceError);
	     *     should.throw(fn, ReferenceError, 'function throws a reference error');
	     *     should.throw(fn, ReferenceError, /function throws a reference error/);
	     *
	     * @name throw
	     * @alias Throw
	     * @param {Function} function
	     * @param {ErrorConstructor} constructor
	     * @param {RegExp} regexp
	     * @param {String} message
	     * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	     * @namespace Should
	     * @api public
	     */
	
	    should.Throw = function (fn, errt, errs, msg) {
	      new Assertion(fn, msg).to.Throw(errt, errs);
	    };
	
	    /**
	     * ### .exist
	     *
	     * Asserts that the target is neither `null` nor `undefined`.
	     *
	     *     var foo = 'hi';
	     *
	     *     should.exist(foo, 'foo exists');
	     *
	     * @name exist
	     * @namespace Should
	     * @api public
	     */
	
	    should.exist = function (val, msg) {
	      new Assertion(val, msg).to.exist;
	    }
	
	    // negation
	    should.not = {}
	
	    /**
	     * ### .not.equal(actual, expected, [message])
	     *
	     * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
	     *
	     *     should.not.equal(3, 4, 'these numbers are not equal');
	     *
	     * @name not.equal
	     * @param {Mixed} actual
	     * @param {Mixed} expected
	     * @param {String} message
	     * @namespace Should
	     * @api public
	     */
	
	    should.not.equal = function (val1, val2, msg) {
	      new Assertion(val1, msg).to.not.equal(val2);
	    };
	
	    /**
	     * ### .throw(function, [constructor/regexp], [message])
	     *
	     * Asserts that `function` will _not_ throw an error that is an instance of
	     * `constructor`, or alternately that it will not throw an error with message
	     * matching `regexp`.
	     *
	     *     should.not.throw(fn, Error, 'function does not throw');
	     *
	     * @name not.throw
	     * @alias not.Throw
	     * @param {Function} function
	     * @param {ErrorConstructor} constructor
	     * @param {RegExp} regexp
	     * @param {String} message
	     * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	     * @namespace Should
	     * @api public
	     */
	
	    should.not.Throw = function (fn, errt, errs, msg) {
	      new Assertion(fn, msg).to.not.Throw(errt, errs);
	    };
	
	    /**
	     * ### .not.exist
	     *
	     * Asserts that the target is neither `null` nor `undefined`.
	     *
	     *     var bar = null;
	     *
	     *     should.not.exist(bar, 'bar does not exist');
	     *
	     * @name not.exist
	     * @namespace Should
	     * @api public
	     */
	
	    should.not.exist = function (val, msg) {
	      new Assertion(val, msg).to.not.exist;
	    }
	
	    should['throw'] = should['Throw'];
	    should.not['throw'] = should.not['Throw'];
	
	    return should;
	  };
	
	  chai.should = loadShould;
	  chai.Should = loadShould;
	};


/***/ },
/* 292 */
/***/ function(module, exports) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	
	module.exports = function (chai, util) {
	
	  /*!
	   * Chai dependencies.
	   */
	
	  var Assertion = chai.Assertion
	    , flag = util.flag;
	
	  /*!
	   * Module export.
	   */
	
	  /**
	   * ### assert(expression, message)
	   *
	   * Write your own test expressions.
	   *
	   *     assert('foo' !== 'bar', 'foo is not bar');
	   *     assert(Array.isArray([]), 'empty arrays are arrays');
	   *
	   * @param {Mixed} expression to test for truthiness
	   * @param {String} message to display on error
	   * @name assert
	   * @namespace Assert
	   * @api public
	   */
	
	  var assert = chai.assert = function (express, errmsg) {
	    var test = new Assertion(null, null, chai.assert);
	    test.assert(
	        express
	      , errmsg
	      , '[ negation message unavailable ]'
	    );
	  };
	
	  /**
	   * ### .fail(actual, expected, [message], [operator])
	   *
	   * Throw a failure. Node.js `assert` module-compatible.
	   *
	   * @name fail
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @param {String} operator
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.fail = function (actual, expected, message, operator) {
	    message = message || 'assert.fail()';
	    throw new chai.AssertionError(message, {
	        actual: actual
	      , expected: expected
	      , operator: operator
	    }, assert.fail);
	  };
	
	  /**
	   * ### .isOk(object, [message])
	   *
	   * Asserts that `object` is truthy.
	   *
	   *     assert.isOk('everything', 'everything is ok');
	   *     assert.isOk(false, 'this will fail');
	   *
	   * @name isOk
	   * @alias ok
	   * @param {Mixed} object to test
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isOk = function (val, msg) {
	    new Assertion(val, msg).is.ok;
	  };
	
	  /**
	   * ### .isNotOk(object, [message])
	   *
	   * Asserts that `object` is falsy.
	   *
	   *     assert.isNotOk('everything', 'this will fail');
	   *     assert.isNotOk(false, 'this will pass');
	   *
	   * @name isNotOk
	   * @alias notOk
	   * @param {Mixed} object to test
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotOk = function (val, msg) {
	    new Assertion(val, msg).is.not.ok;
	  };
	
	  /**
	   * ### .equal(actual, expected, [message])
	   *
	   * Asserts non-strict equality (`==`) of `actual` and `expected`.
	   *
	   *     assert.equal(3, '3', '== coerces values to strings');
	   *
	   * @name equal
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.equal = function (act, exp, msg) {
	    var test = new Assertion(act, msg, assert.equal);
	
	    test.assert(
	        exp == flag(test, 'object')
	      , 'expected #{this} to equal #{exp}'
	      , 'expected #{this} to not equal #{act}'
	      , exp
	      , act
	    );
	  };
	
	  /**
	   * ### .notEqual(actual, expected, [message])
	   *
	   * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
	   *
	   *     assert.notEqual(3, 4, 'these numbers are not equal');
	   *
	   * @name notEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.notEqual = function (act, exp, msg) {
	    var test = new Assertion(act, msg, assert.notEqual);
	
	    test.assert(
	        exp != flag(test, 'object')
	      , 'expected #{this} to not equal #{exp}'
	      , 'expected #{this} to equal #{act}'
	      , exp
	      , act
	    );
	  };
	
	  /**
	   * ### .strictEqual(actual, expected, [message])
	   *
	   * Asserts strict equality (`===`) of `actual` and `expected`.
	   *
	   *     assert.strictEqual(true, true, 'these booleans are strictly equal');
	   *
	   * @name strictEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.strictEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.equal(exp);
	  };
	
	  /**
	   * ### .notStrictEqual(actual, expected, [message])
	   *
	   * Asserts strict inequality (`!==`) of `actual` and `expected`.
	   *
	   *     assert.notStrictEqual(3, '3', 'no coercion for strict equality');
	   *
	   * @name notStrictEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.notStrictEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.not.equal(exp);
	  };
	
	  /**
	   * ### .deepEqual(actual, expected, [message])
	   *
	   * Asserts that `actual` is deeply equal to `expected`.
	   *
	   *     assert.deepEqual({ tea: 'green' }, { tea: 'green' });
	   *
	   * @name deepEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.deepEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.eql(exp);
	  };
	
	  /**
	   * ### .notDeepEqual(actual, expected, [message])
	   *
	   * Assert that `actual` is not deeply equal to `expected`.
	   *
	   *     assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
	   *
	   * @name notDeepEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.notDeepEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.not.eql(exp);
	  };
	
	   /**
	   * ### .isAbove(valueToCheck, valueToBeAbove, [message])
	   *
	   * Asserts `valueToCheck` is strictly greater than (>) `valueToBeAbove`
	   *
	   *     assert.isAbove(5, 2, '5 is strictly greater than 2');
	   *
	   * @name isAbove
	   * @param {Mixed} valueToCheck
	   * @param {Mixed} valueToBeAbove
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isAbove = function (val, abv, msg) {
	    new Assertion(val, msg).to.be.above(abv);
	  };
	
	   /**
	   * ### .isAtLeast(valueToCheck, valueToBeAtLeast, [message])
	   *
	   * Asserts `valueToCheck` is greater than or equal to (>=) `valueToBeAtLeast`
	   *
	   *     assert.isAtLeast(5, 2, '5 is greater or equal to 2');
	   *     assert.isAtLeast(3, 3, '3 is greater or equal to 3');
	   *
	   * @name isAtLeast
	   * @param {Mixed} valueToCheck
	   * @param {Mixed} valueToBeAtLeast
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isAtLeast = function (val, atlst, msg) {
	    new Assertion(val, msg).to.be.least(atlst);
	  };
	
	   /**
	   * ### .isBelow(valueToCheck, valueToBeBelow, [message])
	   *
	   * Asserts `valueToCheck` is strictly less than (<) `valueToBeBelow`
	   *
	   *     assert.isBelow(3, 6, '3 is strictly less than 6');
	   *
	   * @name isBelow
	   * @param {Mixed} valueToCheck
	   * @param {Mixed} valueToBeBelow
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isBelow = function (val, blw, msg) {
	    new Assertion(val, msg).to.be.below(blw);
	  };
	
	   /**
	   * ### .isAtMost(valueToCheck, valueToBeAtMost, [message])
	   *
	   * Asserts `valueToCheck` is less than or equal to (<=) `valueToBeAtMost`
	   *
	   *     assert.isAtMost(3, 6, '3 is less than or equal to 6');
	   *     assert.isAtMost(4, 4, '4 is less than or equal to 4');
	   *
	   * @name isAtMost
	   * @param {Mixed} valueToCheck
	   * @param {Mixed} valueToBeAtMost
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isAtMost = function (val, atmst, msg) {
	    new Assertion(val, msg).to.be.most(atmst);
	  };
	
	  /**
	   * ### .isTrue(value, [message])
	   *
	   * Asserts that `value` is true.
	   *
	   *     var teaServed = true;
	   *     assert.isTrue(teaServed, 'the tea has been served');
	   *
	   * @name isTrue
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isTrue = function (val, msg) {
	    new Assertion(val, msg).is['true'];
	  };
	
	  /**
	   * ### .isNotTrue(value, [message])
	   *
	   * Asserts that `value` is not true.
	   *
	   *     var tea = 'tasty chai';
	   *     assert.isNotTrue(tea, 'great, time for tea!');
	   *
	   * @name isNotTrue
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotTrue = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(true);
	  };
	
	  /**
	   * ### .isFalse(value, [message])
	   *
	   * Asserts that `value` is false.
	   *
	   *     var teaServed = false;
	   *     assert.isFalse(teaServed, 'no tea yet? hmm...');
	   *
	   * @name isFalse
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isFalse = function (val, msg) {
	    new Assertion(val, msg).is['false'];
	  };
	
	  /**
	   * ### .isNotFalse(value, [message])
	   *
	   * Asserts that `value` is not false.
	   *
	   *     var tea = 'tasty chai';
	   *     assert.isNotFalse(tea, 'great, time for tea!');
	   *
	   * @name isNotFalse
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotFalse = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(false);
	  };
	
	  /**
	   * ### .isNull(value, [message])
	   *
	   * Asserts that `value` is null.
	   *
	   *     assert.isNull(err, 'there was no error');
	   *
	   * @name isNull
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNull = function (val, msg) {
	    new Assertion(val, msg).to.equal(null);
	  };
	
	  /**
	   * ### .isNotNull(value, [message])
	   *
	   * Asserts that `value` is not null.
	   *
	   *     var tea = 'tasty chai';
	   *     assert.isNotNull(tea, 'great, time for tea!');
	   *
	   * @name isNotNull
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotNull = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(null);
	  };
	
	  /**
	   * ### .isNaN
	   * Asserts that value is NaN
	   *
	   *    assert.isNaN('foo', 'foo is NaN');
	   *
	   * @name isNaN
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNaN = function (val, msg) {
	    new Assertion(val, msg).to.be.NaN;
	  };
	
	  /**
	   * ### .isNotNaN
	   * Asserts that value is not NaN
	   *
	   *    assert.isNotNaN(4, '4 is not NaN');
	   *
	   * @name isNotNaN
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	  assert.isNotNaN = function (val, msg) {
	    new Assertion(val, msg).not.to.be.NaN;
	  };
	
	  /**
	   * ### .isUndefined(value, [message])
	   *
	   * Asserts that `value` is `undefined`.
	   *
	   *     var tea;
	   *     assert.isUndefined(tea, 'no tea defined');
	   *
	   * @name isUndefined
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isUndefined = function (val, msg) {
	    new Assertion(val, msg).to.equal(undefined);
	  };
	
	  /**
	   * ### .isDefined(value, [message])
	   *
	   * Asserts that `value` is not `undefined`.
	   *
	   *     var tea = 'cup of chai';
	   *     assert.isDefined(tea, 'tea has been defined');
	   *
	   * @name isDefined
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isDefined = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(undefined);
	  };
	
	  /**
	   * ### .isFunction(value, [message])
	   *
	   * Asserts that `value` is a function.
	   *
	   *     function serveTea() { return 'cup of tea'; };
	   *     assert.isFunction(serveTea, 'great, we can have tea now');
	   *
	   * @name isFunction
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isFunction = function (val, msg) {
	    new Assertion(val, msg).to.be.a('function');
	  };
	
	  /**
	   * ### .isNotFunction(value, [message])
	   *
	   * Asserts that `value` is _not_ a function.
	   *
	   *     var serveTea = [ 'heat', 'pour', 'sip' ];
	   *     assert.isNotFunction(serveTea, 'great, we have listed the steps');
	   *
	   * @name isNotFunction
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotFunction = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('function');
	  };
	
	  /**
	   * ### .isObject(value, [message])
	   *
	   * Asserts that `value` is an object of type 'Object' (as revealed by `Object.prototype.toString`).
	   * _The assertion does not match subclassed objects._
	   *
	   *     var selection = { name: 'Chai', serve: 'with spices' };
	   *     assert.isObject(selection, 'tea selection is an object');
	   *
	   * @name isObject
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isObject = function (val, msg) {
	    new Assertion(val, msg).to.be.a('object');
	  };
	
	  /**
	   * ### .isNotObject(value, [message])
	   *
	   * Asserts that `value` is _not_ an object of type 'Object' (as revealed by `Object.prototype.toString`).
	   *
	   *     var selection = 'chai'
	   *     assert.isNotObject(selection, 'tea selection is not an object');
	   *     assert.isNotObject(null, 'null is not an object');
	   *
	   * @name isNotObject
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotObject = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('object');
	  };
	
	  /**
	   * ### .isArray(value, [message])
	   *
	   * Asserts that `value` is an array.
	   *
	   *     var menu = [ 'green', 'chai', 'oolong' ];
	   *     assert.isArray(menu, 'what kind of tea do we want?');
	   *
	   * @name isArray
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isArray = function (val, msg) {
	    new Assertion(val, msg).to.be.an('array');
	  };
	
	  /**
	   * ### .isNotArray(value, [message])
	   *
	   * Asserts that `value` is _not_ an array.
	   *
	   *     var menu = 'green|chai|oolong';
	   *     assert.isNotArray(menu, 'what kind of tea do we want?');
	   *
	   * @name isNotArray
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotArray = function (val, msg) {
	    new Assertion(val, msg).to.not.be.an('array');
	  };
	
	  /**
	   * ### .isString(value, [message])
	   *
	   * Asserts that `value` is a string.
	   *
	   *     var teaOrder = 'chai';
	   *     assert.isString(teaOrder, 'order placed');
	   *
	   * @name isString
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isString = function (val, msg) {
	    new Assertion(val, msg).to.be.a('string');
	  };
	
	  /**
	   * ### .isNotString(value, [message])
	   *
	   * Asserts that `value` is _not_ a string.
	   *
	   *     var teaOrder = 4;
	   *     assert.isNotString(teaOrder, 'order placed');
	   *
	   * @name isNotString
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotString = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('string');
	  };
	
	  /**
	   * ### .isNumber(value, [message])
	   *
	   * Asserts that `value` is a number.
	   *
	   *     var cups = 2;
	   *     assert.isNumber(cups, 'how many cups');
	   *
	   * @name isNumber
	   * @param {Number} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNumber = function (val, msg) {
	    new Assertion(val, msg).to.be.a('number');
	  };
	
	  /**
	   * ### .isNotNumber(value, [message])
	   *
	   * Asserts that `value` is _not_ a number.
	   *
	   *     var cups = '2 cups please';
	   *     assert.isNotNumber(cups, 'how many cups');
	   *
	   * @name isNotNumber
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotNumber = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('number');
	  };
	
	  /**
	   * ### .isBoolean(value, [message])
	   *
	   * Asserts that `value` is a boolean.
	   *
	   *     var teaReady = true
	   *       , teaServed = false;
	   *
	   *     assert.isBoolean(teaReady, 'is the tea ready');
	   *     assert.isBoolean(teaServed, 'has tea been served');
	   *
	   * @name isBoolean
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isBoolean = function (val, msg) {
	    new Assertion(val, msg).to.be.a('boolean');
	  };
	
	  /**
	   * ### .isNotBoolean(value, [message])
	   *
	   * Asserts that `value` is _not_ a boolean.
	   *
	   *     var teaReady = 'yep'
	   *       , teaServed = 'nope';
	   *
	   *     assert.isNotBoolean(teaReady, 'is the tea ready');
	   *     assert.isNotBoolean(teaServed, 'has tea been served');
	   *
	   * @name isNotBoolean
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotBoolean = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('boolean');
	  };
	
	  /**
	   * ### .typeOf(value, name, [message])
	   *
	   * Asserts that `value`'s type is `name`, as determined by
	   * `Object.prototype.toString`.
	   *
	   *     assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
	   *     assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
	   *     assert.typeOf('tea', 'string', 'we have a string');
	   *     assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
	   *     assert.typeOf(null, 'null', 'we have a null');
	   *     assert.typeOf(undefined, 'undefined', 'we have an undefined');
	   *
	   * @name typeOf
	   * @param {Mixed} value
	   * @param {String} name
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.typeOf = function (val, type, msg) {
	    new Assertion(val, msg).to.be.a(type);
	  };
	
	  /**
	   * ### .notTypeOf(value, name, [message])
	   *
	   * Asserts that `value`'s type is _not_ `name`, as determined by
	   * `Object.prototype.toString`.
	   *
	   *     assert.notTypeOf('tea', 'number', 'strings are not numbers');
	   *
	   * @name notTypeOf
	   * @param {Mixed} value
	   * @param {String} typeof name
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.notTypeOf = function (val, type, msg) {
	    new Assertion(val, msg).to.not.be.a(type);
	  };
	
	  /**
	   * ### .instanceOf(object, constructor, [message])
	   *
	   * Asserts that `value` is an instance of `constructor`.
	   *
	   *     var Tea = function (name) { this.name = name; }
	   *       , chai = new Tea('chai');
	   *
	   *     assert.instanceOf(chai, Tea, 'chai is an instance of tea');
	   *
	   * @name instanceOf
	   * @param {Object} object
	   * @param {Constructor} constructor
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.instanceOf = function (val, type, msg) {
	    new Assertion(val, msg).to.be.instanceOf(type);
	  };
	
	  /**
	   * ### .notInstanceOf(object, constructor, [message])
	   *
	   * Asserts `value` is not an instance of `constructor`.
	   *
	   *     var Tea = function (name) { this.name = name; }
	   *       , chai = new String('chai');
	   *
	   *     assert.notInstanceOf(chai, Tea, 'chai is not an instance of tea');
	   *
	   * @name notInstanceOf
	   * @param {Object} object
	   * @param {Constructor} constructor
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.notInstanceOf = function (val, type, msg) {
	    new Assertion(val, msg).to.not.be.instanceOf(type);
	  };
	
	  /**
	   * ### .include(haystack, needle, [message])
	   *
	   * Asserts that `haystack` includes `needle`. Works
	   * for strings and arrays.
	   *
	   *     assert.include('foobar', 'bar', 'foobar contains string "bar"');
	   *     assert.include([ 1, 2, 3 ], 3, 'array contains value');
	   *
	   * @name include
	   * @param {Array|String} haystack
	   * @param {Mixed} needle
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.include = function (exp, inc, msg) {
	    new Assertion(exp, msg, assert.include).include(inc);
	  };
	
	  /**
	   * ### .notInclude(haystack, needle, [message])
	   *
	   * Asserts that `haystack` does not include `needle`. Works
	   * for strings and arrays.
	   *
	   *     assert.notInclude('foobar', 'baz', 'string not include substring');
	   *     assert.notInclude([ 1, 2, 3 ], 4, 'array not include contain value');
	   *
	   * @name notInclude
	   * @param {Array|String} haystack
	   * @param {Mixed} needle
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.notInclude = function (exp, inc, msg) {
	    new Assertion(exp, msg, assert.notInclude).not.include(inc);
	  };
	
	  /**
	   * ### .match(value, regexp, [message])
	   *
	   * Asserts that `value` matches the regular expression `regexp`.
	   *
	   *     assert.match('foobar', /^foo/, 'regexp matches');
	   *
	   * @name match
	   * @param {Mixed} value
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.match = function (exp, re, msg) {
	    new Assertion(exp, msg).to.match(re);
	  };
	
	  /**
	   * ### .notMatch(value, regexp, [message])
	   *
	   * Asserts that `value` does not match the regular expression `regexp`.
	   *
	   *     assert.notMatch('foobar', /^foo/, 'regexp does not match');
	   *
	   * @name notMatch
	   * @param {Mixed} value
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.notMatch = function (exp, re, msg) {
	    new Assertion(exp, msg).to.not.match(re);
	  };
	
	  /**
	   * ### .property(object, property, [message])
	   *
	   * Asserts that `object` has a property named by `property`.
	   *
	   *     assert.property({ tea: { green: 'matcha' }}, 'tea');
	   *
	   * @name property
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.property = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.have.property(prop);
	  };
	
	  /**
	   * ### .notProperty(object, property, [message])
	   *
	   * Asserts that `object` does _not_ have a property named by `property`.
	   *
	   *     assert.notProperty({ tea: { green: 'matcha' }}, 'coffee');
	   *
	   * @name notProperty
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.notProperty = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.not.have.property(prop);
	  };
	
	  /**
	   * ### .deepProperty(object, property, [message])
	   *
	   * Asserts that `object` has a property named by `property`, which can be a
	   * string using dot- and bracket-notation for deep reference.
	   *
	   *     assert.deepProperty({ tea: { green: 'matcha' }}, 'tea.green');
	   *
	   * @name deepProperty
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.deepProperty = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.have.deep.property(prop);
	  };
	
	  /**
	   * ### .notDeepProperty(object, property, [message])
	   *
	   * Asserts that `object` does _not_ have a property named by `property`, which
	   * can be a string using dot- and bracket-notation for deep reference.
	   *
	   *     assert.notDeepProperty({ tea: { green: 'matcha' }}, 'tea.oolong');
	   *
	   * @name notDeepProperty
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.notDeepProperty = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.not.have.deep.property(prop);
	  };
	
	  /**
	   * ### .propertyVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property` with value given
	   * by `value`.
	   *
	   *     assert.propertyVal({ tea: 'is good' }, 'tea', 'is good');
	   *
	   * @name propertyVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.propertyVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.have.property(prop, val);
	  };
	
	  /**
	   * ### .propertyNotVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property`, but with a value
	   * different from that given by `value`.
	   *
	   *     assert.propertyNotVal({ tea: 'is good' }, 'tea', 'is bad');
	   *
	   * @name propertyNotVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.propertyNotVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.not.have.property(prop, val);
	  };
	
	  /**
	   * ### .deepPropertyVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property` with value given
	   * by `value`. `property` can use dot- and bracket-notation for deep
	   * reference.
	   *
	   *     assert.deepPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'matcha');
	   *
	   * @name deepPropertyVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.deepPropertyVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.have.deep.property(prop, val);
	  };
	
	  /**
	   * ### .deepPropertyNotVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property`, but with a value
	   * different from that given by `value`. `property` can use dot- and
	   * bracket-notation for deep reference.
	   *
	   *     assert.deepPropertyNotVal({ tea: { green: 'matcha' }}, 'tea.green', 'konacha');
	   *
	   * @name deepPropertyNotVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.deepPropertyNotVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.not.have.deep.property(prop, val);
	  };
	
	  /**
	   * ### .lengthOf(object, length, [message])
	   *
	   * Asserts that `object` has a `length` property with the expected value.
	   *
	   *     assert.lengthOf([1,2,3], 3, 'array has length of 3');
	   *     assert.lengthOf('foobar', 6, 'string has length of 6');
	   *
	   * @name lengthOf
	   * @param {Mixed} object
	   * @param {Number} length
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.lengthOf = function (exp, len, msg) {
	    new Assertion(exp, msg).to.have.length(len);
	  };
	
	  /**
	   * ### .throws(function, [constructor/string/regexp], [string/regexp], [message])
	   *
	   * Asserts that `function` will throw an error that is an instance of
	   * `constructor`, or alternately that it will throw an error with message
	   * matching `regexp`.
	   *
	   *     assert.throws(fn, 'function throws a reference error');
	   *     assert.throws(fn, /function throws a reference error/);
	   *     assert.throws(fn, ReferenceError);
	   *     assert.throws(fn, ReferenceError, 'function throws a reference error');
	   *     assert.throws(fn, ReferenceError, /function throws a reference error/);
	   *
	   * @name throws
	   * @alias throw
	   * @alias Throw
	   * @param {Function} function
	   * @param {ErrorConstructor} constructor
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.throws = function (fn, errt, errs, msg) {
	    if ('string' === typeof errt || errt instanceof RegExp) {
	      errs = errt;
	      errt = null;
	    }
	
	    var assertErr = new Assertion(fn, msg).to.throw(errt, errs);
	    return flag(assertErr, 'object');
	  };
	
	  /**
	   * ### .doesNotThrow(function, [constructor/regexp], [message])
	   *
	   * Asserts that `function` will _not_ throw an error that is an instance of
	   * `constructor`, or alternately that it will not throw an error with message
	   * matching `regexp`.
	   *
	   *     assert.doesNotThrow(fn, Error, 'function does not throw');
	   *
	   * @name doesNotThrow
	   * @param {Function} function
	   * @param {ErrorConstructor} constructor
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.doesNotThrow = function (fn, type, msg) {
	    if ('string' === typeof type) {
	      msg = type;
	      type = null;
	    }
	
	    new Assertion(fn, msg).to.not.Throw(type);
	  };
	
	  /**
	   * ### .operator(val1, operator, val2, [message])
	   *
	   * Compares two values using `operator`.
	   *
	   *     assert.operator(1, '<', 2, 'everything is ok');
	   *     assert.operator(1, '>', 2, 'this will fail');
	   *
	   * @name operator
	   * @param {Mixed} val1
	   * @param {String} operator
	   * @param {Mixed} val2
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.operator = function (val, operator, val2, msg) {
	    var ok;
	    switch(operator) {
	      case '==':
	        ok = val == val2;
	        break;
	      case '===':
	        ok = val === val2;
	        break;
	      case '>':
	        ok = val > val2;
	        break;
	      case '>=':
	        ok = val >= val2;
	        break;
	      case '<':
	        ok = val < val2;
	        break;
	      case '<=':
	        ok = val <= val2;
	        break;
	      case '!=':
	        ok = val != val2;
	        break;
	      case '!==':
	        ok = val !== val2;
	        break;
	      default:
	        throw new Error('Invalid operator "' + operator + '"');
	    }
	    var test = new Assertion(ok, msg);
	    test.assert(
	        true === flag(test, 'object')
	      , 'expected ' + util.inspect(val) + ' to be ' + operator + ' ' + util.inspect(val2)
	      , 'expected ' + util.inspect(val) + ' to not be ' + operator + ' ' + util.inspect(val2) );
	  };
	
	  /**
	   * ### .closeTo(actual, expected, delta, [message])
	   *
	   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
	   *
	   *     assert.closeTo(1.5, 1, 0.5, 'numbers are close');
	   *
	   * @name closeTo
	   * @param {Number} actual
	   * @param {Number} expected
	   * @param {Number} delta
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.closeTo = function (act, exp, delta, msg) {
	    new Assertion(act, msg).to.be.closeTo(exp, delta);
	  };
	
	  /**
	   * ### .approximately(actual, expected, delta, [message])
	   *
	   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
	   *
	   *     assert.approximately(1.5, 1, 0.5, 'numbers are close');
	   *
	   * @name approximately
	   * @param {Number} actual
	   * @param {Number} expected
	   * @param {Number} delta
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.approximately = function (act, exp, delta, msg) {
	    new Assertion(act, msg).to.be.approximately(exp, delta);
	  };
	
	  /**
	   * ### .sameMembers(set1, set2, [message])
	   *
	   * Asserts that `set1` and `set2` have the same members.
	   * Order is not taken into account.
	   *
	   *     assert.sameMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'same members');
	   *
	   * @name sameMembers
	   * @param {Array} set1
	   * @param {Array} set2
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.sameMembers = function (set1, set2, msg) {
	    new Assertion(set1, msg).to.have.same.members(set2);
	  }
	
	  /**
	   * ### .sameDeepMembers(set1, set2, [message])
	   *
	   * Asserts that `set1` and `set2` have the same members - using a deep equality checking.
	   * Order is not taken into account.
	   *
	   *     assert.sameDeepMembers([ {b: 3}, {a: 2}, {c: 5} ], [ {c: 5}, {b: 3}, {a: 2} ], 'same deep members');
	   *
	   * @name sameDeepMembers
	   * @param {Array} set1
	   * @param {Array} set2
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.sameDeepMembers = function (set1, set2, msg) {
	    new Assertion(set1, msg).to.have.same.deep.members(set2);
	  }
	
	  /**
	   * ### .includeMembers(superset, subset, [message])
	   *
	   * Asserts that `subset` is included in `superset`.
	   * Order is not taken into account.
	   *
	   *     assert.includeMembers([ 1, 2, 3 ], [ 2, 1 ], 'include members');
	   *
	   * @name includeMembers
	   * @param {Array} superset
	   * @param {Array} subset
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.includeMembers = function (superset, subset, msg) {
	    new Assertion(superset, msg).to.include.members(subset);
	  }
	
	  /**
	   * ### .includeDeepMembers(superset, subset, [message])
	   *
	   * Asserts that `subset` is included in `superset` - using deep equality checking.
	   * Order is not taken into account.
	   * Duplicates are ignored.
	   *
	   *     assert.includeDeepMembers([ {a: 1}, {b: 2}, {c: 3} ], [ {b: 2}, {a: 1}, {b: 2} ], 'include deep members');
	   *
	   * @name includeDeepMembers
	   * @param {Array} superset
	   * @param {Array} subset
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.includeDeepMembers = function (superset, subset, msg) {
	    new Assertion(superset, msg).to.include.deep.members(subset);
	  }
	
	  /**
	   * ### .oneOf(inList, list, [message])
	   *
	   * Asserts that non-object, non-array value `inList` appears in the flat array `list`.
	   *
	   *     assert.oneOf(1, [ 2, 1 ], 'Not found in list');
	   *
	   * @name oneOf
	   * @param {*} inList
	   * @param {Array<*>} list
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.oneOf = function (inList, list, msg) {
	    new Assertion(inList, msg).to.be.oneOf(list);
	  }
	
	   /**
	   * ### .changes(function, object, property)
	   *
	   * Asserts that a function changes the value of a property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 22 };
	   *     assert.changes(fn, obj, 'val');
	   *
	   * @name changes
	   * @param {Function} modifier function
	   * @param {Object} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.changes = function (fn, obj, prop) {
	    new Assertion(fn).to.change(obj, prop);
	  }
	
	   /**
	   * ### .doesNotChange(function, object, property)
	   *
	   * Asserts that a function does not changes the value of a property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { console.log('foo'); };
	   *     assert.doesNotChange(fn, obj, 'val');
	   *
	   * @name doesNotChange
	   * @param {Function} modifier function
	   * @param {Object} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.doesNotChange = function (fn, obj, prop) {
	    new Assertion(fn).to.not.change(obj, prop);
	  }
	
	   /**
	   * ### .increases(function, object, property)
	   *
	   * Asserts that a function increases an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 13 };
	   *     assert.increases(fn, obj, 'val');
	   *
	   * @name increases
	   * @param {Function} modifier function
	   * @param {Object} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.increases = function (fn, obj, prop) {
	    new Assertion(fn).to.increase(obj, prop);
	  }
	
	   /**
	   * ### .doesNotIncrease(function, object, property)
	   *
	   * Asserts that a function does not increase object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 8 };
	   *     assert.doesNotIncrease(fn, obj, 'val');
	   *
	   * @name doesNotIncrease
	   * @param {Function} modifier function
	   * @param {Object} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.doesNotIncrease = function (fn, obj, prop) {
	    new Assertion(fn).to.not.increase(obj, prop);
	  }
	
	   /**
	   * ### .decreases(function, object, property)
	   *
	   * Asserts that a function decreases an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 5 };
	   *     assert.decreases(fn, obj, 'val');
	   *
	   * @name decreases
	   * @param {Function} modifier function
	   * @param {Object} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.decreases = function (fn, obj, prop) {
	    new Assertion(fn).to.decrease(obj, prop);
	  }
	
	   /**
	   * ### .doesNotDecrease(function, object, property)
	   *
	   * Asserts that a function does not decreases an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 15 };
	   *     assert.doesNotDecrease(fn, obj, 'val');
	   *
	   * @name doesNotDecrease
	   * @param {Function} modifier function
	   * @param {Object} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.doesNotDecrease = function (fn, obj, prop) {
	    new Assertion(fn).to.not.decrease(obj, prop);
	  }
	
	  /*!
	   * ### .ifError(object)
	   *
	   * Asserts if value is not a false value, and throws if it is a true value.
	   * This is added to allow for chai to be a drop-in replacement for Node's
	   * assert class.
	   *
	   *     var err = new Error('I am a custom error');
	   *     assert.ifError(err); // Rethrows err!
	   *
	   * @name ifError
	   * @param {Object} object
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.ifError = function (val) {
	    if (val) {
	      throw(val);
	    }
	  };
	
	  /**
	   * ### .isExtensible(object)
	   *
	   * Asserts that `object` is extensible (can have new properties added to it).
	   *
	   *     assert.isExtensible({});
	   *
	   * @name isExtensible
	   * @alias extensible
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isExtensible = function (obj, msg) {
	    new Assertion(obj, msg).to.be.extensible;
	  };
	
	  /**
	   * ### .isNotExtensible(object)
	   *
	   * Asserts that `object` is _not_ extensible.
	   *
	   *     var nonExtensibleObject = Object.preventExtensions({});
	   *     var sealedObject = Object.seal({});
	   *     var frozenObject = Object.freese({});
	   *
	   *     assert.isNotExtensible(nonExtensibleObject);
	   *     assert.isNotExtensible(sealedObject);
	   *     assert.isNotExtensible(frozenObject);
	   *
	   * @name isNotExtensible
	   * @alias notExtensible
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotExtensible = function (obj, msg) {
	    new Assertion(obj, msg).to.not.be.extensible;
	  };
	
	  /**
	   * ### .isSealed(object)
	   *
	   * Asserts that `object` is sealed (cannot have new properties added to it
	   * and its existing properties cannot be removed).
	   *
	   *     var sealedObject = Object.seal({});
	   *     var frozenObject = Object.seal({});
	   *
	   *     assert.isSealed(sealedObject);
	   *     assert.isSealed(frozenObject);
	   *
	   * @name isSealed
	   * @alias sealed
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isSealed = function (obj, msg) {
	    new Assertion(obj, msg).to.be.sealed;
	  };
	
	  /**
	   * ### .isNotSealed(object)
	   *
	   * Asserts that `object` is _not_ sealed.
	   *
	   *     assert.isNotSealed({});
	   *
	   * @name isNotSealed
	   * @alias notSealed
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotSealed = function (obj, msg) {
	    new Assertion(obj, msg).to.not.be.sealed;
	  };
	
	  /**
	   * ### .isFrozen(object)
	   *
	   * Asserts that `object` is frozen (cannot have new properties added to it
	   * and its existing properties cannot be modified).
	   *
	   *     var frozenObject = Object.freeze({});
	   *     assert.frozen(frozenObject);
	   *
	   * @name isFrozen
	   * @alias frozen
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isFrozen = function (obj, msg) {
	    new Assertion(obj, msg).to.be.frozen;
	  };
	
	  /**
	   * ### .isNotFrozen(object)
	   *
	   * Asserts that `object` is _not_ frozen.
	   *
	   *     assert.isNotFrozen({});
	   *
	   * @name isNotFrozen
	   * @alias notFrozen
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotFrozen = function (obj, msg) {
	    new Assertion(obj, msg).to.not.be.frozen;
	  };
	
	  /*!
	   * Aliases.
	   */
	
	  (function alias(name, as){
	    assert[as] = assert[name];
	    return alias;
	  })
	  ('isOk', 'ok')
	  ('isNotOk', 'notOk')
	  ('throws', 'throw')
	  ('throws', 'Throw')
	  ('isExtensible', 'extensible')
	  ('isNotExtensible', 'notExtensible')
	  ('isSealed', 'sealed')
	  ('isNotSealed', 'notSealed')
	  ('isFrozen', 'frozen')
	  ('isNotFrozen', 'notFrozen');
	};


/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(179);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _datasource = __webpack_require__(252);
	
	var Datasource = _interopRequireWildcard(_datasource);
	
	var _reactRedux = __webpack_require__(185);
	
	var _lodash = __webpack_require__(2);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _elements = __webpack_require__(207);
	
	var ui = _interopRequireWildcard(_elements);
	
	var _reduxForm = __webpack_require__(238);
	
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
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(179);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _widgets = __webpack_require__(201);
	
	var Widgets = _interopRequireWildcard(_widgets);
	
	var _reactRedux = __webpack_require__(185);
	
	var _widgetConfig = __webpack_require__(203);
	
	var WidgetConfig = _interopRequireWildcard(_widgetConfig);
	
	var _lodash = __webpack_require__(2);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _elements = __webpack_require__(207);
	
	var ui = _interopRequireWildcard(_elements);
	
	var _widgetPlugins = __webpack_require__(211);
	
	var WidgetPlugins = _interopRequireWildcard(_widgetPlugins);
	
	var _reduxForm = __webpack_require__(238);
	
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
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(179);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(2);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _elements = __webpack_require__(207);
	
	var ui = _interopRequireWildcard(_elements);
	
	var _reactRedux = __webpack_require__(185);
	
	var _reduxForm = __webpack_require__(238);
	
	var _modalDialogIds = __webpack_require__(208);
	
	var ModalIds = _interopRequireWildcard(_modalDialogIds);
	
	var _modalDialog = __webpack_require__(205);
	
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
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(179);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _modalDialogUi = __webpack_require__(206);
	
	var _modalDialogUi2 = _interopRequireDefault(_modalDialogUi);
	
	var _reactRedux = __webpack_require__(185);
	
	var _lodash = __webpack_require__(2);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _reduxForm = __webpack_require__(238);
	
	var _elements = __webpack_require__(207);
	
	var ui = _interopRequireWildcard(_elements);
	
	var _modalDialogIds = __webpack_require__(208);
	
	var ModalIds = _interopRequireWildcard(_modalDialogIds);
	
	var _modalDialog = __webpack_require__(205);
	
	var Modal = _interopRequireWildcard(_modalDialog);
	
	var _plugins = __webpack_require__(242);
	
	var Plugins = _interopRequireWildcard(_plugins);
	
	var _widgetPlugins = __webpack_require__(211);
	
	var WidgetsPlugins = _interopRequireWildcard(_widgetPlugins);
	
	var _datasourcePlugins = __webpack_require__(243);
	
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
/* 297 */
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
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Widget = exports.TYPE_INFO = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(179);
	
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
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Widget = exports.TYPE_INFO = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(179);
	
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
/* 300 */,
/* 301 */,
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.start = start;
	exports.stop = stop;
	
	var _datasource = __webpack_require__(252);
	
	var Datasource = _interopRequireWildcard(_datasource);
	
	var _datasourcePlugins = __webpack_require__(243);
	
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
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.clearState = clearState;
	
	var _redux = __webpack_require__(186);
	
	var Redux = _interopRequireWildcard(_redux);
	
	var _reduxThunk = __webpack_require__(304);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reduxLogger = __webpack_require__(305);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _widgets = __webpack_require__(201);
	
	var Widgets = _interopRequireWildcard(_widgets);
	
	var _widgetConfig = __webpack_require__(203);
	
	var WidgetConfig = _interopRequireWildcard(_widgetConfig);
	
	var _layouts = __webpack_require__(235);
	
	var Layouts = _interopRequireWildcard(_layouts);
	
	var _datasource = __webpack_require__(252);
	
	var Datasource = _interopRequireWildcard(_datasource);
	
	var _import = __webpack_require__(241);
	
	var Import = _interopRequireWildcard(_import);
	
	var _modalDialog = __webpack_require__(205);
	
	var Modal = _interopRequireWildcard(_modalDialog);
	
	var _persistence = __webpack_require__(297);
	
	var Persist = _interopRequireWildcard(_persistence);
	
	var _plugins = __webpack_require__(242);
	
	var Plugins = _interopRequireWildcard(_plugins);
	
	var _reduxForm = __webpack_require__(238);
	
	var _actionNames = __webpack_require__(204);
	
	var Action = _interopRequireWildcard(_actionNames);
	
	var _widgetPlugins = __webpack_require__(211);
	
	var WidgetPlugins = _interopRequireWildcard(_widgetPlugins);
	
	var _datasourcePlugins = __webpack_require__(243);
	
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
	    datasourcePlugins: DatasourcePlugins.datasourcePlugins
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
/* 304 */,
/* 305 */,
/* 306 */
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
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Datasource = exports.TYPE_INFO = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _chai = __webpack_require__(253);
	
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
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _freeboardDatasource = __webpack_require__(309);
	
	var FreeboardDatasource = _interopRequireWildcard(_freeboardDatasource);
	
	var _plugins = __webpack_require__(242);
	
	var Plugins = _interopRequireWildcard(_plugins);
	
	var _pluginCache = __webpack_require__(245);
	
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
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.create = create;
	
	var _loadjs = __webpack_require__(244);
	
	var _loadjs2 = _interopRequireDefault(_loadjs);
	
	var _lodash = __webpack_require__(2);
	
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
	            (0, _loadjs2.default)([].concat(_toConsumableArray(TYPE_INFO.dependencies)), createNewInstance);
	        } else {
	            createNewInstance();
	        }
	
	        function createNewInstance() {
	            newInstance(props, newInstanceCallback, updateCallback);
	        }
	    }.bind(this, newInstance);
	}

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _pluginCache = __webpack_require__(245);
	
	var PluginCache = _interopRequireWildcard(_pluginCache);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	window.iotDashboardApi = {
	    registerDatasourcePlugin: PluginCache.registerDatasourcePlugin,
	    registerWidgetPlugin: PluginCache.registerWidgetPlugin
	};

/***/ },
/* 311 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 312 */,
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ }
]);
//# sourceMappingURL=app.bundle.js.map