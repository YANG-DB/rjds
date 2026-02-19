import type { FormData } from '../../types/FormData'

interface Props {
  data: FormData;
  onChange: (fields: Partial<FormData>) => void;
}

export default function StepStudentInfo({ data, onChange }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-rjds-dark">Student Information</h2>
        <p className="text-gray-500 mt-1">2026-2027 New Student Application</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Surname *</label>
          <input
            type="text"
            required
            value={data.studentSurname}
            onChange={e => onChange({ studentSurname: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Given Names *</label>
          <input
            type="text"
            required
            value={data.studentGivenNames}
            onChange={e => onChange({ studentGivenNames: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Grade Entering *</label>
          <select
            required
            value={data.gradeEntering}
            onChange={e => onChange({ gradeEntering: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          >
            <option value="">Select Grade</option>
            <option value="Kindergarten">Kindergarten</option>
            <option value="Grade 1">Grade 1</option>
            <option value="Grade 2">Grade 2</option>
            <option value="Grade 3">Grade 3</option>
            <option value="Grade 4">Grade 4</option>
            <option value="Grade 5">Grade 5</option>
            <option value="Grade 6">Grade 6</option>
            <option value="Grade 7">Grade 7</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Student's Hebrew Name</label>
          <input
            type="text"
            value={data.hebrewName}
            onChange={e => onChange({ hebrewName: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth (DD/MM/YYYY) *</label>
          <input
            type="date"
            required
            value={data.dateOfBirth}
            onChange={e => onChange({ dateOfBirth: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
          <div className="flex gap-4 mt-2">
            {['Male', 'Female', 'Other'].map(g => (
              <label key={g} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={data.gender === g}
                  onChange={e => onChange({ gender: e.target.value })}
                  className="text-rjds-blue focus:ring-rjds-blue"
                />
                <span className="text-sm">{g}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Pronoun</label>
          <input
            type="text"
            value={data.preferredPronoun}
            onChange={e => onChange({ preferredPronoun: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Primary Language Spoken at Home *</label>
          <div className="flex gap-4 mt-2 flex-wrap">
            {['English', 'Hebrew', 'Other'].map(lang => (
              <label key={lang} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="language"
                  value={lang}
                  checked={data.primaryLanguage === lang}
                  onChange={e => onChange({ primaryLanguage: e.target.value })}
                  className="text-rjds-blue focus:ring-rjds-blue"
                />
                <span className="text-sm">{lang}</span>
              </label>
            ))}
          </div>
          {data.primaryLanguage === 'Other' && (
            <input
              type="text"
              placeholder="Please specify"
              value={data.otherLanguage}
              onChange={e => onChange({ otherLanguage: e.target.value })}
              className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
            />
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Personal Health Number</label>
          <input
            type="text"
            value={data.personalHealthNumber}
            onChange={e => onChange({ personalHealthNumber: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Home Address *</label>
        <input
          type="text"
          required
          value={data.homeAddress}
          onChange={e => onChange({ homeAddress: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code *</label>
          <input
            type="text"
            required
            value={data.postalCode}
            onChange={e => onChange({ postalCode: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Primary Contact Phone *</label>
          <input
            type="tel"
            required
            value={data.primaryPhone}
            onChange={e => onChange({ primaryPhone: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>
      </div>
    </div>
  )
}
