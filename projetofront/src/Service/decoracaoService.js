import ApiService from "./apiService";
    class decoracaoService extends ApiService {
        constructor(){
        super('/decoracao')
    }
    salvar(decoracao){
        console.log(JSON.stringify(decoracao))
        if(decoracao.id)
        return this.put('', decoracao)//alterar
    else
        return this.post('', decoracao)//incluir
    }

    deletar(id){
        return this.delete(`/${id}`)
    }

    listar(){
        return this.get('')
    }

    recuperar(id){
        return this.get(`/selecionar/${id}`)
    }
}
export default decoracaoService;
