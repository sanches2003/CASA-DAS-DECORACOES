
import { mensagemErro } from "../../Configuration/Mensagem";
import { mensagemSucesso } from "../../Configuration/Mensagem";
import tipodecoracaoService from "../../Service/tipodecoracaoService";
import { useEffect, useState, useTransition } from "react";

function validar(tipoDecoracao){
    let ret = true;
    if (!tipoDecoracao.descricao)
    {
      ret = false;
      mensagemErro("Preencha o tipo de decoração.")
    }
    return ret;
  }
function TipoDecoracao(){

    const serviceTipoDecoracao = new tipodecoracaoService()


    const[listaTipodeDecoracao, setListaTipodeDecoracao] = useState([])


    const[tipoDecoracao, setTipodeDecoracao] = useState({
        id: null,
        descricao:'',
        
    })

    const atualizarListaTipoDecoracao = ()=>{

        serviceTipoDecoracao.listar().then(
            resposta=>{
                resposta.data.sort((a,b) => a.descricao.localeCompare(b.descricao));
                setListaTipodeDecoracao([...resposta.data])
            }
        ).catch(
            error=>{
                mensagemErro("Erro ao atualizar os tipos de decoração" +
                 error.response.data)
            }
        )
    }

    useEffect(() =>{
        atualizarListaTipoDecoracao()
      },[])


      const visualizar =(id)=>{
        serviceTipoDecoracao.recuperar(id).then(
            resposta=>{
                setTipodeDecoracao(resposta.data)
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        ).catch(
            error=>{
                mensagemErro(error.response.data)
            }
        )
    }

    const excluir = (id)=>{
        if(window.confirm('Confirma a exclusão?'))
        {
            serviceTipoDecoracao.deletar(id).then(
                resposta=>{
                    atualizarListaTipoDecoracao()
                    mensagemSucesso("Cliente excluído com sucesso!")
                }
            ).catch(
            error=>{
                mensagemErro("Erro ao excluir. " + error.response.data)
                }
            )
        }
    }

    const salvar= ()=>{
        const ret = validar(tipoDecoracao)
        if(ret){
            
            serviceTipoDecoracao.salvar(tipoDecoracao).then(
                
                resposta =>{
                    atualizarListaTipoDecoracao()
                    mensagemSucesso('Dados salvos com sucesso! Código: '+
                     resposta.data.id )
                     setTipodeDecoracao({
                        id:null,
                        descricao:'',
                     })
                }

            ).catch(
                error => {
                    mensagemErro("Erro ao salvar. " + 
                    error.response.data)
                }
            )
        }

    }
       



    return(<div>

<div>
        Cadastros
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputName">Tipo de Decoração</label>
      <input  id="id"  value={tipoDecoracao.descricao} onChange={e=>{setTipodeDecoracao({
                                      ...tipoDecoracao, descricao:e. //...cliente (spread -> para salvar as todas propriedades )
                                            target.value})}} type="text" className="form-control" placeholder="Tipo de Decoração."/>
    </div>
  <button type="button" onClick={salvar} className="btn btn-primary">Salvar</button>
  </div>

  <table class="table">
  <thead>
    <tr>
      <th scope="col">Código</th>
      <th scope="col">Tipo de Decoração</th>
      <th scope="col">Alterar</th>
      <th scope="col">Excluir</th>
    </tr>
  </thead>
  <tbody>
    {listaTipodeDecoracao.map((item)=>{ 
    return(
        <tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td>{item.descricao}</td>
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
    </div>)
}
export default TipoDecoracao;