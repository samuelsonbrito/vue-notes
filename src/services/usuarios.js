import {http} from './config'

export default	{
	registrar:({nome,email,senha})=>{
		return http.post('usuario',{nome,email,senha});
	},
	logar:	({	email,	senha	})	=>	{
		return http.post('usuario/login', {email, senha});
	},

}