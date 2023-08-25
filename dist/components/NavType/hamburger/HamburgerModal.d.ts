import { useModalParams } from 'react-hook-modal-pure';
import { ReactNode } from 'react';
export declare const MenuBackground: import("styled-components").IStyledComponent<"web", {
    ref?: import("react").LegacyRef<HTMLElement> | undefined;
    key?: import("react").Key | null | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    autoFocus?: boolean | undefined;
    className?: string | undefined;
    contentEditable?: "inherit" | (boolean | "true" | "false") | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | "true" | "false") | undefined;
    hidden?: boolean | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    nonce?: string | undefined;
    placeholder?: string | undefined;
    slot?: string | undefined;
    spellCheck?: (boolean | "true" | "false") | undefined;
    style?: import("react").CSSProperties | undefined;
    tabIndex?: number | undefined;
    title?: string | undefined;
    translate?: "no" | "yes" | undefined;
    radioGroup?: string | undefined;
    role?: import("react").AriaRole | undefined;
    about?: string | undefined;
    content?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    rel?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "off" | "on" | undefined;
    inputMode?: "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
    is?: string | undefined;
    "aria-activedescendant"?: string | undefined;
    "aria-atomic"?: (boolean | "true" | "false") | undefined;
    "aria-autocomplete"?: "list" | "none" | "inline" | "both" | undefined;
    "aria-braillelabel"?: string | undefined;
    "aria-brailleroledescription"?: string | undefined;
    "aria-busy"?: (boolean | "true" | "false") | undefined;
    "aria-checked"?: boolean | "true" | "false" | "mixed" | undefined;
    "aria-colcount"?: number | undefined;
    "aria-colindex"?: number | undefined;
    "aria-colindextext"?: string | undefined;
    "aria-colspan"?: number | undefined;
    "aria-controls"?: string | undefined;
    "aria-current"?: boolean | "time" | "step" | "true" | "false" | "page" | "location" | "date" | undefined;
    "aria-describedby"?: string | undefined;
    "aria-description"?: string | undefined;
    "aria-details"?: string | undefined;
    "aria-disabled"?: (boolean | "true" | "false") | undefined;
    "aria-dropeffect"?: "link" | "none" | "copy" | "execute" | "move" | "popup" | undefined;
    "aria-errormessage"?: string | undefined;
    "aria-expanded"?: (boolean | "true" | "false") | undefined;
    "aria-flowto"?: string | undefined;
    "aria-grabbed"?: (boolean | "true" | "false") | undefined;
    "aria-haspopup"?: boolean | "dialog" | "menu" | "grid" | "listbox" | "tree" | "true" | "false" | undefined;
    "aria-hidden"?: (boolean | "true" | "false") | undefined;
    "aria-invalid"?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
    "aria-keyshortcuts"?: string | undefined;
    "aria-label"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    "aria-level"?: number | undefined;
    "aria-live"?: "off" | "assertive" | "polite" | undefined;
    "aria-modal"?: (boolean | "true" | "false") | undefined;
    "aria-multiline"?: (boolean | "true" | "false") | undefined;
    "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
    "aria-orientation"?: "horizontal" | "vertical" | undefined;
    "aria-owns"?: string | undefined;
    "aria-placeholder"?: string | undefined;
    "aria-posinset"?: number | undefined;
    "aria-pressed"?: boolean | "true" | "false" | "mixed" | undefined;
    "aria-readonly"?: (boolean | "true" | "false") | undefined;
    "aria-relevant"?: "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    "aria-required"?: (boolean | "true" | "false") | undefined;
    "aria-roledescription"?: string | undefined;
    "aria-rowcount"?: number | undefined;
    "aria-rowindex"?: number | undefined;
    "aria-rowindextext"?: string | undefined;
    "aria-rowspan"?: number | undefined;
    "aria-selected"?: (boolean | "true" | "false") | undefined;
    "aria-setsize"?: number | undefined;
    "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
    "aria-valuemax"?: number | undefined;
    "aria-valuemin"?: number | undefined;
    "aria-valuenow"?: number | undefined;
    "aria-valuetext"?: string | undefined;
    children?: ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    } | undefined;
    onCopy?: import("react").ClipboardEventHandler<HTMLElement> | undefined;
    onCopyCapture?: import("react").ClipboardEventHandler<HTMLElement> | undefined;
    onCut?: import("react").ClipboardEventHandler<HTMLElement> | undefined;
    onCutCapture?: import("react").ClipboardEventHandler<HTMLElement> | undefined;
    onPaste?: import("react").ClipboardEventHandler<HTMLElement> | undefined;
    onPasteCapture?: import("react").ClipboardEventHandler<HTMLElement> | undefined;
    onCompositionEnd?: import("react").CompositionEventHandler<HTMLElement> | undefined;
    onCompositionEndCapture?: import("react").CompositionEventHandler<HTMLElement> | undefined;
    onCompositionStart?: import("react").CompositionEventHandler<HTMLElement> | undefined;
    onCompositionStartCapture?: import("react").CompositionEventHandler<HTMLElement> | undefined;
    onCompositionUpdate?: import("react").CompositionEventHandler<HTMLElement> | undefined;
    onCompositionUpdateCapture?: import("react").CompositionEventHandler<HTMLElement> | undefined;
    onFocus?: import("react").FocusEventHandler<HTMLElement> | undefined;
    onFocusCapture?: import("react").FocusEventHandler<HTMLElement> | undefined;
    onBlur?: import("react").FocusEventHandler<HTMLElement> | undefined;
    onBlurCapture?: import("react").FocusEventHandler<HTMLElement> | undefined;
    onChange?: import("react").FormEventHandler<HTMLElement> | undefined;
    onChangeCapture?: import("react").FormEventHandler<HTMLElement> | undefined;
    onBeforeInput?: import("react").FormEventHandler<HTMLElement> | undefined;
    onBeforeInputCapture?: import("react").FormEventHandler<HTMLElement> | undefined;
    onInput?: import("react").FormEventHandler<HTMLElement> | undefined;
    onInputCapture?: import("react").FormEventHandler<HTMLElement> | undefined;
    onReset?: import("react").FormEventHandler<HTMLElement> | undefined;
    onResetCapture?: import("react").FormEventHandler<HTMLElement> | undefined;
    onSubmit?: import("react").FormEventHandler<HTMLElement> | undefined;
    onSubmitCapture?: import("react").FormEventHandler<HTMLElement> | undefined;
    onInvalid?: import("react").FormEventHandler<HTMLElement> | undefined;
    onInvalidCapture?: import("react").FormEventHandler<HTMLElement> | undefined;
    onLoad?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onLoadCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onError?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onErrorCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onKeyDown?: import("react").KeyboardEventHandler<HTMLElement> | undefined;
    onKeyDownCapture?: import("react").KeyboardEventHandler<HTMLElement> | undefined;
    onKeyPress?: import("react").KeyboardEventHandler<HTMLElement> | undefined;
    onKeyPressCapture?: import("react").KeyboardEventHandler<HTMLElement> | undefined;
    onKeyUp?: import("react").KeyboardEventHandler<HTMLElement> | undefined;
    onKeyUpCapture?: import("react").KeyboardEventHandler<HTMLElement> | undefined;
    onAbort?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onAbortCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onCanPlay?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onCanPlayCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onCanPlayThrough?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onCanPlayThroughCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onDurationChange?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onDurationChangeCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onEmptied?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onEmptiedCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onEncrypted?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onEncryptedCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onEnded?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onEndedCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onLoadedData?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onLoadedDataCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onLoadedMetadata?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onLoadedMetadataCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onLoadStart?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onLoadStartCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onPause?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onPauseCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onPlay?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onPlayCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onPlaying?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onPlayingCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onProgress?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onProgressCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onRateChange?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onRateChangeCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onResize?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onResizeCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onSeeked?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onSeekedCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onSeeking?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onSeekingCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onStalled?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onStalledCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onSuspend?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onSuspendCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onTimeUpdate?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onTimeUpdateCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onVolumeChange?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onVolumeChangeCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onWaiting?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onWaitingCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onAuxClick?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onAuxClickCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onClick?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onClickCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onContextMenu?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onContextMenuCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onDoubleClick?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onDoubleClickCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onDrag?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragCapture?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragEnd?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragEndCapture?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragEnter?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragEnterCapture?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragExit?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragExitCapture?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragLeave?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragLeaveCapture?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragOver?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragOverCapture?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragStart?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragStartCapture?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDrop?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDropCapture?: import("react").DragEventHandler<HTMLElement> | undefined;
    onMouseDown?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseDownCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseEnter?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseLeave?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseMove?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseMoveCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseOut?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseOutCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseOver?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseOverCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseUp?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseUpCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onSelect?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onSelectCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onTouchCancel?: import("react").TouchEventHandler<HTMLElement> | undefined;
    onTouchCancelCapture?: import("react").TouchEventHandler<HTMLElement> | undefined;
    onTouchEnd?: import("react").TouchEventHandler<HTMLElement> | undefined;
    onTouchEndCapture?: import("react").TouchEventHandler<HTMLElement> | undefined;
    onTouchMove?: import("react").TouchEventHandler<HTMLElement> | undefined;
    onTouchMoveCapture?: import("react").TouchEventHandler<HTMLElement> | undefined;
    onTouchStart?: import("react").TouchEventHandler<HTMLElement> | undefined;
    onTouchStartCapture?: import("react").TouchEventHandler<HTMLElement> | undefined;
    onPointerDown?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerDownCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerMove?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerMoveCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerUp?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerUpCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerCancel?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerCancelCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerEnter?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerEnterCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerLeave?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerLeaveCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerOver?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerOverCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerOut?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerOutCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onGotPointerCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onGotPointerCaptureCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onLostPointerCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onLostPointerCaptureCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onScroll?: import("react").UIEventHandler<HTMLElement> | undefined;
    onScrollCapture?: import("react").UIEventHandler<HTMLElement> | undefined;
    onWheel?: import("react").WheelEventHandler<HTMLElement> | undefined;
    onWheelCapture?: import("react").WheelEventHandler<HTMLElement> | undefined;
    onAnimationStart?: import("react").AnimationEventHandler<HTMLElement> | undefined;
    onAnimationStartCapture?: import("react").AnimationEventHandler<HTMLElement> | undefined;
    onAnimationEnd?: import("react").AnimationEventHandler<HTMLElement> | undefined;
    onAnimationEndCapture?: import("react").AnimationEventHandler<HTMLElement> | undefined;
    onAnimationIteration?: import("react").AnimationEventHandler<HTMLElement> | undefined;
    onAnimationIterationCapture?: import("react").AnimationEventHandler<HTMLElement> | undefined;
    onTransitionEnd?: import("react").TransitionEventHandler<HTMLElement> | undefined;
    onTransitionEndCapture?: import("react").TransitionEventHandler<HTMLElement> | undefined;
}>;
interface Props {
    useModalParams: useModalParams;
    children: ReactNode;
}
declare const HamburgerModal: ({ useModalParams, children }: Props) => import("react/jsx-runtime").JSX.Element;
export default HamburgerModal;
//# sourceMappingURL=HamburgerModal.d.ts.map