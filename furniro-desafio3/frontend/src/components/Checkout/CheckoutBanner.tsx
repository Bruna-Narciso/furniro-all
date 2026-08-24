export default function CheckoutBanner() {
  return (
    <section className="relative h-[180px] w-full overflow-hidden">
      {/* Imagem de fundo */}
      <img
        src="/Checkout/imageLogo.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/45" />

      {/* Conteúdo */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        {/* Logo/ícone */}
        <div className="mb-1 text-[22px]">
          <img src="/Logo/Logo.svg" alt="" />
        </div>

        <h1 className="text-[32px] font-medium text-black">
          Checkout
        </h1>

        <div className="mt-1 flex items-center gap-2 text-[12px]">
          <span className="font-medium text-black">Home</span>

          <span className="text-gray-500">›</span>

          <span className="text-gray-500">Checkout</span>
        </div>
      </div>
    </section>
  );
}