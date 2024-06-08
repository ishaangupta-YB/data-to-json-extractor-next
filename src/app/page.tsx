import Form from "@/components/Form";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-3xl font-semibold text-center">JSON Formatter</h1>
              <p className="mt-4 text-lg text-gray-600 text-center">Convert your unstructured data into structured JSON</p>
            </div>
            <div className="mt-8">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
