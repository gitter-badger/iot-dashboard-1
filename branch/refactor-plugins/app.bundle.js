webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _react = __webpack_require__(2);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactDom = __webpack_require__(39);
	
	var ReactDOM = _interopRequireWildcard(_reactDom);
	
	var _reactRedux = __webpack_require__(169);
	
	var _pageLayout = __webpack_require__(183);
	
	var _pageLayout2 = _interopRequireDefault(_pageLayout);
	
	var _lodash = __webpack_require__(185);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	__webpack_require__(287);
	
	__webpack_require__(295);
	
	__webpack_require__(296);
	
	var _widgets = __webpack_require__(187);
	
	var Widgets = _interopRequireWildcard(_widgets);
	
	var _widgetPlugins = __webpack_require__(190);
	
	var _widgetPlugins2 = _interopRequireDefault(_widgetPlugins);
	
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
	
	var _plugins = __webpack_require__(232);
	
	var Plugins = _interopRequireWildcard(_plugins);
	
	__webpack_require__(308);
	
	__webpack_require__(234);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var state = Store.default.getState();
	
	Store.default.dispatch(Plugins.loadPlugin(TextWidget));
	Store.default.dispatch(Plugins.loadPlugin(ChartWidget));
	
	Store.default.dispatch(Plugins.loadPlugin(RandomDatasource));
	Store.default.dispatch(Plugins.loadPlugin(TimeDatasource));
	
	Store.default.dispatch(Plugins.initializeExternalPlugins());
	
	// Would delet async loaded widgets that are not known yet.
	//cleanupState(state);
	
	function cleanupState(state) {
	    _lodash2.default.valuesIn(state.widgets).forEach(function (widgetState) {
	        var widgetPlugin = _widgetPlugins2.default.getPlugin(widgetState.type);
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
	        // TODO: Rendering of error message sux
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

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var React = _interopRequireWildcard(_react);
	
	var _widgetGrid = __webpack_require__(184);
	
	var _widgetGrid2 = _interopRequireDefault(_widgetGrid);
	
	var _jquery = __webpack_require__(197);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _layouts = __webpack_require__(228);
	
	var _layouts2 = _interopRequireDefault(_layouts);
	
	var _widgetConfigDialog = __webpack_require__(195);
	
	var _widgetConfigDialog2 = _interopRequireDefault(_widgetConfigDialog);
	
	var _dashboardMenuEntry = __webpack_require__(230);
	
	var _dashboardMenuEntry2 = _interopRequireDefault(_dashboardMenuEntry);
	
	var _importExportDialog = __webpack_require__(239);
	
	var _importExportDialog2 = _interopRequireDefault(_importExportDialog);
	
	var _datasourceConfigDialog = __webpack_require__(240);
	
	var _datasourceConfigDialog2 = _interopRequireDefault(_datasourceConfigDialog);
	
	var _datasourceNavItem = __webpack_require__(282);
	
	var _datasourceNavItem2 = _interopRequireDefault(_datasourceNavItem);
	
	var _widgetsNavItem = __webpack_require__(283);
	
	var _widgetsNavItem2 = _interopRequireDefault(_widgetsNavItem);
	
	var _pluginNavItem = __webpack_require__(284);
	
	var _pluginNavItem2 = _interopRequireDefault(_pluginNavItem);
	
	var _pluginsDialog = __webpack_require__(285);
	
	var _pluginsDialog2 = _interopRequireDefault(_pluginsDialog);
	
	var _persistence = __webpack_require__(286);
	
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

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRedux = __webpack_require__(169);
	
	var _lodash = __webpack_require__(185);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _widgets = __webpack_require__(187);
	
	var Widgets = _interopRequireWildcard(_widgets);
	
	var _widgetFrame = __webpack_require__(205);
	
	var _widgetFrame2 = _interopRequireDefault(_widgetFrame);
	
	var _widgetPlugins = __webpack_require__(190);
	
	var _widgetPlugins2 = _interopRequireDefault(_widgetPlugins);
	
	var _widthProvider = __webpack_require__(207);
	
	var _widthProvider2 = _interopRequireDefault(_widthProvider);
	
	var _reactGridLayout = __webpack_require__(208);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Prop = React.PropTypes;
	var ResponsiveGrid = (0, _widthProvider2.default)(_reactGridLayout.Responsive);
	
	__webpack_require__(224);
	
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
	            var widgetData = this.props.widgets || [];
	            // WidgetFrame must be loaded as function, else the grid is not working properly.
	            // TODO: Remove unknown widget from state
	            var widgets = widgetData.map(function (data) {
	                var widget = _widgetPlugins2.default.getPlugin(data.type);
	                if (!widget) {
	                    console.warn("No WidgetPlugin for type '" + data.type + "'! Skipping rendering.");
	                    return null;
	                }
	                return (0, _widgetFrame2.default)({ widget: data, datasources: props.datasources });
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
	    widgets: Prop.array.isRequired,
	    datasources: Prop.object.isRequired,
	    onLayoutChange: Prop.func,
	    deleteWidget: Prop.func
	};
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        widgets: _lodash2.default.valuesIn(state.widgets) || [],
	        datasources: state.datasources || {}
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

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRedux = __webpack_require__(169);
	
	var _widgetConfig = __webpack_require__(189);
	
	var WidgetConfig = _interopRequireWildcard(_widgetConfig);
	
	var _widgetPlugins = __webpack_require__(190);
	
	var _widgetPlugins2 = _interopRequireDefault(_widgetPlugins);
	
	var _widgets = __webpack_require__(187);
	
	var _datasourcePlugins = __webpack_require__(206);
	
	var _datasourcePlugins2 = _interopRequireDefault(_datasourcePlugins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var Prop = React.PropTypes;
	
	/**
	 * The Dragable Frame of a Widget.
	 * Contains generic UI controls, shared by all Widgets
	 */
	var WidgetFrame = function WidgetFrame(props) {
	    var widgetState = props.widget;
	
	    var widgetPlugin = _widgetPlugins2.default.getPlugin(widgetState.type);
	    console.assert(widgetPlugin, "No registered widget with type: " + widgetState.type);
	
	    var dataResolver = function dataResolver(id) {
	        var ds = props.datasources[id];
	        if (!ds) {
	            //console.warn("Can not find Datasource with id " + id + " for widget: ", widgetState, " Returning empty data!");
	            return [];
	        }
	
	        return ds.data ? [].concat(_toConsumableArray(ds.data)) : [];
	    };
	
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
	                    visible: widgetPlugin.settings ? true : false, icon: 'configure' }),
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
	            widgetPlugin.getOrCreateInstance(widgetState.id)
	        )
	    );
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

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(39);
	
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
	            value: function onWindowResize(_event, cb) {
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

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(169);
	
	var _lodash = __webpack_require__(185);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _layouts = __webpack_require__(229);
	
	var Layouts = _interopRequireWildcard(_layouts);
	
	var _elements = __webpack_require__(199);
	
	var ui = _interopRequireWildcard(_elements);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Prop = _react2.default.PropTypes;
	
	/*TODO: Add remove button next to each loadable layout
	 * - Connect with Actions
	 * */
	var TopNavItem = function TopNavItem(props) {
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
	
	TopNavItem.propTypes = {
	    layouts: Prop.arrayOf(Prop.shape({
	        name: Prop.string
	    })),
	    widgets: Prop.object,
	    currentLayout: Prop.object
	};
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        layouts: _lodash2.default.valuesIn(state.layouts),
	        currentLayout: state.currentLayout,
	        widgets: state.widgets
	    };
	}, function (dispatch) {
	    return {};
	})(TopNavItem);
	
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
	    onEnter: Prop.func,
	    widgets: Prop.object
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
	    deleteLayout: Prop.func.isRequired,
	    onClick: Prop.func.isRequired,
	    layout: Prop.object.isRequired,
	    currentLayout: Prop.object
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

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(169);
	
	var _import = __webpack_require__(231);
	
	var Import = _interopRequireWildcard(_import);
	
	var _modalDialog = __webpack_require__(196);
	
	var _modalDialog2 = _interopRequireDefault(_modalDialog);
	
	var _modalDialog3 = __webpack_require__(198);
	
	var Modal = _interopRequireWildcard(_modalDialog3);
	
	var _modalDialogIds = __webpack_require__(203);
	
	var ModalIds = _interopRequireWildcard(_modalDialogIds);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Prop = _react2.default.PropTypes;
	
	var TopNavItem = function TopNavItem(props) {
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
	
	TopNavItem.propTypes = {
	    showModal: Prop.func.isRequired
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
	})(TopNavItem);

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(169);
	
	var _import = __webpack_require__(231);
	
	var Import = _interopRequireWildcard(_import);
	
	var _modalDialogUi = __webpack_require__(196);
	
	var _modalDialogUi2 = _interopRequireDefault(_modalDialogUi);
	
	var _modalDialogIds = __webpack_require__(203);
	
	var ModalIds = _interopRequireWildcard(_modalDialogIds);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Prop = _react2.default.PropTypes;
	
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
	    state: Prop.object,
	    doImport: Prop.func.isRequired
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

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.unshiftIfNotExists = unshiftIfNotExists;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _modalDialogUi = __webpack_require__(196);
	
	var _modalDialogUi2 = _interopRequireDefault(_modalDialogUi);
	
	var _datasource = __webpack_require__(241);
	
	var Datasource = _interopRequireWildcard(_datasource);
	
	var _datasourcePlugins = __webpack_require__(206);
	
	var _datasourcePlugins2 = _interopRequireDefault(_datasourcePlugins);
	
	var _reactRedux = __webpack_require__(169);
	
	var _lodash = __webpack_require__(185);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _elements = __webpack_require__(199);
	
	var ui = _interopRequireWildcard(_elements);
	
	var _settingsForm = __webpack_require__(200);
	
	var _settingsForm2 = _interopRequireDefault(_settingsForm);
	
	var _reduxForm = __webpack_require__(201);
	
	var _modalDialogIds = __webpack_require__(203);
	
	var ModalIds = _interopRequireWildcard(_modalDialogIds);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Prop = _react2.default.PropTypes;
	
	var DIALOG_ID = ModalIds.DATASOURCE_CONFIG;
	var FORM_ID = "datasource-settings-form";
	
	function unshiftIfNotExists(array, element) {
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
	
	            var datasources = _datasourcePlugins2.default.getPlugins();
	            var selectedSource = void 0;
	            if (this.state.selectedType) {
	                selectedSource = _datasourcePlugins2.default.getPlugin(this.state.selectedType);
	            } else {
	                selectedSource = { settings: [] };
	            }
	
	            var settings = [];
	            if (selectedSource && selectedSource.settings) {
	                settings = [].concat(_toConsumableArray(selectedSource.settings));
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
	                                _lodash2.default.valuesIn(datasources).map(function (source) {
	                                    return _react2.default.createElement(
	                                        'option',
	                                        { key: source.type, value: source.type },
	                                        source.name
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
	    createOrUpdateDatasource: Prop.func.isRequired,
	    resetForm: Prop.func.isRequired,
	    dialogData: Prop.object.isRequired
	};
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        dialogData: state.modalDialog.data || {}
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

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _datasource = __webpack_require__(241);
	
	var Datasource = _interopRequireWildcard(_datasource);
	
	var _reactRedux = __webpack_require__(169);
	
	var _lodash = __webpack_require__(185);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _elements = __webpack_require__(199);
	
	var ui = _interopRequireWildcard(_elements);
	
	var _reduxForm = __webpack_require__(201);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Prop = _react2.default.PropTypes;
	
	var TopNavItem = function TopNavItem(props) {
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
	
	TopNavItem.propTypes = {
	    createDatasource: Prop.func.isRequired,
	    editDatasource: Prop.func.isRequired,
	    deleteDatasource: Prop.func.isRequired,
	    datasources: Prop.objectOf(Prop.shape({
	        type: Prop.string.isRequired,
	        id: Prop.string.isRequired,
	        props: Prop.object.isRequired
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
	})(TopNavItem);

/***/ },

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _widgets = __webpack_require__(187);
	
	var Widgets = _interopRequireWildcard(_widgets);
	
	var _reactRedux = __webpack_require__(169);
	
	var _widgetConfig = __webpack_require__(189);
	
	var WidgetConfig = _interopRequireWildcard(_widgetConfig);
	
	var _lodash = __webpack_require__(185);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _elements = __webpack_require__(199);
	
	var ui = _interopRequireWildcard(_elements);
	
	var _reduxForm = __webpack_require__(201);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Prop = _react2.default.PropTypes;
	
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
	            _lodash2.default.valuesIn(props.plugins).filter(function (p) {
	                return p.isWidget;
	            }).map(function (widgetPlugin) {
	                return _react2.default.createElement(AddWidget, { key: widgetPlugin.id, text: widgetPlugin.typeInfo.name, type: widgetPlugin.typeInfo.type });
	            })
	        )
	    );
	};
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        plugins: state.plugins
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

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(185);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _elements = __webpack_require__(199);
	
	var ui = _interopRequireWildcard(_elements);
	
	var _reactRedux = __webpack_require__(169);
	
	var _reduxForm = __webpack_require__(201);
	
	var _modalDialogIds = __webpack_require__(203);
	
	var ModalIds = _interopRequireWildcard(_modalDialogIds);
	
	var _modalDialog = __webpack_require__(198);
	
	var Modal = _interopRequireWildcard(_modalDialog);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Prop = _react2.default.PropTypes;
	
	var TopNavItem = function TopNavItem(props) {
	    return _react2.default.createElement(
	        "a",
	        { className: "item", onClick: function onClick() {
	                return props.showPluginsDialog();
	            } },
	        "Plugins"
	    );
	};
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {};
	}, function (dispatch) {
	    return {
	        showPluginsDialog: function showPluginsDialog() {
	            dispatch(Modal.showModal(ModalIds.PLUGINS));
	        }
	    };
	})(TopNavItem);

/***/ },

/***/ 285:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _modalDialogUi = __webpack_require__(196);
	
	var _modalDialogUi2 = _interopRequireDefault(_modalDialogUi);
	
	var _reactRedux = __webpack_require__(169);
	
	var _lodash = __webpack_require__(185);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _reduxForm = __webpack_require__(201);
	
	var _elements = __webpack_require__(199);
	
	var ui = _interopRequireWildcard(_elements);
	
	var _modalDialogIds = __webpack_require__(203);
	
	var ModalIds = _interopRequireWildcard(_modalDialogIds);
	
	var _modalDialog = __webpack_require__(198);
	
	var Modal = _interopRequireWildcard(_modalDialog);
	
	var _plugins = __webpack_require__(232);
	
	var Plugins = _interopRequireWildcard(_plugins);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Prop = _react2.default.PropTypes;
	
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
	
	            var datasourceStates = _lodash2.default.valuesIn(props.plugins).filter(function (ds) {
	                return ds.isDatasource;
	            });
	            var widgetStates = _lodash2.default.valuesIn(props.plugins).filter(function (ds) {
	                return ds.isWidget;
	            });
	
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
	                                        defaultValue: 'http://localhost:8080/plugins/TestWidgetPlugin.js'
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
	                        _react2.default.createElement(DatasourcePluginList, _extends({ datasourceStates: datasourceStates }, props)),
	                        _react2.default.createElement(
	                            'h4',
	                            { className: 'ui dividing header' },
	                            'Widget Plugins'
	                        ),
	                        _react2.default.createElement(WidgetPluginList, _extends({ widgetStates: widgetStates }, props))
	                    )
	                )
	            );
	        }
	    }]);
	
	    return PluginsModal;
	}(_react2.default.Component);
	
	PluginsModal.propTypes = {
	    plugins: Prop.object.isRequired,
	    closeDialog: Prop.func.isRequired,
	    loadPlugin: Prop.func.isRequired,
	    removePlugin: Prop.func.isRequired
	};
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        plugins: state.plugins
	    };
	}, function (dispatch) {
	    return {
	        closeDialog: function closeDialog() {
	            return dispatch(Modal.closeModal());
	        },
	        // TODO: Render loading indicator while Plugin loads
	        loadPlugin: function loadPlugin(url) {
	            return dispatch(Plugins.loadPluginFromUrl(url));
	        },
	        removePlugin: function removePlugin(type) {
	            return dispatch(Plugins.unloadPlugin(type));
	        }
	
	    };
	})(PluginsModal);
	
	
	var DatasourcePluginList = function DatasourcePluginList(props) {
	    return _react2.default.createElement(
	        'div',
	        { className: 'ui five cards' },
	        props.datasourceStates.map(function (dsState) {
	            return _react2.default.createElement(PluginCard, _extends({ key: dsState.id, pluginState: dsState }, props));
	        })
	    );
	};
	
	var WidgetPluginList = function WidgetPluginList(props) {
	    return _react2.default.createElement(
	        'div',
	        { className: 'ui five cards' },
	        props.widgetStates.map(function (dsState) {
	            return _react2.default.createElement(PluginCard, _extends({ key: dsState.id, pluginState: dsState }, props));
	        })
	    );
	};
	
	DatasourcePluginList.propTypes = {
	    datasourceStates: Prop.array.isRequired
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
	            var dsState = props.pluginState;
	            return _react2.default.createElement(
	                'div',
	                { className: 'card' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'content' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'header' },
	                        dsState.typeInfo.name
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'description' },
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            'Type: ',
	                            dsState.typeInfo.type
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            dsState.typeInfo.description ? dsState.typeInfo.description : "No Description."
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
	                            defaultValue: dsState.url ? dsState.url : "Packaged" })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'ui bottom attached button', onClick: function onClick() {
	                            return props.removePlugin(dsState.id);
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
	    pluginState: Prop.object.isRequired,
	    removePlugin: Prop.func.isRequired
	};

