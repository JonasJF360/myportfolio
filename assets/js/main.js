function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location.city
    location.href = profileData.location.coordinates

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerHTML = profileData.email.replace('@', '@<wbr>').replace('.com', '<wbr>.com')
    email.href = `mailto:${profileData.email}`
}

function updatePersonalNetworks(profileData) {
    const personalNetworks = document.getElementById('profile.personal.networks')
    personalNetworks.innerHTML = profileData.personal.networks.map(net => `<li><a href="${net.url}" target="_blank"><img src="${net.icon}" alt="${net.name}" title="${net.name}"></li>`).join('')
}

function updatePersonalContents(profileData) {
    const personalContents = document.getElementById('profile.personal.content')
    personalContents.innerHTML = profileData.personal.contents.map(skill =>
        `<p>${skill}</p>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <h3 ${project.github ? 'class="title github"' : 'class="title"'}>${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join('')
}

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
            <li>
                <h3 class="title">${experience.name}</h3>
                <p class="period">${experience.period}</p>
                <p>${experience.description}</p>
            </li>
        `
    }).join('')
}

function updateCourses(profileData) {
    const Courses = document.getElementById('profile.courses')
    Courses.innerHTML = profileData.myCourses.map(course => {
        return `
            <li>
                <h3 class="title">${course.name}</h3>
                <p class="hours"> Carga horária: ${course.hours}</p>
                <a href="${course.certificate}" target="_blank">${course.certificate}</a>
            </li>
        `
    }).join('')
}

// This immediately invoked asynchronous function expression (IIFE) fetches profile data using the fetchProfileData function,
// and then updates various parts of the profile using the fetched data. It calls different update functions with the profileData as an argument.
(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updatePersonalNetworks(profileData)
    updatePersonalContents(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
    updateCourses(profileData)
})()