package org.bugandbass.instrumentos_app_backend.Repository.java;

import org.bugandbass.instrumentos_app_backend.models.Grabacion;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

public class Repository {
    
    
    private static Repository instance;
    private List<Grabacion> grabaciones;
    private int id=1;
    
    public Repository() {
        this.grabaciones= this.iniciarArray();
    }

    public static Repository getInstance() {
        if (instance == null) {
            instance = new Repository();
        }
        return instance;
    }

    public List<Grabacion> iniciarArray() {        
        grabaciones = new ArrayList<>();
        List<Map<String, String>> cancion1 = Arrays.asList(
            Map.of("C3", "1"),
            Map.of("C3", "1"),
            Map.of("C3", "1")
        );
        
        List<Map<String, String>> cancion2 = Arrays.asList(
            Map.of("C3", "1"),
            Map.of("C3", "1"),
            Map.of("C3", "1")
        );
        
        List<Map<String, String>> cancion3 = Arrays.asList(
            Map.of("C3", "1"),
            Map.of("C3", "1"),
            Map.of("C3", "1")
        );
        
        grabaciones.add(new Grabacion(id++, "titulo1", cancion1));
        grabaciones.add(new Grabacion(id++, "titulo2", cancion2));
        grabaciones.add(new Grabacion(id++, "titulo3", cancion3));
        return grabaciones;

    }

    public void addGrabacion(String json) {
        Gson gson = new Gson();

        List<Map<String, String>> listaNotas = gson.fromJson(json, new TypeToken<List<Map<String, String>>>() {}.getType());

        Grabacion nuevaGrabacion = new Grabacion(id, "titulo" + id++, listaNotas);
        
        grabaciones.add(nuevaGrabacion);

    }
    public List<Grabacion> getGrabaciones() {
        return grabaciones;
    }
}
