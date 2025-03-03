package org.bugandbass.instrumentos_app_backend.controllers;

import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

import static org.mockito.Mockito.*;

import java.io.*;
import java.util.Arrays;
import java.util.List;

import org.bugandbass.instrumentos_app_backend.Repository.java.Repository;
import org.bugandbass.instrumentos_app_backend.models.Grabacion;
import org.junit.jupiter.api.BeforeEach;


class GrabacionControllerTest {

    private GrabacionController controller;
    private Repository mockRepository;

    @BeforeEach
    void setUp() {
        mockRepository = mock(Repository.class);
        controller = new GrabacionController();
        controller.repository = mockRepository;
    }

    @Test
    void testIndex() {
        List<Grabacion> grabacionesMock = Arrays.asList(
            new Grabacion(1, "Canción 1", null),
            new Grabacion(2, "Canción 2", null)
        );
        when(mockRepository.getGrabaciones()).thenReturn(grabacionesMock);

        String json = controller.index();

        assertThat(json, containsString("\"id\":1"));
        assertThat(json, containsString("\"nombreCancion\":\"Canción 1\""));
        assertThat(json, containsString("\"id\":2"));
        assertThat(json, containsString("\"nombreCancion\":\"Canción 2\""));
    }
    @Test
    void testShow() {
        List<Grabacion> grabacionesMock = Arrays.asList(
            new Grabacion(1, "Canción 1", null),
            new Grabacion(2, "Canción 2", null)
        );
        when(mockRepository.getGrabaciones()).thenReturn(grabacionesMock);

        String json = controller.show(2);

        assertThat(json, containsString("\"id\":2"));
        assertThat(json, containsString("\"nombreCancion\":\"Canción 2\""));
    }
    @Test
    void testResponderSonido() throws IOException {
        StringWriter stringWriter = new StringWriter();
        BufferedWriter bufferedWriter = new BufferedWriter(stringWriter);

        
        controller.responderGrabacion("GET /grabaciones", bufferedWriter, null);

        bufferedWriter.flush();
        String response = stringWriter.toString();

        assertThat(response, containsString("HTTP/1.1 200 OK"));
        assertThat(response, containsString("Content-Type: application/json"));
        assertThat(response, containsString("Access-Control-Allow-Origin: http://localhost:5173"));
        assertThat(response, containsString("Access-Control-Allow-Methods: GET"));
        assertThat(response, containsString("Access-Control-Allow-Headers: Content-Type")); 
    }

    
}
