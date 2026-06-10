import { Camera } from "lucide-react";

export default function EditProfileAvatar() {
  return (
    <section className="mb-12 flex flex-col items-center">
      <div className="relative">
        <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop"
            alt="User profile"
            className="h-full w-full object-cover"
          />
        </div>

        <button
          type="button"
          className="absolute bottom-0 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#466743] to-[#3a5b38] text-[#eaffe3] shadow-lg active:scale-95"
        >
          <Camera size={17} strokeWidth={2} />
        </button>
      </div>

      <button
        type="button"
        className="mt-4 text-[14px] font-semibold text-[#466743] transition-colors hover:text-[#3a5b38]"
      >
        Change Photo
      </button>
    </section>
  );
}