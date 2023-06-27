const memes = [];

const createMeme = (event) => {
  event.preventDefault();

  const imageUrl = document.getElementById('imageUrl').value;
  const topText = document.getElementById('topText').value;
  const bottomText = document.getElementById('bottomText').value;

  const memeContainer = document.getElementById('memeContainer');

  const meme = document.createElement('div');
  meme.className = 'meme-container';

  const image = document.createElement('img');
  image.src = imageUrl;
  meme.appendChild(image);

  const topTextDiv = document.createElement('div');
  topTextDiv.className = 'meme-text meme-text-top';
  topTextDiv.textContent = topText;
  meme.appendChild(topTextDiv);

  const bottomTextDiv = document.createElement('div');
  bottomTextDiv.className = 'meme-text meme-text-bottom';
  bottomTextDiv.textContent = bottomText;
  meme.appendChild(bottomTextDiv);

  memes.push(meme);
  memeContainer.appendChild(meme);
  meme.addEventListener('dblclick', function () {
    this.remove();
    memes.splice(memes.indexOf(meme), 1);
  });

  document.getElementById('memeForm').reset();
};

const memeForm = document.getElementById('memeForm');
memeForm.addEventListener('submit', createMeme);
