package br.felipesanches.casadasdecoracoes.projetoapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.felipesanches.casadasdecoracoes.projetoapi.models.Agenda;
import br.felipesanches.casadasdecoracoes.projetoapi.repository.AgendaRepository;

@RestController //transformar em controller
@RequestMapping("/agenda")
public class AgendaController {
    
     @Autowired //gerencia automaticamente
    private AgendaRepository repository;

    @PostMapping
    public Agenda postMethodName(@RequestBody Agenda Agenda) {
        return repository.save(Agenda);
    }
    
    @PutMapping
    public Agenda alterar(@RequestBody Agenda entity) {
        repository.save(entity);       
        return entity;
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable int id){
        repository.deleteById(id);
    }

    @GetMapping
    public Iterable<Agenda> selecionar() {
        return repository.findAll();
    }
    
    @GetMapping("/selecionar/{id}")
    public Agenda selecionar (@PathVariable int id){
        return repository.selecionar(id);
    }
}
