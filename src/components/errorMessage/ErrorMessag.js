import error from '../errorMessage/error.gif';

const ErrorMessage = () => {

    return (
        <img src={error} style={{margin: '0 auto', width: 'auto', height: '250px'}} alt="error404" />
    )
}

export default ErrorMessage;