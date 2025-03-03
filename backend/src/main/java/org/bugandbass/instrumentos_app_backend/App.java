package org.bugandbass.instrumentos_app_backend;

import java.net.ServerSocket;

import org.bugandbass.instrumentos_app_backend.controllers.HomeController;

public final class App {
    public static void main(String[] args) throws Exception {
        ServerSocket serverSocket = new ServerSocket(8080);
        System.out.println("Servidor escuchando en puerto 8080...");
        
        new HomeController(serverSocket);
    }
}
