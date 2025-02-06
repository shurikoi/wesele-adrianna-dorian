import FormRSVP from "./FormRSVP";
import InvitationInfo from "./InvitationInfo";
import StartWelcomeContainer from "./StartWelcomeContainer";
import TitleWelcomeContainer from "./ui/TitleWelcomeContainer";

export default function StartPage() {

    return (
        <div className="">
            <StartWelcomeContainer>
                <TitleWelcomeContainer>
                    {"Adriana &\nDorian"}
                </TitleWelcomeContainer>
            </StartWelcomeContainer>
            <InvitationInfo />
            <FormRSVP />
        </div>
    );
}