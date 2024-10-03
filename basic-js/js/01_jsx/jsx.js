// Hello

let myElement = "Hello World";

// Basic Rules

myElement = <h3>Hello React</h3>; // correct

// Basic Rules untuk img

myElement = <img src="https://placehold.co/600x400" />; // wrong
// Benar: <img> harus memiliki penutup sendiri dengan '/>'
myElement = <img src="https://placehold.co/600x400" />; // correct

// Basic Rules untuk elemen multiple

// Benar: Menggunakan <div> atau tag pembungkus lainnya
myElement = (
    <div>
        <p>Learn Javascript</p>
        <p>Learn React</p>
    </div>
); // correct

// Statement in JSX
let myText = "Learn React";
myElement = (
    <div>
        <h3>{myText}</h3>
    </div>
);

// Array Processing
let items = ["Table", "Handphone", "Computer"];
myElement = (
    <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li> 
        ))}
    </ul>
);

// Render
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);
