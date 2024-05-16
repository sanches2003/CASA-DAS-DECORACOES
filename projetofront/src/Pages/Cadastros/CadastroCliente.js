import { useEffect, useState, useTransition } from "react";
import clienteService from "../../Service/clienteService";
import { mensagemErro } from "../../Configuration/Mensagem";
import { mensagemSucesso } from "../../Configuration/Mensagem";
import LocalidadeService from "../../Service/localidadeService";

function validar(cliente){
    
    let ret = true;
    if(!cliente.nome)
    {
        ret = false;
        mensagemErro("Preencha o campo nome")
    }
    if(!cliente.dtNascimento){
        ret = false;
        mensagemErro("Preencha o campo data de nascimento")
    }
    ////......
    return ret;
}
function Cliente(){
    //instanciando classe service.
    const serviceCliente = new clienteService()
    const serviceLocalidade = new LocalidadeService()
   
    //lista de clientes para exibir dentro do select.
    const[listaClientes, setListaClientes] = useState([])
    const[listaCidades, setListaCidades] = useState([])
    const[listaEstados, setListaEstado]= useState([])


    const[cliente, setCliente] = useState({
        id: null,
        nome:'',
        dtNascimento:'',
        uf:'',
        cidade:'',    
    })

    useEffect(() =>{
        atualizarListaClientes()
      },[])

    const atualizarListaClientes = ()=>{

        serviceCliente.listar().then(
            resposta=>{
                resposta.data.sort((a,b) => a.nome.localeCompare(b.nome));
                setListaClientes([...resposta.data])
            }
        ).catch(
            error=>{
                mensagemErro("Erro ao atualizar clientes" +
                 error.response.data)
            }
        )
    }

    //listaLocalidade
    useEffect(()=>{
       
        if(cliente.uf)
         serviceLocalidade.listarCidades(cliente.uf).then(resposta =>{
             
             resposta.data.sort((a,b) => a.nome.localeCompare(b.nome));
             setListaCidades([...resposta.data])
 
         }).catch(error=> console.log(error.response.data))
 
 
     }, [cliente.uf]) // cada alteração de cliente.uf

    const visualizar =(id)=>{
        serviceCliente.recuperar(id).then(
            resposta=>{
                setCliente(resposta.data)
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
            serviceCliente.deletar(id).then(
                resposta=>{
                    atualizarListaClientes()
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
        const ret = validar(cliente)
        if(ret){
            
            serviceCliente.salvar(cliente).then(
                
                resposta =>{
                    atualizarListaClientes()
                    mensagemSucesso('Dados salvos com sucesso! Código: '+
                     resposta.data.id )
                     setCliente({
                        id:null,
                        nome:'',
                        dtNascimento:'',
                        uf:'',
                    cidade:''
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
   

return(
    <div>
        Cadastros
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputName">Nome do Cliente</label>
      <input  id="id"  value={cliente.nome} onChange={e=>{setCliente({
                                      ...cliente, nome:e. //...cliente (spread -> para salvar as todas propriedades )
                                            target.value})}} type="text" className="form-control" placeholder="Nome do cliente."/>
    </div>
    <div className="form-group col-md-6">
      <label for="inputName">Data de Nascimento</label>
      <input  id="dtNascimento"  value={cliente.dtNascimento} onChange={e=>{setCliente({
                                      ...cliente, dtNascimento:e.target.value})}} type="date" className="form-control" placeholder="Data de Nascimento."/>
    </div>
  <button type="button" onClick={salvar} className="btn btn-primary">Salvar</button>
  </div>

  <table class="table">
  <thead>
    <tr>
      <th scope="col">Código</th>
      <th scope="col">Nome do Cliente</th>
      <th scope="col">Alterar</th>
      <th scope="col">Excluir</th>
    </tr>
  </thead>
  <tbody>
    {listaClientes.map((item)=>{ 
    return(
        <tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td>{item.nome}</td>
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
export default Cliente;