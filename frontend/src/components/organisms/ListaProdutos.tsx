import CardComImagemETitulo from '../molecules/CardComImagemETitulo';
import Button from '../components/Button';
import { useState } from 'react';

type Produto = {
  id: number;
  titulo: string;
  imagemUrl: string;
};

type Props = {
  produtos: Produto[];
};

export default function ListaProdutos({ produtos }: Props) {
  const [pagina, setPagina] = useState(1);
  const itensPorPagina = 6;

  const inicio = (pagina - 1) * itensPorPagina;
  const paginaAtual = produtos.slice(inicio, inicio + itensPorPagina);
  const totalPaginas = Math.ceil(produtos.length / itensPorPagina);

  return (
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {paginaAtual.map(produto => (
          <CardComImagemETitulo
            key={produto.id}
            titulo={produto.titulo}
            imagemUrl={produto.imagemUrl}
          />
        ))}
      </div>
      <div className="flex justify-center gap-2">
        <Button disabled={pagina === 1} onClick={() => setPagina(pagina - 1)}>
          Anterior
        </Button>
        <span>Página {pagina} de {totalPaginas}</span>
        <Button
          disabled={pagina === totalPaginas}
          onClick={() => setPagina(pagina + 1)}
        >
          Próxima
        </Button>
      </div>
    </div>
  );
}