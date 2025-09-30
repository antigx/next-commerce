import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap=6">
        <div className="bg-white rounded-lg p-4 flex flex-col">PROD1</div>
        <div className="bg-white rounded-lg p-4 flex flex-col">PROD1</div>
        <div className="bg-white rounded-lg p-4 flex flex-col">PROD1</div>
        <div className="bg-white rounded-lg p-4 flex flex-col">PROD1</div>
      </div>
    </div>
  );
}
