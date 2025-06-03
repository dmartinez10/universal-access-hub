// content.js

let simplifyOn = false;
let describeOn = false;

// Listen for changes in storage (toggles)
chrome.storage.onChanged.addListener((changes) => {
  if (changes.simplifyOn) {
    simplifyOn = changes.simplifyOn.newValue;
    console.log('Simplify Mode is now', simplifyOn);
  }
  if (changes.describeOn) {
    describeOn = changes.describeOn.newValue;
    console.log('Describe Images is now', describeOn);
  }
});

// If Simplify Mode is on and user presses Ctrl+Shift+Y, show selected text
document.addEventListener('keydown', (e) => {
  if (simplifyOn && e.ctrlKey && e.shiftKey && e.key === 'Y') {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      alert('Simplify this:\n\n' + selectedText);
    }
  }
});

// If Describe Images is on and user right-clicks an image, show its URL
document.addEventListener('contextmenu', (e) => {
  if (describeOn && e.target.tagName === 'IMG') {
    e.preventDefault();
    const imgUrl = e.target.src;
    alert('Describe this image:\n\n' + imgUrl);
  }
});

