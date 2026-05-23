export default function FormShell({ children }) {
  return (
    <>
      <section className="bg-white p-6 md:p-8 text-black rounded-2xl shadow w-full max-w-3xl mt-5">
        {children}
      </section>
    </>
  );
}
