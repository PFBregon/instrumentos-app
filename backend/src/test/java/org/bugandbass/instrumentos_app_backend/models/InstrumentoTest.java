package org.bugandbass.instrumentos_app_backend.models;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.hamcrest.CoreMatchers.instanceOf;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.hamcrest.MatcherAssert.assertThat;

import java.util.List;

public class InstrumentoTest {
    Instrumento instrumento;
    @BeforeEach
    void setUp() {
        instrumento = new Instrumento("Piano","Cuerda") {
            @Override
            public List<Nota> tocarInstrumento() {
                return List.of(new Nota(1, "C", "Do"), new Nota(2, "D", "Re"), new Nota(3, "Mi", "E"));
            }
        };
        
    }
    @Test
    void testInstanciaInstrumento() {
        assertThat(instrumento, is(notNullValue()));
        assertThat(instrumento, is(instanceOf(Instrumento.class)));
    }
    @Test
    void testGettersIntrumento() {
        assertThat(instrumento.getNombre(), is("Piano"));
        assertThat(instrumento.getId(), is(instanceOf(Integer.class)));
        assertThat(instrumento.getTipo(), is("Cuerda"));
    }

    @Test
    void testTocarInstrumento() {
        List<Nota> tocarInstrumento = instrumento.tocarInstrumento();
        assertThat(tocarInstrumento, is(instanceOf(List.class)));
        
    }

}
