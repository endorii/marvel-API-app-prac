class MarvelService {

    _apiBase = 'https://gateway.marvel.com:443/v1/public/characters';
    _apiKey = 'apikey=adcfa4d24750eb502e22e722c8d83870';
    _baseOffset = 210;

    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok){
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }
    
        return await res.json();
    }

    getAllCharacters = async (offset = this._baseOffset) => {
        const res = await this.getResource(`${this._apiBase}?limit=9&offset=${offset}&${this._apiKey}`);

        return res.data.results.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (char) => {

        if (char.description.length > 180){
            char.description = `${char.description.slice(0, 180)}... (for more details click on "Homepage")`
        } else if (char.description.length === 0){
            char.description = `Sorry character ${char.name} do not have description yet :o`
        }

        return {
            id: char.id,
            name: char.name,
            description: char.description,
            thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
            homepage: char.urls[0].url, 
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }
}

export default MarvelService;