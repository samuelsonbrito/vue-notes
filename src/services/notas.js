import {http} from './config'

export default	{
	criar:({conteudo, usuario_id})=>{
		return http.post('notas',{conteudo, usuario_id});
	}
}