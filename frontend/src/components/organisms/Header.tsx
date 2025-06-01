import Input from '../components/Input';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md">
      <img src="/logo.png" alt="Logo do restaurante" className="h-10" />
      <nav className="flex gap-6">
        <a href="/" className="hover:underline">Home</a>
        <a href="/cardapio" className="hover:underline">Cardápio</a>
        <a href="/busca" className="hover:underline">Busca</a>
      </nav>
      <div className="w-48">
        <Input placeholder="Buscar..." />
      </div>
    </header>
  );
}