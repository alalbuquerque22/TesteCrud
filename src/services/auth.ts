///autenticacao ........

export default function signIn(){
    return new Promise(resolve =>{

        setTimeout(()=>{
            resolve({
                token:"fasdfgdsgnmkfdahgjsva",
                user:{
                    name:"Teste",
                    email:'alal@gmail.com.br',
                },
            });
        },2000)
    });
}