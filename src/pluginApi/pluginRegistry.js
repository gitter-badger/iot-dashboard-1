/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as DsPlugin from '../datasource/datasourcePlugin'


export default class PluginRegistry {

    constructor() {
        this.plugins = {};
    }

    set store(store) {
        this._store = store;
    }

    get store() {
        return this._store;
    }

    register(module) {
        if (!this._store === undefined) {
            throw new Error("PluginRegistry has no store. Set the store property before registering modules!");
        }

        console.assert(module.TYPE_INFO, "Missing TYPE_INFO on plugin module. Every module must export TYPE_INFO");
        console.assert(module.TYPE_INFO.type, "Missing TYPE_INFO.type on plugin TYPE_INFO.");

        console.log("registering plugin: ", module);
        this.plugins[module.TYPE_INFO.type] = this.createPluginFromModule(module);
    }

    createPluginFromModule(module) {
        throw new Error("PluginRegistry must implement createPluginFromModule");
    }

    getPlugin(type) {
        return this.plugins[type];
    }


    getPlugins() {
        return Object.assign({}, this.plugins);
    }
}