package org.bugandbass.instrumentos_app_backend.models;

import java.util.List;

public abstract class Instrumento {
    private static int contadorInstrumento = 0;
    private final int idInstrumento;
    private String nombre;
    private String tipo;

    public Instrumento(String nombre, String tipo) {
        this.nombre = nombre;
        this.idInstrumento = contadorInstrumento++;
        this.tipo = tipo;
    }

    public String getNombre() {
        return this.nombre;
    }

    public int getId() {
        return this.idInstrumento;
    }

    public String getTipo() {        
        return this.tipo;
    }

    public abstract List<Nota> tocarInstrumento();
}
