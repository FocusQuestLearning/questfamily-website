import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | The Quest Family',
  description: 'Terms of Use for The Quest Family and SummerQuest apps.',
}

export default function TermsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-14" aria-label="Terms of Use">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-5xl mb-4" aria-hidden="true">📜</div>
        <h1 className="font-display text-4xl text-forest font-bold mb-2">Terms of Use</h1>
        <p className="text-bark text-sm italic">The Quest Family · Last updated: June 2025</p>
      </div>

      <div className="nature-card bg-amber/5 border-amber/30 mb-8">
        <p className="text-bark text-base font-medium">
          By downloading or using SummerQuest or any app by The Quest Family, you agree to these Terms of Use. 
          Please read them carefully. If you do not agree, please do not use our apps.
        </p>
      </div>

      <div className="space-y-8 text-bark leading-relaxed">
        {[
          {
            id: '1',
            title: '1. Acceptance of Terms',
            content: `By accessing or using SummerQuest or any The Quest Family app, website, or service 
            ("Services"), you agree to be bound by these Terms of Use. These terms apply to all users, 
            including parents, guardians, and children using the app under adult supervision.`,
          },
          {
            id: '2',
            title: '2. Use of Our Services',
            content: null,
            list: [
              'You must be 13 years of age or older to create an account, or have parental/guardian consent.',
              'SummerQuest is intended for personal, non-commercial family use.',
              'You may not use our services to harm, harass, or mislead others.',
              'You are responsible for keeping your account credentials secure.',
            ],
          },
          {
            id: '3',
            title: '3. Content & Intellectual Property',
            content: `All content within SummerQuest — including characters, illustrations, photography, 
            quest text, badge designs, and guide artwork — is owned by or licensed to The Quest Family 
            and is protected by copyright law. You may not copy, reproduce, distribute, or create 
            derivative works from our content without written permission.`,
          },
          {
            id: '4',
            title: '4. User-Generated Content',
            content: `Journal entries, discovery notes, and family photographs you add within the app belong 
            to you. You grant The Quest Family a limited licence to store and display this content solely 
            for the purpose of providing the Services. We will never publicly share your family's 
            private journal content without explicit consent.`,
          },
          {
            id: '5',
            title: '5. Subscriptions & Purchases',
            content: `SummerQuest offers a free tier and an optional Explorer Membership subscription. 
            Subscription terms, pricing, and cancellation are managed through the relevant app store 
            (Apple App Store or Google Play). All purchases are subject to the applicable app store's 
            terms and refund policy. The Quest Family does not process payments directly.`,
          },
          {
            id: '6',
            title: '6. Disclaimer of Warranties',
            content: `SummerQuest is provided "as is" without warranty of any kind. We do our best to 
            keep the app available and accurate, but we cannot guarantee uninterrupted access or 
            error-free content. Nature content (species descriptions, ranges, etc.) is provided 
            for educational and inspirational purposes — always verify critical information with 
            local experts or authorities.`,
          },
          {
            id: '7',
            title: '7. Outdoor Safety',
            content: `SummerQuest encourages outdoor exploration. Families are responsible for their own 
            safety when engaging in outdoor activities. Always supervise children in nature, follow 
            local park rules, and use appropriate gear. The Quest Family is not responsible for any 
            injury or harm that occurs during outdoor activities.`,
          },
          {
            id: '8',
            title: '8. Limitation of Liability',
            content: `To the maximum extent permitted by law, The Quest Family shall not be liable for 
            any indirect, incidental, or consequential damages arising from your use of our Services.`,
          },
          {
            id: '9',
            title: '9. Changes to These Terms',
            content: `We may update these Terms from time to time. Continued use of our Services after 
            changes are posted constitutes your acceptance of the updated Terms. We will notify you of 
            significant changes through the app.`,
          },
          {
            id: '10',
            title: '10. Governing Law',
            content: `These Terms are governed by the laws of the Province of Ontario and the federal 
            laws of Canada applicable therein, without regard to conflict of law principles.`,
          },
          {
            id: '11',
            title: '11. Contact Us',
            content: `Questions about these Terms? Contact us:`,
            contact: true,
          },
        ].map((section) => (
          <section key={section.id} aria-labelledby={`term-${section.id}`}>
            <h2
              id={`term-${section.id}`}
              className="font-display text-xl text-forest font-bold mb-3 border-b border-amber/20 pb-2"
            >
              {section.title}
            </h2>
            {section.content && (
              <p className="text-bark text-base">{section.content}</p>
            )}
            {section.list && (
              <ul className="space-y-2 mt-3">
                {section.list.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-bark">
                    <span className="text-meadow mt-0.5 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {section.contact && (
              <div className="nature-card mt-3 text-sm">
                <p className="font-bold text-forest">The Quest Family</p>
                <p>Email:{' '}
                  <a href="mailto:support.questfamily@gmail.com" className="text-amber hover:underline">
                    support.questfamily@gmail.com
                  </a>
                </p>
                <p className="text-bark/60 mt-2">Canada 🍁</p>
              </div>
            )}
          </section>
        ))}
      </div>
    </article>
  )
}
