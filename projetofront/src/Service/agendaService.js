import ApiService from './apiService';
class agendaService extends ApiService {
    constructor() {
        super('/agenda')
    }
    listar(){
        return this.get('')
    }
}

export default agendaService;