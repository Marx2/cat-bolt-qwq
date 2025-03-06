// Updated button placement and text
document.querySelector('#app').innerHTML = `
  <div>
    <button id="randomButton" type="button">Random Error Cat</button>
    <h1>HTTP Status Code Viewer</h1>
    <img id="catImage" src="" alt="HTTP Cat Image">
  </div>
`;

const randomButton = document.getElementById('randomButton');
const catImage = document.getElementById('catImage');

randomButton.addEventListener('click', () => {
  const statusCodes = [200, 403, 404, 500];
  const code = statusCodes[Math.floor(Math.random() * statusCodes.length)];
  catImage.src = `https://http.cat/${code}.jpg`;
});
