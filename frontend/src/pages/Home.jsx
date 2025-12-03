import Navbar from "../components/navbar";

export default function Home() {
    return (
      <div className="m-0 p-0">
        <Navbar />
        <div className="min-h-screen bg-[#242424] text-[#ffffff] pt-56 px-6 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl mb-4">Hello World!</h1>
            <p className="text-sm">You made it past the loading screen 🎉</p>
          </div>
        </div>
      </div>
    );
}