import type { FormData } from '../../types/FormData'

interface Props {
  data: FormData;
  onChange: (fields: Partial<FormData>) => void;
}

export default function StepConsents({ data, onChange }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-rjds-dark">Agreements & Consents</h2>
        <p className="text-gray-500 mt-1">Please review and accept the following agreements</p>
      </div>

      {/* Enrollment Agreement */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-rjds-dark mb-4">Enrollment Agreement</h3>
        <div className="max-h-64 overflow-y-auto border border-gray-200 rounded-lg p-4 bg-white text-sm text-gray-700 space-y-3 mb-4">
          <p><strong>I. Enrollment Policy</strong></p>
          <p>
            I, the undersigned, am the parent(s) or guardian(s) of the child/children named above
            and hereby enroll(s) the Student(s) for the 2026-2027 school year at Richmond Jewish
            Day School (RJDS). I understand that the Non-refundable Registration deposit of $500
            per student ($300 per student for early-bird registration) is required to be submitted
            with this Agreement.
          </p>
          <p><strong>II. Spirit of RJDS - Rules and Policies</strong></p>
          <p>
            RJDS is an independent school and a private Jewish institution. We foster a warm,
            stimulating environment in which students thrive in small class settings where the mind,
            body and spirit are nurtured. I agree to support this positive environment and accept
            the Rules and Policies of RJDS for me and my child/children.
          </p>
          <p><strong>III. Payment of Tuition</strong></p>
          <p>
            I agree that I am jointly and severally responsible for all tuition payments and that
            any failure to pay tuition when due constitutes default of this Agreement. All tuition
            is due as per the payment schedule selected. Interest of 1.5% per month (18% per year)
            will be added to accounts that are more than 30 days overdue.
          </p>
          <p><strong>IV. Withdrawal Policy and Withdrawal Schedule</strong></p>
          <p>
            I understand that my obligation to pay tuition shall continue regardless of whether my
            child/children complete(s) the school year. Withdrawal Schedule:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>March 1 to March 31, 2026: 25% of Assessed Tuition Due</li>
            <li>April 1 to June 30, 2026: 50% of Assessed Tuition Due</li>
            <li>After July 1, 2026: 100% of Assessed Tuition Due</li>
          </ul>
          <p><strong>V. Personal Information Collection</strong></p>
          <p>
            I understand and agree that RJDS will collect, use, and disclose personal information
            for purposes including education delivery, volunteer management, billing, communication,
            and fundraising.
          </p>
        </div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={data.enrollmentAgreementAccepted}
            onChange={e => onChange({ enrollmentAgreementAccepted: e.target.checked })}
            className="mt-0.5 rounded text-rjds-blue focus:ring-rjds-blue"
          />
          <span className="text-sm font-medium text-gray-700">
            I have read this Enrollment Agreement and agree to be bound by the terms and conditions herein. *
          </span>
        </label>
      </div>

      {/* Personal Information Consent */}
      <div className="bg-gray-50 rounded-xl p-6 space-y-5">
        <h3 className="text-lg font-semibold text-rjds-dark">Use of Personal Information Consent</h3>

        {/* A. Electronic Communication */}
        <div>
          <h4 className="font-medium text-gray-800 mb-2">A. Electronic Communication</h4>
          <p className="text-sm text-gray-600 mb-3">
            Important school information and learning updates are sent via email correspondence.
            This includes emails from the office, administration, teachers, and newsletters.
          </p>
          <label className="flex items-start gap-3 cursor-pointer mb-3">
            <input
              type="checkbox"
              checked={data.electronicCommunicationConsent}
              onChange={e => onChange({ electronicCommunicationConsent: e.target.checked })}
              className="mt-0.5 rounded text-rjds-blue focus:ring-rjds-blue"
            />
            <span className="text-sm font-medium text-gray-700">
              Yes, I consent to receiving email correspondence from RJDS
              <span className="text-red-500"> (required for registration) *</span>
            </span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-7">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address #1</label>
              <input
                type="email"
                value={data.emailAddress1}
                onChange={e => onChange({ emailAddress1: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address #2</label>
              <input
                type="email"
                value={data.emailAddress2}
                onChange={e => onChange({ emailAddress2: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
              />
            </div>
          </div>
        </div>

        {/* B. Buzz Book */}
        <div>
          <h4 className="font-medium text-gray-800 mb-2">B. Buzz Book</h4>
          <p className="text-sm text-gray-600 mb-3">
            A "Buzz Book" contact list by class (K-7) is compiled containing student names,
            parents' names, email addresses and phone numbers. Class WhatsApp groups are also created.
          </p>
          <div className="flex flex-col gap-2">
            {(['yes', 'no'] as const).map(val => (
              <label key={val} className="flex items-start gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="buzzbook"
                  value={val}
                  checked={data.buzzBookConsent === val}
                  onChange={() => onChange({ buzzBookConsent: val })}
                  className="mt-0.5 text-rjds-blue focus:ring-rjds-blue"
                />
                <span className="text-sm">
                  {val === 'yes'
                    ? 'Yes, I consent to the inclusion of our names, email addresses and phone numbers in the Buzz Book.'
                    : 'No, I DO NOT consent to the inclusion of our information in the Buzz Book.'}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* C. Class Photos */}
        <div>
          <h4 className="font-medium text-gray-800 mb-2">C. Class Photos, School Photos, Year-End Slide Show & Yearbook</h4>
          <p className="text-sm text-gray-600 mb-3">
            Annually, RJDS takes class and school photos. A yearbook is provided and a year-end
            slide show is presented. Please indicate consent for images of your child.
          </p>
          <div className="flex flex-col gap-2">
            {(['yes', 'no'] as const).map(val => (
              <label key={val} className="flex items-start gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="classphotos"
                  value={val}
                  checked={data.classPhotosConsent === val}
                  onChange={() => onChange({ classPhotosConsent: val })}
                  className="mt-0.5 text-rjds-blue focus:ring-rjds-blue"
                />
                <span className="text-sm">
                  {val === 'yes'
                    ? 'Yes, I consent to the use of images of my child in class/school photos, slide show, and yearbook.'
                    : 'No, I DO NOT consent to the use of images of my child for these purposes.'}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* D. Publication & Social Media */}
        <div>
          <h4 className="font-medium text-gray-800 mb-2">D. Publication, Broadcast, Social Media & Website Postings</h4>
          <p className="text-sm text-gray-600 mb-3">
            Photographs may be published in RJDS brochures, pamphlets, website, social media, TV,
            or at public events for school promotion, fundraising, and community engagement.
          </p>
          <div className="flex flex-col gap-2">
            {(['yes', 'no'] as const).map(val => (
              <label key={val} className="flex items-start gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="publication"
                  value={val}
                  checked={data.publicationConsent === val}
                  onChange={() => onChange({ publicationConsent: val })}
                  className="mt-0.5 text-rjds-blue focus:ring-rjds-blue"
                />
                <span className="text-sm">
                  {val === 'yes'
                    ? 'Yes, I consent for images of my child to be published, broadcast, or posted.'
                    : 'No, I DO NOT consent for images of my child to be used for these purposes.'}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Short Field Trip Permission */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-rjds-dark mb-3">Short Field Trip Permission</h3>
        <p className="text-sm text-gray-600 mb-3">
          We may from time to time go on spontaneous short field trips (such as the park, library
          and short walks) supervised by a staff member. We wish to obtain your support and consent.
        </p>
        <label className="flex items-start gap-3 cursor-pointer mb-4">
          <input
            type="checkbox"
            checked={data.fieldTripConsent}
            onChange={e => onChange({ fieldTripConsent: e.target.checked })}
            className="mt-0.5 rounded text-rjds-blue focus:ring-rjds-blue"
          />
          <span className="text-sm font-medium text-gray-700">
            I give consent for my child(ren) to be taken for short field trips prior to notification.
          </span>
        </label>
        <div className="border-t border-gray-200 pt-3">
          <p className="text-sm font-medium text-gray-800 mb-2">Release Form</p>
          <p className="text-sm text-gray-600 mb-3">
            I understand that I assume all risks and hazards incidental to the conduct of this activity,
            and hereby release, absolve, indemnify, and hold harmless RJDS of all claims or injuries
            arising therefrom.
          </p>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={data.fieldTripReleaseConsent}
              onChange={e => onChange({ fieldTripReleaseConsent: e.target.checked })}
              className="mt-0.5 rounded text-rjds-blue focus:ring-rjds-blue"
            />
            <span className="text-sm font-medium text-gray-700">
              I agree to the release form terms above.
            </span>
          </label>
        </div>
      </div>

      {/* Parent Participation */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-rjds-dark mb-3">
          Parent Advisory Council & Parent Participation Program
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          PAC membership dues are $36 per year per family (collected with tuition fees).
          Families with children in K-7 are required to complete 18 volunteer hours per year
          (9 hours by end of December, 9 hours by end of June). If hours are not completed,
          a $150 charge will be applied in January and July.
        </p>
        <label className="flex items-start gap-3 cursor-pointer mt-3">
          <input
            type="checkbox"
            checked={data.parentParticipationConsent}
            onChange={e => onChange({ parentParticipationConsent: e.target.checked })}
            className="mt-0.5 rounded text-rjds-blue focus:ring-rjds-blue"
          />
          <span className="text-sm font-medium text-gray-700">
            I authorize the school to debit $150 for incomplete PPP hours as described above.
            If required hours are completed, no charges will apply.
          </span>
        </label>
      </div>
    </div>
  )
}
