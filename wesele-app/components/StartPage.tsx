import FormRSVP from "./FormRSVP";
import InvitationInfo from "./InvitationInfo";
import StartWelcomeContainer from "./StartWelcomeContainer";

export default function StartPage() {

    return (
        <>
            <StartWelcomeContainer>
                {"Adriana &\nDorian"}
            </StartWelcomeContainer>
            <InvitationInfo />
            <FormRSVP />
        </>
    );
}