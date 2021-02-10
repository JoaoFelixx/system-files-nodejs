# system-files-nodejs || Sistema de arquivos com nodeJS

Para fazer um sistema de arquivos com node, você primeiramente precisa baixar algumas dependências, elas são:

* `express`
* `multer`
* `ejs` 
* `sharp`

...Eu sei que em nenhum momento eu usei o sharp, mas eu tinha a intenção de usar. na próxima atualização deste sistema de arquivos (imagens) 
poderei estar mostrando como usar o sharp, mas no momento vamos focar no projeto.

Qual técnologias preciso saber para entender o projeto ? 

Node & HTML.

Não usei css desta vez... mas estarei usando no próximo projeto.

Resumo do projeto: 

Nesse sistema de arquivos, o usuário mandará para nosso servidor (node) um arquivo, para filtra-lo de forma inteligente, 
baixamos a dependencia `multer` para fazermos a validação do arquivo. se ele for uma extensão que não seja do tipo ['.png', '.jpeg', '.jpg'] 
o Node não fará upload. (mas, João e se eu quiser receber no meu computador gifs e videos no meu sistema ? 
caso esse seja seu caso, sigá o caminho **auth/auth.js**)  na parte de filtragem coloque as estensão `image/mp4` e `image/gif` 
assim seu sisetma também aceitará outras extensões ! mais duvidas ? abra uma issue ou vá para a documentação do **multer**
