
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/JonasJF360/myportfolio/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
