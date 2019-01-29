/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ɵAnimationEngine } from '@angular/animations/browser';
import { NgZone, PlatformRef, Provider, RendererFactory2, StaticProvider } from '@angular/core';
import { ɵAnimationRendererFactory } from '@angular/platform-browser/animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/http";
import * as i2 from "@angular/common/http";
import * as i3 from "@angular/platform-browser/animations";
import * as i4 from "@angular/platform-browser";
export declare const INTERNAL_SERVER_PLATFORM_PROVIDERS: StaticProvider[];
export declare function instantiateServerRendererFactory(renderer: RendererFactory2, engine: ɵAnimationEngine, zone: NgZone): ɵAnimationRendererFactory;
export declare const SERVER_RENDER_PROVIDERS: Provider[];
/**
 * The ng module for the server.
 *
 * @publicApi
 */
export declare class ServerModule {
    static ngModuleDef: i0.ɵNgModuleDefWithMeta<ServerModule, never, [typeof i1.HttpModule, typeof i2.HttpClientModule, typeof i3.NoopAnimationsModule], [typeof i4.BrowserModule]>;
    static ngInjectorDef: i0.ɵInjectorDef<ServerModule>;
}
/**
 * @publicApi
 */
export declare const platformServer: (extraProviders?: StaticProvider[] | undefined) => PlatformRef;
/**
 * The server platform that supports the runtime compiler.
 *
 * @publicApi
 */
export declare const platformDynamicServer: (extraProviders?: StaticProvider[] | undefined) => PlatformRef;
