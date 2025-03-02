package org.bugandbass.instrumentos_app_backend.models;

import java.util.List;


public class Piano extends Instrumento{
    private static Piano instance;
    private List<Nota> notas;
    private int idInstrumento = 1;

    private Piano(String nombre, String tipo) {
        super(nombre, tipo);
        this.notas= getNotas();

    }

    public static Piano getInstance() {
        if (instance == null) {
            instance = new Piano("Piano", "Cuerda");
        }
        return instance;
    }
    @Override
    public List<Nota> tocarInstrumento(){
        return this.notas;
    }
    public List<Nota> getNotas() {
        return List.of(
            new Nota(idInstrumento++, "A", "C4"), new Nota(idInstrumento++, "W", "C#4"),
            new Nota(idInstrumento++, "S", "D4"), new Nota(idInstrumento++, "E", "D#4"),
            new Nota(idInstrumento++, "D", "E4"), new Nota(idInstrumento++, "F", "F4"),
            new Nota(idInstrumento++, "T", "F#4"), new Nota(idInstrumento++, "J", "G4"),
            new Nota(idInstrumento++, "Y", "G#4"), new Nota(idInstrumento++, "K", "A4"),
            new Nota(idInstrumento++, "U", "A#4"), new Nota(idInstrumento++, "L", "B4"),
            new Nota(idInstrumento++, "Ñ", "C5")
        );
    }
}
