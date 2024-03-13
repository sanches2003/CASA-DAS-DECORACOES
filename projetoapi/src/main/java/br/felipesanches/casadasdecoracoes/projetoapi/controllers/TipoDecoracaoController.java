package br.felipesanches.casadasdecoracoes.projetoapi.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.felipesanches.casadasdecoracoes.projetoapi.models.TipoDecoracao;
import br.felipesanches.casadasdecoracoes.projetoapi.repository.TipoDecoracaoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;




@RestController
@RequestMapping("/tipoDecoracao")
public class TipoDecoracaoController {
    
    @Autowired
    private TipoDecoracaoRepository repository;

    @PostMapping
    public TipoDecoracao inserir(@RequestBody TipoDecoracao entity) {
        repository.save(entity);       
        return entity;
    }

    @PutMapping
    public TipoDecoracao alterar(@RequestBody TipoDecoracao entity) {
        repository.save(entity);       
        return entity;
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable int id){
        repository.deleteById(id);
    }

    @GetMapping
    public Iterable<TipoDecoracao> selecionar() {
        return repository.findAll();
    }
    
    @GetMapping("/selecionar/{id}")
    public TipoDecoracao selecionar (@PathVariable int id){
        return repository.selecionar(id);
    }
    
    
}
