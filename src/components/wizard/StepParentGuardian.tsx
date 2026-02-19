import type { FormData } from '../../types/FormData'

interface Props {
  data: FormData;
  onChange: (fields: Partial<FormData>) => void;
}

function ParentSection({ num, prefix, data, onChange }: {
  num: 1 | 2;
  prefix: 'parent1' | 'parent2';
  data: FormData;
  onChange: (fields: Partial<FormData>) => void;
}) {
  const get = (field: string) => data[`${prefix}${field}` as keyof FormData] as string;
  const set = (field: string, value: string) => onChange({ [`${prefix}${field}`]: value });

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-rjds-dark mb-4">
        #{num} Parent/Guardian {num === 1 && <span className="text-red-500">*</span>}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name {num === 1 && '*'}</label>
          <input
            type="text"
            required={num === 1}
            value={get('Name')}
            onChange={e => set('Name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Occupation</label>
          <input
            type="text"
            value={get('Occupation')}
            onChange={e => set('Occupation', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Work Phone</label>
          <div className="flex gap-2">
            <input
              type="tel"
              value={get('WorkPhone')}
              onChange={e => set('WorkPhone', e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
            />
            <input
              type="text"
              placeholder="Ext"
              value={get('WorkPhoneExt')}
              onChange={e => set('WorkPhoneExt', e.target.value)}
              className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile {num === 1 && '*'}</label>
          <input
            type="tel"
            required={num === 1}
            value={get('Mobile')}
            onChange={e => set('Mobile', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email {num === 1 && '*'}</label>
          <input
            type="email"
            required={num === 1}
            value={get('Email')}
            onChange={e => set('Email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address (if different from student)</label>
          <input
            type="text"
            value={get('Address')}
            onChange={e => set('Address', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
      </div>
    </div>
  )
}

export default function StepParentGuardian({ data, onChange }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-rjds-dark">Parent/Guardian Information</h2>
        <p className="text-gray-500 mt-1">Please provide information for at least one parent/guardian</p>
      </div>

      <ParentSection num={1} prefix="parent1" data={data} onChange={onChange} />
      <ParentSection num={2} prefix="parent2" data={data} onChange={onChange} />

      <div className="bg-gray-50 rounded-xl p-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Parent(s) and/or Guardian(s) with whom student lives
          </label>
          <input
            type="text"
            value={data.parentStudentLivesWith}
            onChange={e => onChange({ parentStudentLivesWith: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
        <label className="flex items-center gap-2 mt-3 cursor-pointer">
          <input
            type="checkbox"
            checked={data.hasCustodyAgreement}
            onChange={e => onChange({ hasCustodyAgreement: e.target.checked })}
            className="rounded text-rjds-blue focus:ring-rjds-blue"
          />
          <span className="text-sm text-gray-700">
            There is a custody agreement (please provide documentation)
          </span>
        </label>
      </div>
    </div>
  )
}
