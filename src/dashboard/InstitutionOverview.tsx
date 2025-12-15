'use client';

const InstitutionOverview = () => {
  const institutions = [
    {
      name: 'Viqarunissa School and College',
      type: 'college',
      students: 2,
      staff: 1,
      revenue: '৳1,600,000',
      status: 'Active',
    },
    {
      name: 'Police Line High School',
      type: 'school',
      students: 1,
      staff: 1,
      revenue: '৳300,000',
      status: 'Active',
    },
    {
      name: 'Pilot High School',
      type: 'school',
      students: 2,
      staff: 2,
      revenue: '৳1,000,000',
      status: 'Active',
    },
    {
      name: 'University of Dhaka',
      type: 'university',
      students: 2,
      staff: 1,
      revenue: '৳9,000,000',
      status: 'Active',
    },
    {
      name: 'Tech Land Institute',
      type: 'college',
      students: 1,
      staff: 1,
      revenue: '৳600,000',
      status: 'Active',
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'college':
        return 'bg-green-100 text-green-800';
      case 'school':
        return 'bg-blue-100 text-blue-800';
      case 'university':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-[4vw] md:p-[2vw] w-full md:w-[50vw] rounded-2xl mt-[1vh] bg-white">
      {/* Header */}
      <h2 className="text-[5vw] md:text-[1.5vw] font-bold text-gray-800">
        Institution Overview
      </h2>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block mt-[1.5vw] overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-sm border border-gray-100">
          <thead>
            <tr className="border-b border-gray-200">
              {['Institution', 'Type', 'Students', 'Staff', 'Revenue', 'Status'].map(
                (header) => (
                  <th
                    key={header}
                    className="px-[1.5vw] py-[1vw] text-left text-[1vw] font-medium text-gray-500"
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {institutions.map((inst, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="px-[1.5vw] py-[1vw] text-[0.9vw] text-gray-800">
                  {inst.name}
                </td>
                <td className="px-[1.5vw] py-[1vw]">
                  <span
                    className={`px-[0.8vw] py-[0.4vw] rounded-full text-[0.8vw] font-medium ${getTypeColor(
                      inst.type
                    )}`}
                  >
                    {inst.type}
                  </span>
                </td>
                <td className="px-[1.5vw] py-[1vw] text-[1vw]">{inst.students}</td>
                <td className="px-[1.5vw] py-[1vw] text-[1vw]">{inst.staff}</td>
                <td className="px-[1.5vw] py-[1vw] text-[1vw]">{inst.revenue}</td>
                <td className="px-[1.5vw] py-[1vw]">
                  <span className="px-[0.8vw] py-[0.4vw] rounded-full text-[0.8vw] font-medium bg-green-100 text-green-800">
                    {inst.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="md:hidden mt-[4vw] flex flex-col gap-[4vw]">
        {institutions.map((inst, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-[4vw] shadow-sm"
          >
            <h3 className="text-[4vw] font-semibold text-gray-800">
              {inst.name}
            </h3>

            <div className="flex flex-wrap gap-[2vw] mt-[2vw]">
              <span
                className={`px-[3vw] py-[1vw] rounded-full text-[3vw] font-medium ${getTypeColor(
                  inst.type
                )}`}
              >
                {inst.type}
              </span>

              <span className="px-[3vw] py-[1vw] rounded-full text-[3vw] font-medium bg-green-100 text-green-800">
                {inst.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-[3vw] mt-[3vw] text-[3.5vw] text-gray-700">
              <div>
                <p className="text-gray-400">Students</p>
                <p className="font-medium">{inst.students}</p>
              </div>
              <div>
                <p className="text-gray-400">Staff</p>
                <p className="font-medium">{inst.staff}</p>
              </div>
              <div className="col-span-2">
                <p className="text-gray-400">Revenue</p>
                <p className="font-medium">{inst.revenue}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstitutionOverview;
