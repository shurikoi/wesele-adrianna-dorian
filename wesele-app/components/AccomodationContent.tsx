import { useGuestAccess } from "./contexts/GuestAccessProvider";
import NavigateButton from "./ui/buttons/NavigateButton";
import Callout from "./ui/Callout";
import Paragraph from "./ui/Paragraph";
import TitleWelcome from "./ui/TitleWelcome";
import { useState } from "react";

export default function AccomodationContent() {
    const { guestAccess } = useGuestAccess();
    const [isAccommodationResponse, setAccommodationResponse] = useState(guestAccess?.guests[0]?.accommodation?.accommodationResponse);

    const handleSubmitAccommodation = async () => {
        console.log('Potwierdzono nocleg');
        await fetch('/api/updateGuest', {
            method: 'POST',
            body: JSON.stringify({
                '_id': guestAccess?.guests[0]._id,
                'accommodation': true,
                'accommodationResponse': true
            })
        });
        setAccommodationResponse(true);
    };
    return (
        <>
            <Callout style="antiquewhite" className="mb-7 border-2">
                <div className="font-sfPro font-[17px] flex flex-col gap-3 items-center">
                    {isAccommodationResponse ? (
                        <div>Twój nocleg został potwierdzony</div>
                    ) : (
                        <>
                            <div>Uprzejmie prosimy o potwierdzenie noclegu</div>
                            <button className="px-5 py-2 text-white bg-[#a28776] rounded-xl hover:bg-[#987C6A]" onClick={handleSubmitAccommodation}>Potwierdź</button>
                        </>
                    )}
                </div>
            </Callout>
            <TitleWelcome>Czuj się jak u siebie</TitleWelcome>
            <Paragraph>Diamentowy pałac</Paragraph>
            <Paragraph>Złotno 96</Paragraph>
            <Paragraph>91-001 Łódź</Paragraph>
            <NavigateButton href="https://maps.app.goo.gl/Jx93NhWExV582wDz6" />
        </>
    );
};
