package org.bugandbass.instrumentos_app_backend.models;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.hamcrest.CoreMatchers.instanceOf;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.assertSame;

import java.util.List;


public class PianoTest {
     private Piano piano;

    @BeforeEach
    void setUp() {
        piano = Piano.getInstance();
    }

    @Test
    void testSingleton() {
        Piano piano2 = Piano.getInstance();
        assertSame(piano, piano2, "Debe ser la misma instancia");
    }
    @Test
    void testInstanciarPiano() {
        assertThat(piano, is(notNullValue()));
        assertThat(piano, is(instanceOf(Instrumento.class)));
        assertThat(piano, is(instanceOf(Piano.class)));
    }
    @Test
    void testTocarPiano() {
        List<Nota> tocarInstrumento = piano.tocarInstrumento();
        assertThat(tocarInstrumento, is(instanceOf(List.class)));
        assertThat(tocarInstrumento, is(notNullValue()));
        assertThat(tocarInstrumento.size(), is(13));
        assertThat(tocarInstrumento.get(0), is(instanceOf(Nota.class)));
        assertThat(tocarInstrumento.get(0).getTecla(), is("A"));
        assertThat(tocarInstrumento.get(0).getNombre(), is("C4"));
        assertThat(tocarInstrumento.get(1).getTecla(), is("W"));
        assertThat(tocarInstrumento.get(1).getNombre(), is("C#4"));
        assertThat(tocarInstrumento.get(2).getTecla(), is("S"));
        assertThat(tocarInstrumento.get(2).getNombre(), is("D4"));
        assertThat(tocarInstrumento.get(3).getTecla(), is("E"));
        assertThat(tocarInstrumento.get(3).getNombre(), is("D#4"));
        assertThat(tocarInstrumento.get(4).getTecla(), is("D"));
        assertThat(tocarInstrumento.get(4).getNombre(), is("E4"));
        assertThat(tocarInstrumento.get(5).getTecla(), is("F"));
        assertThat(tocarInstrumento.get(5).getNombre(), is("F4"));
        assertThat(tocarInstrumento.get(6).getTecla(), is("T"));
        assertThat(tocarInstrumento.get(6).getNombre(), is("F#4"));
        assertThat(tocarInstrumento.get(7).getTecla(), is("J"));
        assertThat(tocarInstrumento.get(7).getNombre(), is("G4"));
        assertThat(tocarInstrumento.get(8).getTecla(), is("Y"));
        assertThat(tocarInstrumento.get(8).getNombre(), is("G#4"));
        assertThat(tocarInstrumento.get(9).getTecla(), is("K"));
        assertThat(tocarInstrumento.get(9).getNombre(), is("A4"));
        assertThat(tocarInstrumento.get(10).getTecla(), is("U"));
        assertThat(tocarInstrumento.get(10).getNombre(), is("A#4"));
        assertThat(tocarInstrumento.get(11).getTecla(), is("L"));
        assertThat(tocarInstrumento.get(11).getNombre(), is("B4"));
        assertThat(tocarInstrumento.get(12).getTecla(), is("Ñ"));
        assertThat(tocarInstrumento.get(12).getNombre(), is("C5"));
    }

}
