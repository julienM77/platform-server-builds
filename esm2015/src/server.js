/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/src/server.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ɵAnimationEngine } from '@angular/animations/browser';
import { DOCUMENT, PlatformLocation, ViewportScroller, ɵNullViewportScroller as NullViewportScroller, ɵPLATFORM_SERVER_ID as PLATFORM_SERVER_ID, ɵgetDOM as getDOM } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule, NgZone, Optional, PLATFORM_ID, PLATFORM_INITIALIZER, RendererFactory2, Testability, createPlatformFactory, platformCore, ɵALLOW_MULTIPLE_PLATFORMS as ALLOW_MULTIPLE_PLATFORMS, ɵsetDocument } from '@angular/core';
import { BrowserModule, EVENT_MANAGER_PLUGINS, ɵSharedStylesHost as SharedStylesHost } from '@angular/platform-browser';
import { ɵplatformCoreDynamic as platformCoreDynamic } from '@angular/platform-browser-dynamic';
import { NoopAnimationsModule, ɵAnimationRendererFactory } from '@angular/platform-browser/animations';
import { DominoAdapter, parseDocument } from './domino_adapter';
import { SERVER_HTTP_PROVIDERS } from './http';
import { ServerPlatformLocation } from './location';
import { PlatformState } from './platform_state';
import { ServerEventManagerPlugin } from './server_events';
import { ServerRendererFactory2 } from './server_renderer';
import { ServerStylesHost } from './styles_host';
import { INITIAL_CONFIG } from './tokens';
/**
 * @param {?} feature
 * @return {?}
 */
function notSupported(feature) {
    throw new Error(`platform-server does not support '${feature}'.`);
}
/** @type {?} */
export const INTERNAL_SERVER_PLATFORM_PROVIDERS = [
    { provide: DOCUMENT, useFactory: _document, deps: [Injector] },
    { provide: PLATFORM_ID, useValue: PLATFORM_SERVER_ID },
    { provide: PLATFORM_INITIALIZER, useFactory: initDominoAdapter, multi: true, deps: [Injector] }, {
        provide: PlatformLocation,
        useClass: ServerPlatformLocation,
        deps: [DOCUMENT, [Optional, INITIAL_CONFIG]]
    },
    { provide: PlatformState, deps: [DOCUMENT] },
    // Add special provider that allows multiple instances of platformServer* to be created.
    { provide: ALLOW_MULTIPLE_PLATFORMS, useValue: true }
];
/**
 * @param {?} injector
 * @return {?}
 */
function initDominoAdapter(injector) {
    return (/**
     * @return {?}
     */
    () => { DominoAdapter.makeCurrent(); });
}
/**
 * @param {?} renderer
 * @param {?} engine
 * @param {?} zone
 * @return {?}
 */
export function instantiateServerRendererFactory(renderer, engine, zone) {
    return new ɵAnimationRendererFactory(renderer, engine, zone);
}
/** @type {?} */
export const SERVER_RENDER_PROVIDERS = [
    ServerRendererFactory2,
    {
        provide: RendererFactory2,
        useFactory: instantiateServerRendererFactory,
        deps: [ServerRendererFactory2, ɵAnimationEngine, NgZone]
    },
    ServerStylesHost,
    { provide: SharedStylesHost, useExisting: ServerStylesHost },
    { provide: EVENT_MANAGER_PLUGINS, multi: true, useClass: ServerEventManagerPlugin },
];
/**
 * The ng module for the server.
 *
 * \@publicApi
 */
export class ServerModule {
}
ServerModule.decorators = [
    { type: NgModule, args: [{
                exports: [BrowserModule],
                imports: [HttpClientModule, NoopAnimationsModule],
                providers: [
                    SERVER_RENDER_PROVIDERS,
                    SERVER_HTTP_PROVIDERS,
                    { provide: Testability, useValue: null },
                    { provide: ViewportScroller, useClass: NullViewportScroller },
                ],
            },] }
];
/**
 * @param {?} injector
 * @return {?}
 */
function _document(injector) {
    /** @type {?} */
    let config = injector.get(INITIAL_CONFIG, null);
    /** @type {?} */
    const document = config && config.document ? parseDocument(config.document, config.url) :
        getDOM().createHtmlDocument();
    // Tell ivy about the global document
    ɵsetDocument(document);
    return document;
}
/**
 * \@publicApi
 * @type {?}
 */
