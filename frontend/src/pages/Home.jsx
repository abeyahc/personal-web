import Navbar from "../components/navbar";

export default function Home() {
    return (
      <div className="min-h-screen bg-[#242424]"> {/* Move bg here and add min-h-screen */}
        <Navbar />
        <div className="ml-[180px] min-h-screen text-[#ffffff] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl mb-4">Hello World!</h1>
            <p className="text-sm">You made it past the loading screen 🎉</p>
          </div>
        </div>
      </div>
    );
}