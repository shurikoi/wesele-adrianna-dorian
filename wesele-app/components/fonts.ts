import localFont from "next/font/local";

export const fellFrench = localFont({
    src: [
        {
            path: "../public/fonts/im-fell-french-pro.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/im-fell-french-pro-italic.otf",
            weight: "400",
            style: "italic",
        },
    ],
    variable: "--font-fell-french",
});

export const sfPro = localFont({
    src: [
        {
            path: "../public/fonts/SF-Pro.ttf",
            weight: "400",
            style: "normal",
        }
    ],
    variable: "--font-sf-pro",
});