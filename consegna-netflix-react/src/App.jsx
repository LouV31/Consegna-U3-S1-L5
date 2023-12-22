import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./netflix_logo.png";
import avatar from "./avatar.png";
import "./App.css";
import { Container } from "react-bootstrap";
import NavBar from "./Components/NavBar";
import BatMan from "./Components/BatMan";
import HarryPotter from "./Components/HarryPotter";
import LordOfTheRings from "./Components/LordOfTheRings";
import SubHeader from "./Components/SubHeader";

function App() {
    return (
        <div className="App ">
            <Container fluid className="px-5 pb-5">
                <header>
                    <NavBar avatar={avatar} logo={logo} />
                </header>
                <SubHeader />
                <main className="px-2 mb-5">
                    <BatMan className="px-2" />
                    <HarryPotter className="px-2" />
                    <LordOfTheRings className="px-2" />
                </main>
            </Container>
        </div>
    );
}

export default App;
