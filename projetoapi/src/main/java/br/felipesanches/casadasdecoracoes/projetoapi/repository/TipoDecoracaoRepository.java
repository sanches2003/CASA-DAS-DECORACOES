package br.felipesanches.casadasdecoracoes.projetoapi.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.felipesanches.casadasdecoracoes.projetoapi.models.TipoDecoracao;
   
    public interface TipoDecoracaoRepository extends 
        CrudRepository<TipoDecoracao,Integer>{
            
            //METODO GET DE PUXAR DADOS
            @Query(value = "select * from tipo_decoracao where id=?1",
            nativeQuery = true)
            TipoDecoracao selecionar(int id);
        }

    
        

