package org.bugandbass.instrumentos_app_backend.models;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.CoreMatchers.*;

public class NotaTest {

    private Nota nota1;
    private Nota nota2;
    
    @BeforeEach
    void setUp() {
        nota1 = new Nota(1, "C", "Do");
        nota2 = new Nota(2, "D", "Re");
    }

    @Test
    void testInstanciaNota() {
        assertThat(nota1, is(notNullValue()));
        assertThat(nota2, is(notNullValue()));
    }

    @Test
    void testGetNombre() {
        assertThat(nota1.getNombre(), is("Do"));
        assertThat(nota2.getNombre(), is("Re"));
    }

    @Test
    void testGetTecla() {
        assertThat(nota1.getTecla(), is("C"));
        assertThat(nota2.getTecla(), is("D"));
    }

    @Test
    void testGetIdNota() {
        assertThat(nota1.getIdNota(), is(instanceOf(Integer.class)));
        assertThat(nota2.getIdNota(), is(instanceOf(Integer.class)));
}
}