webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(2);
	__webpack_require__(12);
	__webpack_require__(14);
	__webpack_require__(16);
	__webpack_require__(18);
	__webpack_require__(50);
	__webpack_require__(53);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(100);
	__webpack_require__(101);
	var Renderer = __webpack_require__(104);
	var TextWidget = __webpack_require__(271);
	var ChartWidget = __webpack_require__(272);
	var DatasourceWorker = __webpack_require__(275);
	var RandomDatasource = __webpack_require__(276);
	var TimeDatasource = __webpack_require__(277);
	var store_1 = __webpack_require__(81);
	var Store = __webpack_require__(81);
	var Plugins = __webpack_require__(56);
	function loadInitialPlugins(store) {
	    store.dispatch(Plugins.loadPlugin(TextWidget));
	    store.dispatch(Plugins.loadPlugin(ChartWidget));
	    store.dispatch(Plugins.loadPluginFromUrl("./plugins/GoogleMapsWidget.js"));
	    store.dispatch(Plugins.loadPlugin(RandomDatasource));
	    store.dispatch(Plugins.loadPlugin(TimeDatasource));
	    store.dispatch(Plugins.loadPluginFromUrl("./plugins/DigimondoGpsDatasource.js"));
	    store.dispatch(Plugins.initializeExternalPlugins());
	}
	loadInitialPlugins(store_1.default);
	var element = document.getElementById('app');
	if (element) {
	    try {
	        renderDashboard(element, store_1.default);
	    }
	    catch (e) {
	        console.warn("Failed to load dashboard. Asking user to wipe data and retry. The error will be printed below...");
	        if (confirm("Failed to load dashboard. Reset all Data?\n\nPress cancel and check the browser console for more details.")) {
	            store_1.default.dispatch(Store.clearState());
	            loadInitialPlugins(store_1.default);
	            renderDashboard(element, store_1.default);
	        }
	        else {
	            throw e;
	        }
	    }
	}
	else {
	    console.warn("Can not get element '#app' from DOM. Okay for headless execution.");
	}
	function renderDashboard(element, store) {
	    Renderer.render(element, store);
	    DatasourceWorker.start();
	}


