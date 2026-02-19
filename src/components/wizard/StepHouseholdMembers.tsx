import type { FormData, HouseholdMember } from '../../types/FormData'

interface Props {
  data: FormData;
  onChange: (fields: Partial<FormData>) => void;
}

export default function StepHouseholdMembers({ data, onChange }: Props) {
  const updateMember = (index: number, fields: Partial<HouseholdMember>) => {
    const newMembers = data.householdMembers.map((m, i) =>
      i === index ? { ...m, ...fields } : m
    );
    onChange({ householdMembers: newMembers });
  };

  const addMember = () => {
    if (data.householdMembers.length < 5) {
      onChange({
        householdMembers: [
          ...data.householdMembers,
          { name: '', dateOfBirth: '', gender: '', pronoun: '', relationship: '' },
        ],
      });
    }
  };

  const removeMember = (index: number) => {
    if (data.householdMembers.length > 1) {
      onChange({
        householdMembers: data.householdMembers.filter((_, i) => i !== index),
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-rjds-dark">Household Members</h2>
        <p className="text-gray-500 mt-1">
          List all children and members of your household (eldest to youngest)
        </p>
      </div>

      {data.householdMembers.map((member, index) => (
        <div key={index} className="bg-gray-50 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-rjds-dark">Member {index + 1}</h3>
            {data.householdMembers.length > 1 && (
              <button
                type="button"
                onClick={() => removeMember(index)}
                className="text-red-500 hover:text-red-700 text-sm font-medium"
              >
                Remove
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="md:col-span-2 lg:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                value={member.name}
                onChange={e => updateMember(index, { name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
              <input
                type="date"
                value={member.dateOfBirth}
                onChange={e => updateMember(index, { dateOfBirth: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
              <select
                value={member.gender}
                onChange={e => updateMember(index, { gender: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pronoun</label>
              <input
                type="text"
                value={member.pronoun}
                onChange={e => updateMember(index, { pronoun: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Relationship</label>
              <input
                type="text"
                value={member.relationship}
                onChange={e => updateMember(index, { relationship: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
              />
            </div>
          </div>
        </div>
      ))}

      {data.householdMembers.length < 5 && (
        <button
          type="button"
          onClick={addMember}
          className="flex items-center gap-2 text-rjds-blue hover:text-rjds-teal font-medium text-sm transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Another Member
        </button>
      )}
    </div>
  )
}
