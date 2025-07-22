import Aurora from "./Aurora";


export function AuroraBackground({ children }) {
  return (
    <>
      {/* Background Particles */}
      <div className="absolute top-0 left-0 w-full h-screen z-[-10] bg-black	">
            <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
                />
      </div>

      {/* Foreground Content */}
      <div className="flex justify-center  w-full h-screen bg-white-950">
        {children}
      </div>
    </>
  );
}