export const platformServer = createPlatformFactory(platformCore, 'server', INTERNAL_SERVER_PLATFORM_PROVIDERS);
/**
 * The server platform that supports the runtime compiler.
 *
 * \@publicApi
 * @type {?}
 */
export const platformDynamicServer = createPlatformFactory(platformCoreDynamic, 'serverDynamic', INTERNAL_SERVER_PLATFORM_PROVIDERS);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tc2VydmVyL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsSUFBSSxvQkFBb0IsRUFBRSxtQkFBbUIsSUFBSSxrQkFBa0IsRUFBRSxPQUFPLElBQUksTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDMUwsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQXlCLGdCQUFnQixFQUFrQixXQUFXLEVBQUUscUJBQXFCLEVBQUUsWUFBWSxFQUFFLHlCQUF5QixJQUFJLHdCQUF3QixFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN0UixPQUFPLEVBQUMsYUFBYSxFQUFFLHFCQUFxQixFQUFFLGlCQUFpQixJQUFJLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDdEgsT0FBTyxFQUFDLG9CQUFvQixJQUFJLG1CQUFtQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDOUYsT0FBTyxFQUFDLG9CQUFvQixFQUFFLHlCQUF5QixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFFckcsT0FBTyxFQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUM5RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDN0MsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxh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LE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUMsTUFBTSxFQUFFLENBQUMsa0JBQWtCLEVBQUU7SUFDMUUscUNBQXFDO0lBQ3JDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QixPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDOzs7OztBQUtELE1BQU0sT0FBTyxjQUFjLEdBQ3ZCLHFCQUFxQixDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsa0NBQWtDLENBQUM7Ozs7Ozs7QUFPckYsTUFBTSxPQUFPLHFCQUFxQixHQUM5QixxQkFBcUIsQ0FBQyxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsa0NBQWtDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7ybVBbmltYXRpb25FbmdpbmV9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMvYnJvd3Nlcic7XG5pbXBvcnQge0RPQ1VNRU5ULCBQbGF0Zm9ybUxvY2F0aW9uLCBWaWV3cG9ydFNjcm9sbGVyLCDJtU51bGxWaWV3cG9ydFNjcm9sbGVyIGFzIE51bGxWaWV3cG9ydFNjcm9sbGVyLCDJtVBMQVRGT1JNX1NFUlZFUl9JRCBhcyBQTEFURk9STV9TRVJWRVJfSUQsIMm1Z2V0RE9NIGFzIGdldERPTX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtJbmplY3RvciwgTmdNb2R1bGUsIE5nWm9uZSwgT3B0aW9uYWwsIFBMQVRGT1JNX0lELCBQTEFURk9STV9JTklUSUFMSVpFUiwgUGxhdGZvcm1SZWYsIFByb3ZpZGVyLCBSZW5kZXJlckZhY3RvcnkyLCBTdGF0aWNQcm92aWRlciwgVGVzdGFiaWxpdHksIGNyZWF0ZVBsYXRmb3JtRmFjdG9yeSwgcGxhdGZvcm1Db3JlLCDJtUFMTE9XX01VTFRJUExFX1BMQVRGT1JNUyBhcyBBTExPV19NVUxUSVBMRV9QTEFURk9STVMsIMm1c2V0RG9jdW1lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCcm93c2VyTW9kdWxlLCBFVkVOVF9NQU5BR0VSX1BMVUdJTlMsIMm1U2hhcmVkU3R5bGVzSG9zdCBhcyBTaGFyZWRTdHlsZXNIb3N0fSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7ybVwbGF0Zm9ybUNvcmVEeW5hbWljIGFzIHBsYXRmb3JtQ29yZUR5bmFtaWN9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQge05vb3BBbmltYXRpb25zTW9kdWxlLCDJtUFuaW1hdGlvblJlbmRlcmVyRmFjdG9yeX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcblxuaW1wb3J0IHtEb21pbm9BZGFwdGVyLCBwYXJzZURvY3VtZW50fSBmcm9tICcuL2RvbWlub19hZGFwdGVyJztcbmltcG9ydCB7U0VSVkVSX0hUVFBfUFJPVklERVJTfSBmcm9tICcuL2h0dHAnO1xuaW1wb3J0IHtTZXJ2ZXJQbGF0Zm9ybUxvY2F0aW9ufSBmcm9tICcuL2xvY2F0aW9uJztcbmltcG9ydCB7UGxhdGZvcm1TdGF0ZX0gZnJvbSAnLi9wbGF0Zm9ybV9zdGF0ZSc7XG5pbXBvcnQge1NlcnZlckV2ZW50TWFuYWdlclBsdWdpbn0gZnJvbSAnLi9zZXJ2ZXJfZXZlbnRzJztcbmltcG9ydCB7U2VydmVyUmVuZGVyZXJGYWN0b3J5Mn0gZnJvbSAnLi9zZXJ2ZXJfcmVuZGVyZXInO1xuaW1wb3J0IHtTZXJ2ZXJTdHlsZXNIb3N0fSBmcm9tICcuL3N0eWxlc19ob3N0JztcbmltcG9ydCB7SU5JVElBTF9DT05GSUcsIFBsYXRmb3JtQ29uZmlnfSBmcm9tICcuL3Rva2Vucyc7XG5cbmZ1bmN0aW9uIG5vdFN1cHBvcnRlZChmZWF0dXJlOiBzdHJpbmcpOiBFcnJvciB7XG4gIHRocm93IG5ldyBFcnJvcihgcGxhdGZvcm0tc2VydmVyIGRvZXMgbm90IHN1cHBvcnQgJyR7ZmVhdHVyZX0nLmApO1xufVxuXG5leHBvcnQgY29uc3QgSU5URVJOQUxfU0VSVkVSX1BMQVRGT1JNX1BST1ZJREVSUzogU3RhdGljUHJvdmlkZXJbXSA9IFtcbiAge3Byb3ZpZGU6IERPQ1VNRU5ULCB1c2VGYWN0b3J5OiBfZG9jdW1lbnQsIGRlcHM6IFtJbmplY3Rvcl19LFxuICB7cHJvdmlkZTogUExBVEZPUk1fSUQsIHVzZVZhbHVlOiBQTEFURk9STV9TRVJWRVJfSUR9LFxuICB7cHJvdmlkZTogUExBVEZPUk1fSU5JVElBTElaRVIsIHVzZUZhY3Rvcnk6IGluaXREb21pbm9BZGFwdGVyLCBtdWx0aTogdHJ1ZSwgZGVwczogW0luamVjdG9yXX0sIHtcbiAgICBwcm92aWRlOiBQbGF0Zm9ybUxvY2F0aW9uLFxuICAgIHVzZUNsYXNzOiBTZXJ2ZXJQbGF0Zm9ybUxvY2F0aW9uLFxuICAgIGRlcHM6IFtET0NVTUVOVCwgW09wdGlvbmFsLCBJTklUSUFMX0NPTkZJR11dXG4gIH0sXG4gIHtwcm92aWRlOiBQbGF0Zm9ybVN0YXRlLCBkZXBzOiBbRE9DVU1FTlRdfSxcbiAgLy8gQWRkIHNwZWNpYWwgcHJvdmlkZXIgdGhhdCBhbGxvd3MgbXVsdGlwbGUgaW5zdGFuY2VzIG9mIHBsYXRmb3JtU2VydmVyKiB0byBiZSBjcmVhdGVkLlxuICB7cHJvdmlkZTogQUxMT1dfTVVMVElQTEVfUExBVEZPUk1TLCB1c2VWYWx1ZTogdHJ1ZX1cbl07XG5cbmZ1bmN0aW9uIGluaXREb21pbm9BZGFwdGVyKGluamVjdG9yOiBJbmplY3Rvcikge1xuICByZXR1cm4gKCkgPT4geyBEb21pbm9BZGFwdGVyLm1ha2VDdXJyZW50KCk7IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50aWF0ZVNlcnZlclJlbmRlcmVyRmFjdG9yeShcbiAgICByZW5kZXJlcjogUmVuZGVyZXJGYWN0b3J5MiwgZW5naW5lOiDJtUFuaW1hdGlvbkVuZ2luZSwgem9uZTogTmdab25lKSB7XG4gIHJldHVybiBuZXcgybVBbmltYXRpb25SZW5kZXJlckZhY3RvcnkocmVuZGVyZXIsIGVuZ2luZSwgem9uZSk7XG59XG5cbmV4cG9ydCBjb25zdCBTRVJWRVJfUkVOREVSX1BST1ZJREVSUzogUHJvdmlkZXJbXSA9IFtcbiAgU2VydmVyUmVuZGVyZXJGYWN0b3J5MixcbiAge1xuICAgIHByb3ZpZGU6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgdXNlRmFjdG9yeTogaW5zdGFudGlhdGVTZXJ2ZXJSZW5kZXJlckZhY3RvcnksXG4gICAgZGVwczogW1NlcnZlclJlbmRlcmVyRmFjdG9yeTIsIMm1QW5pbWF0aW9uRW5naW5lLCBOZ1pvbmVdXG4gIH0sXG4gIFNlcnZlclN0eWxlc0hvc3QsXG4gIHtwcm92aWRlOiBTaGFyZWRTdHlsZXNIb3N0LCB1c2VFeGlzdGluZzogU2VydmVyU3R5bGVzSG9zdH0sXG4gIHtwcm92aWRlOiBFVkVOVF9NQU5BR0VSX1BMVUdJTlMsIG11bHRpOiB0cnVlLCB1c2VDbGFzczogU2VydmVyRXZlbnRNYW5hZ2VyUGx1Z2lufSxcbl07XG5cbi8qKlxuICogVGhlIG5nIG1vZHVsZSBmb3IgdGhlIHNlcnZlci5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtCcm93c2VyTW9kdWxlXSxcbiAgaW1wb3J0czogW0h0dHBDbGllbnRNb2R1bGUsIE5vb3BBbmltYXRpb25zTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU0VSVkVSX1JFTkRFUl9QUk9WSURFUlMsXG4gICAgU0VSVkVSX0hUVFBfUFJPVklERVJTLFxuICAgIHtwcm92aWRlOiBUZXN0YWJpbGl0eSwgdXNlVmFsdWU6IG51bGx9LFxuICAgIHtwcm92aWRlOiBWaWV3cG9ydFNjcm9sbGVyLCB1c2VDbGFzczogTnVsbFZpZXdwb3J0U2Nyb2xsZXJ9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJNb2R1bGUge1xufVxuXG5mdW5jdGlvbiBfZG9jdW1lbnQoaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIGxldCBjb25maWc6IFBsYXRmb3JtQ29uZmlnfG51bGwgPSBpbmplY3Rvci5nZXQoSU5JVElBTF9DT05GSUcsIG51bGwpO1xuICBjb25zdCBkb2N1bWVudCA9IGNvbmZpZyAmJiBjb25maWcuZG9jdW1lbnQgPyBwYXJzZURvY3VtZW50KGNvbmZpZy5kb2N1bWVudCwgY29uZmlnLnVybCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRET00oKS5jcmVhdGVIdG1sRG9jdW1lbnQoKTtcbiAgLy8gVGVsbCBpdnkgYWJvdXQgdGhlIGdsb2JhbCBkb2N1bWVudFxuICDJtXNldERvY3VtZW50KGRvY3VtZW50KTtcbiAgcmV0dXJuIGRvY3VtZW50O1xufVxuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IHBsYXRmb3JtU2VydmVyOiAoZXh0cmFQcm92aWRlcnM/OiBTdGF0aWNQcm92aWRlcltdIHwgdW5kZWZpbmVkKSA9PiBQbGF0Zm9ybVJlZiA9XG4gICAgY3JlYXRlUGxhdGZvcm1GYWN0b3J5KHBsYXRmb3JtQ29yZSwgJ3NlcnZlcicsIElOVEVSTkFMX1NFUlZFUl9QTEFURk9STV9QUk9WSURFUlMpO1xuXG4vKipcbiAqIFRoZSBzZXJ2ZXIgcGxhdGZvcm0gdGhhdCBzdXBwb3J0cyB0aGUgcnVudGltZSBjb21waWxlci5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBwbGF0Zm9ybUR5bmFtaWNTZXJ2ZXIgPVxuICAgIGNyZWF0ZVBsYXRmb3JtRmFjdG9yeShwbGF0Zm9ybUNvcmVEeW5hbWljLCAnc2VydmVyRHluYW1pYycsIElOVEVSTkFMX1NFUlZFUl9QTEFURk9STV9QUk9WSURFUlMpO1xuIl19