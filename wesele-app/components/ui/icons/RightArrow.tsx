import Image from "next/image";

export default function RightArrow() {
    return <Image className="-rotate-90 mt-[-50px] mr-5 mb-3" src="arrow.svg" alt="arrow" width={100} height={100} />;
};
