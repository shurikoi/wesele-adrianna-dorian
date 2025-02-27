// import { modalQuestions } from "@/lib/modalQuestions";
import { UserChoices } from "@/lib/types";
import Paragraph from "./ui/Paragraph";
import Callout from "./ui/Callout";
import { useGuestAccess } from "./contexts/GuestAccessProvider";
import ContactInfo from "./ui/ContactInfo";

export default function SummaryRSVP({ summary }: { summary: UserChoices; }) {
    const { guestAccess } = useGuestAccess();
    const isAccompaniment = guestAccess?.guests[0].accompaniment?.accompaniment;
    const titleAccompaniment = 'Czy będziesz z osobą towarzyszącą?';
    const isSummaryTrue = summary ? summary[0]?.answer === 'yes' : false;
    return (
        <>
            <Callout>
                <ContactInfo />
            </Callout>
            <Paragraph className="italic text-center">POTWIERDZENIE WYBORU</Paragraph>
            {/* {summary?.map((question) => ( */}
            <div className="flex flex-col gap-2 text-center">
                <div className="font-sfPro text-xl text-center">
                    {/* {modalQuestions.find(element => element.id === question.id)?.question} */}
                    {titleAccompaniment}
                </div>
                <Paragraph>{isAccompaniment || isSummaryTrue ? "Tak" : "Nie"}</Paragraph>
            </div>
            {/* ))} */}
        </>
    );
};
