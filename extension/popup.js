// popup.js

const simplifyToggle = document.getElementById('toggleSimplify');
const describeToggle = document.getElementById('toggleDescribe');

// On load, get stored toggle states
chrome.storage.sync.get(['simplifyOn', 'describeOn'], (res) => {
  simplifyToggle.checked = res.simplifyOn || false;
  describeToggle.checked = res.describeOn || false;
});

// When toggled, save the new state
simplifyToggle.addEventListener('change', () => {
  chrome.storage.sync.set({ simplifyOn: simplifyToggle.checked });
});
describeToggle.addEventListener('change', () => {
  chrome.storage.sync.set({ describeOn: describeToggle.checked });
});

