import type { FormData, EmergencyContact } from '../../types/FormData'

interface Props {
  data: FormData;
  onChange: (fields: Partial<FormData>) => void;
}

function EmergencyContactSection({ num, contact, onContactChange }: {
  num: 1 | 2;
  contact: EmergencyContact;
  onContactChange: (fields: Partial<EmergencyContact>) => void;
}) {
  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-rjds-dark">
          #{num} Emergency Contact <span className="text-sm font-normal text-gray-500">(other than parents)</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name {num === 1 && '*'}</label>
          <input
            type="text"
            required={num === 1}
            value={contact.name}
            onChange={e => onContactChange({ name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Relationship {num === 1 && '*'}</label>
          <input
            type="text"
            required={num === 1}
            value={contact.relationship}
            onChange={e => onContactChange({ relationship: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone {num === 1 && '*'}</label>
          <input
            type="tel"
            required={num === 1}
            value={contact.phone}
            onChange={e => onContactChange({ phone: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={contact.email}
            onChange={e => onContactChange({ email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Authorized to pick up student?</label>
        <div className="flex gap-4">
          {(['yes', 'no'] as const).map(val => (
            <label key={val} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name={`pickup-${num}`}
                value={val}
                checked={contact.authorizedPickup === val}
                onChange={() => onContactChange({ authorizedPickup: val })}
                className="text-rjds-blue focus:ring-rjds-blue"
              />
              <span className="text-sm capitalize">{val}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function StepEmergencyContacts({ data, onChange }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-rjds-dark">Emergency Contacts</h2>
        <p className="text-gray-500 mt-1">Please provide at least one emergency contact other than parents</p>
      </div>

      <EmergencyContactSection
        num={1}
        contact={data.emergencyContact1}
        onContactChange={fields => onChange({ emergencyContact1: { ...data.emergencyContact1, ...fields } })}
      />
      <EmergencyContactSection
        num={2}
        contact={data.emergencyContact2}
        onContactChange={fields => onChange({ emergencyContact2: { ...data.emergencyContact2, ...fields } })}
      />
    </div>
  )
}
