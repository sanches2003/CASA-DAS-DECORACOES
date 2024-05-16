import axios from "axios";

const httpClient = axios.create();

class LocalidadeService {

    constructor(){
        
    }
    
    listarEstados(){
        return this.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    }

    listarCidades(idEstado){
        return this.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idEstado}/municipios`)
    }

    get(url){
        const requestUrl = `${url}`
        return httpClient.get(requestUrl)
    }

}
export default LocalidadeService;