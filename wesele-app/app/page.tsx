import FormRSVP from '@/components/FormRSVP';
import InvitationInfo from '@/components/InvitationInfo';
import StartWelcomeContainer from '@/components/StartWelcomeContainer';
// import TitleWelcomeLayout from '@/components/ui/TitleWelcomeLayout';
// import WelcomeContainer from '@/components/WelcomeContainer';

export default function Home() {
    return (
        <>
            <StartWelcomeContainer className="mb-8 italic">
                Adrianna & Dorian
            </StartWelcomeContainer>
            {/* <WelcomeContainer imageOptionSrc="9">
                <TitleWelcomeLayout title="Adrianna & Dorian" description="" />
            </WelcomeContainer>  */}
            <InvitationInfo />
            <FormRSVP />
        </>);
}
