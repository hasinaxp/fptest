import { isNormalText } from './detection.js';

const loadFileAsText = async (url) => {
    const response = await fetch(url);
    const data = await response.text();
    return data;
};

let fileTestElem = document.getElementById('test_file');

const testFiles = async () => {
    let exts = ['gif', 'jpg', 'png', 'mp3', 'mp4'];
    for (let ext of exts) {
        let file = await loadFileAsText(`./files/file.${ext}`);
        fileTestElem.innerHTML += `<p>${ext}<br/>${isNormalText(file)}</p>`;
    }
};

testFiles();
