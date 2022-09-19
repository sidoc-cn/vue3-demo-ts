import { ImageInterface } from "./image.d";

/**
 * 图片转base64
 * @param url 图片路径
 */
const imageToBase64 = (url: string): Promise<string> => {
    return new Promise((resolve) => {
        const imageElement = new Image();
        imageElement.setAttribute("crossOrigin", "anonymous"); // 解决跨域问题
        imageElement.src = url;
        imageElement.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = imageElement.width;
            canvas.height = imageElement.height;
            const context = canvas.getContext("2d");
            if (context) {
                context.drawImage(imageElement, 0, 0, imageElement.width, imageElement.height);
            }
            const quality = 0.8; // base64图片质量，取值范围是0~1
            const base64 = "image://" + canvas.toDataURL("image/png", quality);
            resolve(base64);
        };
    });
};

export default <ImageInterface>{
    imageToBase64,
};
