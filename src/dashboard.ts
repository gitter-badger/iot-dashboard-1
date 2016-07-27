import * as Store from './store'
import * as  WidgetPlugins from "./widgets/widgetPlugins.js";
import * as DatasourcePlugins from "./datasource/datasourcePlugins";
import {DashboardStore} from "./store";
import {DatasourcePluginRegistry} from "./datasource/datasourcePlugins";
import {WidgetPluginRegistry} from "./widgets/widgetPlugins.js";


/**
 * The root of the Dashboard business Logic
 * Defines the lifecycle of the Dashboard from creation till disposal
 */
export class Dashboard {
    private pluginRegistry = new DatasourcePluginRegistry();
    private widgetPluginRegistry = new WidgetPluginRegistry();
    
    constructor(store: DashboardStore) {
        
        DatasourcePlugins.pluginRegistry.store = store;
        WidgetPlugins.pluginRegistry.store = store;
    }
}