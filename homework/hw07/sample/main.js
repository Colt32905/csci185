const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks (term) {
    const template= 
    `<section class="artist-card" id="3Nrfpe0tUJi4K4DXYWgMUX">
    <div>
        <img src="https://i.scdn.co/image/0c9057cb30520f9f883a220051260fc66a2f3ffa">
        <h2>BTS</h2>
        <div class="footer">
            <a href="https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>
`;
       document.querySelector('#artist').innerHTML=template;
}

async function getAlbums (term) {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
}

async function getArtist (term) {
    console.log(`
        get artists from spotify based on the search term
        "${term}" and load the first artist into the #artist section 
        of the DOM...`);
};


document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};