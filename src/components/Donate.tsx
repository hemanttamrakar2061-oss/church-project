
import { useState } from "react";

const bankDetails = {
  bankName: "YOUR BANK NAME",
  accountName: "Everest Gospel Church",
  accountNumber: "YOUR ACCOUNT NUMBER",
  branch: "YOUR BRANCH",
};

const Donate = () => {
  const [copied, setCopied] = useState(false);

  const copyAccountNumber = async () => {
    if (bankDetails.accountNumber === "YOUR ACCOUNT NUMBER") {
      return;
    }

    try {
      await navigator.clipboard.writeText(bankDetails.accountNumber);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#F4FAFF] px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#DCEFFD] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#12345A]">
            Giving & Donations
          </span>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#12345A] sm:text-4xl lg:text-5xl">
            Give With a Grateful Heart
          </h1>

          <p className="mt-5 text-base leading-7 text-slate-600">
            Your generosity helps support the ministry, outreach,
            and mission of Everest Gospel Church.
          </p>

          <p className="mt-4 text-sm italic text-sky-800">
            "God loves a cheerful giver." — 2 Corinthians 9:7
          </p>
        </div>

        {/* Donation methods */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">

          {/* Bank transfer */}
          <div className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm">

            <div className="bg-[#12345A] px-6 py-6 sm:px-8">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-2xl text-white">
                🏦
              </div>

              <h2 className="text-2xl font-bold text-white">
                Bank Transfer
              </h2>

              <p className="mt-2 text-sm leading-6 text-sky-100">
                Transfer your donation directly to the church
                bank account.
              </p>
            </div>

            <div className="space-y-5 p-6 sm:p-8">

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Bank Name
                </p>
                <p className="mt-2 break-words text-base font-semibold text-[#12345A]">
                  {bankDetails.bankName}
                </p>
              </div>

              <div className="border-t border-sky-100 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Account Name
                </p>
                <p className="mt-2 break-words text-base font-semibold text-[#12345A]">
                  {bankDetails.accountName}
                </p>
              </div>

              <div className="border-t border-sky-100 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Account Number
                </p>

                <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                  <p className="break-all text-lg font-bold text-[#12345A]">
                    {bankDetails.accountNumber}
                  </p>

                  <button
                    type="button"
                    onClick={copyAccountNumber}
                    disabled={
                      bankDetails.accountNumber === "YOUR ACCOUNT NUMBER"
                    }
                    className="rounded-lg bg-[#DCEFFD] px-4 py-2 text-sm font-semibold text-[#12345A] transition hover:bg-sky-200 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {copied ? "Copied ✓" : "Copy"}
                  </button>
                </div>

                <span role="status" className="sr-only">
                  {copied ? "Account number copied" : ""}
                </span>
              </div>

              <div className="border-t border-sky-100 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Branch
                </p>
                <p className="mt-2 text-base font-semibold text-[#12345A]">
                  {bankDetails.branch}
                </p>
              </div>
            </div>
          </div>

          {/* QR code */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm">

            <div className="bg-[#DCEFFD] px-6 py-6 sm:px-8">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl">
                📱
              </div>

              <h2 className="text-2xl font-bold text-[#12345A]">
                Scan to Donate
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Scan the church's official payment QR code using
                your supported banking or payment application.
              </p>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center p-6 text-center sm:p-8">

              {/* Replace placeholder with verified QR image */}
              <div className="flex h-60 w-60 items-center justify-center rounded-2xl border-2 border-dashed border-sky-200 bg-[#F4FAFF] p-5 sm:h-64 sm:w-64">
                <div>
                  <div className="mb-3 text-5xl">▦</div>
                  <p className="text-sm font-semibold text-[#12345A]">
                    Official Church QR Code
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    QR image will be added here
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm font-medium text-[#12345A]">
                Everest Gospel Church
              </p>

              <p className="mt-2 max-w-xs text-xs leading-5 text-slate-500">
                Always verify the payment recipient before
                confirming your donation.
              </p>
            </div>
          </div>
        </div>

        {/* Thank-you message */}
        <div className="mt-10 rounded-2xl border border-sky-100 bg-white px-6 py-8 text-center sm:px-10">
          <div className="mb-4 text-3xl">♡</div>

          <h3 className="text-xl font-bold text-[#12345A]">
            Thank You for Your Generosity
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Every contribution is appreciated. Your support
            helps us continue sharing the Gospel, serving
            our community, and growing together in faith.
          </p>

          <p className="mt-4 text-sm font-semibold text-sky-800">
            May God bless you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Donate;
