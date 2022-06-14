const form = document.querySelector('#searchForm');
const p = document.querySelector('p');
form.addEventListener('submit' ,async (e) => {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params : {q : searchTerm}};
    const res = await axios.get('https://api.tvmaze.com/search/shows' , config);
    makeImages(res.data);
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            p.append(img);
        }
    }
}



