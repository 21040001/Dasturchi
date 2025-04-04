import { Container, Row, Col } from 'reactstrap';
import "./index.css";

function Footer() {

    const anim = (event) => {
        event.target.classList.add("marginleft");
        document.getElementById("1").classList.remove("display");
        document.getElementById("1").classList.add("animationFooter");
    }

    const anim2 = (event) => {
        event.target.classList.remove("marginleft");
        document.getElementById("1").classList.add("display");
    }

    const anim3 = (event) => {
        event.target.classList.add("marginleft");
        document.getElementById("2").classList.remove("display");
        document.getElementById("2").classList.add("animationFooter");
    }

    const anim4 = (event) => {
        event.target.classList.remove("marginleft");
        document.getElementById("2").classList.add("display");
    }
    const anim5 = (event) => {
        event.target.classList.add("marginleft");
        document.getElementById("3").classList.remove("display");
        document.getElementById("3").classList.add("animationFooter");
    }

    const anim6 = (event) => {
        event.target.classList.remove("marginleft");
        document.getElementById("3").classList.add("display");
    }
    const anim7 = (event) => {
        event.target.classList.add("marginleft");
        document.getElementById("4").classList.remove("display");
        document.getElementById("4").classList.add("animationFooter");
    }

    const anim8 = (event) => {
        event.target.classList.remove("marginleft");
        document.getElementById("4").classList.add("display");
    }
    const anim9 = (event) => {
        event.target.classList.add("marginleft");
        document.getElementById("5").classList.remove("display");
        document.getElementById("5").classList.add("animationFooter");
    }

    const anim10 = (event) => {
        event.target.classList.remove("marginleft");
        document.getElementById("5").classList.add("display");
    }
    const anim11 = (event) => {
        event.target.classList.add("marginleft");
        document.getElementById("6").classList.remove("display");
        document.getElementById("6").classList.add("animationFooter");
    }

    const anim12 = (event) => {
        event.target.classList.remove("marginleft");
        document.getElementById("6").classList.add("display");
    }
    const anim13 = (event) => {
        event.target.classList.add("marginleft");
        document.getElementById("7").classList.remove("display");
        document.getElementById("7").classList.add("animationFooter");
    }

    const anim14 = (event) => {
        event.target.classList.remove("marginleft");
        document.getElementById("7").classList.add("display");
    }
    const anim15 = (event) => {
        event.target.classList.add("marginleft");
        document.getElementById("8").classList.remove("display");
        document.getElementById("8").classList.add("animationFooter");
    }

    const anim16 = (event) => {
        event.target.classList.remove("marginleft");
        document.getElementById("8").classList.add("display");
    }
    const anim17 = (event) => {
        event.target.classList.add("marginleft");
        document.getElementById("9").classList.remove("display");
        document.getElementById("9").classList.add("animationFooter");
    }

    const anim18 = (event) => {
        event.target.classList.remove("marginleft");
        document.getElementById("9").classList.add("display");
    }
    return (

        <div className='footer'>
            <Row xs="4" className='border-bottom border-2 row1'>
                <Col >
                    <h5 >About</h5>
                    <p class="text-start marginBottom" onMouseOver={anim} onMouseOut={anim2}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" fill="currentColor" class="bi bi-backpack4-fill paddingright" viewBox="0 0 16 16">
                            <path d="M8 0a2 2 0 0 0-2 2H3.5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h4v.5a.5.5 0 0 0 1 0V7h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H10a2 2 0 0 0-2-2m1 2a1 1 0 0 0-2 0zm-4 9v2h6v-2h-1v.5a.5.5 0 0 1-1 0V11z" />
                            <path d="M14 7.599A3 3 0 0 1 12.5 8H9.415a1.5 1.5 0 0 1-2.83 0H3.5A3 3 0 0 1 2 7.599V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        Career
                        <svg xmlns="http://www.w3.org/2000/svg" id='1' width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                    </p>
                    <p class="text-start marginBottom" onMouseOver={anim3} onMouseOut={anim4}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" fill="currentColor" class="bi bi-award-fill paddingright" viewBox="0 0 16 16">
                            <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
                            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                        </svg>
                        Awards
                        <svg xmlns="http://www.w3.org/2000/svg" id='2' width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill display" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                    </p>
                    <p class="text-start marginBottom" onMouseOver={anim5} onMouseOut={anim6}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" fill="currentColor" class="bi bi-microsoft-teams paddingright" viewBox="0 0 16 16">
                            <path d="M9.186 4.797a2.42 2.42 0 1 0-2.86-2.448h1.178c.929 0 1.682.753 1.682 1.682zm-4.295 7.738h2.613c.929 0 1.682-.753 1.682-1.682V5.58h2.783a.7.7 0 0 1 .682.716v4.294a4.197 4.197 0 0 1-4.093 4.293c-1.618-.04-3-.99-3.667-2.35Zm10.737-9.372a1.674 1.674 0 1 1-3.349 0 1.674 1.674 0 0 1 3.349 0m-2.238 9.488-.12-.002a5.2 5.2 0 0 0 .381-2.07V6.306a1.7 1.7 0 0 0-.15-.725h1.792c.39 0 .707.317.707.707v3.765a2.6 2.6 0 0 1-2.598 2.598z" />
                            <path d="M.682 3.349h6.822c.377 0 .682.305.682.682v6.822a.68.68 0 0 1-.682.682H.682A.68.68 0 0 1 0 10.853V4.03c0-.377.305-.682.682-.682Zm5.206 2.596v-.72h-3.59v.72h1.357V9.66h.87V5.945z" />
                        </svg>
                        Our Team
                        <svg xmlns="http://www.w3.org/2000/svg" id='3' width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill display" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                    </p>
                </Col>

                <Col >
                    <h5>Resources</h5>
                    <a href="/blogs">
                        <p class="text-start marginBottom" onMouseOver={anim7} onMouseOut={anim8}>
                            Blog
                            <svg xmlns="http://www.w3.org/2000/svg" id='4' width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill display" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                            </svg>
                        </p>
                    </a>

                    <a href="/books">
                        <p class="text-start marginBottom" onMouseOver={anim9} onMouseOut={anim10}>
                            My Books
                            <svg xmlns="http://www.w3.org/2000/svg" id='5' width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill display" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                            </svg>
                        </p>
                    </a>
                    <a href="/JavaCompiler">
                        <p class="text-start marginBottom" onMouseOver={anim11} onMouseOut={anim12}>
                            Compiler
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" id='6' height="16" fill="currentColor" class="bi bi-caret-right-fill display" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                            </svg>
                        </p>
                    </a>
                </Col>

                <Col >
                    <h5>Contact us</h5>
                    <p class="text-start marginBottom" onMouseOver={anim13} onMouseOut={anim14}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" fill="currentColor" class="bi bi-telephone-fill paddingright" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg>
                        +90 000 000 00
                        <svg xmlns="http://www.w3.org/2000/svg" id='7' width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill display" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                    </p>
                    <p class="text-start marginBottom" onMouseOver={anim15} onMouseOut={anim16}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" fill="currentColor" class="bi bi-envelope-at-fill paddingright" viewBox="0 0 16 16">
                            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                        </svg>
                        davronbek3@gmail.com
                        <svg xmlns="http://www.w3.org/2000/svg" id='8' width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill display" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                    </p>
                    <p class="text-start marginBottom" onMouseOver={anim17} onMouseOut={anim18}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" fill="currentColor" class="bi bi-buildings-fill paddingright" viewBox="0 0 16 16">
                            <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z" />
                        </svg>
                        Turkiya-Ankara
                        <svg xmlns="http://www.w3.org/2000/svg" id='9' width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill display" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                    </p>
                </Col>
            </Row>
            <Row className='row2'>
                <Col>
                    <p class="text-start ">Terms of Service  Privacy policy</p>
                </Col>
                <Col>
                    <p className='text-center'>
                        <a href='https://www.instagram.com/davronbk_003/'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />

                            </svg>
                        </a>
                        <a href='https://github.com/21040001'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                            </svg>
                        </a>
                        <a href='http://www.linkedin.com/in/davronbek-abdurazzoqov'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                            </svg>
                        </a>
                        <a href='https://t.me/davronbekAbdurazzokov'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                            </svg>
                        </a>
                    </p>
                </Col>
                <Col>
                    <p class="text-end ">@2023 www.davronbek-dev.uz</p>
                </Col>
            </Row>
        </div>

    );
}

export default Footer;