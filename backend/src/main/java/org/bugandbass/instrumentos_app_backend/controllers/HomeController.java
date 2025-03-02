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
        GrabacionController grabacionController = new GrabacionController();
        while (true) {
            Socket clientSocket = serverSocket.accept();
            try (BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
                 BufferedWriter out = new BufferedWriter(new OutputStreamWriter(clientSocket.getOutputStream()))) {
                String requestLine = in.readLine();
                System.out.println("Solicitud recibida: " + requestLine);

                if (requestLine == null)
                    continue;

                if (requestLine.startsWith("GET /piano/notas")) {
                    instrumentoController.responderSonido(out);
                    continue;
                }
                if (requestLine.startsWith("GET /grabaciones") || requestLine.startsWith("POST /grabaciones") || requestLine.startsWith("DELETE /grabaciones")) {
                    grabacionController.responderGrabacion(requestLine, out, in);
                    continue;
                }
                out.write("HTTP/1.1 404 Not Found\r\n\r\n");
                out.flush();
            } finally {
                clientSocket.close(); // Cerrar el socket del cliente aquí
            }
        }
        // serverSocket.close(); // Mover esto aquí si quieres cerrar el servidor completamente
    }
}