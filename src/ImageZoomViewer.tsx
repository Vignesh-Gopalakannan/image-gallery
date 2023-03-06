import { createElement, useEffect, useState } from "react";
import { PhotoViewer } from "./components/PhotoViewer";
import { ImageZoomViewerContainerProps } from "../typings/ImageZoomViewerProps";
import "./ui/ImageZoomViewer.css";

export default function ImageZoomViewer(props: ImageZoomViewerContainerProps) {
    let status = props.imageList != undefined ? props.imageList.status === "available" : false;
    let firstGuid = props.imageList.items?.length ? props.imageList.items[0].id : 0;
    const [isImageEntity, setImageEntity] = useState(false);
    useEffect(() => {
        if (firstGuid != 0) {
            //@ts-ignore
            mx.data.get({
                guid: firstGuid,
                callback: function (obj: any) {
                    if (obj != null) {
                        let isValid = false;
                        if (typeof obj.metaData.hasSuperEntities != "undefined") {
                            isValid = obj.metaData.hasSuperEntities(["System.Image"]);
                        } else if (typeof obj.metaData.genaralizations) {
                            isValid = obj.metaData.generalizations.includes("System.Image");
                        }
                        setImageEntity(isValid);
                    }
                }
            });
        }
    });

    try {
        if (status && isImageEntity) {
            return (
                <PhotoViewer
                    imageList={
                        props.imageList?.items?.length
                            ? props.imageList.items.map((item: any) => {
                                  return {
                                      id: item.id
                                  };
                              })
                            : []
                    }
                    visibleImages={props.visibleImages}
                    fontSize={props.fontSize}
                    transitionSpeed={props.transitionSpeed}
                    imageWidth={props.imageWidth}
                    imageHeight={props.imageHeight}
                    isLoop={props.isLoop}
                    isBannerVisible={props.isBannerVisible}
                    className={props.class}
                />
            );
        } else if (firstGuid == 0) {
            return <div />;
        } else {
            return (
                <div className="alert alert-info" role="alert">
                    Generalized entity should be System.Image
                </div>
            );
        }
    } catch (e) {
        return <div>Error</div>;
    }
}
