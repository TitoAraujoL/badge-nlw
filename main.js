const links = {
  github: 'VitorAraujoL',
  youtube: 'Rocketseat',
  instagram: 'Rocketseat_oficial',
  twitter: 'Rocketseat',
  facebook: 'Rocketseat'
}

function changeSocialMedia() {
  for (let li of list.children) {
    social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${links[social]}`
  }
}

changeSocialMedia()
function getInfosGitHub() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userImage.src = data.avatar_url
      bio.textContent = data.bio
      userProfile.href = data.html_url
      userName.textContent = data.name
      userLogin.textContent = data.login
    })
}

getInfosGitHub()
