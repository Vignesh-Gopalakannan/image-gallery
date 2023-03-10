import { Component, ReactNode, createElement } from "react";
import { ImageZoomViewerPreviewProps } from "../typings/ImageZoomViewerProps";

declare function require(name: string): string;

export class preview extends Component<ImageZoomViewerPreviewProps> {
    render(): ReactNode {
        return <div/>;
    }
}

export function getPreviewCss(): string {
    return require("./ui/ImageZoomViewer.css");
}
