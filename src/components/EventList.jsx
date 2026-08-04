function EventList() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        Upcoming Events
      </h2>

      <div className="space-y-6">

        <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">
                React Conference
              </h3>

              <p className="text-gray-400 mt-2">
                20 August 2026 • Accra
              </p>

              <p className="mt-3 text-gray-300">
                Annual React developers conference.
              </p>
            </div>

            <div className="space-x-3">
              <button className="bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600">
                Edit
              </button>

              <button className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">
                AI Summit
              </h3>

              <p className="text-gray-400 mt-2">
                15 September 2026 • Kumasi
              </p>

              <p className="mt-3 text-gray-300">
                AI and Cloud Computing conference.
              </p>
            </div>

            <div className="space-x-3">
              <button className="bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600">
                Edit
              </button>

              <button className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default EventList;