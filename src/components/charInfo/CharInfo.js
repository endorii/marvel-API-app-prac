import './charInfo.scss';

import MarvelService from '../../services/MarvelService';

import { Component } from 'react';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';

class CharInfo extends Component {

    state = {
        char: null,
        loading: false, 
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId){
            this.updateChar();
        }
    }

    updateChar = () => {

        const {charId} = this.props;

        if (!charId) {
            return;
        }

        this.onCharLoading();

        this.marvelService
            .getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError);

        // this.foo.bar = 3;
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    

    render() {

        const {char, loading, error} = this.state;

        const skeleton = char || loading || error ? null : <Skeleton/>;

        const errorMessage = error ? <ErrorMessage/> : null,
              spinner = loading ? <Spinner/> : null,
              content = !(loading || error || !char) ? <View char={char}/> : null;


        return (
            <div className="char__info">
                {skeleton}
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}

const View = ({char}) => {

    const {name, description, thumbnail, homepage, wiki, comics} = char;

    return(
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={{objectFit: 'contain'}}/>
                <div>
                    <div className="char__info-name">{name}</div>
                        <div className="char__btns">
                            <a href={homepage} className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.lenght > 0 ? null : 'There is no comics with this character'}
                {
                    comics.map((item, i) => {
                        if (i <= 10){
                            return (
                                <li key={i}className="char__comics-item">
                                    {item.name}
                                </li>
                            )
                        } 
                        if (!item.name) {
                            item.name = 'Hello';
                        } 

                    })
                }
            </ul>
        </>
    )
}

export default CharInfo;