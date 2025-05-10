import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

   // let email = 'fracz@agh.edu.pl';
    const [email, setEmail] = useState('fracz@agh.edu.pl')


    function handleChange(event)
    {
        setEmail(event.target.value);
    }

    // let message;
    // if (email.length < 10) {
    //     message = <div>Ale masz krótki adres!</div>;
    // } else if (email.length < 15) {
    //     message = <div>Twój adres e-mail jest w sam raz.</div>;
    // } else {
    //     message = <div>Twój adres e-mail jest stanowczo za długi.</div>;
    // }

    let message = '';
    if (email.length < 10) {
        message = 'Ale masz krótki adres!';
    } else if (email.length < 15) {
        message = 'Twój adres e-mail jest w sam raz.';
    } else {
        message = 'Twój adres e-mail jest stanowczo za długi.';
    }



    return (
        <div>

            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email}</h2>
            <input type="text" onChange={handleChange}/>
            <p> {message} </p>
        </div>

    );
}

export default App;