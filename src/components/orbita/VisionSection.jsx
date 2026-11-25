export default function VisionSection() {
  return (
    <section className="py-40 bg-orbita-gray-light">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold text-orbita-gray uppercase tracking-widest mb-12">Vision</p>
        <blockquote className="font-inter text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-orbita-black mb-12">
          "Technology should give{' '}
          <span className="gradient-text-blue">time back</span>
          {' '}to people."
        </blockquote>
        <p className="text-orbita-gray text-lg leading-relaxed font-light max-w-2xl mx-auto">
          We believe the most critical operations in the world deserve technology that works as hard as the people running them. Órbita exists to remove friction, automate complexity, and give operational leaders the clarity they need to lead — not manage spreadsheets.
        </p>
      </div>
    </section>
  );
}
