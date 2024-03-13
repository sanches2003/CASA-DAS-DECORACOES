package br.felipesanches.casadasdecoracoes.projetoapi.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class Pessoa {

    @GetMapping("/")
    public String get() {
        return "Olá mundo!";
    }
    
}
