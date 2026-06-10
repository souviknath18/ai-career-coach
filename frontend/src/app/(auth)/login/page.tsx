import { ArrowRight, Lock, Mail, Sprout } from "lucide-react";
import Link from "next/link";
import MobileScreen from "@/components/layout/MobileScreen";

export default function LoginPage() {
  return (
    <MobileScreen>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#f5f4ef_0%,#fbf9f5_50%,#eaffe3_100%)]" />

      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#466743]/5 blur-3xl" />
      <div className="absolute -bottom-28 -left-28 h-96 w-96 rounded-full bg-[#fde7d3]/10 blur-3xl" />

      <div className="mobile-scrollbar relative z-10 h-screen overflow-y-auto overflow-x-hidden px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 xl:px-6">
        <div className="flex min-h-full flex-col justify-center">
          <div className="mx-auto w-full md:max-w-[720px] xl:max-w-none">
            <div className="mb-8 text-center sm:mb-10">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-[1.75rem] bg-[#c6edbf] text-[#395937] shadow-[0_4px_24px_rgba(70,103,67,0.08)] sm:mb-6 sm:h-16 sm:w-16">
                <Sprout size={30} strokeWidth={1.8} />
              </div>

              <h1 className="mb-2 text-[28px] font-bold tracking-tight text-[#31332f] sm:text-3xl md:text-[34px] xl:text-3xl">
                Welcome Back
              </h1>

              <p className="mx-auto max-w-[320px] text-[14px] leading-6 text-[#5e605b] sm:text-[15px] md:max-w-none md:text-base xl:max-w-[320px] xl:text-[15px]">
                Continue your journey to professional serenity.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#b2b2ad]/10 bg-white p-5 shadow-[0_32px_64px_-12px_rgba(49,51,47,0.06)] sm:rounded-[3rem] sm:p-8 md:p-10 xl:p-8">
              <form className="space-y-5 sm:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 ml-1 block text-[11px] font-semibold uppercase tracking-widest text-[#5e605b] sm:text-xs"
                  >
                    Email Address
                  </label>

                  <div className="group relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-[#5e605b]/60 transition-colors group-focus-within:text-[#466743]">
                      <Mail size={20} strokeWidth={1.8} />
                    </div>

                    <input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      className="w-full rounded-full border-none bg-[#e9e8e3] py-3.5 pl-11 pr-4 text-[14px] text-[#31332f] outline-none placeholder:text-[#7a7b76]/60 transition-all focus:bg-white focus:ring-2 focus:ring-[#466743]/20 sm:text-[15px] md:py-4 md:text-base xl:py-3.5 xl:text-[15px]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 ml-1 block text-[11px] font-semibold uppercase tracking-widest text-[#5e605b] sm:text-xs"
                  >
                    Password
                  </label>

                  <div className="group relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-[#5e605b]/60 transition-colors group-focus-within:text-[#466743]">
                      <Lock size={20} strokeWidth={1.8} />
                    </div>

                    <input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="w-full rounded-full border-none bg-[#e9e8e3] py-3.5 pl-11 pr-4 text-[14px] text-[#31332f] outline-none placeholder:text-[#7a7b76]/60 transition-all focus:bg-white focus:ring-2 focus:ring-[#466743]/20 sm:text-[15px] md:py-4 md:text-base xl:py-3.5 xl:text-[15px]"
                    />
                  </div>

                  <div className="mt-2 flex justify-end">
                    <Link
                      href="/forgot-password"
                      className="text-[13px] font-medium text-[#516170] transition-colors hover:text-[#466743] sm:text-sm"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#466743] to-[#3a5b38] px-6 py-3.5 text-[15px] font-semibold text-[#eaffe3] shadow-lg shadow-[#466743]/10 transition-all active:scale-[0.98] sm:py-4 md:text-base xl:text-[15px]"
                >
                  Login
                  <ArrowRight size={18} strokeWidth={2} />
                </button>
              </form>

              <div className="relative my-6 sm:my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#b2b2ad]/20" />
                </div>

                <div className="relative flex justify-center text-[10px] uppercase tracking-widest sm:text-xs">
                  <span className="bg-white px-4 text-[#5e605b]">
                    or continue with
                  </span>
                </div>
              </div>

              <button className="flex w-full items-center justify-center gap-3 rounded-full border border-[#b2b2ad]/30 bg-white px-6 py-3.5 text-[14px] font-medium text-[#31332f] transition-all hover:bg-[#f5f4ef] sm:text-[15px] md:text-base xl:text-[15px]">
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>

                Google
              </button>
            </div>

            <p className="mt-8 text-center text-[14px] text-[#5e605b] sm:mt-10 sm:text-base">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="font-bold text-[#466743] underline-offset-4 transition-all hover:underline"
              >
                Sign up
              </Link>
            </p>

            <div className="mt-10 flex justify-center opacity-40 sm:mt-12">
              <div className="mx-1 h-1 w-10 rounded-full bg-[#466743]/20 sm:w-12" />
              <div className="mx-1 h-1 w-4 rounded-full bg-[#466743]" />
              <div className="mx-1 h-1 w-10 rounded-full bg-[#466743]/20 sm:w-12" />
            </div>
          </div>
        </div>
      </div>
    </MobileScreen>
  );
}