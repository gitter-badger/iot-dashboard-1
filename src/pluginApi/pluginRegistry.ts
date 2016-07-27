/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {DashboardStore} from '../store';
import {ITypeInfo} from '../appState';
import * as _ from 'lodash'

export interface IPlugin {
    TYPE_INFO: ITypeInfo;
}

export type PluginMap<T extends IPlugin> = {[id: string]: T}

export default class PluginRegistry<TPlugin extends IPlugin> {

    private _plugins: PluginMap<TPlugin> = {};
    // TODO: make store required
    constructor(private _store?: DashboardStore) {
    }

    set store(store: DashboardStore) {
        this._store = store;
    }

    get store(): DashboardStore {
        return this._store;
    }

    register(module: IPlugin) {
        if (!this._store === undefined) {
            throw new Error("PluginRegistry has no store. Set the store property before registering modules!");
        }

        console.assert(module.TYPE_INFO !== undefined, "Missing TYPE_INFO on plugin module. Every module must export TYPE_INFO");
        console.assert(module.TYPE_INFO.type !== undefined, "Missing TYPE_INFO.type on plugin TYPE_INFO.");

        console.log("registering plugin: ", module);
        this._plugins[module.TYPE_INFO.type] = this.createPluginFromModule(module);
    }

    createPluginFromModule(module: IPlugin): TPlugin {
        throw new Error("PluginRegistry must implement createPluginFromModule");
    }

    getPlugin(type: string) {
        return this._plugins[type];
    }


    getPlugins() {
        return _.assign<any, PluginMap<TPlugin>>({}, this._plugins);
    }
}