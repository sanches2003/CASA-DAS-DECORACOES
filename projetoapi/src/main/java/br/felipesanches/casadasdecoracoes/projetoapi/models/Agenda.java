package br.felipesanches.casadasdecoracoes.projetoapi.models;

import java.sql.Date;
import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

    @Getter
    @Setter
    @Entity
    @Table(name="agenda")
public class Agenda {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private int id;
    private float valor;
    private Date data;
    private Boolean pago;

    @ManyToOne //muitos tipos para 1 decoracao
    @JoinColumn(name="iddecoracao")
    private Decoracao decoracao; //uma decoracao so pode ter 1 tipo. 

    @ManyToOne //muitos tipos para 1 decoracao
    @JoinColumn(name="idcliente")
    private Cliente cliente; //uma decoracao so pode ter 1 disponibilidade. 

    @ManyToOne //muitos tipos para 1 decoracao
    @JoinColumn(name="idusuario")
    private Usuario usuario; //uma decoracao so pode ter 1 disponibilidade. 
    
    
    
}
