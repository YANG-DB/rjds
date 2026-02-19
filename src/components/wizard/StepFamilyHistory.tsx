import type { FormData } from '../../types/FormData'

interface Props {
  data: FormData;
  onChange: (fields: Partial<FormData>) => void;
}

export default function StepFamilyHistory({ data, onChange }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-rjds-dark">Family & Social History</h2>
        <p className="text-gray-500 mt-1">
          RJDS is committed to the total academic, social, emotional, physical, and intellectual
          development of your child. The following information helps us better understand your child and their needs.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-rjds-dark mb-4">Previous Education</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Please indicate your child's previous education:
          </label>
          <div className="flex gap-4">
            {['Daycare', 'Preschool'].map(type => (
              <label key={type} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.previousEducation.includes(type)}
                  onChange={e => {
                    const newEd = e.target.checked
                      ? [...data.previousEducation, type]
                      : data.previousEducation.filter(t => t !== type);
                    onChange({ previousEducation: newEd });
                  }}
                  className="rounded text-rjds-blue focus:ring-rjds-blue"
                />
                <span className="text-sm">{type}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name of Facility</label>
            <input
              type="text"
              value={data.previousFacilityName}
              onChange={e => onChange({ previousFacilityName: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Years Attended</label>
            <input
              type="text"
              value={data.previousFacilityYears}
              onChange={e => onChange({ previousFacilityYears: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Elementary School(s) Attended</label>
            <input
              type="text"
              value={data.lastSchoolName}
              onChange={e => onChange({ lastSchoolName: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Dates</label>
            <input
              type="text"
              value={data.lastSchoolDates}
              onChange={e => onChange({ lastSchoolDates: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Grade(s)</label>
            <input
              type="text"
              value={data.lastSchoolGrades}
              onChange={e => onChange({ lastSchoolGrades: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 space-y-4">
        <h3 className="text-lg font-semibold text-rjds-dark">Health & Development</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Is there any pertinent medical information about your child that would, in any way,
            limit or affect your child's ability to engage in school activities?
          </label>
          <textarea
            rows={3}
            value={data.medicalInfo}
            onChange={e => onChange({ medicalInfo: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Is your child taking any medications?
          </label>
          <textarea
            rows={2}
            value={data.medications}
            onChange={e => onChange({ medications: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Does your child have a severe allergy? If so, please indicate and attach any
            supporting documentation from your doctor.
          </label>
          <textarea
            rows={2}
            value={data.allergies}
            onChange={e => onChange({ allergies: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Is there any information regarding your child's development and behaviour of which we
            should be aware? (e.g. unusual eating/sleeping routines, self-regulation issues,
            anxiety, nervous habits, special skills or talents, artistic/athletic abilities)
          </label>
          <textarea
            rows={3}
            value={data.developmentInfo}
            onChange={e => onChange({ developmentInfo: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            If your child has had psychological, educational, or medical assessments completed,
            please list the assessments here.
          </label>
          <textarea
            rows={3}
            value={data.assessments}
            onChange={e => onChange({ assessments: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
      </div>
    </div>
  )
}
