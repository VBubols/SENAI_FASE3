import "./App.css";

function App() {
  const produtos = [
    { id: 1, nome: "Teclado Mecânico Redragon Kumara", categoria: "Informática", preco: 189.90 },
    { id: 2, nome: "Mouse Logitech G203", categoria: "Informática", preco: 129.90 },
    { id: 3, nome: "Monitor LG 24 Polegadas", categoria: "Informática", preco: 799.90 },
    { id: 4, nome: "SSD Kingston 480GB", categoria: "Informática", preco: 249.90 },
    { id: 5, nome: "Notebook Acer Aspire 5", categoria: "Informática", preco: 3499.90 },

    { id: 6, nome: "Cadeira Gamer", categoria: "Móveis", preco: 899.90 },
    { id: 7, nome: "Mesa de Escritório", categoria: "Móveis", preco: 450.00 },

    { id: 8, nome: "Tênis Nike Revolution", categoria: "Calçados", preco: 299.90 },
    { id: 9, nome: "Jaqueta Jeans", categoria: "Roupas", preco: 199.90 },

    { id: 10, nome: "Smart TV Samsung 55\"", categoria: "Eletrônicos", preco: 2799.90 },
    { id: 11, nome: "Fone Bluetooth JBL", categoria: "Eletrônicos", preco: 349.90 },

    { id: 12, nome: "Cafeteira Elétrica", categoria: "Eletrodomésticos", preco: 219.90 },
    { id: 13, nome: "Liquidificador Mondial", categoria: "Eletrodomésticos", preco: 159.90 },

    { id: 14, nome: "Bicicleta Aro 29", categoria: "Esportes", preco: 1299.90 },
    { id: 15, nome: "Bola de Futebol Nike", categoria: "Esportes", preco: 119.90 },
  ];
    
  const nomes = produtos.map((produto) => {
    return produto.nome;
  });

  const informatica = produtos.filter((produto) => {
    return produto.categoria == 'Informática';
  });

  const produtoEncontrado = produtos.find((produto) => {
    return produto.id === 3;
  });
  
  const somaPrecos = produtos.reduce((total, produto) => {
    return total + produto.preco;
  }, 0);
  
  const produtosAcima500 = produtos
    .filter((produto) => {
      return produto.preco >= 500;
    })
    .map((produto) => {
      return produto.nome;
    });

  return (
    <div className="container">
      <h1>Exemplos com Map, Filter, Find e Reduce</h1>

      <section className="card">
        <h2>Lista original de produtos</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Preço</th>
            </tr>
          </thead>

          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.categoria}</td>
                <td>{produto.preco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="card">
        <h2>1. Map - Lista apenas com nomes</h2>
        <ul>
          {nomes.map((nome, index) => (
            <li key={index}>{nome}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>2. Filter - Produtos de informática</h2>
        <ul>
          {informatica.map((produto) => (
            <li key={produto.id}>
              {produto.nome} - R${produto.preco} - {produto.categoria}  
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>4. Find - produto com ID 3</h2>
        {produtoEncontrado ? (
          <p>
            Encontrado: {produtoEncontrado.nome} {produtoEncontrado.sobrenome} R${produtoEncontrado.preco}
          </p>
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </section>

      <section className="card">
        <h2>6. Reduce - Soma e média das precos</h2>
        <p>Soma das preços: R${somaPrecos.toFixed(2)}</p>
      </section>

      <section className="card">
        <h2>7. Encadeamento - Filter + Map</h2>
        <p>Nomes dos produtos acima de R$500:</p>
        <ul>
          {produtosAcima500.map((nome, index) => (
            <li key={index}>{nome}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;