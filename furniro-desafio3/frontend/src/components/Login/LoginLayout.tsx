import LoginFormInput from "./LoginFormInput";

export default function LoginLayout() {
  return (
    <main className="flex min-h-screen lg:h-screen lg:overflow-hidden">
      <div className="hidden w-1/2 lg:block">
        <img
          src="/SignUp/imageLogo.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex w-full items-center justify-center lg:w-1/2">
        <div className="w-full max-w-[480px] px-8">
          <img
            src="/SignUp/logo.svg"
            alt="VSG"
            className="mx-auto mb-6 h-auto w-[160px]"
          />

          <LoginFormInput />
        </div>
      </div>
    </main>
  );
}