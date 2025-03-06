document.querySelector('#app').innerHTML = `
      <div>
        <h1>Random HTTP Cat Viewer</h1>
        <button id="randomButton" type="button">Generate Random Status Code</button>
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
