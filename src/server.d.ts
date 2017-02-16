import { PlatformRef, Provider } from '@angular/core';
import { ServerStylesHost } from './styles_host';
export declare const INTERNAL_SERVER_PLATFORM_PROVIDERS: Array<any>;
export declare function _createConditionalRootRenderer(rootRenderer: any): any;
export declare function _addStylesToRootComponentFactory(stylesHost: ServerStylesHost): () => void;
export declare const SERVER_RENDER_PROVIDERS: Provider[];
/**
 * The ng module for the server.
 *
 * @experimental
 */
export declare class ServerModule {
}
/**
 * @experimental
 */
export declare const platformServer: (extraProviders?: Provider[]) => PlatformRef;
/**
 * The server platform that supports the runtime compiler.
 *
 * @experimental
 */
export declare const platformDynamicServer: (extraProviders?: Provider[]) => PlatformRef;
