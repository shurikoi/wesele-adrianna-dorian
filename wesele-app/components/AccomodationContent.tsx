import toast from "react-hot-toast";
import { useGuestAccess } from "./contexts/GuestAccessProvider";
import NavigateButton from "./ui/buttons/NavigateButton";
import Callout from "./ui/Callout";
import Paragraph from "./ui/Paragraph";
import TitleWelcome from "./ui/TitleWelcome";
import { useState } from "react";

export default function AccomodationContent() {
    const { guestAccess, isAccommodationResponsed, isMultipleGuests } = useGuestAccess();
    const [isAccommodationResponse, setAccommodationResponse] = useState(isAccommodationResponsed);

    const handleSubmitAccommodation = async () => {
        const updating = fetch('/api/updateGuestAccess', {
            method: 'POST',
            body: JSON.stringify({
                '_id': guestAccess?._id,
                'accommodation': true,
                'accommodationResponse': true
            })
        });
        await toast.promise(updating, {
            loading: 'Potwierdzanie...',
            success: 'Nocleg został potwierdzony',
            error: 'Błąd podczas potwierdzania noclegu',
        })
        setAccommodationResponse(true);
    };

    return (
        <>
            {isAccommodationResponse ? (
                <>
                    <Callout style="antiquewhite" className="mb-7 border-2">
                        <div className="font-sfPro font-bold">Twój nocleg został potwierdzony!</div>
                        <div className="font-sfPro font-[17px] mt-[-3px]">Jak już {isMultipleGuests ? 'wstaniecie' : 'wstaniesz'} zapraszamy {isMultipleGuests ? 'Was' : 'Cię'} na pyszne śniadanie!</div>
                    </Callout>
                    <TitleWelcome>Czuj się jak u siebie</TitleWelcome>
                    <Paragraph>Diamentowy pałac</Paragraph>
                    <Paragraph>Złotno 96</Paragraph>
                    <Paragraph>91-001 Łódź</Paragraph>
                    <NavigateButton href="https://maps.app.goo.gl/Jx93NhWExV582wDz6" />
                </>
            ) : (
                <Callout style="antiquewhite" className="mb-7 border-2">
                    <div className="font-sfPro font-bold">Uprzejmie prosimy o potwierdzenie noclegu</div>
                    <div className="text-center">Adres zostanie wyświetlony od razu po akceptacji rezerwacji</div>
                    <button className="px-5 py-2 text-white bg-[#a28776] rounded-xl hover:bg-[#987C6A]" onClick={handleSubmitAccommodation}>Potwierdź</button>
                </Callout>
            )}
        </>
    );
};


