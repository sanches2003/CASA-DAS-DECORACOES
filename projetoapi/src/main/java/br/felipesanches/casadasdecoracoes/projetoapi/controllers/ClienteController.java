package br.felipesanches.casadasdecoracoes.projetoapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.felipesanches.casadasdecoracoes.projetoapi.models.Cliente;
import br.felipesanches.casadasdecoracoes.projetoapi.repository.ClienteRepository;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController //transformar em controller
@RequestMapping("/cliente")
@CrossOrigin("*")
public class ClienteController {

    @Autowired //gerencia automaticamente
    private ClienteRepository repository;

    @PostMapping
    public ResponseEntity postMethodName(@RequestBody Cliente cliente) {
        try {
            return ResponseEntity.ok(repository.save(cliente));

        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }     
    }
    
    @PutMapping
    public Cliente alterar(@RequestBody Cliente entity) {
        repository.save(entity);       
        return entity;
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable int id){
        repository.deleteById(id);
    }

    @GetMapping
    public Iterable<Cliente> selecionar() {
        return repository.findAll();
    }
    
    @GetMapping("/selecionar/{id}")
    public Cliente selecionar (@PathVariable int id){
        return repository.selecionar(id);
    }
}
