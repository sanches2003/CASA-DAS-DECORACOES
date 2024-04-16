package br.felipesanches.casadasdecoracoes.projetoapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.felipesanches.casadasdecoracoes.projetoapi.models.Decoracao;
import br.felipesanches.casadasdecoracoes.projetoapi.repository.DecoracaoRepository;
import org.springframework.web.bind.annotation.RequestParam;



@RestController //transformar em controller
@RequestMapping("/decoracao")
@CrossOrigin("*")
public class DecoracaoController {
     @Autowired
    private DecoracaoRepository repository;

     @PostMapping
    public Decoracao inserir(@RequestBody Decoracao entity) {
        repository.save(entity);       
        return entity;
    }

    @PutMapping
    public Decoracao alterar(@RequestBody Decoracao entity) {
        repository.save(entity);       
        return entity;
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable int id){
        repository.deleteById(id);
    }

    @GetMapping
    public Iterable<Decoracao> selecionar() {
        return repository.findAll();
    }
    
    @GetMapping("/selecionar/{id}")
    public Decoracao selecionar (@PathVariable int id){
        return repository.selecionar(id);
    }

    @GetMapping("/teste")
    public Decoracao getMethodName() {
        return new Decoracao();
    }
    
}
