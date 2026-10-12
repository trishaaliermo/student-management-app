// StudentCard component to display individual student details
export default function StudentCard({ student }) {
  
  // Check if the student has a valid photo URL provided from the database
  // If photo_url exists and is not empty, use it (and make sure it points to the /images folder)
  // Otherwise, fall back to our general placeholder image
  const avatarSrc = student.photo_url && student.photo_url.trim() !== '' 
    ? (student.photo_url.startsWith('/images') ? student.photo_url : `/images${student.photo_url}`)
    : '/images/default_avatar.jpeg';

  return (
    // Outer card container with styling for background, border, shadow, and centered content
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center text-center text-gray-900">
      
      {/* Circle container for the student's profile picture */}
      <div className="relative w-20 h-20 mb-3 overflow-hidden rounded-full border border-gray-300 bg-gray-100">
        <img 
          src={avatarSrc} 
          alt={`${student.first_name} ${student.last_name}`}
          className="object-cover w-full h-full"
        />
      </div>
      
      {/* Student's full name */}
      <h3 className="text-lg font-bold text-gray-900">
        {student.first_name} {student.last_name}
      </h3>
      
      {/* Student's enrolled program and cohort year */}
      <p className="text-sm font-semibold text-blue-600 mb-1">{student.program}</p>
      <p className="text-xs text-gray-600 mb-2">Cohort: {student.year}</p>
      
      {/* Footer section displaying location and contact email address */}
      <div className="text-xs text-gray-700 space-y-0.5 mt-auto pt-2 border-t w-full">
        <p>{student.city}, {student.province_state}</p>
        <p className="truncate text-gray-500">{student.email}</p>
      </div>
    </div>
  );
}