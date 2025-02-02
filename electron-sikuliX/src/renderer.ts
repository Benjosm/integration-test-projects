const button = document.getElementById('click-button');
const helloText = document.getElementById('hello-text');

if (button && helloText) {
  button.addEventListener('click', () => {
    helloText.textContent = 'Button clicked!';
  });
}