/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Widget = exports.TYPE_INFO = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRedux = __webpack_require__(169);
	
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

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Widget = exports.TYPE_INFO = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var React = _interopRequireWildcard(_react);
	
	var _d = __webpack_require__(300);
	
	var d3 = _interopRequireWildcard(_d);
	
	var _c = __webpack_require__(301);
	
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
	            console.log("render chart");
	            this._renderChart();
	            return React.createElement('div', { className: '', id: 'chart-' + this.props._state.id });
	        }
	    }]);

	    return Widget;
	}(_react.Component);

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.start = start;
	exports.stop = stop;
	
	var _datasource = __webpack_require__(241);
	
	var Datasource = _interopRequireWildcard(_datasource);
	
	var _datasourcePlugins = __webpack_require__(206);
	
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

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Datasource = exports.TYPE_INFO = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _chai = __webpack_require__(242);
	
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
	
	var _plugins = __webpack_require__(232);
	
	var Plugins = _interopRequireWildcard(_plugins);
	
	var _pluginApi = __webpack_require__(234);
	
	var PluginApi = _interopRequireWildcard(_pluginApi);
	
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
	
	        PluginApi.registerDatasourcePlugin(dsPlugin.TYPE_INFO, dsPlugin.Datasource);
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
	
	var _loadjs = __webpack_require__(233);
	
	var _loadjs2 = _interopRequireDefault(_loadjs);
	
	var _lodash = __webpack_require__(185);
	
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

/***/ }

});
//# sourceMappingURL=app.bundle.js.map