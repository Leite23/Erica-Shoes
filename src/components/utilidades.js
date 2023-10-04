
export const catalogo = [
  {
  id: "1",
  nome: 'Air Jordan 1 Mid',
  marca: 'Nike',
  preco: 1100,
  imagem: 'product-1.jpg',
  feminino: false,
},
{
  id: "2",
  nome: 'Air Jordan 1 Low SE Craft ',
  marca: 'Nike',
  preco: 1199,
  imagem: 'product-4.jpg',
  feminino: true,
},
{
  id: "3",
  nome: 'Air Jordan 1 Low Black Element ',
  marca: 'Nike',
  preco: 1299,
  imagem: 'product-8.jpg',
  feminino: false,
},
{
  id: "4",
  nome: 'Air Jordan Legacy 312 Low',
  marca: 'Nike',
  preco: 1399,
  imagem: 'product-7.jpg',
  feminino: false,
},
{
  id: "5",
  nome: 'Air Jordan 1 Low Purple',
  marca: 'Nike',
  preco: 1099,
  imagem: 'product-6.jpg',
  feminino: true,
},
{
  id: "6",
  nome: 'Air Jordan Retro Low',
  marca: 'Nike',
  preco: 1199,
  imagem: 'product-5.jpg',
  feminino: false,
},
{
  id: "7",
  nome: 'Air Jordan Low SE',
  marca: 'Nike',
  preco: 1199,
  imagem: 'product-3.jpg',
  feminino: true,
},
{
  id: "8",
  nome: 'Air Jordan 4 Thunder',
  marca: 'Nike',
  preco: 1699,
  imagem: 'product-2.jpg',
  feminino: false,
},
];

export function salvarLocalStorage(chave, informacao) {
localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
localStorage.removeItem(chave);
}

export function desenharProdutoCarrinhoSimples(
idProduto,
idContainerHtml,
quantidadeProduto
) {
const produto = catalogo.find((p) => p.id === idProduto);
const containerProdutosCarrinho = document.getElementById(idContainerHtml);

const elementoArticle = document.createElement("article"); //<article></article>
const articleClasses = [
  "flex",
  "bg-stone-200",
  "rounded-lg",
  "p-1",
  "relative",
  "mb-2",
  "w-96",
];

for (const articleClass of articleClasses) {
  elementoArticle.classList.add(articleClass);
}
//<article class="flex bg-slate-100 rounded-lg p-1 relative"></article>

const cartaoProdutoCarrinho = `
  <img
    src="./assets/img/${produto.imagem}"
    alt="Carrinho: ${produto.nome}"
    class="h-24 rounded-lg"
  />
  <div class="p-2 flex flex-col justify-between">
    <p class="text-slate-900 text-sm">
      ${produto.nome}
    </p>
    <p class="text-green-700 text-lg">$${produto.preco}</p>
  </div>
  <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
      <p id='quantidade-${produto.id}' class='ml-2'>${quantidadeProduto}</p>
  </div>`;
//<article class="flex bg-slate-100 rounded-lg p-1 relative">codigo do cartao do produto</article>

elementoArticle.innerHTML = cartaoProdutoCarrinho;
containerProdutosCarrinho.appendChild(elementoArticle);
}

