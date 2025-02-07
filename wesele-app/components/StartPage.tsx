import FormRSVP from "./FormRSVP";
import InvitationInfo from "./InvitationInfo";
import StartWelcomeContainer from "./StartWelcomeContainer";

export default function StartPage() {

    return (
        <>
            <StartWelcomeContainer>
                <div className="mb-8">{"Adriana &\nDorian"}</div>
            </StartWelcomeContainer>
            <InvitationInfo />
            <FormRSVP />
        </>
    );
}