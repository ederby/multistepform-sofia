import Button from "./Button";

export default function Welcome({ onStart }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/holistic-bkg.webp')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative flex flex-col items-center text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl mb-8">Hälsoprofil</h1>
        <Button size="big" onClick={onStart}>
          Kom igång
        </Button>
      </div>
    </div>
  );
}
