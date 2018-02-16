import {http} from './config'

export default	{
	registrar:({nome,email,senha})=>{
		return http.post('usuario',{nome,email,senha});
	},
}