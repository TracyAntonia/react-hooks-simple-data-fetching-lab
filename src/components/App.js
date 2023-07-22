// create your App component here
import React, {useState, useEffect} from "react";

function App() {
    const [dogImage, SetDogImage] = useState(null);
    const [isLoaded, SetIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
               .then((res) => res.json())
               .then((data) => {
                    SetDogImage(data.message);
                    SetIsLoaded(true);
               })
    })
}