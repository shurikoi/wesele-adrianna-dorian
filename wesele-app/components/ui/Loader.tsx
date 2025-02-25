import { CircleLoader } from "react-spinners";

export default function Loader() {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center">
            <CircleLoader color="white" aria-label="Loading" />
        </div>
    )
};
