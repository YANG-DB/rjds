import type { FormData } from '../../types/FormData'

interface Props {
  data: FormData;
  onChange: (fields: Partial<FormData>) => void;
}

export default function StepImmigrationStatus({ data, onChange }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-rjds-dark">
          Status of Parent/Guardian
        </h2>
        <p className="text-gray-500 mt-1">
          Admission to Canada and Residency (Form A) - 2026-2027
        </p>
        <p className="text-sm text-gray-500 mt-2">
          To be completed and signed by a parent or legal (court-appointed) guardian. If legal guardian,
          attach copy of court order appointing you as legal guardian.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-rjds-dark mb-4">
          Lawfully Admitted into Canada
        </h3>
        <p className="text-sm text-gray-700 mb-4">I am (please select one):</p>
        <div className="space-y-3">
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-100 transition-colors">
            <input
              type="radio"
              name="immigration"
              value="canadian-citizen"
              checked={data.immigrationStatus === 'canadian-citizen'}
              onChange={() => onChange({ immigrationStatus: 'canadian-citizen', immigrationSubStatus: '' })}
              className="mt-0.5 text-rjds-blue focus:ring-rjds-blue"
            />
            <div>
              <span className="text-sm font-medium">A Canadian citizen</span>
              <p className="text-xs text-gray-500">If not born in Canada, please attach a photocopy of citizenship paper/card</p>
            </div>
          </label>

          <label className="flex items-start gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-100 transition-colors">
            <input
              type="radio"
              name="immigration"
              value="permanent-resident"
              checked={data.immigrationStatus === 'permanent-resident'}
              onChange={() => onChange({ immigrationStatus: 'permanent-resident', immigrationSubStatus: '' })}
              className="mt-0.5 text-rjds-blue focus:ring-rjds-blue"
            />
            <div>
              <span className="text-sm font-medium">A Permanent resident and/or landed immigrant</span>
              <p className="text-xs text-gray-500">Please attach photocopy of landed immigrant status paper or permanent resident card</p>
            </div>
          </label>

          <label className="flex items-start gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-100 transition-colors">
            <input
              type="radio"
              name="immigration"
              value="lawfully-admitted"
              checked={data.immigrationStatus === 'lawfully-admitted'}
              onChange={() => onChange({ immigrationStatus: 'lawfully-admitted' })}
              className="mt-0.5 text-rjds-blue focus:ring-rjds-blue"
            />
            <div>
              <span className="text-sm font-medium">
                Lawfully admitted into Canada under the Immigration and Refugee Protection Act
              </span>
              <p className="text-xs text-gray-500">Please select the document type below and attach photocopy</p>
            </div>
          </label>

          {data.immigrationStatus === 'lawfully-admitted' && (
            <div className="ml-8 space-y-2 border-l-2 border-rjds-blue/20 pl-4">
              {[
                { value: 'refugee', label: 'Admission as a refugee or refugee claimant' },
                { value: 'student-permit', label: 'Valid student permit for two or more years' },
                { value: 'work-permit', label: 'Valid employment authorization (work permit) for two or more years' },
              ].map(opt => (
                <label key={opt.value} className="flex items-start gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <input
                    type="radio"
                    name="immigration-sub"
                    value={opt.value}
                    checked={data.immigrationSubStatus === opt.value}
                    onChange={() => onChange({ immigrationSubStatus: opt.value })}
                    className="mt-0.5 text-rjds-blue focus:ring-rjds-blue"
                  />
                  <span className="text-sm">{opt.label}</span>
                </label>
              ))}
            </div>
          )}

          <label className="flex items-start gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-100 transition-colors">
            <input
              type="radio"
              name="immigration"
              value="diplomatic"
              checked={data.immigrationStatus === 'diplomatic'}
              onChange={() => onChange({ immigrationStatus: 'diplomatic', immigrationSubStatus: '' })}
              className="mt-0.5 text-rjds-blue focus:ring-rjds-blue"
            />
            <div>
              <span className="text-sm font-medium">Diplomatic or official duties</span>
              <p className="text-xs text-gray-500">
                A person carrying out official duties under the Visiting Forces Act
                or as an accredited diplomatic agent, preclearance officer, consular officer,
                or official representative in Canada
              </p>
            </div>
          </label>

          <label className="flex items-start gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-100 transition-colors">
            <input
              type="radio"
              name="immigration"
              value="other"
              checked={data.immigrationStatus === 'other'}
              onChange={() => onChange({ immigrationStatus: 'other', immigrationSubStatus: '' })}
              className="mt-0.5 text-rjds-blue focus:ring-rjds-blue"
            />
            <div>
              <span className="text-sm font-medium">Other</span>
              <p className="text-xs text-gray-500">Must be cleared with Citizenship and Immigration Canada</p>
            </div>
          </label>

          {data.immigrationStatus === 'other' && (
            <div className="ml-8">
              <input
                type="text"
                placeholder="Document description"
                value={data.otherDocumentDescription}
                onChange={e => onChange({ otherDocumentDescription: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
              />
            </div>
          )}
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-rjds-dark mb-4">Residency in British Columbia</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            I am a resident of British Columbia (please select one):
          </label>
          <div className="flex gap-4">
            {(['yes', 'no'] as const).map(val => (
              <label key={val} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="bc-resident"
                  value={val}
                  checked={data.bcResident === val}
                  onChange={() => onChange({ bcResident: val })}
                  className="text-rjds-blue focus:ring-rjds-blue"
                />
                <span className="text-sm capitalize">{val}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
