package org.bugandbass.instrumentos_app_backend.controllers;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.ServerSocket;
import java.net.Socket;

public class HomeController {
    
    public HomeController(ServerSocket serverSocket) throws Exception {
        run(serverSocket);
    }

    public void run(ServerSocket serverSocket) throws Exception {
        InstrumentoController instrumentoController = new InstrumentoController();
        //Grabacion grabacion=new Grabacion();
        while (true) {
            Socket clientSocket = serverSocket.accept();
            try (
                BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
                BufferedWriter out = new BufferedWriter(new OutputStreamWriter(clientSocket.getOutputStream()))
            ){
                String requestLine = in.readLine();
                System.out.println("Solicitud recibida: " + requestLine);
    
                if (requestLine == null) continue;

                if (requestLine.startsWith("GET /options")) continue;
                
                if (requestLine.startsWith("GET /piano/notas")) {
                    instrumentoController.responderSonido(out);
                    continue;
                }
                if (requestLine.startsWith("GET /grabaciones")) {
                    continue;
                } 
                if (requestLine.startsWith("GET /salir")) {
                    out.write("HTTP/1.1 200 OK\r\n\r\nServidor finalizando");
                    out.flush();
                    break;
                }
                out.write("HTTP/1.1 404 Not Found\r\n\r\n");
                out.flush();
            }
            serverSocket.close();
        }
    }
   
}
