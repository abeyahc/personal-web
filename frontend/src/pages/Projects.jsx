import Navbar from "../components/navbar";

export default function Projects() {
    return (
      <div className="min-h-screen bg-[#242424]"> {/* Move bg here and add min-h-screen */}
        <Navbar />
        <div className="ml-[180px] min-h-screen text-[#ffffff] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl mb-4">This is the Projects Page</h1>
            <p className="text-sm">still a work in progress :D</p>
          </div>
        </div>
      </div>
    );
}