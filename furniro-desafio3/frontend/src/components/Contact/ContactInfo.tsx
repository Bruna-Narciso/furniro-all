export function ContactInfo() {
  return (
    <div className="flex flex-col gap-[42px]">
      <div className="flex gap-5">
        <img
          src="/Contact/location.svg"
          alt=""
          className="h-[18px] w-[18px] shrink-0"
        />

        <div>
          <h3 className="font-poppins text-[24px] font-medium leading-none text-[#000000] mb-[5px]">
            Address
          </h3>

          <p className="mt-[0px] w-[212px] font-poppins text-[16px] font-normal leading-none text-[#000000]">
            236 5th SE Avenue, New York NY10000, United States
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <img
          src="/Contact/phone.svg"
          alt=""
          className="h-[17px] w-[17px] shrink-0"
        />

        <div>
          <h3 className="font-poppins text-[24px] font-medium leading-none text-[#000000] mb-[5px]">
            Phone
          </h3>

          <p className="mt-[0px] w-[212px] font-poppins text-[16px] font-normal leading-none text-[#000000]">
            Mobile:{" "}
            <a
              href="tel:+845466789"
              className="transition hover:text-[#B88E2F] hover:underline"
            >
              +(84) 546-6789
            </a>
            <br />
            Hotline:{" "}
            <a
              href="tel:+844566789"
              className="transition hover:text-[#B88E2F] hover:underline"
            >
              +(84) 456-6789
            </a>
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <img
          src="/Contact/clock.svg"
          alt=""
          className="h-[17px] w-[17px] shrink-0"
        />

        <div>
          <h3 className="font-poppins text-[24px] font-medium leading-none text-[#000000] mb-[5px]">
            Working Time
          </h3>

          <p className="mt-[0px] w-[212px] font-poppins text-[16px] font-normal leading-none text-[#000000]">
            Monday-Friday: 9:00 - 22:00
            <br />
            <br />
            Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>
      </div>
    </div>
  );
}