/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["$"] = __webpack_require__(17);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["jQuery"] = __webpack_require__(13);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["React"] = __webpack_require__(19);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["_"] = __webpack_require__(51);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _freeboardDatasource = __webpack_require__(54);
	
	var FreeboardDatasource = _interopRequireWildcard(_freeboardDatasource);
	
	var _plugins = __webpack_require__(56);
	
	var Plugins = _interopRequireWildcard(_plugins);
	
	var _pluginCache = __webpack_require__(76);
	
	var PluginCache = _interopRequireWildcard(_pluginCache);
	
	var _store = __webpack_require__(81);
	
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

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.create = create;
	
	var _loadjs = __webpack_require__(55);
	
	var _loadjs2 = _interopRequireDefault(_loadjs);
	
	var _lodash = __webpack_require__(51);
	
	var _ = _interopRequireWildcard(_lodash);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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
	            if (_.isArray(this.data)) {
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

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.loadPlugin = loadPlugin;
	exports.loadPluginFromUrl = loadPluginFromUrl;
	exports.initializeExternalPlugins = initializeExternalPlugins;
	exports.addPlugin = addPlugin;
	
	var _actionNames = __webpack_require__(57);
	
	var Action = _interopRequireWildcard(_actionNames);
	
	var _datasourcePlugins = __webpack_require__(58);
	
	var DatasourcePlugins = _interopRequireWildcard(_datasourcePlugins);
	
	var _widgetPlugins = __webpack_require__(62);
	
	var WidgetPlugins = _interopRequireWildcard(_widgetPlugins);
	
	var _loadjs = __webpack_require__(55);
	
	var _loadjs2 = _interopRequireDefault(_loadjs);
	
	var _pluginCache = __webpack_require__(76);
	
	var PluginCache = _interopRequireWildcard(_pluginCache);
	
	var _lodash = __webpack_require__(51);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _urijs = __webpack_require__(77);
	
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
	            if (_.isArray(dependencies) && dependencies.length !== 0) {
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
	        var plugins = _.valuesIn(state.plugins);
	
	        plugins.filter(function (pluginState) {
	            return !_.isEmpty(pluginState.url);
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
	
	        var existentPluginState = _.valuesIn(plugins).find(function (pluginState) {
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

/***/ 57:
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

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.pluginRegistry = exports.DatasourcePluginRegistry = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.unloadPlugin = unloadPlugin;
	exports.datasourcePlugins = datasourcePlugins;
	
	var _datasourcePlugin = __webpack_require__(59);
	
	var DsPlugin = _interopRequireWildcard(_datasourcePlugin);
	
	var _pluginRegistry = __webpack_require__(60);
	
	var _pluginRegistry2 = _interopRequireDefault(_pluginRegistry);
	
	var _actionNames = __webpack_require__(57);
	
	var Action = _interopRequireWildcard(_actionNames);
	
	var _reducer = __webpack_require__(61);
	
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

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DataSourcePlugin = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(51);
	
	var _ = _interopRequireWildcard(_lodash);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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
	            _.valuesIn(this.instances).forEach(function (instance) {
	                if (_.isFunction(instance.dispose)) {
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
	            _.valuesIn(state.datasources).forEach(function (dsState) {
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
	                if (_.isFunction(instance.propsWillUpdate)) {
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

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _datasourcePlugin = __webpack_require__(59);
	
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
	        value: function getPlugin(type) {
	            return this.plugins[type];
	        }
	    }, {
	        key: "getPlugins",
	        value: function getPlugins() {
	            return Object.assign({}, this.plugins);
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

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.genCrudReducer = genCrudReducer;
	
	var _lodash = __webpack_require__(51);
	
	var _ = _interopRequireWildcard(_lodash);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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
	function genCrudReducer(actionNames, elementReducer) {
	    var idProperty = arguments.length <= 2 || arguments[2] === undefined ? 'id' : arguments[2];
	
	    console.assert(actionNames.length === 2, "ActionNames must contain 2 names for create, delete in that order");
	
	    var _actionNames = _slicedToArray(actionNames, 2);
	
	    var CREATE_ACTION = _actionNames[0];
	    var DELETE_ACTION = _actionNames[1];
	
	    console.assert(_.includes(CREATE_ACTION, "ADD") || _.includes(CREATE_ACTION, "CREATE"), "The create action name should probably contain ADD or DELETE, but is: " + CREATE_ACTION);
	    console.assert(_.includes(DELETE_ACTION, "DELETE") || _.includes(DELETE_ACTION, "REMOVE"), "The delete action name should probably contain DELETE or REMOVE, but is: " + DELETE_ACTION);
	
	    return function crudReducer(state, action) {
	        var id = action[idProperty];
	        switch (action.type) {
	            case CREATE_ACTION:
	                return Object.assign({}, state, _defineProperty({}, id, elementReducer(undefined, action)));
	            case DELETE_ACTION:
	                var newState = Object.assign({}, state);
	                delete newState[id];
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
	
	                return Object.assign({}, state, _defineProperty({}, id, updatedElement));
	        }
	    };
	}

/***/ },

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.pluginRegistry = exports.widgetPluginType = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.unloadPlugin = unloadPlugin;
	exports.widgetPlugins = widgetPlugins;
	
	var _widgetPlugin = __webpack_require__(63);
	
	var _widgetPlugin2 = _interopRequireDefault(_widgetPlugin);
	
	var _pluginRegistry = __webpack_require__(60);
	
	var _pluginRegistry2 = _interopRequireDefault(_pluginRegistry);
	
	var _actionNames = __webpack_require__(57);
	
	var Action = _interopRequireWildcard(_actionNames);
	
	var _reducer = __webpack_require__(61);
	
	var _react = __webpack_require__(19);
	
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

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactRedux = __webpack_require__(64);
	
	var _react = __webpack_require__(19);
	
	var React = _interopRequireWildcard(_react);
	
	var _lodash = __webpack_require__(51);
	
	var _ = _interopRequireWildcard(_lodash);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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
	
	            this.instances[id] = React.createElement(widget, { _widgetClass: this.Widget });
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
	            return React.createElement(
	                'div',
	                { ref: 'container' },
	                'Widget Plugin missing rendering!'
	            );
	        }
	    }]);
	
	    return DomWidgetContainer;
	}(React.Component);
	
	DomWidgetContainer.propTypes = {
	    _widgetClass: _react.PropTypes.func.isRequired
	};

/***/ },

/***/ 76:
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

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Redux = __webpack_require__(65);
	var redux_thunk_1 = __webpack_require__(82);
	var createLogger = __webpack_require__(83);
	var Widgets = __webpack_require__(84);
	var WidgetConfig = __webpack_require__(86);
	var Layouts = __webpack_require__(91);
	var Datasource = __webpack_require__(92);
	var Dashboard = __webpack_require__(93);
	var Import = __webpack_require__(94);
	var Modal = __webpack_require__(87);
	var Persist = __webpack_require__(95);
	var redux_form_1 = __webpack_require__(96);
	var Action = __webpack_require__(57);
	var WidgetPlugins = __webpack_require__(62);
	var DatasourcePlugins = __webpack_require__(58);
	var store;
	var appReducer = Redux.combineReducers({
	    widgets: Widgets.widgets,
	    widgetConfig: WidgetConfig.widgetConfigDialog,
	    layouts: Layouts.layouts,
	    currentLayout: Layouts.currentLayout,
	    datasources: Datasource.datasources,
	    form: redux_form_1.reducer,
	    modalDialog: Modal.modalDialog,
	    widgetPlugins: WidgetPlugins.widgetPlugins,
	    datasourcePlugins: DatasourcePlugins.datasourcePlugins,
	    dashboard: Dashboard.dashboard
	});
	var reducer = function (state, action) {
	    if (action.type === Action.CLEAR_STATE) {
	        state = undefined;
	    }
	    state = Import.importReducer(state, action);
	    return appReducer(state, action);
	};
	var logger = createLogger({
	    duration: false,
	    timestamp: true,
	    logErrors: true,
	    predicate: function (getState, action) {
	        if (action.type.startsWith("redux-form")) {
	            return false;
	        }
	        return !action.doNotLog;
	    }
	});
	store = Redux.createStore(reducer, Persist.loadFromLocalStorage(), Redux.applyMiddleware(redux_thunk_1.default, Persist.persistenceMiddleware, logger // must be last
	));
	DatasourcePlugins.pluginRegistry.store = store;
	WidgetPlugins.pluginRegistry.store = store;
	function clearState() {
	    return {
	        type: Action.CLEAR_STATE
	    };
	}
	exports.clearState = clearState;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = store;


/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var react_1 = __webpack_require__(19);
	var Uuid = __webpack_require__(85);
	var _ = __webpack_require__(51);
	var reducer_js_1 = __webpack_require__(61);
	var Action = __webpack_require__(57);
	var objectAssign = __webpack_require__(26);
	exports.HEADER_HEIGHT = 77;
	exports.ROW_HEIGHT = 100;
	exports.initialWidgets = {
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
	exports.widgetPropType = react_1.PropTypes.shape({
	    id: react_1.PropTypes.string.isRequired,
	    col: react_1.PropTypes.number.isRequired,
	    row: react_1.PropTypes.number.isRequired,
	    width: react_1.PropTypes.number.isRequired,
	    height: react_1.PropTypes.number.isRequired,
	    props: react_1.PropTypes.shape({
	        name: react_1.PropTypes.string.isRequired
	    }).isRequired
	});
	function addWidget(widgetType, widgetProps, width, height) {
	    if (widgetProps === void 0) { widgetProps = {}; }
	    if (width === void 0) { width = 3; }
	    if (height === void 0) { height = 3; }
	    return function (dispatch, getState) {
	        var widgets = getState().widgets;
	        var widgetPositions = calcNewWidgetPosition(widgets);
	        return dispatch({
	            type: Action.ADD_WIDGET,
	            id: Uuid.generate(),
	            col: widgetPositions.col,
	            row: widgetPositions.row,
	            width: width,
	            height: height,
	            widgetType: widgetType,
	            widgetProps: widgetProps
	        });
	    };
	}
	exports.addWidget = addWidget;
	function updateWidgetProps(id, widgetProps) {
	    if (widgetProps === void 0) { widgetProps = {}; }
	    return {
	        type: Action.UPDATE_WIDGET_PROPS,
	        id: id,
	        widgetProps: widgetProps
	    };
	}
	exports.updateWidgetProps = updateWidgetProps;
	function deleteWidget(id) {
	    return {
	        type: Action.DELETE_WIDGET,
	        id: id
	    };
	}
	exports.deleteWidget = deleteWidget;
	function updateLayout(layout) {
	    return {
	        type: Action.UPDATE_WIDGET_LAYOUT,
	        layout: layout
	    };
	}
	exports.updateLayout = updateLayout;
	var widgetsCrudReducer = reducer_js_1.genCrudReducer([Action.ADD_WIDGET, Action.DELETE_WIDGET], widget);
	function widgets(state, action) {
	    if (state === void 0) { state = exports.initialWidgets; }
	    state = widgetsCrudReducer(state, action);
	    switch (action.type) {
	        case Action.UPDATE_WIDGET_LAYOUT:
	            return _.valuesIn(state)
	                .reduce(function (newState, _a) {
	                var id = _a.id;
	                newState[id] = widget(newState[id], action);
	                return newState;
	            }, objectAssign({}, state));
	        case Action.LOAD_LAYOUT:
	            console.assert(action.layout.widgets, "Layout is missing Widgets, id: " + action.layout.id);
	            return action.layout.widgets || {};
	        case Action.DELETE_WIDGET_PLUGIN:
	            var toDelete = _.valuesIn(state).filter(function (widgetState) {
	                return widgetState.type == action.id;
	            });
	            var newState = objectAssign({}, state);
	            toDelete.forEach(function (widgetState) {
	                delete newState[widgetState.id];
	            });
	            return newState;
	        default:
	            return state;
	    }
	}
	exports.widgets = widgets;
	function calcAvaliableHeight(heightUnits) {
	    return (heightUnits * (exports.ROW_HEIGHT + 10)) - exports.HEADER_HEIGHT;
	}
	function widget(state, action) {
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
	                height: action.height,
	                availableHeightPx: calcAvaliableHeight(action.height)
	            };
	        case Action.UPDATE_WIDGET_PROPS:
	            return objectAssign({}, state, { props: action.widgetProps });
	        case Action.UPDATE_WIDGET_LAYOUT:
	            var layout = layoutById(action.layout, state.id);
	            if (layout == null) {
	                console.warn("No layout for widget. Skipping update of position. Id: " + state.id);
	                return state;
	            }
	            return objectAssign({}, state, {
	                row: layout.y,
	                col: layout.x,
	                width: layout.w,
	                height: layout.h,
	                // The 10 px extra seem to be based on a bug in the grid layout ...
	                availableHeightPx: calcAvaliableHeight(layout.h)
	            });
	        default:
	            return state;
	    }
	}
	// Local functions
	function layoutById(layout, id) {
	    return _.find(layout, function (l) {
	        return l.i === id;
	    });
	}
	function calcNewWidgetPosition(widgets) {
	    var colHeights = {};
	    // TODO: Replace 12 with constant for number of columns
	    // This is different on different breaking points...
	    for (var i = 0; i < 12; i++) {
	        colHeights[i] = 0;
	    }
	    colHeights = _.valuesIn(widgets).reduce(function (prev, curr) {
	        prev[curr.col] = prev[curr.col] || 0;
	        var currHeight = curr.row + curr.height || 0;
	        if (prev[curr.col] < currHeight) {
	            for (var i = curr.col; i < curr.col + curr.width; i++) {
	                prev[i] = currHeight;
	            }
	        }
	        return prev;
	    }, colHeights);
	    var heights = _.valuesIn(colHeights);
	    var col = _.keysIn(colHeights).reduce(function (a, b, index, array) {
	        return Number(colHeights[a] <= colHeights[b] ? a : b);
	    }, 0);
	    //Math.min(...colHeights);
	    return { col: col, row: Math.min.apply(Math, heights) + 1 };
	}


/***/ },

/***/ 85:
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

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.createWidget = createWidget;
	exports.createOrUpdateWidget = createOrUpdateWidget;
	exports.openWidgetCreateDialog = openWidgetCreateDialog;
	exports.openWidgetConfigDialog = openWidgetConfigDialog;
	exports.widgetConfigDialog = widgetConfigDialog;
	
	var _widgets = __webpack_require__(84);
	
	var Widgets = _interopRequireWildcard(_widgets);
	
	var _actionNames = __webpack_require__(57);
	
	var _modalDialog = __webpack_require__(87);
	
	var Modal = _interopRequireWildcard(_modalDialog);
	
	var _modalDialogIds = __webpack_require__(90);
	
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
	            return Object.assign({}, state, {
	                type: action.widgetType,
	                id: null,
	                name: action.widgetType,
	                props: {}
	            });
	        case _actionNames.START_CONFIGURE_WIDGET:
	            return Object.assign({}, state, {
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

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.showModal = showModal;
	exports.closeModal = closeModal;
	exports.modalDialog = modalDialog;
	
	var _actionNames = __webpack_require__(57);
	
	var Action = _interopRequireWildcard(_actionNames);
	
	var _modalDialogUi = __webpack_require__(88);
	
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
	            return Object.assign({}, state, {
	                dialogId: action.dialogId,
	                data: action.data,
	                isVisible: true
	            });
	        case Action.HIDE_MODAL:
	            return Object.assign({}, state, {
	                dialogId: null,
	                data: null,
	                isVisible: false
	            });
	        default:
	            return state;
	    }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(19);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRedux = __webpack_require__(64);
	
	var _modalDialog = __webpack_require__(87);
	
	var Modal = _interopRequireWildcard(_modalDialog);
	
	var _elementsUi = __webpack_require__(89);
	
	var ui = _interopRequireWildcard(_elementsUi);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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
	                return React.createElement(
	                    'div',
	                    { key: key++, className: action.className, onClick: function onClick(e) {
	                            return _this2.onClick(e, action);
	                        } },
	                    action.label,
	                    action.iconClass ? React.createElement('i', { className: action.iconClass }) : null
	                );
	            });
	
	            var props = this.props;
	            return React.createElement(
	                'div',
	                { id: this.props.id, className: 'ui modal ' + this.props.id },
	                React.createElement(
	                    'div',
	                    { className: 'header' },
	                    props.title
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'content' },
	                    props.children
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'actions' },
	                    actions
	                )
	            );
	        }
	    }]);
	
	    return ModalDialog;
	}(React.Component);
	
	ModalDialog.propTypes = {
	    children: React.PropTypes.element.isRequired,
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },

/***/ 89:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Divider = exports.Icon = exports.LinkItem = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(19);
	
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

