import type { FormData } from '../../types/FormData'

interface Props {
  data: FormData;
  onChange: (fields: Partial<FormData>) => void;
}

export default function StepFamilyBackground({ data, onChange }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-rjds-dark">Family Background</h2>
        <p className="text-gray-500 mt-1">Information about your family</p>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 space-y-4">
        <h3 className="text-lg font-semibold text-rjds-dark">Grandparents (#1 Parent/Guardian)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Names</label>
            <input
              type="text"
              value={data.grandparents1Names}
              onChange={e => onChange({ grandparents1Names: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Emails</label>
            <input
              type="text"
              value={data.grandparents1Emails}
              onChange={e => onChange({ grandparents1Emails: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 space-y-4">
        <h3 className="text-lg font-semibold text-rjds-dark">Grandparents (#2 Parent/Guardian)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Names</label>
            <input
              type="text"
              value={data.grandparents2Names}
              onChange={e => onChange({ grandparents2Names: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Emails</label>
            <input
              type="text"
              value={data.grandparents2Emails}
              onChange={e => onChange({ grandparents2Emails: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 space-y-4">
        <h3 className="text-lg font-semibold text-rjds-dark">Family History</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Have the parents been separated during your child's life?
          </label>
          <div className="flex gap-4">
            {(['yes', 'no'] as const).map(val => (
              <label key={val} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="separated"
                  value={val}
                  checked={data.parentsSeparated === val}
                  onChange={() => onChange({ parentsSeparated: val })}
                  className="text-rjds-blue focus:ring-rjds-blue"
                />
                <span className="text-sm capitalize">{val}</span>
              </label>
            ))}
          </div>
        </div>
        {data.parentsSeparated === 'yes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Age of child at time</label>
              <input
                type="text"
                value={data.separationChildAge}
                onChange={e => onChange({ separationChildAge: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Length of separation</label>
              <input
                type="text"
                value={data.separationLength}
                onChange={e => onChange({ separationLength: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
              />
            </div>
          </div>
        )}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            In how many different locations had your child resided? (please list)
          </label>
          <textarea
            rows={2}
            value={data.childResidenceLocations}
            onChange={e => onChange({ childResidenceLocations: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Have there been any major events in your family such as divorce, death, accidents,
            or illnesses, which may have affected the emotional well-being of your child? If so,
            please explain.
          </label>
          <textarea
            rows={3}
            value={data.majorFamilyEvents}
            onChange={e => onChange({ majorFamilyEvents: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 space-y-4">
        <h3 className="text-lg font-semibold text-rjds-dark">Religious Background</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">#1 Parent/Guardian Religion</label>
            <input
              type="text"
              value={data.parent1Religion}
              onChange={e => onChange({ parent1Religion: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">#2 Parent/Guardian Religion</label>
            <input
              type="text"
              value={data.parent2Religion}
              onChange={e => onChange({ parent2Religion: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Synagogue Affiliation (if any)</label>
          <input
            type="text"
            value={data.synagogueAffiliation}
            onChange={e => onChange({ synagogueAffiliation: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
      </div>
    </div>
  )
}
