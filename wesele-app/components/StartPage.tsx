import Header from "./Header";

export default function StartPage() {
    const mockUserData = {
        "id": "a341052c-7d7f-4def-9ebe-ab534e44b61d",
        "code": "WIŚNI",
        "content": "Bartosza Wiśniewskiego wraz z osobą towarzyszącą",
        "type": "pair",
        "order": 99,
        "greeting": "Cześć Bartek",
        "song": null,
        "createdAt": "2024-03-05T11:12:05.265Z",
        "guests": [
            {
                "id": "05e7e9bb-c9ba-4425-9352-dde93d45702a",
                "name": "Bartosz Wiśniewski",
                "type": "adult",
                "rsvp": true,
                "rsvpTime": "2024-08-21T16:48:02.797Z",
                "table": 6,
                "diet": "traditional",
                "accomodation": "home",
                "order": 230,
                "createdAt": "2024-03-06T13:48:44.674Z"
            },
            {
                "id": "da4c0f4f-6481-438c-af6a-f445c48369d6",
                "name": "Piękna towarzyszka Bartka",
                "type": "adult",
                "rsvp": true,
                "rsvpTime": "2024-08-21T16:49:34.732Z",
                "table": 6,
                "diet": "traditional",
                "accomodation": "home",
                "order": 231,
                "createdAt": "2024-03-06T13:48:44.884Z"
            }
        ]
    }
    return (
        <div>
            <Header greeting={mockUserData.greeting} />
        </div>
    );
}