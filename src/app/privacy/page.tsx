import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | The Quest Family',
  description: 'Privacy Policy for The Quest Family and SummerQuest apps.',
}

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-14" aria-label="Privacy Policy">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-5xl mb-4" aria-hidden="true">🔒</div>
        <h1 className="font-display text-4xl text-forest font-bold mb-2">Privacy Policy</h1>
        <p className="text-bark text-sm italic">The Quest Family · Last updated: June 2026</p>
      </div>

      <div className="prose prose-stone max-w-none space-y-8 text-bark leading-relaxed">

        <section aria-labelledby="intro">
          <div className="nature-card bg-amber/5 border-amber/30 mb-8">
            <p className="text-bark font-medium text-base">
              The Quest Family is a small, family-run studio. We take your trust seriously. 
              This policy explains what information SummerQuest and our apps collect, how we use it, 
              and how we protect your family's privacy.
            </p>
          </div>
        </section>

        {[
          {
            id: '1',
            title: '1. Who We Are',
            content: `The Quest Family operates SummerQuest and related apps. We are based in Canada. 
            You can reach us at any time at support.questfamily@gmail.com.`,
          },
          {
            id: '2',
            title: '2. Information We Collect',
            content: null,
            list: [
              '<strong>Account information:</strong> Optional email address if you create a family account.',
              '<strong>App activity:</strong> Quests completed, discoveries made, badges earned, journal entries created. Journal entries remain private to your family.',
              '<strong>Device information:</strong> Basic device type and operating system version for app compatibility.',
              '<strong>Camera access:</strong> Entirely optional. Used only if you choose to photograph a discovery. Photos are stored locally on your device and are not transmitted to our servers.',
              '<strong>We do not collect:</strong> Location data, precise GPS coordinates, real names of children, or any data we do not need.',
            ],
          },
          {
            id: '3',
            title: '3. How We Use Your Information',
            content: null,
            list: [
              'To provide and improve SummerQuest and future Quest Family apps.',
              'To save your progress, journal, badges, and discoveries.',
              'To respond to support requests.',
              'We do not use your information for advertising.',
              'We do not sell your information to any third party.',
            ],
          },
          {
            id: '4',
            title: '4. Children\'s Privacy',
            content: `SummerQuest is designed for use by families with children. We comply with PIPEDA (Canada's 
            Personal Information Protection and Electronic Documents Act) and applicable children's privacy 
            standards. We do not knowingly collect personal information from children under 13 without 
            verifiable parental consent. Journal entries and family discovery records are private to your 
            account and are never made public.`,
          },
          {
            id: '5',
            title: '5. Data Storage & Security',
            content: `Your data is stored securely using industry-standard encryption. We use reputable 
            cloud infrastructure providers. We retain your data only as long as your account is active 
            or as needed to provide services.`,
          },
          {
            id: '6',
            title: '6. Your Rights',
            content: null,
            list: [
              'Access the personal information we hold about you.',
              'Request correction of inaccurate information.',
              'Request deletion of your account and all associated data.',
              'Withdraw consent at any time.',
            ],
            suffix: 'To exercise any of these rights, contact us at support.questfamily@gmail.com.',
          },
          {
            id: '7',
            title: '7. Third-Party Services',
            content: `SummerQuest may use a small number of trusted third-party services (such as app 
            analytics or cloud storage). Any third-party service we use is subject to its own privacy 
            policy and is selected based on alignment with our privacy-first values.`,
          },
          {
            id: '8',
            title: '8. Changes to This Policy',
            content: `We may update this Privacy Policy from time to time. We will notify users of 
            significant changes through the app or by email if you have provided one. The date at 
            the top of this page reflects the most recent update.`,
          },
          {
            id: '9',
            title: '9. Contact Us',
            content: `If you have any questions about this Privacy Policy or how we handle your information, 
            please contact us at:`,
            contact: true,
          },
        ].map((section) => (
          <section key={section.id} aria-labelledby={`section-${section.id}`}>
            <h2
              id={`section-${section.id}`}
              className="font-display text-xl text-forest font-bold mb-3 mt-8 border-b border-amber/20 pb-2"
            >
              {section.title}
            </h2>
            {section.content && (
              <p className="text-bark text-base leading-relaxed">{section.content}</p>
            )}
            {section.list && (
              <ul className="space-y-2 mt-3">
                {section.list.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm text-bark"
                    dangerouslySetInnerHTML={{ __html: `<span class="text-meadow mt-0.5">•</span> <span>${item}</span>` }}
                  />
                ))}
              </ul>
            )}
            {section.suffix && (
              <p className="text-bark text-sm mt-3 italic">{section.suffix}</p>
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
