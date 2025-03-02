package org.bugandbass.instrumentos_app_backend.models;

import org.junit.jupiter.api.Test;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import static org.junit.jupiter.api.Assertions.*;

public class GrabacionTest {

    @Test
    void testGetIdGrabacion() {
        Grabacion grabacion = new Grabacion(1, "Cancion1", new ArrayList<>());
        assertEquals(1, grabacion.getId());
    }

    @Test
    void testGetNombreCancion() {
        Grabacion grabacion = new Grabacion(1, "Cancion1", new ArrayList<>());
        assertEquals("Cancion1", grabacion.getNombreCancion());
    }

    @Test
    void testGetListaNotas() {
        List<Map<String, String>> listaNotas = new ArrayList<>();
        listaNotas.add(Map.of("C4", "1"));
        Grabacion grabacion = new Grabacion(1, "Cancion1", listaNotas);
        assertEquals(listaNotas, grabacion.getListaNotas());
    }

    @Test
    void testSetIdGrabacion() {
        Grabacion grabacion = new Grabacion();
        grabacion.setId(2);
        assertEquals(2, grabacion.getId());
    }

    @Test
    void testSetNombreCancion() {
        Grabacion grabacion = new Grabacion();
        grabacion.setNombreCancion("Cancion2");
        assertEquals("Cancion2", grabacion.getNombreCancion());
    }

    @Test
    void testSetListaNotas() {
        List<Map<String, String>> nuevaLista = new ArrayList<>();
        nuevaLista.add(Map.of("D4", "2"));
        Grabacion grabacion = new Grabacion();
        grabacion.setListaNotas(nuevaLista);
        assertEquals(nuevaLista, grabacion.getListaNotas());
    }
}
