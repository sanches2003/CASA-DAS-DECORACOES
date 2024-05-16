import ApiService from "./apiService";
    class clienteService extends ApiService {
        constructor(){
        super('/cliente')
    }

    salvar(cliente){
        if(cliente.id)
            return this.put('', cliente)//alterar
        else
            return this.post('', cliente)//incluir
        
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
export default clienteService;