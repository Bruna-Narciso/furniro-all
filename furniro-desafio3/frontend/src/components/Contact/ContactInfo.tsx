export function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      {/* Address */}
      <div className="flex gap-5">
        <img
          src="/Contact/location.svg"
          alt=""
          className="h-[18px] w-[18px] shrink-0"
        />

        <div>
          <h3 className="text-[14px] font-semibold text-black">
            Address
          </h3>

          <p className="mt-1 max-w-[160px] text-[10px] leading-[14px] text-black">
            236 5th SE Avenue, New
            <br />
            York NY10000, United
            <br />
            States
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex gap-5">
        <img
          src="/Contact/phone.svg"
          alt=""
          className="h-[17px] w-[17px] shrink-0"
        />

        <div>
          <h3 className="text-[14px] font-semibold text-black">
            Phone
          </h3>

          <p className="mt-1 text-[10px] leading-[14px] text-black">
            Mobile:{" "}
            <a
              href="tel:+845466789"
              className="transition hover:text-[#B88E2F] hover:underline"
            >
              +84 546-6789
            </a>
            <br />
            Hotline:{" "}
            <a
              href="tel:+844566789"
              className="transition hover:text-[#B88E2F] hover:underline"
            >
              +84 456-6789
            </a>
          </p>
        </div>
      </div>

      {/* Working Time */}
      <div className="flex gap-5">
        <img
          src="/Contact/clock.svg"
          alt=""
          className="h-[17px] w-[17px] shrink-0"
        />

        <div>
          <h3 className="text-[14px] font-semibold text-black">
            Working Time
          </h3>

          <p className="mt-1 text-[10px] leading-[14px] text-black">
            Monday-Friday: 9:00 -
            <br />
            22:00
            <br />
            Saturday-Sunday: 9:00 -
            <br />
            21:00
          </p>
        </div>
      </div>
    </div>
  );
}