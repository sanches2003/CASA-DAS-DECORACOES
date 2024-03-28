package br.felipesanches.casadasdecoracoes.projetoapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.felipesanches.casadasdecoracoes.projetoapi.models.Cliente;
import br.felipesanches.casadasdecoracoes.projetoapi.models.Usuario;
import br.felipesanches.casadasdecoracoes.projetoapi.repository.UsuarioRepository;

@RestController
@RequestMapping("/usuario")
@CrossOrigin("*")

public class UsuarioController {
    
    @Autowired
    private UsuarioRepository repository;

      @PostMapping
    public Usuario inserir(@RequestBody Usuario entity) {
        repository.save(entity);       
        return entity;
    }

    @PutMapping
    public Usuario alterar(@RequestBody Usuario entity) {
        repository.save(entity);       
        return entity;
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable int id){
        repository.deleteById(id);
    }

    @GetMapping
    public Iterable<Usuario> selecionar() {
        return repository.findAll();
    }
    
    @GetMapping("/selecionar/{id}")
    public Usuario selecionar (@PathVariable int id){
        return repository.selecionar(id);
    }

    //import org.springframework.http.ResponseEntity;
    @GetMapping("/autenticar/{login}/{senha}")
    public ResponseEntity autenticar(@PathVariable String login,
                                         @PathVariable String senha){
        try {
            Usuario usuario = repository.autenticar(login, senha);
            if(usuario!=null)
                return ResponseEntity.ok(usuario);
            else
            return ResponseEntity.
                badRequest().body("Dados Incorretos!");
    }catch (Exception e){
        return ResponseEntity.
        badRequest().body(e.getMessage());
    
    }
    }
}
