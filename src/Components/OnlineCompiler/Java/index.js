import React, { useEffect, useRef, useState } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';
import "./index.css"

function JavaCompiler() {
    const termContainerRef = useRef(null); // Terminal DOM container
    const terminalRef = useRef(null);      // xterm.js instance
    const socketRef = useRef(null);
    const [buttonValue, setButtonValue] = useState("Run");
    const [value, setvalue] = useState("Outputs");
    const [isActive, setIsActive] = useState(true);
    const [code, setCode] = useState(`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("İsminizi girin: ");
        String isim = input.nextLine();
        System.out.println("Merhaba " + isim + "!");
    }
}`);

    useEffect(() => {
        if (!terminalRef.current) {
            const term = new Terminal({ cursorBlink: true });
            terminalRef.current = term;
            term.open(termContainerRef.current);
            term.focus();
            term.writeln("Java Terminale Hoş Geldiniz\r\n");

            termContainerRef.current.addEventListener('click', () => term.focus());
        }
    }, []);

    const displayAdd = () => {
        setIsActive(!isActive);
        if(isActive){
            setvalue("Codes");
        }else{
            setvalue("Outputs")
        }
    }

    const handleRun = () => {
        if (socketRef.current && socketRef.current.readyState !== WebSocket.CLOSED) {
            socketRef.current.close();
            setButtonValue("Run");
        }

        const socket = new WebSocket("https://javacompilerb.onrender.com/terminal");
        socketRef.current = socket;

        socket.onopen = () => {
            setButtonValue("Running ...");
            socket.send(JSON.stringify({ type: "code", payload: code }));
        };

        socket.onmessage = (event) => {
            setButtonValue("Run");
            console.log("WebSocket'ten çıktı geldi:", event.data);
            terminalRef.current.write(event.data); // gelen çıktı doğrudan yazılır
        };

        let inputBuffer = "";

        terminalRef.current.onData(data => {
            console.log("Kullanıcı yazdı:", JSON.stringify(data));
            terminalRef.current.write(data); // terminale girilen karakteri göster

            if (data === "\r") {
                const fullInput = inputBuffer + "\n";
                if (socket.readyState === WebSocket.OPEN) {
                    socket.send(JSON.stringify({
                        type: "input",
                        payload: fullInput
                    }));
                    terminalRef.current.write('\r\n');
                }
                inputBuffer = "";
            } else {
                inputBuffer += data;
            }
        });

        socket.onerror = (err) => {
            setButtonValue("Run");
            terminalRef.current.write(`\r\n[WebSocket Hatası] ${err.message}\r\n`);
        };
    };

    return (
        <div className="container">
            <div className='buttonDiv '>
                <button className='run-button' onClick={displayAdd}>{value}</button>
            </div>
            <div className='CodePanels'>
                <div  class={isActive ? "code-panel" : "display code-panel"}>
                    <h3>Write Codes:</h3>
                    <textarea
                        className="code-editor"
                        rows={25}
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <button className="run-button" onClick={handleRun}>{buttonValue}</button>
                </div>
                <div className={isActive ? "display terminal-panel" : "terminal-panel"}  ref={termContainerRef}></div>
            </div>
        </div>
    );
}

export default JavaCompiler;
