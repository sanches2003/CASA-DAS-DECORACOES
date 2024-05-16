package br.felipesanches.casadasdecoracoes.projetoapi.models;

import java.sql.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

    @Getter
    @Setter
    @Entity
    @Table(name="cliente")
public class Cliente {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private int id;
    private String nome;
    private String uf;
    private String cidade;

    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT-3")
    private Date dtNascimento;

    @JsonIgnore
     @OneToMany(mappedBy = "cliente") // 1 tipo para muitos
    private List<Agenda> agendas; //1 tipo pode ir para varias decoracoes.

}
