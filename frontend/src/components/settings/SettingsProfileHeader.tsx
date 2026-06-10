import { Edit } from "lucide-react";

export default function SettingsProfileHeader() {
  return (
    <section className="flex items-center gap-5">
      <div className="relative">
        <div className="h-20 w-20 overflow-hidden rounded-full bg-[#e9e8e3]">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>

        <button className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#466743] text-[#eaffe3]">
          <Edit size={13} strokeWidth={2} />
        </button>
      </div>

      <div>
        <h2 className="text-[24px] font-bold text-[#31332f]">
          Souvik Nath
        </h2>

        <p className="text-[14px] font-medium text-[#5e605b]">
          Full Stack AI Developer
        </p>
      </div>
    </section>
  );
}