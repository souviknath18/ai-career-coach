import { Edit } from "lucide-react";

export default function ProfileHeaderCard() {
  return (
    <section className="mb-10 flex flex-col items-center text-center">
      <div className="relative mb-6">
        <div className="h-32 w-32 overflow-hidden rounded-full shadow-[0_-4px_48px_rgba(49,51,47,0.04)] ring-4 ring-[#efeee9]">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop"
            alt="User profile"
            className="h-full w-full object-cover"
          />
        </div>

        <button className="absolute bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#466743] text-white shadow-lg transition-all active:scale-95">
          <Edit size={16} strokeWidth={1.9} />
        </button>
      </div>

      <h2 className="mb-1 text-[30px] font-bold tracking-tight text-[#31332f]">
        Souvik Nath
      </h2>

      <p className="text-[15px] font-medium text-[#5e605b]">
        souvik@example.com
      </p>
    </section>
  );
}