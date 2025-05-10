import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";

function App() {

   // let email = 'fracz@agh.edu.pl';
    const [email, setEmail] = useState('')
    //const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loggedInAs, setLoggedInAs] = useState(null)

    function handleChange(event)
    {
        setEmail(event.target.value);
    }

    function handleAuthenticate(){
    setLoggedInAs(email)
    setEmail('')
}

    let content;

    if(loggedInAs) {
        content = <div>
            <h2> Witaj {loggedInAs} !</h2>
                <a onClick ={()=> setLoggedInAs(null)}> Wyloguj </a>
        </div>

    }else{
        content = <div>
            <label>
                Zaloguj się e-mailem
                <input
                    type="text"
                    value={email}
                    onChange={handleChange}
                    placeholder="Twój e-mail"
                />
            </label>
            <button onClick={handleAuthenticate}>Wchodzę</button>

        </div>
    }

    // //let message = '';
    // if (email.length < 10) {
    //     message = 'Ale masz krótki adres!';
    // } else if (email.length < 15) {
    //     message = 'Twój adres e-mail jest w sam raz.';
    // } else {
    //     message = 'Twój adres e-mail jest stanowczo za długi.';
    // }


    return (
        <div className="container">
            <h1>Witaj w systemie do zapisów na zajęcia</h1>


            {content}

        </div>

    );
}

export default App;