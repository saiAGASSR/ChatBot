import Particles from './Particles';

export function ParticlesBackground({ children }) {
  return (
    <>
      {/* Background Particles */}
      <div className="absolute top-0 left-0 w-full h-screen z-[-10] bg-black	">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Foreground Content */}
      <div className="flex justify-center  w-full h-screen bg-white-950">
        {children}
      </div>
    </>
  );
}
