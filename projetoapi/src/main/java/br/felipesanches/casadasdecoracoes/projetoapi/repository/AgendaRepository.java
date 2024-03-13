package br.felipesanches.casadasdecoracoes.projetoapi.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.felipesanches.casadasdecoracoes.projetoapi.models.Agenda;

    public interface AgendaRepository extends 
    CrudRepository<Agenda,Integer>{
 //METODO GET DE PUXAR DADOS
            @Query(value = "select * from agenda where id=?1",
            nativeQuery = true)
            Agenda selecionar(int id);
}
