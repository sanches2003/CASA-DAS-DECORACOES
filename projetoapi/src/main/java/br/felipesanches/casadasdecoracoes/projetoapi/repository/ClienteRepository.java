package br.felipesanches.casadasdecoracoes.projetoapi.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.felipesanches.casadasdecoracoes.projetoapi.models.Cliente;


    public interface ClienteRepository extends 
        CrudRepository<Cliente,Integer>{
    
            //METODO GET DE PUXAR DADOS
            @Query(value = "select * from cliente where id=?1",
            nativeQuery = true)
            Cliente selecionar(int id);
        }
    


