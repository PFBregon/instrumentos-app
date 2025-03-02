package org.bugandbass.instrumentos_app_backend.controllers;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.util.List;

import org.bugandbass.instrumentos_app_backend.Repository.java.Repository;
import org.bugandbass.instrumentos_app_backend.models.Grabacion;

import com.google.gson.Gson;

public class GrabacionController {
    Repository repository;

    public GrabacionController() {
        repository = Repository.getInstance();
    }

    public String index() {
        return objectToJson(repository.getGrabaciones());
    }

    public String show(int id) {
        List<Grabacion> grabaciones = repository.getGrabaciones();
        Grabacion grabacion = grabaciones.stream().filter(g -> g.getId() == id).findFirst().orElse(null);
        return objectToJson(grabacion);
    }

    public String create(BufferedReader in) throws IOException {
        StringBuilder requestBody = new StringBuilder();
        String line;

        while ((line = in.readLine()) != null && !line.isEmpty()) ;
        while (in.ready()) {
            requestBody.append((char) in.read());
        }
        repository.addGrabacion(requestBody.toString());
        return requestBody.toString();
    }

    public String delete(BufferedReader in) throws IOException {
        StringBuilder requestBody = new StringBuilder();
        String line;

        while ((line = in.readLine()) != null && !line.isEmpty()) ;
        while (in.ready()) {
            requestBody.append((char) in.read());
        }
        repository.deleteGrabacion(requestBody.toString());
        return "{}";
    }

    public String objectToJson(Object object) {
        Gson gson = new Gson();
        return gson.toJson(object);
    }

    public void responderGrabacion(String requestLine, BufferedWriter out, BufferedReader in) throws IOException {
        String json = "";
        if (requestLine.startsWith("GET /grabaciones")) {
            String[] parts = requestLine.split(" ");
            String path = parts[1];
            if (path.matches("^/grabaciones/\\d+$")) {
                String id = path.split("/")[2];
                json = show(Integer.parseInt(id));
            }
            if (path.equals("/grabaciones")) {
                json = index();
            }
        }
        if (requestLine.startsWith("POST /grabaciones")) {
            json = create(in);
        }
        if (requestLine.startsWith("DELETE /grabaciones")) {
            json = delete(in);
        }

        byte[] responseBytes = json.getBytes("UTF-8");
        if (responseBytes.length == 0) return;

        out.write("HTTP/1.1 200 OK\r\n");
        out.write("Content-Type: application/json\r\n");
        out.write("Content-Length: " + responseBytes.length + "\r\n");
        out.write("Access-Control-Allow-Origin: http://localhost:5173\r\n");
        out.write("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS\r\n");
        out.write("Access-Control-Allow-Headers: Content-Type\r\n");
        out.write("\r\n");
        out.write(json);
        out.flush();
    }
}