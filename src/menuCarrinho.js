import { catalogo, salvarLocalStorage, lerLocalStorage } from "./utilidades";

const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};

function abrirCarrinho() {
  document.getElementById("carrinho").classList.add("right-[0px]");
  document.getElementById("carrinho").classList.remove("right-[-360px]");
}
// const button = document.querySelector("button-fechar");
// const sidebar = document.querySelector("sidebar");

// button.addEventListener("click", () => {
//     if(sidebar.classList.contains("active")) {
//         sidebar.classList.remove("active");
//     } else {
//         sidebar.classList.add("active");
//     }
// });


function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[0px]");
  document.getElementById("carrinho").classList.add("right-[-360px]");
}

function irParaCheckout() {
  if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
    return;
  }
  window.location.href = "./checkout.html";
}

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
  const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");
  const botaoIrParaCheckout = document.getElementById("finalizar-compra");

  botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
  botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
  botaoIrParaCheckout.addEventListener("click", irParaCheckout);
}

function removerDoCarrinho(idProduto) {
  delete idsProdutoCarrinhoComQuantidade[idProduto];
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  renderizarProdutosCarrinho();
}

function incrementarQuantidadeProduto(idProduto) {
  idsProdutoCarrinhoComQuantidade[idProduto]++;
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  atualizarInformacaoQuantidade(idProduto);
}

function decrementarQuantidadeProduto(idProduto) {
  if (idsProdutoCarrinhoComQuantidade[idProduto] === 1) {
    removerDoCarrinho(idProduto);
    return;
  }
  idsProdutoCarrinhoComQuantidade[idProduto]--;
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  atualizarInformacaoQuantidade(idProduto);
}

function atualizarInformacaoQuantidade(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText =
    idsProdutoCarrinhoComQuantidade[idProduto];
}

function desenharProdutoNoCarrinho(idProduto) {
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");

  const elementoArticle = document.createElement("article"); //<article></article>
  const articleClasses = [
    "flex",
    "bg-slate-100",
    "rounded-lg",
    "p-1",
    "relative",
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }
  //<article class="flex bg-slate-100 rounded-lg p-1 relative"></article>

  const cartaoProdutoCarrinho = `<button id="remover-item-${
    produto.id
  }" class="absolute top-0 right-2">
  <i class="fa-solid fa-circle-xmark fa-beat" style="color: #ff0f0f;"></i>
  </button>
  <img src="./assets/img/${produto.imagem}" alt="" class="h-24 rounded-lg">
  <div class="p-2 flex flex-col justify-between">
  <p class="text-slate-900 text-sm">${produto.nome}</p>
  <P class="text-slate-400 text-xs">Tamanho: 39</P>
  <p class="text-green-700 text-lg font-semibold">$${produto.preco}</p>
  </div>
  <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
  <button id='decrementar-produto-${produto.id}'>-</button>
  <p id='quantidade-${produto.id}' class='ml-2'>${idsProdutoCarrinhoComQuantidade[produto.id]
  }</p>
  <button class='ml-2' id='incrementar-produto-${produto.id}'>+</button>
  </div>`;
  //<article class="flex bg-slate-100 rounded-lg p-1 relative">codigo do cartao do produto</article>

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);

  document
    .getElementById(`decrementar-produto-${produto.id}`)
    .addEventListener("click", () => decrementarQuantidadeProduto(produto.id));

  document
    .getElementById(`incrementar-produto-${produto.id}`)
    .addEventListener("click", () => incrementarQuantidadeProduto(produto.id));

  document
    .getElementById(`remover-item-${produto.id}`)
    .addEventListener("click", () => removerDoCarrinho(produto.id));
}

export function renderizarProdutosCarrinho() {
  const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");
  containerProdutosCarrinho.innerHTML = "";

  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoNoCarrinho(idProduto);
  }
}

export function adicionarAoCarrinho(idProduto) {
  if (idProduto in idsProdutoCarrinhoComQuantidade) {
    incrementarQuantidadeProduto(idProduto);
    return;
  }
  idsProdutoCarrinhoComQuantidade[idProduto] = 1;
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  desenharProdutoNoCarrinho(idProduto);
  atualizarPrecoCarrinho();
}

export function atualizarPrecoCarrinho() {
  const precoCarrinho = document.getElementById("preco-total");
  let precoTotalCarrinho = 0;
  for (const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade) {
    precoTotalCarrinho +=
      catalogo.find((p) => p.id === idProdutoNoCarrinho).preco *
      idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];
  }
  precoCarrinho.innerText = `Total: $${precoTotalCarrinho}`;
}
