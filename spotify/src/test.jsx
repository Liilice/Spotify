import { useParams, useNavigate } from 'react-router-dom';

function NewFile() {
    let { couille } = useParams();

    let navigate = useNavigate();

    const goToMainPage = () => {
        navigate('/');
    };

    return (
        <div>
            <h1>Welcome to the new file with id {couille}!</h1>
            <button onClick={goToMainPage}>Go to Main Page</button>
        </div>
    );
}

// function restInPeace() {
//     return <h1>Rest in peace</h1>;
// }

export default NewFile;
