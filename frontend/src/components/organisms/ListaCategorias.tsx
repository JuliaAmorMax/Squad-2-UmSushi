import CardComImagemETitulo from '../molecules/CardComImagemETitulo';

type Categoria = {
  id: number;
  titulo: string;
  imagemUrl: string;
};

type Props = {
  categorias: Categoria[];
};

export default function ListaCategorias({ categorias }: Props) {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {categorias.map(categoria => (
        <CardComImagemETitulo
          key={categoria.id}
          titulo={categoria.titulo}
          imagemUrl={categoria.imagemUrl}
        />
      ))}
    </section>
  );
}