import { useEffect, useState, useTransition } from "react";
import tipodecoracaoService from "../../Service/tipodecoracaoService";
import decoracaoService from "../../Service/decoracaoService";
import { mensagemErro } from "../../Configuration/Mensagem";
import { mensagemSucesso } from "../../Configuration/Mensagem";

function validar(decoracao){
  let ret = true;
  if (!decoracao.nomeKit)
  {
    ret = false;
    mensagemErro("Preencha o campo Nome do Kit")
  }
  return ret;
}
function Decoracao(){

  //lista categorias para exibir dentro do select(PK)

    const serviceDecoracao = new decoracaoService()
    const serviceTipoDecoracao = new tipodecoracaoService()
 
    const [listaTipodeDecoracao, setListaTipodeDecoracao] = useState([])
    const [listaDecoracao, setListaDecoracao] = useState([])

    const[decoracao, setDecoracao] = useState({
        id:null,
        nomeKit:'',
        descricao:'',
        tipoDecoracao:{
            id:0,
            descricao:'',
        }
    })
    useEffect(()=>{
      serviceTipoDecoracao.listar().then((resposta)=>{
        setListaTipodeDecoracao(resposta.data)
      }).catch((error)=>{
        console.log(error.response.data)
      })
    },[])

    useEffect(() =>{
      atualizarListaDecoracao()
    },[])

    const atualizarListaDecoracao  =()=>{
      serviceDecoracao.listar().then(
      resposta=>{
        setListaDecoracao(resposta.data)
      }).catch(
        error=>{
          mensagemErro("Erro ao atualizar cadastro!" + error.response.data)
        }
      )
    }

    const excluir =(id)=>{
      if(window.confirm("Realmente deseja excluir este registro?"))
      serviceDecoracao.deletar(id).then(
        resposta=>{
          atualizarListaDecoracao()
          mensagemSucesso("Decoração excluída com sucesso!")
        }
      ).catch(
        error=>{
          mensagemErro("Erro ao excluir cadastro!" + error.response.data)
        }
      )
    }

    const visualizar =(id)=>{
      serviceDecoracao.recuperar(id).then(
        reposta=>{
          setDecoracao(reposta.data)
          window.scrollTo({top:0,behavior:'smooth'});
        }
      ).catch(
      error=>{
        mensagemErro("Erro ao recuperar cadastro!" + error.response.data)
      }
    )
}

    const salvar= ()=>{
      const ret = validar(decoracao)
      if(ret){
        serviceDecoracao.salvar(decoracao).then(
          resposta =>{
            atualizarListaDecoracao()
            mensagemSucesso('Decoração cadastrada com sucesso!Código:'
        + resposta.data.id)
          setDecoracao({
            id:null,
            nomeKit:'',
            descricao:'',
            tipoDecoracao:{
                id:'0',
                descricao:'',
            }})
          }
        ).catch(
          error =>{
            mensagemErro("Erro ao salvar." + error.response.data)
          }
        )

      }
    }
    return(
    <div>
        Cadastro
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputName">Nome do Kit</label>
      <input  id="id"  value={decoracao.nomeKit} onChange={e=>{setDecoracao({
                                      ...decoracao, nomeKit:e. //...decoracao (spread -> para salvar as todas propriedades )
                                            target.value})}} type="text" className="form-control" placeholder="Nome da decoração."/>
    </div>
    <div className="form-group col-md-6">
      <label for="inputType">Tipo de Decoração</label>
      <select className="form-control" id="tipoDecoracao"
      value={decoracao.tipoDecoracao.id}
      onChange={e=>{
        setDecoracao({
           ...decoracao,
            tipoDecoracao:{
               ...decoracao.tipoDecoracao,
                id:e.target.value
            }
        })
      }}>
        <option value='0'>Selecione um Tipo de Decoração...</option>
        {listaTipodeDecoracao.map((item)=>{
          return(
            <option key={item.id} value={item.id}>{item.descricao}</option>
          )
        })}
      </select>
      
    </div>
  <button type="button" onClick={salvar} className="btn btn-primary">Salvar</button>
  </div>

  <table class="table">
  <thead>
    <tr>
      <th scope="col">Código</th>
      <th scope="col">Nome do Kit</th>
      <th scope="col">Alterar</th>
      <th scope="col">Excluir</th>
    </tr>
  </thead>
  <tbody>
    {listaDecoracao.map((item)=>{ 
    return(
        <tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td>{item.nomeKit}</td>
        <td><button type="button" onClick={()=>{visualizar(item.id)}} className="btn btn-warning">
          Visualizar
          </button></td>
        <td><button type="button" onClick={()=>{excluir(item.id)}} className="btn btn-danger">
          Excluir
          </button></td>
        </tr>
    )
  }
  )}
   
  </tbody>
</table>

  </div>
    )  
    }
export default Decoracao;