/***/ 90:
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

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.addLayout = addLayout;
	exports.updateLayout = updateLayout;
	exports.deleteLayout = deleteLayout;
	exports.setCurrentLayout = setCurrentLayout;
	exports.loadEmptyLayout = loadEmptyLayout;
	exports.loadLayout = loadLayout;
	exports.layouts = layouts;
	exports.layout = layout;
	exports.currentLayout = currentLayout;
	
	var _widgets = __webpack_require__(84);
	
	var Widgets = _interopRequireWildcard(_widgets);
	
	var _uuid = __webpack_require__(85);
	
	var _reducer = __webpack_require__(61);
	
	var _actionNames = __webpack_require__(57);
	
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
	            return Object.assign({}, state, {
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
	            return Object.assign({}, state, {
	                id: action.id
	            });
	        case _actionNames.DELETE_LAYOUT:
	            if (action.id == state.id) {
	                return Object.assign({}, state, {
	                    id: undefined
	                });
	            }
	            return state;
	        default:
	            return state;
	    }
	}

/***/ },

/***/ 92:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	
	var _datasourcePlugins = __webpack_require__(58);
	
	var DatasourcePlugins = _interopRequireWildcard(_datasourcePlugins);
	
	var _reducer = __webpack_require__(61);
	
	var _actionNames = __webpack_require__(57);
	
	var Action = _interopRequireWildcard(_actionNames);
	
	var _uuid = __webpack_require__(85);
	
	var Uuid = _interopRequireWildcard(_uuid);
	
	var _lodash = __webpack_require__(51);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _modalDialogIds = __webpack_require__(90);
	
	var ModalIds = _interopRequireWildcard(_modalDialogIds);
	
	var _modalDialog = __webpack_require__(87);
	
	var Modal = _interopRequireWildcard(_modalDialog);
	
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
	    // TODO: Working on that copy does not work yet. We need to notify the Datasource about updated props!
	    //let propsCopy = {...props};
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
	
	        _.valuesIn(dsStates).forEach(function (dsState) {
	            var dsFactory = DatasourcePlugins.pluginRegistry.getPlugin(dsState.type);
	
	            if (dsFactory === undefined) {
	                console.warn("Can not fetch data from non existent datasource plugin of type ", dsState.type);
	                return;
	            }
	
	            var dsInstance = dsFactory.getOrCreateInstance(dsState.id);
	            var newData = dsInstance.getValues();
	            if (!_.isArray(newData)) {
	                throw new Error("A datasource must return an array on getValues");
	                // TODO: Also check that all elements of the array are objects?
	            } else {
	                // Copy data to make sure we do not work on a reference!
	                newData = [].concat(_toConsumableArray(newData));
	            }
	
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
	            var toDelete = _.valuesIn(state).filter(function (dsState) {
	                return dsState.type == action.id;
	            });
	            var newState = Object.assign({}, state);
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
	            return Object.assign({}, state, {
	                data: action.data
	            });
	        case Action.APPEND_DATASOURCE_DATA:
	            var stateData = state.data || [];
	            return Object.assign({}, state, {
	                data: [].concat(_toConsumableArray(stateData), _toConsumableArray(action.data))
	            });
	        case Action.UPDATE_DATASOURCE:
	            return Object.assign({}, state, {
	                props: action.props
	            });
	        default:
	            return state;
	    }
	}

/***/ },

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.initialState = undefined;
	exports.setReadOnly = setReadOnly;
	exports.dashboard = dashboard;
	
	var _actionNames = __webpack_require__(57);
	
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
	            return Object.assign({}, state, {
	                isReadOnly: action.isReadOnly
	            });
	        default:
	            return state;
	    }
	}

/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.serialize = serialize;
	exports.importReducer = importReducer;
	exports.deserialize = deserialize;
	exports.doImport = doImport;
	
	var _actionNames = __webpack_require__(57);
	
	var Action = _interopRequireWildcard(_actionNames);
	
	var _layouts = __webpack_require__(91);
	
	var _plugins = __webpack_require__(56);
	
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
	            var newState = Object.assign({}, state, action.state);
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

/***/ 95:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.clearData = clearData;
	exports.persistenceMiddleware = persistenceMiddleware;
	exports.saveToLocalStorage = saveToLocalStorage;
	exports.loadFromLocalStorage = loadFromLocalStorage;
	
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
	
	    var savableState = Object.assign({}, state);
	
	    delete savableState.form;
	    delete savableState.modalDialog;
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

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _pluginCache = __webpack_require__(76);
	
	var PluginCache = _interopRequireWildcard(_pluginCache);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	window.iotDashboardApi = {
	    registerDatasourcePlugin: PluginCache.registerDatasourcePlugin,
	    registerWidgetPlugin: PluginCache.registerWidgetPlugin
	};

/***/ },

