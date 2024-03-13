package br.felipesanches.casadasdecoracoes.projetoapi.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;


import br.felipesanches.casadasdecoracoes.projetoapi.models.Usuario;

public interface UsuarioRepository extends 
    CrudRepository<Usuario,Integer>{
          //METODO GET DE PUXAR DADOS
            @Query(value = "select * from usuario where id=?1",
            nativeQuery = true)
            Usuario selecionar(int id);
}
