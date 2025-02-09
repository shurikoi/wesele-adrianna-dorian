import Link from "next/link";

export default function NavigateButton({ href, title = 'Sprawdź na mapie' }: { href: string, title?: string; }) {
    // return (
    //     <a href={href} target="_blank" className="py-2 px-4 mt-1 w-fit font-sfPro italic rounded-full border border-white">{title}</a>
    // )
    const regEx = /^https/;

    return regEx.test(href)
        ? <a href={href} target="_blank" className="py-2 px-4 mt-1 w-fit font-sfPro italic rounded-full border border-white">{title}</a>
        : <Link href={href} className="py-2 px-4 mt-1 w-fit font-sfPro italic rounded-full border border-white">{title}</Link>;
};
