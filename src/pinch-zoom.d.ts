type PinchZoomEventHandler = (target: PinchZoom, event: TouchEvent) => void;

interface IPinchZoomOptions {
    tapZoomFactor?: number;
    zoomOutFactor?: number;
    animationDuration?: number;
    maxZoom?: number;
    minZoom?: number;
    draggableUnzoomed?: boolean;
    lockDragAxis?: boolean;
    setOffsetsOnce?: boolean;
    use2d?: boolean;
    verticalPadding?: number;
    horizontalPadding?: number;
    overflow?: string;
    computeInitialScaleAndOffset?: boolean;

    onZoomStart?: PinchZoomEventHandler;
    onZoomEnd?: PinchZoomEventHandler;
    onZoomUpdate?: PinchZoomEventHandler;
    onDragStart?: PinchZoomEventHandler;
    onDragEnd?: PinchZoomEventHandler;
    onDragUpdate?: PinchZoomEventHandler;
    onDoubleTap?: PinchZoomEventHandler;

    zoomStartEventName?: string;
    zoomUpdateEventName?: string;
    zoomEndEventName?: string;
    dragStartEventName?: string;
    dragUpdateEventName?: string;
    dragEndEventName?: string;
    doubleTapEventName?: string;
}

export default class PinchZoom {
    constructor(element: HTMLElement, options?: IPinchZoomOptions);
    public enable(): void;
    public disable(): void;
}
