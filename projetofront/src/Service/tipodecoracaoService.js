import ApiService from './apiService';
class tipodecoracaoService extends ApiService {
    constructor() {
        super('/tipodecoracao')
    }
    salvar(tipoDecoracao){
        if(tipoDecoracao.id)
            return this.put('', tipoDecoracao)//alterar
        else
            return this.post('', tipoDecoracao)//incluir
        
    }

    deletar(id){
        return this.delete(`/${id}`)
    }
    recuperar(id){
        return this.get(`/selecionar/${id}`)
    }
    listar(){
        return this.get('')
    }
}

export default tipodecoracaoService;