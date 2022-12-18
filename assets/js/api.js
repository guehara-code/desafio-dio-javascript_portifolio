async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/guehara-code/desafio-dio-javascript_portifolio/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}