/***/ 98:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ },

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

	var require;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, global, module) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.2.1
	 */
	
	(function() {
	    "use strict";
	    function lib$es6$promise$utils$$objectOrFunction(x) {
	      return typeof x === 'function' || (typeof x === 'object' && x !== null);
	    }
	
	    function lib$es6$promise$utils$$isFunction(x) {
	      return typeof x === 'function';
	    }
	
	    function lib$es6$promise$utils$$isMaybeThenable(x) {
	      return typeof x === 'object' && x !== null;
	    }
	
	    var lib$es6$promise$utils$$_isArray;
	    if (!Array.isArray) {
	      lib$es6$promise$utils$$_isArray = function (x) {
	        return Object.prototype.toString.call(x) === '[object Array]';
	      };
	    } else {
	      lib$es6$promise$utils$$_isArray = Array.isArray;
	    }
	
	    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
	    var lib$es6$promise$asap$$len = 0;
	    var lib$es6$promise$asap$$vertxNext;
	    var lib$es6$promise$asap$$customSchedulerFn;
	
	    var lib$es6$promise$asap$$asap = function asap(callback, arg) {
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
	      lib$es6$promise$asap$$len += 2;
	      if (lib$es6$promise$asap$$len === 2) {
	        // If len is 2, that means that we need to schedule an async flush.
	        // If additional callbacks are queued before the queue is flushed, they
	        // will be processed by this flush that we are scheduling.
	        if (lib$es6$promise$asap$$customSchedulerFn) {
	          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
	        } else {
	          lib$es6$promise$asap$$scheduleFlush();
	        }
	      }
	    }
	
	    function lib$es6$promise$asap$$setScheduler(scheduleFn) {
	      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
	    }
	
	    function lib$es6$promise$asap$$setAsap(asapFn) {
	      lib$es6$promise$asap$$asap = asapFn;
	    }
	
	    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
	    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
	    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
	    var lib$es6$promise$asap$$isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
	
	    // test for web worker but not in IE10
	    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
	      typeof importScripts !== 'undefined' &&
	      typeof MessageChannel !== 'undefined';
	
	    // node
	    function lib$es6$promise$asap$$useNextTick() {
	      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	      // see https://github.com/cujojs/when/issues/410 for details
	      return function() {
	        process.nextTick(lib$es6$promise$asap$$flush);
	      };
	    }
	
	    // vertx
	    function lib$es6$promise$asap$$useVertxTimer() {
	      return function() {
	        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
	      };
	    }
	
	    function lib$es6$promise$asap$$useMutationObserver() {
	      var iterations = 0;
	      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
	      var node = document.createTextNode('');
	      observer.observe(node, { characterData: true });
	
	      return function() {
	        node.data = (iterations = ++iterations % 2);
	      };
	    }
	
	    // web worker
	    function lib$es6$promise$asap$$useMessageChannel() {
	      var channel = new MessageChannel();
	      channel.port1.onmessage = lib$es6$promise$asap$$flush;
	      return function () {
	        channel.port2.postMessage(0);
	      };
	    }
	
	    function lib$es6$promise$asap$$useSetTimeout() {
	      return function() {
	        setTimeout(lib$es6$promise$asap$$flush, 1);
	      };
	    }
	
	    var lib$es6$promise$asap$$queue = new Array(1000);
	    function lib$es6$promise$asap$$flush() {
	      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
	        var callback = lib$es6$promise$asap$$queue[i];
	        var arg = lib$es6$promise$asap$$queue[i+1];
	
	        callback(arg);
	
	        lib$es6$promise$asap$$queue[i] = undefined;
	        lib$es6$promise$asap$$queue[i+1] = undefined;
	      }
	
	      lib$es6$promise$asap$$len = 0;
	    }
	
	    function lib$es6$promise$asap$$attemptVertx() {
	      try {
	        var r = require;
	        var vertx = __webpack_require__(102);
	        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
	        return lib$es6$promise$asap$$useVertxTimer();
	      } catch(e) {
	        return lib$es6$promise$asap$$useSetTimeout();
	      }
	    }
	
	    var lib$es6$promise$asap$$scheduleFlush;
	    // Decide what async method to use to triggering processing of queued callbacks:
	    if (lib$es6$promise$asap$$isNode) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
	    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
	    } else if (lib$es6$promise$asap$$isWorker) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
	    } else if (lib$es6$promise$asap$$browserWindow === undefined && "function" === 'function') {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
	    } else {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
	    }
	    function lib$es6$promise$then$$then(onFulfillment, onRejection) {
	      var parent = this;
	
	      var child = new this.constructor(lib$es6$promise$$internal$$noop);
	
	      if (child[lib$es6$promise$$internal$$PROMISE_ID] === undefined) {
	        lib$es6$promise$$internal$$makePromise(child);
	      }
	
	      var state = parent._state;
	
	      if (state) {
	        var callback = arguments[state - 1];
	        lib$es6$promise$asap$$asap(function(){
	          lib$es6$promise$$internal$$invokeCallback(state, child, callback, parent._result);
	        });
	      } else {
	        lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
	      }
	
	      return child;
	    }
	    var lib$es6$promise$then$$default = lib$es6$promise$then$$then;
	    function lib$es6$promise$promise$resolve$$resolve(object) {
	      /*jshint validthis:true */
	      var Constructor = this;
	
	      if (object && typeof object === 'object' && object.constructor === Constructor) {
	        return object;
	      }
	
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$resolve(promise, object);
	      return promise;
	    }
	    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
	    var lib$es6$promise$$internal$$PROMISE_ID = Math.random().toString(36).substring(16);
	
	    function lib$es6$promise$$internal$$noop() {}
	
	    var lib$es6$promise$$internal$$PENDING   = void 0;
	    var lib$es6$promise$$internal$$FULFILLED = 1;
	    var lib$es6$promise$$internal$$REJECTED  = 2;
	
	    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();
	
	    function lib$es6$promise$$internal$$selfFulfillment() {
	      return new TypeError("You cannot resolve a promise with itself");
	    }
	
	    function lib$es6$promise$$internal$$cannotReturnOwn() {
	      return new TypeError('A promises callback cannot return that same promise.');
	    }
	
	    function lib$es6$promise$$internal$$getThen(promise) {
	      try {
	        return promise.then;
	      } catch(error) {
	        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
	        return lib$es6$promise$$internal$$GET_THEN_ERROR;
	      }
	    }
	
	    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	      try {
	        then.call(value, fulfillmentHandler, rejectionHandler);
	      } catch(e) {
	        return e;
	      }
	    }
	
	    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
	       lib$es6$promise$asap$$asap(function(promise) {
	        var sealed = false;
	        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
	          if (sealed) { return; }
	          sealed = true;
	          if (thenable !== value) {
	            lib$es6$promise$$internal$$resolve(promise, value);
	          } else {
	            lib$es6$promise$$internal$$fulfill(promise, value);
	          }
	        }, function(reason) {
	          if (sealed) { return; }
	          sealed = true;
	
	          lib$es6$promise$$internal$$reject(promise, reason);
	        }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	        if (!sealed && error) {
	          sealed = true;
	          lib$es6$promise$$internal$$reject(promise, error);
	        }
	      }, promise);
	    }
	
	    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
	      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
	      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, thenable._result);
	      } else {
	        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      }
	    }
	
	    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable, then) {
	      if (maybeThenable.constructor === promise.constructor &&
	          then === lib$es6$promise$then$$default &&
	          constructor.resolve === lib$es6$promise$promise$resolve$$default) {
	        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
	      } else {
	        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
	        } else if (then === undefined) {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        } else if (lib$es6$promise$utils$$isFunction(then)) {
	          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
	        } else {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        }
	      }
	    }
	
	    function lib$es6$promise$$internal$$resolve(promise, value) {
	      if (promise === value) {
	        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
	      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
	        lib$es6$promise$$internal$$handleMaybeThenable(promise, value, lib$es6$promise$$internal$$getThen(value));
	      } else {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      }
	    }
	
	    function lib$es6$promise$$internal$$publishRejection(promise) {
	      if (promise._onerror) {
	        promise._onerror(promise._result);
	      }
	
	      lib$es6$promise$$internal$$publish(promise);
	    }
	
	    function lib$es6$promise$$internal$$fulfill(promise, value) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
	
	      promise._result = value;
	      promise._state = lib$es6$promise$$internal$$FULFILLED;
	
	      if (promise._subscribers.length !== 0) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
	      }
	    }
	
	    function lib$es6$promise$$internal$$reject(promise, reason) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
	      promise._state = lib$es6$promise$$internal$$REJECTED;
	      promise._result = reason;
	
	      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
	    }
	
	    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
	      var subscribers = parent._subscribers;
	      var length = subscribers.length;
	
	      parent._onerror = null;
	
	      subscribers[length] = child;
	      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
	      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;
	
	      if (length === 0 && parent._state) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
	      }
	    }
	
	    function lib$es6$promise$$internal$$publish(promise) {
	      var subscribers = promise._subscribers;
	      var settled = promise._state;
	
	      if (subscribers.length === 0) { return; }
	
	      var child, callback, detail = promise._result;
	
	      for (var i = 0; i < subscribers.length; i += 3) {
	        child = subscribers[i];
	        callback = subscribers[i + settled];
	
	        if (child) {
	          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
	        } else {
	          callback(detail);
	        }
	      }
	
	      promise._subscribers.length = 0;
	    }
	
	    function lib$es6$promise$$internal$$ErrorObject() {
	      this.error = null;
	    }
	
	    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();
	
	    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
	      try {
	        return callback(detail);
	      } catch(e) {
	        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
	        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
	      }
	    }
	
	    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
	      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
	          value, error, succeeded, failed;
	
	      if (hasCallback) {
	        value = lib$es6$promise$$internal$$tryCatch(callback, detail);
	
	        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
	          failed = true;
	          error = value.error;
	          value = null;
	        } else {
	          succeeded = true;
	        }
	
	        if (promise === value) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
	          return;
	        }
	
	      } else {
	        value = detail;
	        succeeded = true;
	      }
	
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
	        // noop
	      } else if (hasCallback && succeeded) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      } else if (failed) {
	        lib$es6$promise$$internal$$reject(promise, error);
	      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, value);
	      }
	    }
	
	    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
	      try {
	        resolver(function resolvePromise(value){
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function rejectPromise(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      } catch(e) {
	        lib$es6$promise$$internal$$reject(promise, e);
	      }
	    }
	
	    var lib$es6$promise$$internal$$id = 0;
	    function lib$es6$promise$$internal$$nextId() {
	      return lib$es6$promise$$internal$$id++;
	    }
	
	    function lib$es6$promise$$internal$$makePromise(promise) {
	      promise[lib$es6$promise$$internal$$PROMISE_ID] = lib$es6$promise$$internal$$id++;
	      promise._state = undefined;
	      promise._result = undefined;
	      promise._subscribers = [];
	    }
	
	    function lib$es6$promise$promise$all$$all(entries) {
	      return new lib$es6$promise$enumerator$$default(this, entries).promise;
	    }
	    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
	    function lib$es6$promise$promise$race$$race(entries) {
	      /*jshint validthis:true */
	      var Constructor = this;
	
	      if (!lib$es6$promise$utils$$isArray(entries)) {
	        return new Constructor(function(resolve, reject) {
	          reject(new TypeError('You must pass an array to race.'));
	        });
	      } else {
	        return new Constructor(function(resolve, reject) {
	          var length = entries.length;
	          for (var i = 0; i < length; i++) {
	            Constructor.resolve(entries[i]).then(resolve, reject);
	          }
	        });
	      }
	    }
	    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
	    function lib$es6$promise$promise$reject$$reject(reason) {
	      /*jshint validthis:true */
	      var Constructor = this;
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$reject(promise, reason);
	      return promise;
	    }
	    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;
	
	
	    function lib$es6$promise$promise$$needsResolver() {
	      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	    }
	
	    function lib$es6$promise$promise$$needsNew() {
	      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	    }
	
	    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
	    /**
	      Promise objects represent the eventual result of an asynchronous operation. The
	      primary way of interacting with a promise is through its `then` method, which
	      registers callbacks to receive either a promise's eventual value or the reason
	      why the promise cannot be fulfilled.
	
	      Terminology
	      -----------
	
	      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	      - `thenable` is an object or function that defines a `then` method.
	      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	      - `exception` is a value that is thrown using the throw statement.
	      - `reason` is a value that indicates why a promise was rejected.
	      - `settled` the final resting state of a promise, fulfilled or rejected.
	
	      A promise can be in one of three states: pending, fulfilled, or rejected.
	
	      Promises that are fulfilled have a fulfillment value and are in the fulfilled
	      state.  Promises that are rejected have a rejection reason and are in the
	      rejected state.  A fulfillment value is never a thenable.
	
	      Promises can also be said to *resolve* a value.  If this value is also a
	      promise, then the original promise's settled state will match the value's
	      settled state.  So a promise that *resolves* a promise that rejects will
	      itself reject, and a promise that *resolves* a promise that fulfills will
	      itself fulfill.
	
	
	      Basic Usage:
	      ------------
	
	      ```js
	      var promise = new Promise(function(resolve, reject) {
	        // on success
	        resolve(value);
	
	        // on failure
	        reject(reason);
	      });
	
	      promise.then(function(value) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```
	
	      Advanced Usage:
	      ---------------
	
	      Promises shine when abstracting away asynchronous interactions such as
	      `XMLHttpRequest`s.
	
	      ```js
	      function getJSON(url) {
	        return new Promise(function(resolve, reject){
	          var xhr = new XMLHttpRequest();
	
	          xhr.open('GET', url);
	          xhr.onreadystatechange = handler;
	          xhr.responseType = 'json';
	          xhr.setRequestHeader('Accept', 'application/json');
	          xhr.send();
	
	          function handler() {
	            if (this.readyState === this.DONE) {
	              if (this.status === 200) {
	                resolve(this.response);
	              } else {
	                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	              }
	            }
	          };
	        });
	      }
	
	      getJSON('/posts.json').then(function(json) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```
	
	      Unlike callbacks, promises are great composable primitives.
	
	      ```js
	      Promise.all([
	        getJSON('/posts'),
	        getJSON('/comments')
	      ]).then(function(values){
	        values[0] // => postsJSON
	        values[1] // => commentsJSON
	
	        return values;
	      });
	      ```
	
	      @class Promise
	      @param {function} resolver
	      Useful for tooling.
	      @constructor
	    */
	    function lib$es6$promise$promise$$Promise(resolver) {
	      this[lib$es6$promise$$internal$$PROMISE_ID] = lib$es6$promise$$internal$$nextId();
	      this._result = this._state = undefined;
	      this._subscribers = [];
	
	      if (lib$es6$promise$$internal$$noop !== resolver) {
	        typeof resolver !== 'function' && lib$es6$promise$promise$$needsResolver();
	        this instanceof lib$es6$promise$promise$$Promise ? lib$es6$promise$$internal$$initializePromise(this, resolver) : lib$es6$promise$promise$$needsNew();
	      }
	    }
	
	    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
	    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
	    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
	    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
	    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
	    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
	    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;
	
	    lib$es6$promise$promise$$Promise.prototype = {
	      constructor: lib$es6$promise$promise$$Promise,
	
	    /**
	      The primary way of interacting with a promise is through its `then` method,
	      which registers callbacks to receive either a promise's eventual value or the
	      reason why the promise cannot be fulfilled.
	
	      ```js
	      findUser().then(function(user){
	        // user is available
	      }, function(reason){
	        // user is unavailable, and you are given the reason why
	      });
	      ```
	
	      Chaining
	      --------
	
	      The return value of `then` is itself a promise.  This second, 'downstream'
	      promise is resolved with the return value of the first promise's fulfillment
	      or rejection handler, or rejected if the handler throws an exception.
	
	      ```js
	      findUser().then(function (user) {
	        return user.name;
	      }, function (reason) {
	        return 'default name';
	      }).then(function (userName) {
	        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	        // will be `'default name'`
	      });
	
	      findUser().then(function (user) {
	        throw new Error('Found user, but still unhappy');
	      }, function (reason) {
	        throw new Error('`findUser` rejected and we're unhappy');
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	      });
	      ```
	      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	
	      ```js
	      findUser().then(function (user) {
	        throw new PedagogicalException('Upstream error');
	      }).then(function (value) {
	        // never reached
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // The `PedgagocialException` is propagated all the way down to here
	      });
	      ```
	
	      Assimilation
	      ------------
	
	      Sometimes the value you want to propagate to a downstream promise can only be
	      retrieved asynchronously. This can be achieved by returning a promise in the
	      fulfillment or rejection handler. The downstream promise will then be pending
	      until the returned promise is settled. This is called *assimilation*.
	
	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // The user's comments are now available
	      });
	      ```
	
	      If the assimliated promise rejects, then the downstream promise will also reject.
	
	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // If `findCommentsByAuthor` fulfills, we'll have the value here
	      }, function (reason) {
	        // If `findCommentsByAuthor` rejects, we'll have the reason here
	      });
	      ```
	
	      Simple Example
	      --------------
	
	      Synchronous Example
	
	      ```javascript
	      var result;
	
	      try {
	        result = findResult();
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	
	      Errback Example
	
	      ```js
	      findResult(function(result, err){
	        if (err) {
	          // failure
	        } else {
	          // success
	        }
	      });
	      ```
	
	      Promise Example;
	
	      ```javascript
	      findResult().then(function(result){
	        // success
	      }, function(reason){
	        // failure
	      });
	      ```
	
	      Advanced Example
	      --------------
	
	      Synchronous Example
	
	      ```javascript
	      var author, books;
	
	      try {
	        author = findAuthor();
	        books  = findBooksByAuthor(author);
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	
	      Errback Example
	
	      ```js
	
	      function foundBooks(books) {
	
	      }
	
	      function failure(reason) {
	
	      }
	
	      findAuthor(function(author, err){
	        if (err) {
	          failure(err);
	          // failure
	        } else {
	          try {
	            findBoooksByAuthor(author, function(books, err) {
	              if (err) {
	                failure(err);
	              } else {
	                try {
	                  foundBooks(books);
	                } catch(reason) {
	                  failure(reason);
	                }
	              }
	            });
	          } catch(error) {
	            failure(err);
	          }
	          // success
	        }
	      });
	      ```
	
	      Promise Example;
	
	      ```javascript
	      findAuthor().
	        then(findBooksByAuthor).
	        then(function(books){
	          // found books
	      }).catch(function(reason){
	        // something went wrong
	      });
	      ```
	
	      @method then
	      @param {Function} onFulfilled
	      @param {Function} onRejected
	      Useful for tooling.
	      @return {Promise}
	    */
	      then: lib$es6$promise$then$$default,
	
	    /**
	      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	      as the catch block of a try/catch statement.
	
	      ```js
	      function findAuthor(){
	        throw new Error('couldn't find that author');
	      }
	
	      // synchronous
	      try {
	        findAuthor();
	      } catch(reason) {
	        // something went wrong
	      }
	
	      // async with promises
	      findAuthor().catch(function(reason){
	        // something went wrong
	      });
	      ```
	
	      @method catch
	      @param {Function} onRejection
	      Useful for tooling.
	      @return {Promise}
	    */
	      'catch': function(onRejection) {
	        return this.then(null, onRejection);
	      }
	    };
	    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;
	    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
	      this._instanceConstructor = Constructor;
	      this.promise = new Constructor(lib$es6$promise$$internal$$noop);
	
	      if (!this.promise[lib$es6$promise$$internal$$PROMISE_ID]) {
	        lib$es6$promise$$internal$$makePromise(this.promise);
	      }
	
	      if (lib$es6$promise$utils$$isArray(input)) {
	        this._input     = input;
	        this.length     = input.length;
	        this._remaining = input.length;
	
	        this._result = new Array(this.length);
	
	        if (this.length === 0) {
	          lib$es6$promise$$internal$$fulfill(this.promise, this._result);
	        } else {
	          this.length = this.length || 0;
	          this._enumerate();
	          if (this._remaining === 0) {
	            lib$es6$promise$$internal$$fulfill(this.promise, this._result);
	          }
	        }
	      } else {
	        lib$es6$promise$$internal$$reject(this.promise, lib$es6$promise$enumerator$$validationError());
	      }
	    }
	
	    function lib$es6$promise$enumerator$$validationError() {
	      return new Error('Array Methods must be provided an Array');
	    }
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
	      var length  = this.length;
	      var input   = this._input;
	
	      for (var i = 0; this._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	        this._eachEntry(input[i], i);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
	      var c = this._instanceConstructor;
	      var resolve = c.resolve;
	
	      if (resolve === lib$es6$promise$promise$resolve$$default) {
	        var then = lib$es6$promise$$internal$$getThen(entry);
	
	        if (then === lib$es6$promise$then$$default &&
	            entry._state !== lib$es6$promise$$internal$$PENDING) {
	          this._settledAt(entry._state, i, entry._result);
	        } else if (typeof then !== 'function') {
	          this._remaining--;
	          this._result[i] = entry;
	        } else if (c === lib$es6$promise$promise$$default) {
	          var promise = new c(lib$es6$promise$$internal$$noop);
	          lib$es6$promise$$internal$$handleMaybeThenable(promise, entry, then);
	          this._willSettleAt(promise, i);
	        } else {
	          this._willSettleAt(new c(function(resolve) { resolve(entry); }), i);
	        }
	      } else {
	        this._willSettleAt(resolve(entry), i);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
	      var promise = this.promise;
	
	      if (promise._state === lib$es6$promise$$internal$$PENDING) {
	        this._remaining--;
	
	        if (state === lib$es6$promise$$internal$$REJECTED) {
	          lib$es6$promise$$internal$$reject(promise, value);
	        } else {
	          this._result[i] = value;
	        }
	      }
	
	      if (this._remaining === 0) {
	        lib$es6$promise$$internal$$fulfill(promise, this._result);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
	      var enumerator = this;
	
	      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
	        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
	      }, function(reason) {
	        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
	      });
	    };
	    function lib$es6$promise$polyfill$$polyfill() {
	      var local;
	
	      if (typeof global !== 'undefined') {
	          local = global;
	      } else if (typeof self !== 'undefined') {
	          local = self;
	      } else {
	          try {
	              local = Function('return this')();
	          } catch (e) {
	              throw new Error('polyfill failed because global object is unavailable in this environment');
	          }
	      }
	
	      var P = local.Promise;
	
	      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
	        return;
	      }
	
	      local.Promise = lib$es6$promise$promise$$default;
	    }
	    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;
	
	    var lib$es6$promise$umd$$ES6Promise = {
	      'Promise': lib$es6$promise$promise$$default,
	      'polyfill': lib$es6$promise$polyfill$$default
	    };
	
	    /* global define:true module:true window: true */
	    if ("function" === 'function' && __webpack_require__(103)['amd']) {
	      !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return lib$es6$promise$umd$$ES6Promise; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module !== 'undefined' && module['exports']) {
	      module['exports'] = lib$es6$promise$umd$$ES6Promise;
	    } else if (typeof this !== 'undefined') {
	      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
	    }
	
	    lib$es6$promise$polyfill$$default();
	}).call(this);
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21), (function() { return this; }()), __webpack_require__(52)(module)))

