export default async function fetchTables() {
    const fetchTables = await fetch('/api/getTables/', {
        method: 'GET',
    });
    return fetchTables.json();
}