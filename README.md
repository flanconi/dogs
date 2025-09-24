🐶 Dogs (Angular)

Aplicação Angular para listar e gerenciar raças de cachorro com interface em cards: ver detalhes, filtrar, criar/editar (formulário reativo em MatDialog ou HTML puro) e excluir.

✨ Funcionalidades

Grid responsivo de cards com imagem, título e subtítulos

Busca/filtragem por status/origem (select)

Criar / Editar raça via formulário reativo (com validações)

Excluir item com confirmação

Serviço HTTP centralizado e interfaces TypeScript para tipos fortes

SCSS modular com BEM e variáveis de tema claro

🧱 Stack

Angular + TypeScript

SCSS para estilos

HTML de componentes

Linguagens do repo: TypeScript, SCSS e HTML. 
GitHub

🔌 API

O app consome dados de raças/imagens da TheDogAPI.

Endpoint base: https://api.thedogapi.com/v1

Ex.: GET /breeds, GET /breeds/search?q=terrier

Autenticação: header x-api-key: <SUA_CHAVE>
Referência oficial: TheDogAPI “Working with Breeds” e Reference. 
docs.thedogapi.com
+1

🚀 Como rodar localmente
Clonar e instalar
git clone https://github.com/flanconi/dogs.git
cd dogs/dogs
npm install
npm start

🧩 Principais componentes

breeds.component: lista, filtro (select), ações Adicionar / Editar / Excluir

edit-breed-dialog: MatDialog com formulário reativo (validações: obrigatório, minLength, pattern para “10 - 12 years”)

breeds.service: chamadas HTTP (/breeds, /breeds/search), headers com x-api-key

breed.model.ts: interface(s) Breed, Image, etc.

<img width="1510" height="891" alt="image" src="https://github.com/user-attachments/assets/ec0d00fe-a154-4334-8421-e3ae823297a8" />
<img width="1667" height="892" alt="image" src="https://github.com/user-attachments/assets/77f32ae5-a5e2-447b-9b0a-99651f722f0c" />
<img width="1451" height="903" alt="image" src="https://github.com/user-attachments/assets/d84aaf91-2529-4161-8a06-b027d773e331" />
<img width="1602" height="886" alt="image" src="https://github.com/user-attachments/assets/0f0e04ba-5f40-4676-9869-d92e1a54ae1f" />
<img width="1633" height="896" alt="image" src="https://github.com/user-attachments/assets/54fc77e6-c1e8-4c3f-802a-d5630fd99ed7" />

