
// This function fetches profile data from a JSON file using an HTTP request.
// It returns the parsed profile data as an object.
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/JonasJF360/myportfolio/main/data/profile.json';
    // ( URL para teste local )
    // const url = './data/profile.json'
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}