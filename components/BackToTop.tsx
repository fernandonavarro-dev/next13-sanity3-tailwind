'use client';

export default function BackToTop() {
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
      className="justify-self-center rounded-lg px-2 py-1 text-xs uppercase tracking-wider text-gray-400 hover:bg-[#ff25e2]/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ff8af0]"
    >
      Top ↑
    </button>
  );
}
