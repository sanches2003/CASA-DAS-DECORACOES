package br.felipesanches.casadasdecoracoes.projetoapi.models;

import java.sql.Date;
import java.util.List;

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
    @Table(name="tipoDecoracao")
public class TipoDecoracao {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private int id;
    private String descricao;;

    @JsonIgnore
    @OneToMany(mappedBy = "tipoDecoracao") // 1 tipo para muitos
    private List<Decoracao> decoracoes; //1 tipo pode ir para varias decoracoes.
}

