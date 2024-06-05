import { ImageContainerC } from "../styled-components/prov";


export const ImageContainerComponent = ({ imageUrl, alt}) => {
    return (
        <ImageContainerC>
            <img src={imageUrl} alt={alt} style={{ width: "100%", height: "auto" }} />
        </ImageContainerC>
    );
};