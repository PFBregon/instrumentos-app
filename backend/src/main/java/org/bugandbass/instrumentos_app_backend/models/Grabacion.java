package org.bugandbass.instrumentos_app_backend.models;

import java.util.List;
import java.util.Map;

public class Grabacion {
    private int id;
    private String nombreCancion;
    private List<Map<String, String>> listaNotas; 
    
    public Grabacion() {}

    public Grabacion(int id, String nombreCancion, List<Map<String, String>> listaNotas) {
        this.id = id;
        this.nombreCancion = nombreCancion;
        this.listaNotas = listaNotas;
    }

    public int getId() {
        return id;
    }


    public String getNombreCancion() {
        return nombreCancion;
    }

    public void setNombreCancion(String nombreCancion) {
        this.nombreCancion = nombreCancion;
    }

    public List<Map<String, String>> getListaNotas() {
        return listaNotas;
    }

    public void setListaNotas(List<Map<String, String>> listaNotas) {
        this.listaNotas = listaNotas;
    }

    public void setId(int id) {
        this.id = id;
    }
}
