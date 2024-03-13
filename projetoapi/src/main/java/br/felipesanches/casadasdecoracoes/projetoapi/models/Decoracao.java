package br.felipesanches.casadasdecoracoes.projetoapi.models;

import java.sql.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

    @Getter
    @Setter
    @Entity
    @Table(name="decoracao")

public class Decoracao {
     @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private int id;
    private String nomeKit;
    private String descricao;

    @ManyToOne //muitos tipos para 1 decoracao
    @JoinColumn(name="idtipoDecoracao")
    private TipoDecoracao tipoDecoracao; //uma decoracao so pode ter 1 tipo. 

    @JsonIgnore
    @OneToMany(mappedBy = "decoracao") // 1 tipo para muitos
    private List<Agenda> agendas; //1 tipo pode ir para varias decoracoes.
}
