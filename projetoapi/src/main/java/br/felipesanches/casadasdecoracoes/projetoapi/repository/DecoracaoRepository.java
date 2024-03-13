package br.felipesanches.casadasdecoracoes.projetoapi.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.felipesanches.casadasdecoracoes.projetoapi.models.Decoracao;

    public interface DecoracaoRepository extends 
        CrudRepository<Decoracao,Integer>{

                       //METODO GET DE PUXAR DADOS
            @Query(value = "select * from decoracao where id=?1",
            nativeQuery = true)
            Decoracao selecionar(int id);
}
