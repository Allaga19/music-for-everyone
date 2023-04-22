const dataMusic = [
	{
		id: '1',
		artist: 'The weeknd',
		track: 'Save your tears',
		poster: 'img/catalog/photo1.jpg',
		mp3: 'audio/The Weeknd - Save Your Tears.mp3',
	},
	{
		id: '2',
		artist: 'Imagine Dragons',
		track: 'Follow You',
		poster: 'img/catalog/photo2.jpg',
		mp3: 'audio/Imagine Dragons - Follow You.mp3',
	},
	{
		id: '3',
		artist: 'Tove Lo',
		track: 'How Long',
		poster: 'img/catalog/photo3.jpg',
		mp3: 'audio/Tove Lo - How Long.mp3',
	},
	{
		id: '4',
		artist: 'Tom Odell',
		track: 'Another Love',
		poster: 'img/catalog/photo4.jpg',
		mp3: 'audio/Tom Odell - Another Love.mp3',
	},
	{
		id: '5',
		artist: 'Lana Del Rey',
		track: 'Born To Die',
		poster: 'img/catalog/photo5.jpg',
		mp3: 'audio/Lana Del Rey - Born To Die.mp3',
	},
	{
		id: '6',
		artist: 'Adele',
		track: 'Hello',
		poster: 'img/catalog/photo6.jpg',
		mp3: 'audio/Adele - Hello.mp3',
	},
	{
		id: '7',
		artist: 'Tom Odell',
		track: "Can't Pretend",
		poster: 'img/catalog/photo7.jpg',
		mp3: "audio/Tom Odell - Can't Pretend.mp3",
	},
	{
		id: '8',
		artist: 'Lana Del Rey',
		track: 'Young And Beautiful',
		poster: 'img/catalog/photo8.jpg',
		mp3: 'audio/Lana Del Rey - Young And Beautiful.mp3',
	},
	{
		id: '9',
		artist: 'Adele',
		track: 'Someone Like You',
		poster: 'img/catalog/photo9.jpg',
		mp3: 'audio/Adele - Someone Like You.mp3',
	},
	{
		id: '10',
		artist: 'Imagine Dragons',
		track: 'Natural',
		poster: 'img/catalog/photo10.jpg',
		mp3: 'audio/Imagine Dragons - Natural.mp3',
	},
	{
		id: '11',
		artist: 'Drake',
		track: 'Laugh Now Cry Later',
		poster: 'img/catalog/photo11.jpg',
		mp3: 'audio/Drake - Laugh Now Cry Later.mp3',
	},
	{
		id: '12',
		artist: 'Madonna',
		track: 'Frozen',
		poster: 'img/catalog/photo12.jpg',
		mp3: 'audio/Madonna - Frozen.mp3',
	},
];

const audio = new Audio();
const tracksCard = document.getElementsByClassName('track');
const catalogContainer = document.querySelector('.catalog__container');
const player = document.querySelector('.player');
const pauseBtn = document.querySelector('.player__controller-pause');
const stopBtn = document.querySelector('.player__controller-stop');

const pausePlayer = () => {
	const trackActive = document.querySelector('.track_active');

	if (audio.paused) {
		audio.play();
		pauseBtn.classList.remove('player__icon_play');
		trackActive.classList.remove('track_pause');
	} else {
		audio.pause();
		pauseBtn.classList.add('player__icon_play');
		trackActive.classList.add('track_pause');
	}
};

const playMusic = (event) => {
	event.preventDefault();
	const trackActive = event.currentTarget;

	if (trackActive.classList.contains('track_active')) {
		pausePlayer();
		return;
	}

	const id = trackActive.dataset.idTrack;
	const track = dataMusic.find(item => id === item.id);
	// audio.src = trackActive.dataset.track;
	audio.src = track.mp3;
	
	audio.play();
	pauseBtn.classList.remove('player__icon_play');
	player.classList.add('player_active');

	for (let i = 0; i < tracksCard.length; i++) {
		tracksCard[i].classList.remove('track_active');
	}

	trackActive.classList.add('track_active');
};

const addHandlerTrack = () => {
	for (let i = 0; i < tracksCard.length; i++) {
		tracksCard[i].addEventListener('click', playMusic);
	}
};

pauseBtn.addEventListener('click', pausePlayer);
// pauseBtn.addEventListener('click', () => {
// 	// playMusic('');
// 	if (audio.paused) {
// 		audio.play();
// 		pauseBtn.classList.remove('player__icon_play');
// 	} else {
// 		audio.pause();
// 		pauseBtn.classList.add('player__icon_play');
// 	}
// });

// stopBtn.addEventListener('click', => {

// });

const createCard = (data) => {
	// return data.artist;
	const card = document.createElement('a');
	card.href = '#';
	// button.className = 'catalog__item track';  или
	card.classList.add('catalog__item', 'track');
	card.dataset.idTrack = data.id;

	card.innerHTML = `
		<div class="track__img-wrap">
			<img class="track__poster" src="${data.poster}" alt="${data.artist} ${data.track}" width="180px"
				height="180px">
		</div>
		<div class="track__info track-info">
			<p class="track-info__title">${data.track}</p>
			<p class="track-info__artist">${data.artist}</p>
		</div>
	`;
	return card;
};

const renderCatalog = (dataList) => {
	catalogContainer.textContent = '';
	const listCards = dataList.map(createCard);
	catalogContainer.append(...listCards);
	// console.log('listCards: ', listCards);
	addHandlerTrack();
}; 

// функция инициализации проекта
const init = () => {
	renderCatalog(dataMusic);
	// checkCount();

	// catalogAddBtn.addEventListener('click', () => {
	// 	[...tracksCard].ForEach((trackCard) => {
	// 		trackCard.style.display = '';
	// 		catalogAddBtn.remove();
	// 	});
	// });

	// prevBtn.addEventListener('click', playMusic);
	// nextBtn.addEventListener('click', playMusic);
};

init();