/***/ },

/***/ 102:
/***/ function(module, exports) {

	/* (ignored) */

/***/ },

/***/ 103:
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.render = render;
	
	var _reactDom = __webpack_require__(105);
	
	var ReactDOM = _interopRequireWildcard(_reactDom);
	
	var _reactRedux = __webpack_require__(64);
	
	var _pageLayout = __webpack_require__(239);
	
	var _pageLayout2 = _interopRequireDefault(_pageLayout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function render(element, store) {
	    ReactDOM.render(React.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        React.createElement(_pageLayout2.default, null)
	    ), element);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Layout = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(19);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactDom = __webpack_require__(105);
	
	var ReactDOM = _interopRequireWildcard(_reactDom);
	
	var _reactRedux = __webpack_require__(64);
	
	var _dashboard = __webpack_require__(93);
	
	var Dashboard = _interopRequireWildcard(_dashboard);
	
	var _widgetGrid = __webpack_require__(240);
	
	var _widgetGrid2 = _interopRequireDefault(_widgetGrid);
	
	var _jquery = __webpack_require__(13);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _layouts = __webpack_require__(260);
	
	var _layouts2 = _interopRequireDefault(_layouts);
	
	var _widgetConfigDialog = __webpack_require__(261);
	
	var _widgetConfigDialog2 = _interopRequireDefault(_widgetConfigDialog);
	
	var _dashboardMenuEntry = __webpack_require__(264);
	
	var _dashboardMenuEntry2 = _interopRequireDefault(_dashboardMenuEntry);
	
	var _importExportDialog = __webpack_require__(265);
	
	var _importExportDialog2 = _interopRequireDefault(_importExportDialog);
	
	var _datasourceConfigDialog = __webpack_require__(266);
	
	var _datasourceConfigDialog2 = _interopRequireDefault(_datasourceConfigDialog);
	
	var _datasourceNavItem = __webpack_require__(267);
	
	var _datasourceNavItem2 = _interopRequireDefault(_datasourceNavItem);
	
	var _widgetsNavItem = __webpack_require__(268);
	
	var _widgetsNavItem2 = _interopRequireDefault(_widgetsNavItem);
	
	var _pluginNavItem = __webpack_require__(269);
	
	var _pluginNavItem2 = _interopRequireDefault(_pluginNavItem);
	
	var _pluginsDialog = __webpack_require__(270);
	
	var _pluginsDialog2 = _interopRequireDefault(_pluginsDialog);
	
	var _persistence = __webpack_require__(95);
	
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
	                    React.createElement("div", { className: showMenu ? "menu-trigger" : "menu-trigger",
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

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(19);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRedux = __webpack_require__(64);
	
	var _lodash = __webpack_require__(51);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _widgets = __webpack_require__(84);
	
	var Widgets = _interopRequireWildcard(_widgets);
	
	var _widgetFrame = __webpack_require__(241);
	
	var _widgetFrame2 = _interopRequireDefault(_widgetFrame);
	
	var _widgetPlugins = __webpack_require__(62);
	
	var WidgetPlugins = _interopRequireWildcard(_widgetPlugins);
	
	var _widthProvider = __webpack_require__(242);
	
	var _widthProvider2 = _interopRequireDefault(_widthProvider);
	
	var _reactGridLayout = __webpack_require__(243);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ResponsiveGrid = (0, _widthProvider2.default)(_reactGridLayout.Responsive);
	
	__webpack_require__(258);
	
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
	            var widgetStates = this.props.widgets;
	
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
	        widgets: _.valuesIn(state.widgets) || [],
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

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(19);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRedux = __webpack_require__(64);
	
	var _widgetConfig = __webpack_require__(86);
	
	var WidgetConfig = _interopRequireWildcard(_widgetConfig);
	
	var _widgetPlugins = __webpack_require__(62);
	
	var WidgetPlugins = _interopRequireWildcard(_widgetPlugins);
	
	var _widgets = __webpack_require__(84);
	
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
	
	    // Might be null or undefined!
	    var widgetFactory = WidgetPlugins.pluginRegistry.getPlugin(widgetState.type);
	
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
	                React.createElement(ConfigWidgetButton, { className: 'right item no-drag', widgetState: widgetState,
	                    visible: props.widgetPlugin.typeInfo.settings ? true : false,
	                    icon: 'configure' }),
	                React.createElement(DeleteWidgetButton, { className: 'right floated item no-drag', widgetState: widgetState,
	                    icon: 'remove' })
	            ),
	            React.createElement(
	                'div',
	                { className: "ui item top attached" + (props.isReadOnly ? "" : " drag") },
	                widgetState.props.name || ' '
	            )
	        ),
	        React.createElement(
	            'div',
	            { className: 'ui segment',
	                style: { height: widgetState.availableHeightPx, padding: 0, border: "red dashed 0px" } },
	            widgetFactory ? widgetFactory.getOrCreateInstance(widgetState.id) : React.createElement(LoadingWidget, { widget: widgetState })
	        )
	    );
	};
	
	WidgetFrame.propTypes = {
	    widget: Widgets.widgetPropType.isRequired,
	    widgetPlugin: WidgetPlugins.widgetPluginType.isRequired,
	    isReadOnly: _react.PropTypes.bool.isRequired
	};
	
	exports.default = WidgetFrame;
	
	
	var LoadingWidget = function LoadingWidget(props) {
	    return React.createElement(
	        'div',
	        { className: 'ui active text loader' },
	        'Loading ',
	        props.widget.type,
	        ' Widget ...'
	    );
	};
	
	LoadingWidget.propTypes = {
	    widget: Widgets.widgetPropType.isRequired
	};
	
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

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(19);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactDom = __webpack_require__(105);
	
	var ReactDOM = _interopRequireWildcard(_reactDom);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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
	                var node = ReactDOM.findDOMNode(this);
	
	                var padLeft = window.getComputedStyle(node, null).getPropertyValue('padding-left') || 0;
	                padLeft = parseInt(padLeft) || 0;
	
	                var padRight = window.getComputedStyle(node, null).getPropertyValue('padding-right') || 0;
	                padRight = parseInt(padRight) || 0;
	
	                this.setState({ width: node.offsetWidth - padLeft - padRight }, cb);
	            }
	        }, {
	            key: 'render',
	            value: function render() {
	                if (this.props.measureBeforeMount && !this.state.mounted) return React.createElement('div', _extends({}, this.props, this.state));
	                return React.createElement(ComposedComponent, _extends({}, this.props, this.state));
	            }
	        }]);
	
	        return WidthProvider;
	    }(React.Component);
	
	    WidthProvider.defaultProps = {
	        measureBeforeMount: false
	    };
	
	    WidthProvider.propTypes = {
	        // If true, will not render children until mounted. Useful for getting the exact width before
	        // rendering, to prevent any unsightly resizing.
	        measureBeforeMount: React.PropTypes.bool
	    };
	
	    return WidthProvider;
	};

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(19);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRedux = __webpack_require__(64);
	
	var _lodash = __webpack_require__(51);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _layouts = __webpack_require__(91);
	
	var Layouts = _interopRequireWildcard(_layouts);
	
	var _elements = __webpack_require__(89);
	
	var ui = _interopRequireWildcard(_elements);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*TODO: Add remove button next to each loadable layout
	 * - Connect with Actions
	 * */
	var LayoutsTopNavItem = function LayoutsTopNavItem(props) {
	    return React.createElement(
	        'div',
	        { className: 'ui simple dropdown item' },
	        'Layout',
	        React.createElement('i', { className: 'dropdown icon' }),
	        React.createElement(
	            'div',
	            { className: 'ui menu' },
	            React.createElement(SaveLayout, null),
	            React.createElement(ResetLayoutButton, { text: 'Reset Current Layout', icon: 'undo' }),
	            React.createElement(SaveLayoutButton, { text: 'Save Layout', icon: 'save' }),
	            React.createElement('div', { className: 'ui divider' }),
	            React.createElement(
	                'div',
	                { className: 'header' },
	                'Load Layout'
	            ),
	            props.layouts.map(function (layout) {
	                return React.createElement(LayoutItem, { text: layout.name, icon: 'plus', layout: layout,
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
	        layouts: _.valuesIn(state.layouts),
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
	            return React.createElement(
	                'div',
	                { className: 'item' },
	                React.createElement(
	                    'div',
	                    { className: 'ui icon input' },
	                    React.createElement('input', { type: 'text', placeholder: 'Save as...', ref: 'input', onKeyPress: this.onEnter.bind(this) }),
	                    React.createElement('i', { className: 'save icon', onClick: this.onEnter.bind(this), style: { cursor: "pointer", zIndex: 90000 } })
	                )
	            );
	        }
	    }]);
	
	    return SaveInput;
	}(React.Component);
	
	SaveInput.propTypes = {
	    onEnter: _react.PropTypes.func,
	    widgets: _react.PropTypes.object
	};
	
	var SaveLayout = (0, _reactRedux.connect)(function (state) {
	    return {
	        layouts: _.valuesIn(state.layouts),
	        widgets: state.widgets
	    };
	}, function (dispatch, props) {
	    return {
	        onEnter: function onEnter(name, props) {
	            dispatch(Layouts.addLayout(name, props.widgets));
	        }
	    };
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
	
	            return React.createElement(
	                'a',
	                { className: 'item', href: '#', onClick: function onClick() {
	                        return props.onClick(props);
	                    } },
	                React.createElement('i', { className: indexIconClass }),
	                React.createElement('i', { className: 'right floated remove huge icon', onClick: function onClick(e) {
	                        props.deleteLayout(props);
	                        e.stopPropagation();
	                    } }),
	                ' ',
	                props.text
	            );
	        }
	    }]);
	
	    return MyLayoutItem;
	}(React.Component);
	
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

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.unshiftIfNotExists = unshiftIfNotExists;
	
	var _react = __webpack_require__(19);
	
	var React = _interopRequireWildcard(_react);
	
	var _modalDialogUi = __webpack_require__(88);
	
	var _modalDialogUi2 = _interopRequireDefault(_modalDialogUi);
	
	var _widgetPlugins = __webpack_require__(62);
	
	var WidgetPlugins = _interopRequireWildcard(_widgetPlugins);
	
	var _widgetConfig = __webpack_require__(86);
	
	var WidgetConfig = _interopRequireWildcard(_widgetConfig);
	
	var _reactRedux = __webpack_require__(64);
	
	var _settingsForm = __webpack_require__(262);
	
	var _settingsForm2 = _interopRequireDefault(_settingsForm);
	
	var _reduxForm = __webpack_require__(96);
	
	var _modalDialogIds = __webpack_require__(90);
	
	var ModalIds = _interopRequireWildcard(_modalDialogIds);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DIALOG_ID = ModalIds.WIDGET_CONFIG;
	var FORM_ID = "widget-settings-form";
	
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
	                return React.createElement(
	                    _modalDialogUi2.default,
	                    { id: DIALOG_ID,
	                        title: "Configure " + props.widgetType + " Widget",
	                        actions: actions
	                    },
	                    React.createElement(
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
	            initialValues = Object.assign({}, initialValues, props.widgetProps);
	
	            return React.createElement(
	                _modalDialogUi2.default,
	                { id: DIALOG_ID,
	                    title: "Configure " + props.widgetType + " Widget",
	                    actions: actions
	                },
	                React.createElement(
	                    "div",
	                    { className: "ui one column grid" },
	                    React.createElement(
	                        "div",
	                        { className: "column" },
	                        selectedWidgetPlugin.description ? React.createElement(
	                            "div",
	                            { className: "ui icon message" },
	                            React.createElement("i", { className: "idea icon" }),
	                            React.createElement(
	                                "div",
	                                { className: "content" },
	                                selectedWidgetPlugin.description
	                            )
	                        ) : null,
	                        React.createElement(_settingsForm2.default, { ref: "form",
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
	}(React.Component);
	
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

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(19);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRedux = __webpack_require__(64);
	
	var _elements = __webpack_require__(89);
	
	var ui = _interopRequireWildcard(_elements);
	
	var _reduxForm = __webpack_require__(96);
	
	var _collection = __webpack_require__(263);
	
	var _lodash = __webpack_require__(51);
	
	var _ = _interopRequireWildcard(_lodash);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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
	
	            return React.createElement(
	                'form',
	                { className: 'ui form' },
	                (0, _collection.chunk)(this.props.settings, 1).map(function (chunk) {
	                    return React.createElement(
	                        'div',
	                        { key: chunk[0].id, className: 'field' },
	                        chunk.map(function (setting) {
	                            return React.createElement(Field, _extends({ key: setting.id }, setting, { field: fields[setting.id] }));
	                        })
	                    );
	                })
	            );
	        }
	    }]);
	
	    return SettingsForm;
	}(React.Component);
	
	SettingsForm.propTypes = {
	    settings: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	        id: _react.PropTypes.string.isRequired,
	        type: _react.PropTypes.string.isRequired,
	        name: _react.PropTypes.string.isRequired
	    })).isRequired
	};
	
	exports.default = (0, _reduxForm.reduxForm)({})(SettingsForm);
	
	
	function Field(props) {
	    return React.createElement(
	        'div',
	        { className: 'field' },
	        React.createElement(
	            'label',
	            null,
	            props.name,
	            props.description && props.type !== 'boolean' ? React.createElement(ui.Icon, { type: 'help circle', 'data-content': props.description }) : null
	        ),
	        React.createElement(SettingsInput, props)
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
	            return React.createElement('textarea', _extends({ rows: '3', placeholder: props.description }, props.field));
	        case "string":
	            return React.createElement('input', _extends({ placeholder: props.description }, props.field));
	        case "json":
	            // TODO: Offer better editor + validation
	            return React.createElement('textarea', _extends({ rows: '3', placeholder: props.description }, props.field));
	        case "number":
	            // TODO: Validate numbers, distinct between integers and decimals?
	            return React.createElement('input', _extends({ type: 'number', min: props.min, max: props.max,
	                placeholder: props.description }, props.field));
	        case "boolean":
	            return React.createElement('input', _extends({ type: 'checkbox' }, props.field));
	        case "option":
	            return React.createElement(
	                'select',
	                _extends({ className: 'ui fluid dropdown' }, props.field),
	                React.createElement(
	                    'option',
	                    null,
	                    "Select " + props.name + " ..."
	                ),
	                props.options.map(function (option) {
	                    var optionValue = _.isObject(option) ? option.value : option;
	                    var optionName = _.isObject(option) ? option.name : option;
	                    return React.createElement(
	                        'option',
	                        { key: optionValue, value: optionValue },
	                        optionName
	                    );
	                })
	            );
	        case "datasource":
	            return React.createElement(DatasourceInputContainer, props);
	        default:
	            console.error("Unknown type for settings field with id '" + props.id + "': " + props.type);
	            return React.createElement('input', { placeholder: props.description, readonly: true, value: "Unknown field type: " + props.type });
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
	
	    return React.createElement(
	        'select',
	        _extends({ className: 'ui fluid dropdown' }, props.field),
	        React.createElement(
	            'option',
	            null,
	            "Select " + props.name + " ..."
	        ),
	        _.toPairs(datasources).map(function (_ref) {
	            var _ref2 = _slicedToArray(_ref, 2);
	
	            var id = _ref2[0];
	            var ds = _ref2[1];
	
	            return React.createElement(
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },

/***/ 263:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.chunk = chunk;
	function chunk(array, chunkSize, handle) {
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

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(19);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRedux = __webpack_require__(64);
	
	var _import = __webpack_require__(94);
	
	var Import = _interopRequireWildcard(_import);
	
	var _modalDialog = __webpack_require__(88);
	
	var _modalDialog2 = _interopRequireDefault(_modalDialog);
	
	var _modalDialog3 = __webpack_require__(87);
	
	var Modal = _interopRequireWildcard(_modalDialog3);
	
	var _modalDialogIds = __webpack_require__(90);
	
	var ModalIds = _interopRequireWildcard(_modalDialogIds);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var DashboardTopNavItem = function DashboardTopNavItem(props) {
	    return React.createElement(
	        'div',
	        { className: 'ui simple dropdown item' },
	        'Board',
	        React.createElement('i', { className: 'dropdown icon' }),
	        React.createElement(
	            'div',
	            { className: 'ui menu' },
	            React.createElement(
	                'a',
	                { className: 'item', onClick: function onClick() {
	                        return props.showModal(ModalIds.DASHBOARD_IMPORT_EXPORT);
	                    } },
	                React.createElement('i', { className: 'folder open outline icon' }),
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

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(19);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRedux = __webpack_require__(64);
	
	var _import = __webpack_require__(94);
	
	var Import = _interopRequireWildcard(_import);
	
	var _modalDialogUi = __webpack_require__(88);
	
	var _modalDialogUi2 = _interopRequireDefault(_modalDialogUi);
	
	var _modalDialogIds = __webpack_require__(90);
	
	var ModalIds = _interopRequireWildcard(_modalDialogIds);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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
	
	            return React.createElement(
	                _modalDialogUi2.default,
	                { id: ModalIds.DASHBOARD_IMPORT_EXPORT,
	                    title: 'Import / Export Dashboard',
	                    actions: actions
	                },
	                React.createElement(
	                    'div',
	                    { className: 'ui one column grid' },
	                    React.createElement(
	                        'div',
	                        { className: 'column' },
	                        React.createElement(
	                            'button',
	                            { className: 'ui compact labeled icon button', onClick: this._loadData.bind(this) },
	                            React.createElement('i', { className: 'refresh icon' }),
	                            'Load Data'
	                        ),
	                        React.createElement(
	                            'button',
	                            { className: 'ui compact labeled icon button', onClick: this._exportToClipboard.bind(this) },
	                            React.createElement('i', { className: 'upload icon' }),
	                            'Copy to Clipboard'
	                        ),
	                        React.createElement(
	                            'button',
	                            { className: 'ui compact labeled icon button', onClick: this._clearData.bind(this) },
	                            React.createElement('i', { className: 'erase icon' }),
	                            'Clear Data'
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'column' },
	                        React.createElement(
	                            'form',
	                            { className: 'ui form' },
	                            React.createElement(
	                                'div',
	                                { className: 'field' },
	                                React.createElement(
	                                    'label',
	                                    null,
	                                    'Data'
	                                ),
	                                React.createElement('textarea', { ref: 'data', rows: '10', onFocus: function onFocus(e) {
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
	}(React.Component);
	
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

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.unshiftIfNotExists = unshiftIfNotExists;
	
	var _react = __webpack_require__(19);
	
	var React = _interopRequireWildcard(_react);
	
	var _modalDialogUi = __webpack_require__(88);
	
	var _modalDialogUi2 = _interopRequireDefault(_modalDialogUi);
	
	var _datasource = __webpack_require__(92);
	
	var Datasource = _interopRequireWildcard(_datasource);
	
	var _reactRedux = __webpack_require__(64);
	
	var _lodash = __webpack_require__(51);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _elements = __webpack_require__(89);
	
	var ui = _interopRequireWildcard(_elements);
	
	var _settingsForm = __webpack_require__(262);
	
	var _settingsForm2 = _interopRequireDefault(_settingsForm);
	
	var _reduxForm = __webpack_require__(96);
	
	var _modalDialogIds = __webpack_require__(90);
	
	var ModalIds = _interopRequireWildcard(_modalDialogIds);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	                initialValues = Object.assign({}, this._getEditingDatasource().props);
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
	
	            return React.createElement(
	                _modalDialogUi2.default,
	                { id: DIALOG_ID,
	                    title: title,
	                    actions: actions
	                },
	                React.createElement(
	                    'div',
	                    { className: 'ui one column grid' },
	                    React.createElement(
	                        'div',
	                        { className: 'column' },
	                        React.createElement(
	                            'div',
	                            { className: 'field' },
	                            React.createElement(
	                                'label',
	                                null,
	                                'Type'
	                            ),
	                            React.createElement(
	                                'select',
	                                _extends({ className: 'ui fluid dropdown', name: 'type', value: this.state.selectedType,
	                                    onChange: function onChange(e) {
	                                        _this2.setState({ selectedType: e.target.value });
	                                    }
	                                }, fields.type),
	                                React.createElement(
	                                    'option',
	                                    { key: 'none', value: '' },
	                                    'Select Type...'
	                                ),
	                                _.valuesIn(props.datasourcePlugins).map(function (dsPlugin) {
	                                    return React.createElement(
	                                        'option',
	                                        { key: dsPlugin.id, value: dsPlugin.id },
	                                        dsPlugin.typeInfo.name
	                                    );
	                                })
	                            )
	                        ),
	                        React.createElement(ui.Divider, null),
	                        React.createElement(_settingsForm2.default, { ref: 'form',
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
	}(React.Component);
	
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

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(19);
	
	var React = _interopRequireWildcard(_react);
	
	var _datasource = __webpack_require__(92);
	
	var Datasource = _interopRequireWildcard(_datasource);
	
	var _reactRedux = __webpack_require__(64);
	
	var _lodash = __webpack_require__(51);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _elements = __webpack_require__(89);
	
	var ui = _interopRequireWildcard(_elements);
	
	var _reduxForm = __webpack_require__(96);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var DatasourceTopNavItem = function DatasourceTopNavItem(props) {
	    return React.createElement(
	        "div",
	        { className: "ui simple dropdown item" },
	        "Datasources",
	        React.createElement("i", { className: "dropdown icon" }),
	        React.createElement(
	            "div",
	            { className: "ui menu" },
	            React.createElement(
	                ui.LinkItem,
	                { icon: "plus", onClick: function onClick() {
	                        props.createDatasource();
	                    } },
	                "Add Datasource"
	            ),
	            React.createElement(ui.Divider, null),
	            _.valuesIn(props.datasources).map(function (ds) {
	                return React.createElement(
	                    ui.LinkItem,
	                    { key: ds.id, onClick: function onClick() {
	                            props.editDatasource(ds.id);
	                        } },
	                    React.createElement(ui.Icon, { type: "delete", size: "huge", align: "right",
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

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(19);
	
	var React = _interopRequireWildcard(_react);
	
	var _widgets = __webpack_require__(84);
	
	var Widgets = _interopRequireWildcard(_widgets);
	
	var _reactRedux = __webpack_require__(64);
	
	var _widgetConfig = __webpack_require__(86);
	
	var WidgetConfig = _interopRequireWildcard(_widgetConfig);
	
	var _lodash = __webpack_require__(51);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _elements = __webpack_require__(89);
	
	var ui = _interopRequireWildcard(_elements);
	
	var _widgetPlugins = __webpack_require__(62);
	
	var WidgetPlugins = _interopRequireWildcard(_widgetPlugins);
	
	var _reduxForm = __webpack_require__(96);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var WidgetsNavItem = function WidgetsNavItem(props) {
	
	    return React.createElement(
	        "div",
	        { className: "ui simple dropdown item" },
	        "Add Widget",
	        React.createElement("i", { className: "dropdown icon" }),
	        React.createElement(
	            "div",
	            { className: "ui menu" },
	            React.createElement(ui.Divider, null),
	            _.valuesIn(props.widgetPlugins).map(function (widgetPlugin) {
	                return React.createElement(AddWidget, { key: widgetPlugin.id,
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

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(19);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRedux = __webpack_require__(64);
	
	var _reduxForm = __webpack_require__(96);
	
	var _modalDialogIds = __webpack_require__(90);
	
	var ModalIds = _interopRequireWildcard(_modalDialogIds);
	
	var _modalDialog = __webpack_require__(87);
	
	var Modal = _interopRequireWildcard(_modalDialog);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var PluginsTopNavItem = function PluginsTopNavItem(props) {
	    return React.createElement(
	        'a',
	        { className: 'item', onClick: function onClick() {
	                return props.showPluginsDialog();
	            } },
	        'Plugins'
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

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(19);
	
	var React = _interopRequireWildcard(_react);
	
	var _modalDialogUi = __webpack_require__(88);
	
	var _modalDialogUi2 = _interopRequireDefault(_modalDialogUi);
	
	var _reactRedux = __webpack_require__(64);
	
	var _lodash = __webpack_require__(51);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _reduxForm = __webpack_require__(96);
	
	var _elements = __webpack_require__(89);
	
	var ui = _interopRequireWildcard(_elements);
	
	var _modalDialogIds = __webpack_require__(90);
	
	var ModalIds = _interopRequireWildcard(_modalDialogIds);
	
	var _modalDialog = __webpack_require__(87);
	
	var Modal = _interopRequireWildcard(_modalDialog);
	
	var _plugins = __webpack_require__(56);
	
	var Plugins = _interopRequireWildcard(_plugins);
	
	var _widgetPlugins = __webpack_require__(62);
	
	var WidgetsPlugins = _interopRequireWildcard(_widgetPlugins);
	
	var _datasourcePlugins = __webpack_require__(58);
	
	var DatasourcePlugins = _interopRequireWildcard(_datasourcePlugins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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
	
	            var datasourcePluginStates = _.valuesIn(props.datasourcePlugins);
	            var widgetPluginStates = _.valuesIn(props.widgetPlugins);
	
	            return React.createElement(
	                _modalDialogUi2.default,
	                { id: ModalIds.PLUGINS,
	                    title: 'Plugins',
	                    actions: actions
	                },
	                React.createElement(
	                    'div',
	                    { className: 'ui one column grid' },
	                    React.createElement(
	                        'div',
	                        { className: 'column' },
	                        React.createElement(
	                            'form',
	                            { className: 'ui form' },
	                            React.createElement(
	                                'h4',
	                                { className: 'ui dividing header' },
	                                'Load Plugin'
	                            ),
	                            React.createElement(
	                                'div',
	                                { className: 'field' },
	                                React.createElement(
	                                    'label',
	                                    null,
	                                    'From URL'
	                                ),
	                                React.createElement(
	                                    'div',
	                                    { className: 'field' },
	                                    React.createElement('input', { ref: 'pluginUrl', type: 'text', name: 'plugin-url',
	                                        placeholder: 'http://my-page.com/myPlugin.js',
	                                        defaultValue: 'plugins/TestWidgetPlugin.js'
	                                    })
	                                )
	                            ),
	                            React.createElement(
	                                'div',
	                                { className: 'ui button', onClick: function onClick() {
	                                        return props.loadPlugin(_this2.refs.pluginUrl.value);
	                                    },
	                                    tabIndex: '0' },
	                                'Load Plugin'
	                            )
	                        ),
	                        React.createElement(
	                            'h4',
	                            { className: 'ui dividing header' },
	                            'Datasource Plugins'
	                        ),
	                        React.createElement(DatasourcePluginList, _extends({ datasourceStates: datasourcePluginStates }, props)),
	                        React.createElement(
	                            'h4',
	                            { className: 'ui dividing header' },
	                            'Widget Plugins'
	                        ),
	                        React.createElement(WidgetPluginList, _extends({ widgetPluginStates: widgetPluginStates }, props))
	                    )
	                )
	            );
	        }
	    }]);
	
	    return PluginsModal;
	}(React.Component);
	
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
	    return React.createElement(
	        'div',
	        { className: 'ui five cards' },
	        props.datasourceStates.map(function (dsState) {
	            return React.createElement(DatasourcePluginCard, _extends({ key: dsState.id, pluginState: dsState }, props));
	        })
	    );
	};
	
	DatasourcePluginList.propTypes = {
	    datasourceStates: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	        id: _react.PropTypes.string.isRequired
	    })).isRequired
	};
	
	var WidgetPluginList = function WidgetPluginList(props) {
	    return React.createElement(
	        'div',
	        { className: 'ui five cards' },
	        props.widgetPluginStates.map(function (dsState) {
	            return React.createElement(WidgetPluginCard, _extends({ key: dsState.id, pluginState: dsState }, props));
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
	            return React.createElement(
	                'div',
	                { className: 'card' },
	                React.createElement(
	                    'div',
	                    { className: 'content' },
	                    React.createElement(
	                        'div',
	                        { className: 'header' },
	                        pluginState.typeInfo.name
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'description' },
	                        React.createElement(
	                            'p',
	                            null,
	                            'Type: ',
	                            pluginState.typeInfo.type
	                        ),
	                        React.createElement(
	                            'p',
	                            null,
	                            pluginState.typeInfo.description ? pluginState.typeInfo.description : "No Description."
	                        )
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'extra content' },
	                    React.createElement('i', { className: 'copy outline icon', onClick: function onClick() {
	                            _this4._copyUrl();
	                        }, style: { display: "inline" } }),
	                    React.createElement(
	                        'div',
	                        { className: 'ui large transparent input' },
	                        React.createElement('input', { type: 'text', ref: 'url',
	                            readOnly: true,
	                            style: { width: "100%", paddingLeft: 0, paddingRight: 0 },
	                            placeholder: 'Plugin Url ...',
	                            defaultValue: pluginState.url ? pluginState.url : "Packaged" })
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'ui bottom attached button', onClick: function onClick() {
	                            return props.removePlugin(pluginState.id);
	                        } },
	                    React.createElement('i', { className: 'trash icon' }),
	                    'Remove'
	                )
	            );
	        }
	    }]);
	
	    return PluginCard;
	}(React.Component);
	
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

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Widget = exports.TYPE_INFO = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(19);
	
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
	                'div',
	                { style: { padding: "10px" } },
	                React.createElement(
	                    'p',
	                    null,
	                    JSON.stringify(data)
	                )
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

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Widget = exports.TYPE_INFO = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(19);
	
	var React = _interopRequireWildcard(_react);
	
	var _c = __webpack_require__(273);
	
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
	            return React.createElement(
	                'div',
	                { style: { padding: "10px" } },
	                React.createElement('div', { className: '', id: 'chart-' + this.props._state.id }),
	                ' '
	            );
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

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.start = start;
	exports.stop = stop;
	
	var _datasource = __webpack_require__(92);
	
	var Datasource = _interopRequireWildcard(_datasource);
	
	var _datasourcePlugins = __webpack_require__(58);
	
	var _datasourcePlugins2 = _interopRequireDefault(_datasourcePlugins);
	
	var _store = __webpack_require__(81);
	
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

/***/ 276:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
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
	            console.log("New Props: " + props);
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
	
	            return this.history;
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

/***/ 277:
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

/***/ }

});
//# sourceMappingURL=app.bundle.js.map