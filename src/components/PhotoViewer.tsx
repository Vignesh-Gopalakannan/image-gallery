import { Fragment, createElement } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export interface ImageProps {
    id: any;
}

export interface PhotoViewerProps {
    imageList: ImageProps[];
    visibleImages: number;
    fontSize: number;
    transitionSpeed: number;
    imageWidth: number;
    imageHeight: number;
    isLoop: boolean;
    isBannerVisible: boolean;
    className: string;
}

export function PhotoViewer({
    imageList,
    transitionSpeed,
    visibleImages,
    fontSize,
    imageWidth,
    imageHeight,
    isLoop,
    isBannerVisible,
    className
}: PhotoViewerProps) {
    const imagesList = imageList?.length ? imageList : [];
    const totalImages: number = imageList != undefined ? imageList.length : 0;
    //@ts-ignore
    const appUrl = mx.appUrl;
    let showImages: number = visibleImages;

    const getUrlById = (id: any) => {
        return appUrl + "file?guid=" + id;
    };

    const getRemainingCount = (index: any) => {
        if (totalImages - showImages <= 0) {
            return undefined;
        } else if (showImages - 1 === index) {
            return (
                <span className="pv-rem-count" style={{ fontSize: fontSize }}>
                    +{totalImages - showImages}
                </span>
            );
        } else {
            return undefined;
        }
    };

    const getClass = (index: any) => {
        if (showImages - 1 === index) {
            return "pv-img pv-img-rel pv-img-overlay";
        } else {
            return "pv-img";
        }
    };

    return (
        <div className={className}>
            <PhotoProvider
                speed={() => transitionSpeed}
                loop={isLoop}
                bannerVisible={isBannerVisible}
                toolbarRender={({ rotate, scale, onScale, onRotate }) => {
                    return (
                        <Fragment>
                            <div className="PhotoView-Slider__toolbarIcon" onClick={() => onScale(scale + 1)}>
                                Zoom In
                            </div>
                            <div className="PhotoView-Slider__toolbarIcon" onClick={() => onScale(scale - 1)}>
                                Zoom Out
                            </div>
                            <div className="PhotoView-Slider__toolbarIcon" onClick={() => onRotate(rotate + 90)}>
                                Rotate
                            </div>
                        </Fragment>
                    );
                }}
            >
                <div className="pv-main">
                    {imagesList.map((item, index) => (
                        <div className={getClass(index)}>
                            <PhotoView key={index} src={getUrlById(item.id)}>
                                {index < showImages ? (
                                    <img src={getUrlById(item.id)} alt="" width={imageWidth} height={imageHeight} />
                                ) : undefined}
                            </PhotoView>
                            {getRemainingCount(index)}
                        </div>
                    ))}
                </div>
            </PhotoProvider>
        </div>
    );
}
