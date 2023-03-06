/**
 * This file was generated from ImageZoomViewer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ListValue } from "mendix";

export interface ImageZoomViewerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    imageList: ListValue;
    visibleImages: number;
    fontSize: number;
    isLoop: boolean;
    isBannerVisible: boolean;
    imageWidth: number;
    imageHeight: number;
    transitionSpeed: number;
}

export interface ImageZoomViewerPreviewProps {
    class: string;
    style: string;
    imageList: {} | null;
    visibleImages: number | null;
    fontSize: number | null;
    isLoop: boolean;
    isBannerVisible: boolean;
    imageWidth: number | null;
    imageHeight: number | null;
    transitionSpeed: number | null;
}
