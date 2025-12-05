export default function Header() {
  return (
    <header className="text-center py-20 relative overflow-hidden fade-in shadow-kawaii">
     
      {/* Imagen de fondo */}
      <img
        src="/PortafolioEmanuel/matematicas.jpg"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Contenido */}
      <div className="relative z-10">
        <img
          src="/PortafolioEmanuel/Perfil.jpg"
          className="w-40 h-40 rounded-full mx-auto border-4 border-white shadow-softpink"
        />

        <h1 className="text-5xl font-bold mt-4 tracking-wide drop-shadow" style={{ color: "#405a7cff" }}>
          Emanuel287
        </h1>

        <p className="text-lg mt-2 font-semibold" style={{ color: "#415775ff" }}>
          Estudiante de Matemática Pura - UCR
        </p>
      </div>
    </header>
  );
}