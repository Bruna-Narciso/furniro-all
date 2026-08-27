import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export function ContactLayout() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto w-full max-w-[900px] px-6 py-[65px]">
        <div className="text-center">
          <h2 className="text-[36px] font-semibold text-black">
            Get In Touch With Us
          </h2>

          <p className="mx-auto mt-2 max-w-[700px] text-[16px] text-gray-400">
            For More Information About Our Product & Services. Please Feel Free To Drop Us
            an Email Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="mt-[55px] grid grid-cols-1 gap-16 md:grid-cols-[1fr_1.2fr]">
          <ContactInfo />

          <ContactForm />
        </div>
      </section>
    </main>
  );
}