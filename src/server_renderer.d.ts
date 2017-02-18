/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DomElementSchemaRegistry } from '@angular/compiler';
import { NgZone, RenderComponentType, Renderer, RendererFactoryV2, RendererTypeV2, RendererV2, RootRenderer } from '@angular/core';
import { AnimationDriver } from '@angular/platform-browser';
import { AnimationKeyframe, AnimationPlayer, AnimationStyles, RenderDebugInfo } from './private_import_core';
import { SharedStylesHost } from './private_import_platform-browser';
export declare class ServerRootRenderer implements RootRenderer {
    document: any;
    sharedStylesHost: SharedStylesHost;
    animationDriver: AnimationDriver;
    appId: string;
    private _zone;
    protected registeredComponents: Map<string, ServerRenderer>;
    private _schema;
    constructor(document: any, sharedStylesHost: SharedStylesHost, animationDriver: AnimationDriver, appId: string, _zone: NgZone);
    renderComponent(componentProto: RenderComponentType): Renderer;
}
export declare class ServerRenderer implements Renderer {
    private _rootRenderer;
    private componentProto;
    private _animationDriver;
    private _zone;
    private _schema;
    private _contentAttr;
    private _hostAttr;
    private _styles;
    constructor(_rootRenderer: ServerRootRenderer, componentProto: RenderComponentType, _animationDriver: AnimationDriver, styleShimId: string, _zone: NgZone, _schema: DomElementSchemaRegistry);
    selectRootElement(selectorOrNode: string | any, debugInfo: RenderDebugInfo): Element;
    createElement(parent: Element, name: string, debugInfo: RenderDebugInfo): Node;
    createViewRoot(hostElement: any): any;
    createTemplateAnchor(parentElement: any, debugInfo: RenderDebugInfo): any;
    createText(parentElement: any, value: string, debugInfo: RenderDebugInfo): any;
    projectNodes(parentElement: any, nodes: any[]): void;
    attachViewAfter(node: any, viewRootNodes: any[]): void;
    detachView(viewRootNodes: any[]): void;
    destroyView(hostElement: any, viewAllNodes: any[]): void;
    listen(renderElement: any, name: string, callback: Function): Function;
    listenGlobal(target: string, name: string, callback: Function): Function;
    private _isSafeToReflectProperty(tagName, propertyName);
    setElementProperty(renderElement: any, propertyName: string, propertyValue: any): void;
    setElementAttribute(renderElement: any, attributeName: string, attributeValue: string): void;
    setBindingDebugInfo(renderElement: any, propertyName: string, propertyValue: string): void;
    setElementClass(renderElement: any, className: string, isAdd: boolean): void;
    setElementStyle(renderElement: any, styleName: string, styleValue: string): void;
    invokeElementMethod(renderElement: any, methodName: string, args: any[]): void;
    setText(renderNode: any, text: string): void;
    animate(element: any, startingStyles: AnimationStyles, keyframes: AnimationKeyframe[], duration: number, delay: number, easing: string, previousPlayers?: AnimationPlayer[]): AnimationPlayer;
}
export declare class ServerRendererFactoryV2 implements RendererFactoryV2 {
    private ngZone;
    private document;
    private sharedStylesHost;
    private rendererByCompId;
    private defaultRenderer;
    constructor(ngZone: NgZone, document: any, sharedStylesHost: SharedStylesHost);
    createRenderer(element: any, type: RendererTypeV2): RendererV2;
}
