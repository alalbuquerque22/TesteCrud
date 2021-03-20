


<h3 align="center">

Esse é um projeto  desenvolvido  utilizando as tecnologias ***TypeScript, NodeJs e React Native***.

</h3>


## **:rocket: OBJETIVO**

O projeto tem como finalidade **criar e estabelecer uma conexão** entre **uma API restFul ** . Podendo assim realizar solicitacoes HTTP atraves de uma aplicacao web ou mobile.



## **:computer: TECNOLOGIAS**




#### **Server** (NodeJS + TypeScript])

  - **Express**
  - **CORS**
  - **KnexJS**
  - **SQLite3**
  - **ts-node**
  - **Migrations**
 

  \* Veja o arquivo <kbd>[package.json](./sources/server/package.json)</kbd>

#### **Mobile** (React Native + typescript)

  - **Expo**
  - **Expo Google Fonts**
  - **React Navigation**
  - **Axios**


#### **Utilitários**


- Editor: **Visual Studio Code** &rarr; 
- Teste de API: **Insomnia**
- Fontes: **Ubuntu**, **Roboto**


## **:wine_glass: COMO UTILIZAR**

### Configurações Iniciais

Primeiro, você precisa ter o <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> instalado na sua máquina. 

Se você estiver utilizando o **Linux**, você pode optar por instalar o **Node** através do gerênciador de versões <kbd>[asdf]</kbd> para facilitar o processo de mudança da versão do **Node**, quando for necessário.

Você pode optar também por utilizar o **yarn** no lugar do **npm**. Você pode instalar clicando nesse <kbd>[link][yarn]</kbd>, ou através do <kbd>[asdf]</kbd>.

Após ter o **Node** instalado, instale as dependências do **React e React Native (Expo)** de forma global, utilizando os comandos:

```sh
# React:
$ npm install create-react-app -g

# Expo (React Native):
$ npm install -g expo-cli 
```


Instale as dependências contidas nos arquivos `package.json` que se encontram na raíz do repositório (para o gerenciamento de commits), no diretório do **server** e no diretório do **mobile**. Para instalar as dependências, basta abrir o terminal no diretório e digitar o comando:

```sh
$ npm install

# ou
$ yarn
```

Exemplos:
```sh
# Instalando as dependências do commitlint:
$ cd ./Teste
$ npm install

# Instalando as dependências do server:
$ cd ./Teste/server
$ npm install


# Instalando as dependências do mobile:
$ cd ./Teste/mobile
$ npm install
```


### Utilizando o Server
- Para que o projeto funcione é essencial que execute os comandos


```sh
# Abrindo o terminal no diretório do servidor:
$ cd ./Teste/server

# Executando a aplicação em modo de desenvolvimento:
$ npm run dev

# Instanciando o banco de dados:
$ npm run knex:migrate

# Povoando o banco de dados (seeds):
$ npm run knex:seed
```

> Veja a parte de **scripts {}** do arquivo <kbd>[package.json](./sources/server/package.json)</kbd> para saber quais scripts estão disponíveis.

>
### Utilizando o Mobile

Instale o aplicativo <kbd>[Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en)</kbd> no seu smartphone.

```sh
# Abrindo o terminal no diretório do mobile:
$ cd ./Teste/mobile

# Executando o mobile no modo de desenvolvimento:
$ npm run start
```

Agora, abra o aplicativo do expo e no modo **LAN** faça o scan do QRCode.

> Se tiver algum problema para executar o aplicativo nesse modo, tente desabilitar o firewall da sua máquina.

Se tiver algum problema com as fontes, utilize o comando:
```sh
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto
```

**\* Lembre de inserir no arquivo `.env` o IP exato que foi gerado pelo seu mobile após utilizar o comando `npm run start`.**



</div>

## **:books: REFERÊNCIAS**

- [React + TypeScript Cheat Sheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)
- [Blog Rocketseat](https://blog.rocketseat.com.br/)
- [ReactJS](https://reactjs.org/docs/getting-started.html) | [ReactJS pt-BR](https://pt-br.reactjs.org/docs/getting-started.html)
- [TypeScript](https://www.typescriptlang.org/docs/home.html)
- [React Native](https://reactnative.dev/docs/getting-started)
- [Expo](https://expo.io/learn)
- [Knex](http://knexjs.org/)
- [Express](https://expressjs.com/pt-br/)
- [Node](https://nodejs.org/en/)
- [Celebrate](https://github.com/arb/celebrate)
- [Joi](https://hapi.dev/module/joi/)
