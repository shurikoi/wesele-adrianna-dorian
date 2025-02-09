import NavigateButton from "./ui/buttons/NavigateButton";
import Paragraph from "./ui/Paragraph";
import TitleWelcome from "./ui/TitleWelcome";

export default function AccomodationContent() {
    return (
        <>
            <TitleWelcome>Czuj się jak u siebie</TitleWelcome>
            <Paragraph>Diamentowy pałac</Paragraph>
            <Paragraph>Złotno 96</Paragraph>
            <Paragraph>91-001 Łódź</Paragraph>
            <NavigateButton href="https://maps.app.goo.gl/UXooooKijUc9grP5A" />
        </>
    );
};
