import type { FormData } from '../../types/FormData'

interface Props {
  data: FormData;
  onChange: (fields: Partial<FormData>) => void;
}

export default function StepPayment({ data, onChange }: Props) {
  const updateStudentName = (index: number, value: string) => {
    const newNames = [...data.studentNames];
    newNames[index] = value;
    onChange({ studentNames: newNames });
  };

  const addStudentName = () => {
    if (data.studentNames.length < 4) {
      onChange({ studentNames: [...data.studentNames, ''] });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-rjds-dark">Payment Information</h2>
        <p className="text-gray-500 mt-1">2026-2027 Payment Agreement Schedule & Pre-Authorized Debit</p>
      </div>

      {/* Payment Schedule Agreement */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-rjds-dark mb-2">Payment Agreement Schedule</h3>
        <p className="text-xs text-gray-500 mb-4 uppercase font-medium">
          A Tuition Fee Agreement will be issued upon assessment
        </p>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Family Name *</label>
          <input
            type="text"
            required
            value={data.familyName}
            onChange={e => onChange({ familyName: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {data.studentNames.map((name, i) => (
            <div key={i}>
              <label className="block text-sm font-medium text-gray-700 mb-1">Student Name #{i + 1}</label>
              <input
                type="text"
                value={name}
                onChange={e => updateStudentName(i, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
              />
            </div>
          ))}
        </div>
        {data.studentNames.length < 4 && (
          <button
            type="button"
            onClick={addStudentName}
            className="text-rjds-blue hover:text-rjds-teal text-sm font-medium mb-4 flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Student
          </button>
        )}

        <div className="space-y-3 border-t border-gray-200 pt-4">
          <p className="text-sm font-medium text-gray-700">Please check one option:</p>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-100 transition-colors">
            <input
              type="radio"
              name="payment-option"
              value="1"
              checked={data.paymentOption === '1'}
              onChange={() => onChange({ paymentOption: '1' })}
              className="mt-0.5 text-rjds-blue focus:ring-rjds-blue"
            />
            <span className="text-sm">
              I/We have submitted the registration documents and deposits and am/are opting to pay full Tuition Fees.
            </span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-100 transition-colors">
            <input
              type="radio"
              name="payment-option"
              value="2"
              checked={data.paymentOption === '2'}
              onChange={() => onChange({ paymentOption: '2' })}
              className="mt-0.5 text-rjds-blue focus:ring-rjds-blue"
            />
            <span className="text-sm">
              I/We have submitted the registration documents and deposits and am/are applying for Tuition Assistance.
              I/We will complete the online application process by April 1, 2026.
            </span>
          </label>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Payments will be made by pre-authorized debit over 10 months due on the first of each month,
          starting July 1, 2026, and ending April 2027.
        </p>
      </div>

      {/* Pre-Authorized Debit Form */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-rjds-dark mb-4">Pre-Authorized Debit Form</h3>
        <p className="text-sm text-gray-600 mb-4">
          I authorize Richmond Jewish Day School to debit the bank account identified below for tuition payments.
        </p>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Family Name</label>
              <input
                type="text"
                value={data.padFamilyName}
                onChange={e => onChange({ padFamilyName: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Payor Name(s)</label>
              <input
                type="text"
                value={data.padPayorName}
                onChange={e => onChange({ padPayorName: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address/Contact Information</label>
            <input
              type="text"
              value={data.padAddress}
              onChange={e => onChange({ padAddress: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
            />
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-medium text-gray-800 mb-3">Financial Information</h4>
            <p className="text-xs text-gray-500 mb-3">Please attach a void cheque.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
                <input
                  type="text"
                  value={data.padAccountNumber}
                  onChange={e => onChange({ padAccountNumber: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Branch Transit (5 digits)</label>
                  <input
                    type="text"
                    maxLength={5}
                    value={data.padBranchTransit}
                    onChange={e => onChange({ padBranchTransit: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Institution # (3 digits)</label>
                  <input
                    type="text"
                    maxLength={3}
                    value={data.padInstitutionNumber}
                    onChange={e => onChange({ padInstitutionNumber: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Financial Institution Name</label>
                <input
                  type="text"
                  value={data.padInstitutionName}
                  onChange={e => onChange({ padInstitutionName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Financial Institution Address</label>
                <input
                  type="text"
                  value={data.padInstitutionAddress}
                  onChange={e => onChange({ padInstitutionAddress: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rjds-blue focus:border-rjds-blue outline-none"
                />
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-2">
            You may revoke this authorization at any time, subject to providing notice of 10 business days.
            For more information on your right to cancel a PAD agreement, contact your financial institution
            or visit www.cdnpay.ca.
          </p>
        </div>
      </div>
    </div>
  )
}
