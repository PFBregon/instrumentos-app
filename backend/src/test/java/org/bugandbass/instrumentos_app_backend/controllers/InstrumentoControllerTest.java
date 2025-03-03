package org.bugandbass.instrumentos_app_backend.controllers;

import org.junit.jupiter.api.Test;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.instanceOf;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.not;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.emptyOrNullString;
import static org.hamcrest.Matchers.notNullValue;
import static org.junit.jupiter.api.Assertions.assertFalse;

public class InstrumentoControllerTest {
     @Test
    void testObtenerSonido() {
        InstrumentoController instrumentoController = new InstrumentoController();
        String sonido = instrumentoController.obtenerSonido();
        assertThat(sonido, is(notNullValue()));
        assertFalse(sonido.isBlank());
        assertThat(sonido, is(instanceOf(String.class)));
    }
    @Test
    void testResponderSonidoRestAssured() {
        
        RestAssured
            .given()
                .baseUri("http://localhost:8080")
                
            .when()
                .get("/piano/notas")
            .then()
                .assertThat().statusCode(200)
                .contentType(ContentType.JSON)
                .header("Access-Control-Allow-Origin", equalTo("http://localhost:5173"))
                .body(not(emptyOrNullString()))
                .body("[0].idNota", equalTo(1));
    }
   
}
