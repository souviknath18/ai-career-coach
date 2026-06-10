"use client";

import { Eye, LockOpen } from "lucide-react";

export default function ChangePasswordForm() {
  return (
    <div className="rounded-[2rem] bg-[#f5f4ef] p-5 sm:p-8">
      <form className="space-y-7">
        <PasswordInput label="Current Password" />

        <div className="space-y-4">
          <PasswordInput label="New Password" />

          <div className="px-2 sm:px-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5e605b]">
                Password Strength
              </span>

              <span className="text-[11px] font-bold text-[#466743]">
                Strong
              </span>
            </div>

            <div className="flex h-1.5 w-full gap-1 overflow-hidden rounded-full bg-[#e3e3dc]">
              <div className="h-full w-1/4 rounded-full bg-[#466743]" />
              <div className="h-full w-1/4 rounded-full bg-[#466743]" />
              <div className="h-full w-1/4 rounded-full bg-[#466743]" />
              <div className="h-full w-1/4 rounded-full bg-[#466743]/20" />
            </div>
          </div>
        </div>

        <PasswordInput label="Confirm Password" showEye={false} />

        <div className="pt-2">
          <button
            type="submit"
            className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#466743] to-[#3a5b38] text-[15px] font-bold text-[#eaffe3] shadow-sm transition-all active:scale-[0.98]"
          >
            Update Password
            <LockOpen size={19} strokeWidth={1.9} />
          </button>
        </div>
      </form>
    </div>
  );
}

function PasswordInput({
  label,
  showEye = true,
}: {
  label: string;
  showEye?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="ml-1 block text-[13px] font-medium text-[#5e605b]">
        {label}
      </label>

      <div className="relative">
        <input
          type="password"
          placeholder="••••••••"
          className="h-14 w-full rounded-full border-none bg-[#e9e8e3] px-6 pr-14 text-[15px] text-[#31332f] outline-none placeholder:text-[#b2b2ad] transition-all focus:bg-white focus:ring-2 focus:ring-[#466743]/20"
        />

        {showEye && (
          <button
            type="button"
            className="absolute right-5 top-1/2 flex -translate-y-1/2 items-center justify-center text-[#5e605b] transition-colors hover:text-[#466743]"
          >
            <Eye size={19} strokeWidth={1.8} />
          </button>
        )}
      </div>
    </div>
  );
}