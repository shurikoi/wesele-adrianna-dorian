export default async function getGuestAccesses() {
    const guestAccesses = await fetch('/api/getGuestAccesses/', {
        method: 'GET',
    });
    return guestAccesses.json();
}