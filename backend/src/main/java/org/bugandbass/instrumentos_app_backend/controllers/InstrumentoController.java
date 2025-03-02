package org.bugandbass.instrumentos_app_backend.controllers;

import java.io.BufferedWriter;
import java.io.IOException;
import java.util.List;

import org.bugandbass.instrumentos_app_backend.models.Nota;
import org.bugandbass.instrumentos_app_backend.models.Piano;

import com.google.gson.Gson;

public class InstrumentoController {

    public InstrumentoController(){}

    public String obtenerSonido(){
        Piano piano = Piano.getInstance();
        List<Nota> tocarInstrumento = piano.tocarInstrumento();
        String json = new Gson().toJson(tocarInstrumento);
        return json;
    }

    public void responderSonido(BufferedWriter out) throws IOException {
        String json = this.obtenerSonido();
        out.write("HTTP/1.1 200 OK\r\n");
        out.write("Content-Type: application/json\r\n");
        out.write("Access-Control-Allow-Origin: http://localhost:5173\r\n");
        out.write("Access-Control-Allow-Methods: GET\r\n");
        out.write("Access-Control-Allow-Headers: Content-Type\r\n");
        out.write("\r\n");
        out.write(json);
        out.flush();
    }

}