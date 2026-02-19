import type { FormData } from '../../types/FormData'

interface Props {
  data: FormData;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-rjds-dark mb-4 border-b border-gray-200 pb-2">{title}</h3>
      {children}
    </div>
  )
}

function Field({ label, value }: { label: string; value: string | undefined }) {
  if (!value) return null;
  return (
    <div className="py-1">
      <span className="text-sm text-gray-500">{label}: </span>
      <span className="text-sm font-medium text-gray-800">{value}</span>
    </div>
  )
}

export default function StepReview({ data }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-rjds-dark">Review Your Application</h2>
        <p className="text-gray-500 mt-1">
          Please review all information before submitting. Click "Generate PDF" to download your completed application.
        </p>
      </div>

      <Section title="Student Information">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          <Field label="Name" value={`${data.studentSurname}, ${data.studentGivenNames}`} />
          <Field label="Grade Entering" value={data.gradeEntering} />
          <Field label="Hebrew Name" value={data.hebrewName} />
          <Field label="Date of Birth" value={data.dateOfBirth} />
          <Field label="Gender" value={data.gender} />
          <Field label="Pronoun" value={data.preferredPronoun} />
          <Field label="Language" value={data.primaryLanguage === 'Other' ? data.otherLanguage : data.primaryLanguage} />
          <Field label="Health #" value={data.personalHealthNumber} />
          <Field label="Address" value={data.homeAddress} />
          <Field label="Postal Code" value={data.postalCode} />
          <Field label="Phone" value={data.primaryPhone} />
        </div>
      </Section>

      <Section title="Parents/Guardians">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">#1 Parent/Guardian</h4>
            <Field label="Name" value={data.parent1Name} />
            <Field label="Occupation" value={data.parent1Occupation} />
            <Field label="Work Phone" value={data.parent1WorkPhone} />
            <Field label="Mobile" value={data.parent1Mobile} />
            <Field label="Email" value={data.parent1Email} />
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">#2 Parent/Guardian</h4>
            <Field label="Name" value={data.parent2Name} />
            <Field label="Occupation" value={data.parent2Occupation} />
            <Field label="Work Phone" value={data.parent2WorkPhone} />
            <Field label="Mobile" value={data.parent2Mobile} />
            <Field label="Email" value={data.parent2Email} />
          </div>
        </div>
        <Field label="Student lives with" value={data.parentStudentLivesWith} />
      </Section>

      <Section title="Emergency Contacts">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[data.emergencyContact1, data.emergencyContact2].map((contact, i) => (
            contact.name && (
              <div key={i}>
                <h4 className="font-medium text-gray-700 mb-2">#{i + 1} Emergency Contact</h4>
                <Field label="Name" value={contact.name} />
                <Field label="Relationship" value={contact.relationship} />
                <Field label="Phone" value={contact.phone} />
                <Field label="Email" value={contact.email} />
                <Field label="Authorized Pickup" value={contact.authorizedPickup} />
              </div>
            )
          ))}
        </div>
      </Section>

      <Section title="Family & Social History">
        <Field label="Previous Education" value={data.previousEducation.join(', ')} />
        <Field label="Previous Facility" value={data.previousFacilityName} />
        <Field label="Last School" value={data.lastSchoolName} />
        <Field label="Medical Info" value={data.medicalInfo} />
        <Field label="Medications" value={data.medications} />
        <Field label="Allergies" value={data.allergies} />
      </Section>

      <Section title="Family Background">
        <Field label="Parent 1 Religion" value={data.parent1Religion} />
        <Field label="Parent 2 Religion" value={data.parent2Religion} />
        <Field label="Synagogue" value={data.synagogueAffiliation} />
      </Section>

      <Section title="Household Members">
        {data.householdMembers.filter(m => m.name).map((m, i) => (
          <div key={i} className="py-1">
            <span className="text-sm font-medium text-gray-800">
              {m.name} - {m.relationship} ({m.gender}{m.pronoun ? `, ${m.pronoun}` : ''})
            </span>
          </div>
        ))}
      </Section>

      <Section title="Immigration Status">
        <Field label="Status" value={data.immigrationStatus} />
        {data.immigrationSubStatus && <Field label="Sub-Status" value={data.immigrationSubStatus} />}
        <Field label="BC Resident" value={data.bcResident} />
      </Section>

      <Section title="Consents & Agreements">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className={`text-sm ${data.enrollmentAgreementAccepted ? 'text-green-600' : 'text-red-500'}`}>
              {data.enrollmentAgreementAccepted ? '✓' : '✗'}
            </span>
            <span className="text-sm">Enrollment Agreement</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-sm ${data.electronicCommunicationConsent ? 'text-green-600' : 'text-red-500'}`}>
              {data.electronicCommunicationConsent ? '✓' : '✗'}
            </span>
            <span className="text-sm">Electronic Communication</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-sm ${data.buzzBookConsent ? 'text-green-600' : 'text-gray-400'}`}>
              {data.buzzBookConsent === 'yes' ? '✓' : data.buzzBookConsent === 'no' ? '✗' : '-'}
            </span>
            <span className="text-sm">Buzz Book</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-sm ${data.classPhotosConsent === 'yes' ? 'text-green-600' : 'text-gray-400'}`}>
              {data.classPhotosConsent === 'yes' ? '✓' : data.classPhotosConsent === 'no' ? '✗' : '-'}
            </span>
            <span className="text-sm">Class Photos</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-sm ${data.publicationConsent === 'yes' ? 'text-green-600' : 'text-gray-400'}`}>
              {data.publicationConsent === 'yes' ? '✓' : data.publicationConsent === 'no' ? '✗' : '-'}
            </span>
            <span className="text-sm">Publication & Social Media</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-sm ${data.fieldTripConsent ? 'text-green-600' : 'text-red-500'}`}>
              {data.fieldTripConsent ? '✓' : '✗'}
            </span>
            <span className="text-sm">Field Trip Permission</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-sm ${data.parentParticipationConsent ? 'text-green-600' : 'text-red-500'}`}>
              {data.parentParticipationConsent ? '✓' : '✗'}
            </span>
            <span className="text-sm">Parent Participation Program</span>
          </div>
        </div>
      </Section>

      <Section title="Payment">
        <Field label="Family Name" value={data.familyName} />
        <Field label="Payment Option" value={data.paymentOption === '1' ? 'Full Tuition' : data.paymentOption === '2' ? 'Tuition Assistance' : ''} />
        <Field label="Bank" value={data.padInstitutionName} />
        <Field label="Account" value={data.padAccountNumber ? '****' + data.padAccountNumber.slice(-4) : ''} />
      </Section>
    </div>
  )
}
