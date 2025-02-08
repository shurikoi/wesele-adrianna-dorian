import FormRSVP from '@/components/FormRSVP';
import InvitationInfo from '@/components/InvitationInfo';
import StartWelcomeContainer from '@/components/StartWelcomeContainer';

export default function Home() {
    return (
        <>
            <StartWelcomeContainer>
                <div className="mb-8">{"Adriana &\nDorian"}</div>
            </StartWelcomeContainer>
            <InvitationInfo />
            <FormRSVP />
        </>);
}
