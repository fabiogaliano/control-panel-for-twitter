function show(platform, enabled, useSettingsInsteadOfPreferences) {
  document.body.classList.add(`platform-${platform}`)

  if (useSettingsInsteadOfPreferences) {
    document.querySelector('.platform-mac.state-on').innerText = 'Birdfeed\u2019s extension is currently on. You can turn it off in the Extensions section of Safari Settings.'
    document.querySelector('.platform-mac.state-off').innerText = 'Birdfeed\u2019s extension is currently off. You can turn it on in the Extensions section of Safari Settings.'
    document.querySelector('.platform-mac.state-unknown').innerText = 'You can turn on Birdfeed\u2019s extension in the Extensions section of Safari Settings.'
    document.querySelector('.open-preferences').innerText = 'Quit and Open Safari Settings…'
  }

  if (typeof enabled === 'boolean') {
    document.body.classList.toggle(`state-on`, enabled)
    document.body.classList.toggle(`state-off`, !enabled)
  } else {
    document.body.classList.remove(`state-on`)
    document.body.classList.remove(`state-off`)
  }

  if (platform === 'ios') {
    document.querySelector('.open-preferences').innerText = 'Open Safari Settings…'
  }
}

function openPreferences() {

}

document.querySelector('button.open-preferences').addEventListener('click', () => {
  webkit.messageHandlers.controller.postMessage('open-preferences')
})
