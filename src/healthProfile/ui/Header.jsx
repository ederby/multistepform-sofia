export default function Header({ title }) {
  return (
    <header className="w-full flex justify-center items-center mb-2 sm:mb-6">
      <h2 className="text-2xl font-serif">{title}</h2>
    </header>
  );
}
