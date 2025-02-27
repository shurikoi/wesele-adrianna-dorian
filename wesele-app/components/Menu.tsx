import { menuDishes } from "@/lib/menuDishesData";
import TitleWelcome from "./ui/TitleWelcome";
import DropdownContainer from "./DropdownContainer";

export default function Menu() {
    return (
        <div className="flex flex-col gap-4">
            <div className="mb-2">
                <TitleWelcome>Menu</TitleWelcome>
                <div className="font-fellFrench text-2xl">Sprawdź co jesz</div>
            </div>
            {menuDishes.map((element) => <DropdownContainer key={element.id} content={element.content} title={element.title} />)}
        </div>
    );
};
