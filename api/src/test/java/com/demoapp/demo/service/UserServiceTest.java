package com.demoapp.demo.service;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertFalse;

import org.junit.jupiter.api.Test;

class UserServiceTest {

    private final UserService service = new UserService(null);

    @Test
    void deveAceitarSenhaQueAtendeAosCriterios() {
        assertTrue(service.isPasswordValid("Senha@123"));
    }

    @Test
    void deveRejeitarSenhaSemCaractereEspecial() {
        assertFalse(service.isPasswordValid("Senha123"));
    }

    @Test
    void deveRejeitarSenhaSemLetraMaiuscula() {
        assertFalse(service.isPasswordValid("senha@123"));
    }

    @Test
    void deveAceitarEmailValido() {
        assertTrue(service.isEmailValid("teste@email.com"));
    }

    @Test
    void naoDeveAceitarEmailSemUsuarioEDominio() {
        assertFalse(service.isEmailValid("@"));
    }
}