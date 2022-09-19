export interface ImageInterface {
    /**
     * 图片转base64
     * @param url 图片路径
     */
    // eslint-disable-next-line no-unused-vars
    imageToBase64(url: string): Promise<string>;
}
