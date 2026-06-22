export default function Privacy() {
  return (
    <div className="bg-secondary-bg min-h-screen py-28 px-6">
      <div className="max-w-[720px] mx-auto">
        <h1 className="font-sans font-bold text-[40px] text-text-primary tracking-[-0.02em] leading-[1.1] mb-8">
          Privacy Policy
        </h1>
        <p className="font-sans text-[14px] text-text-secondary mb-8">
          Last updated: January 2025
        </p>
        
        <div className="space-y-8">
          <section>
            <h2 className="font-sans font-semibold text-[20px] text-text-primary mb-3">Information We Collect</h2>
            <p className="font-sans text-[16px] text-text-secondary leading-[1.8]">
              We collect information you provide directly to us when you fill out our contact form, book a call, or communicate with us. This may include your name, email address, company name, and project details.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-semibold text-[20px] text-text-primary mb-3">How We Use Your Information</h2>
            <p className="font-sans text-[16px] text-text-secondary leading-[1.8]">
              We use the information you provide to respond to your inquiries, schedule calls, and provide services you request. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-semibold text-[20px] text-text-primary mb-3">Data Security</h2>
            <p className="font-sans text-[16px] text-text-secondary leading-[1.8]">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is completely secure.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-semibold text-[20px] text-text-primary mb-3">Contact Us</h2>
            <p className="font-sans text-[16px] text-text-secondary leading-[1.8]">
              If you have questions about this Privacy Policy, please contact us at hello@zyvone.site
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
