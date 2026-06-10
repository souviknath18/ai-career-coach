"use client";

import { Check } from "lucide-react";

export default function EditProfileForm() {
  return (
    <form className="space-y-7">
      <ProfileInput
        label="Full Name"
        type="text"
        placeholder="Enter your full name"
        defaultValue="Souvik Nath"
      />

      <ProfileInput
        label="Email Address"
        type="email"
        placeholder="yourname@example.com"
        defaultValue="souvik@example.com"
      />

      <ProfileInput
        label="Phone Number"
        type="tel"
        placeholder="+91 00000 00000"
        defaultValue="+91 98765 43210"
      />

      <ProfileInput
        label="Current Role"
        type="text"
        placeholder="Full Stack Developer"
        defaultValue="Full Stack AI Developer"
      />

      <ProfileInput
        label="Location"
        type="text"
        placeholder="Bangalore, India"
        defaultValue="Bangalore, India"
      />

      <div className="space-y-2 pt-2">
        <label className="ml-2 block text-[12px] font-semibold uppercase tracking-wider text-[#5e605b]">
          Professional Bio
        </label>

        <textarea
          rows={4}
          placeholder="Tell your career coach about your journey..."
          defaultValue="Full Stack Developer focused on building AI-powered products using Next.js, Django REST Framework, PostgreSQL, RAG, embeddings, and LLM-based workflows."
          className="mobile-scrollbar w-full resize-none rounded-t-[3rem] rounded-b-lg border-none bg-[#e9e8e3] p-6 text-[15px] leading-7 text-[#31332f] outline-none placeholder:text-[#b2b2ad] transition-all focus:bg-white focus:ring-2 focus:ring-[#466743]/20"
        />
      </div>

      <div className="space-y-2">
        <label className="ml-2 block text-[12px] font-semibold uppercase tracking-wider text-[#5e605b]">
          Career Goals
        </label>

        <textarea
          rows={3}
          placeholder="What kind of role are you aiming for?"
          defaultValue="I want to grow into a strong Full Stack AI Engineer role and work on production-level GenAI, RAG, and AI-native SaaS products."
          className="mobile-scrollbar w-full resize-none rounded-[2rem] border-none bg-[#e9e8e3] p-6 text-[15px] leading-7 text-[#31332f] outline-none placeholder:text-[#b2b2ad] transition-all focus:bg-white focus:ring-2 focus:ring-[#466743]/20"
        />
      </div>

      <div className="h-6" />

      <div className="flex flex-col gap-4">
        <button
          type="submit"
          className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#466743] to-[#3a5b38] text-[15px] font-bold text-[#eaffe3] shadow-md transition-all active:scale-95"
        >
          <Check size={18} strokeWidth={2} />
          Save Changes
        </button>

        <button
          type="button"
          className="h-14 w-full rounded-full border border-[#b2b2ad]/20 bg-transparent text-[15px] font-bold text-[#516170] transition-all hover:bg-[#f5f4ef] active:scale-95"
        >
          Discard Changes
        </button>
      </div>
    </form>
  );
}

function ProfileInput({
  label,
  type,
  placeholder,
  defaultValue,
}: {
  label: string;
  type: string;
  placeholder: string;
  defaultValue: string;
}) {
  return (
    <div className="space-y-2">
      <label className="ml-2 block text-[12px] font-semibold uppercase tracking-wider text-[#5e605b]">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="h-14 w-full rounded-2xl border-none bg-[#e9e8e3] px-6 text-[15px] text-[#31332f] outline-none placeholder:text-[#b2b2ad] transition-all focus:bg-white focus:ring-2 focus:ring-[#466743]/20"
      />
    </div>
  );
}