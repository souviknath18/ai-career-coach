import {
  Eye,
  Lock,
  LockKeyhole,
  Mail,
  Sprout,
  User,
} from "lucide-react";
import Link from "next/link";
import MobileScreen from "@/components/layout/MobileScreen";

export default function SignupPage() {
  return (
    <MobileScreen>
      <div className="absolute inset-0 bg-gradient-to-br from-[#fbf9f5] to-[#eaffe3]" />

      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#c6edbf]/25 blur-[120px]" />
      <div className="absolute -right-28 top-24 h-80 w-80 rounded-full bg-[#d4e4f6]/20 blur-[140px]" />

      <div className="mobile-scrollbar relative z-10 h-screen overflow-y-auto overflow-x-hidden px-4 py-6 sm:px-6 md:px-10 lg:px-6">
        <div className="flex min-h-full flex-col items-center justify-center">
          <div className="w-full rounded-[1.75rem] border border-[#b2b2ad]/15 bg-white/80 p-5 shadow-[0_48px_100px_rgba(49,51,47,0.04)] backdrop-blur-xl sm:rounded-[2rem] sm:p-8 md:max-w-[720px] md:p-10 lg:max-w-none lg:p-8">
            <header className="mb-7 text-center sm:mb-10">
              <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#c6edbf]/30 text-[#466743] sm:h-12 sm:w-12">
                <Sprout size={24} strokeWidth={1.8} />
              </div>

              <h1 className="text-[26px] font-bold tracking-tight text-[#31332f] sm:text-3xl md:text-[34px] lg:text-3xl">
                Create your account
              </h1>

              <p className="mt-2 text-[13px] leading-6 text-[#5e605b] sm:mt-3 sm:text-sm md:text-[15px] lg:text-sm">
                Join our community for a calmer career journey.
              </p>
            </header>

            <form className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-5">
              <InputField
                id="fullName"
                label="Full Name"
                type="text"
                placeholder="Sage Curator"
                icon={<User size={18} strokeWidth={1.8} />}
              />

              <InputField
                id="email"
                label="Email Address"
                type="email"
                placeholder="name@example.com"
                icon={<Mail size={18} strokeWidth={1.8} />}
              />

              <PasswordField
                id="password"
                label="Password"
                icon={<Lock size={18} strokeWidth={1.8} />}
                showToggle
              />

              <PasswordField
                id="confirmPassword"
                label="Confirm Password"
                icon={<LockKeyhole size={18} strokeWidth={1.8} />}
              />

              <button
                type="submit"
                className="mt-3 w-full rounded-full bg-gradient-to-br from-[#466743] to-[#3a5b38] px-6 py-3.5 text-[15px] font-semibold text-[#eaffe3] shadow-[0_12px_24px_-8px_rgba(70,103,67,0.3)] transition-all active:scale-[0.98] sm:mt-4 sm:py-4 md:text-base lg:text-[15px]"
              >
                Sign Up
              </button>
            </form>

            <div className="my-6 flex w-full items-center sm:my-8">
              <div className="h-px flex-1 bg-[#b2b2ad]/20" />
              <span className="mx-3 whitespace-nowrap text-[9px] font-bold uppercase tracking-widest text-[#5e605b]/40 sm:mx-4 sm:text-[10px]">
                OR SIGN UP WITH
              </span>
              <div className="h-px flex-1 bg-[#b2b2ad]/20" />
            </div>

            <button className="flex w-full items-center justify-center gap-3 rounded-full border border-[#b2b2ad]/15 bg-[#f5f4ef] px-5 py-3.5 text-[14px] font-semibold text-[#31332f] transition-all active:scale-[0.98] sm:px-6 md:text-[15px] lg:text-[14px]">
              <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>

            <footer className="mt-7 text-center sm:mt-8">
              <p className="text-[13px] text-[#5e605b] sm:text-sm md:text-[15px] lg:text-sm">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="ml-1 font-semibold text-[#466743] underline-offset-4 hover:underline"
                >
                  Log In
                </Link>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </MobileScreen>
  );
}

function InputField({
  id,
  label,
  type,
  placeholder,
  icon,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="ml-1 text-[11px] font-semibold uppercase tracking-wider text-[#5e605b] md:text-xs lg:text-[11px]"
      >
        {label}
      </label>

      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-[#5e605b]/60 transition-colors group-focus-within:text-[#466743]">
          {icon}
        </div>

        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          className="w-full rounded-2xl border-none bg-[#e9e8e3] py-3.5 pl-11 pr-4 text-[14px] text-[#31332f] outline-none placeholder:text-[#5e605b]/40 transition-all focus:bg-white focus:ring-2 focus:ring-[#466743]/20 sm:text-[15px] md:py-4 md:text-base lg:py-3.5 lg:text-[15px]"
        />
      </div>
    </div>
  );
}

function PasswordField({
  id,
  label,
  icon,
  showToggle = false,
}: {
  id: string;
  label: string;
  icon: React.ReactNode;
  showToggle?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="ml-1 text-[11px] font-semibold uppercase tracking-wider text-[#5e605b] md:text-xs lg:text-[11px]"
      >
        {label}
      </label>

      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-[#5e605b]/60 transition-colors group-focus-within:text-[#466743]">
          {icon}
        </div>

        <input
          id={id}
          name={id}
          type="password"
          placeholder="••••••••"
          className="w-full rounded-2xl border-none bg-[#e9e8e3] py-3.5 pl-11 pr-12 text-[14px] text-[#31332f] outline-none placeholder:text-[#5e605b]/40 transition-all focus:bg-white focus:ring-2 focus:ring-[#466743]/20 sm:text-[15px] md:py-4 md:text-base lg:py-3.5 lg:text-[15px]"
        />

        {showToggle && (
          <button
            type="button"
            className="absolute inset-y-0 right-4 flex items-center text-[#5e605b]/60 transition-colors hover:text-[#31332f]"
          >
            <Eye size={18} strokeWidth={1.8} />
          </button>
        )}
      </div>
    </div>
  );
}