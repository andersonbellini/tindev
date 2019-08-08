![Logo of the project](https://github.com/andersonbellini/tindev/blob/master/frontend/src/assets/logo.svg)

> Projeto tipo tinder, para match entre desenvolvedores de software

## Instalação / inicialização

Uma introdução simples de como instalar as dependências e iniciar o projeto

```shell
yarn install 
yarn start
```

## Desenvolvimento

O desenvolvimento inincial é para testes e aprendizado usando a stack NodeJs, reactJs e React Native. A aplicação é baseada no aplicativo TINDER(R), porém voltado para reconhecimento entre desenvolvedores sobre os seus conhecimentos e projetos:

```shell
git clone https://github.com/andersonbellini/tindev.git
cd tindev/
yarn install
```

### Arquitetura

O sistema está dividido em 3 partes:
* Backend: Onde esté contida toda a parte de Model e Controller da aplicação e iteração com 
  a base de dados (API).
* FrontEnd: Toda a parte web, que será usada através de um browser, em qualquer dispositivo ( Mobile ou Desktop).
* Mobile: O aplicativo para instalação em dispositivos móveis (Android ou IOS), na mesma aplicação, além da integração com as API criada com o NodeJs (backend).

### Implantação / Publicação

Para publicação, usar os comandos para gerar a aplicação em modo de produção.

```shell
yarn build --prod
```

Após a geração, apenas a pasta criada, deve ser publicada em produção.

## Licença

O código desse projeto está sob a licença da MIT, conforme o link
[MIT](https://github.com/andersonbellini/tindev/blob/master/LICENSE)



### Criado por
Anderson V. Bellini

[github](https://github.com/andersonbellini)

[linkedin](https://linkedin.com/in/abellini)