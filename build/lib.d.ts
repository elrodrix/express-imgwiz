/// <reference types="node" />
declare type ImageOptions = {
    h?: string;
    w?: string;
    crop?: string;
    fm?: string;
    fit?: "cover" | "contain" | "fill" | "inside" | "outside";
    position?: "top" | "right top" | "right" | "right bottom" | "bottom" | "bottom left" | "left top";
    strategy?: "entropy" | "attention";
    gravity?: "north" | "northeast" | "east" | "southeast" | "south" | "southwest" | "west" | "northwest" | "center" | "centre";
    kernel?: "nearest" | "cubic" | "mitchell" | "lanczos2" | "lanczos3";
    enlarge?: string;
    sharpen?: string;
    q?: string;
    blur?: string;
};
export declare function convertImage(source: {
    url?: string;
    path?: string;
}, opts: ImageOptions): Promise<{
    buffer: Buffer;
    type: string;
}>;
export {};
