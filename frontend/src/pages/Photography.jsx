import Navbar from "../components/NavBar";

export default function Photography() {
    return (
      <div className="min-h-screen bg-[#242424]">
        <Navbar />
        <div className="photography-content min-h-screen text-[#ffffff] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl mb-4">This is the Photography Page</h1>
            <p className="text-sm">still a work in progress :D</p>
          </div>
        </div>

        <style>{`
          /* Mobile styles (default) */
          .photography-content {
            margin-left: 0;
          }

          /* Desktop styles */
          @media (min-width: 1024px) {
            .photography-content {
              margin-left: 300px;
            }
          }
        `}</style>
      </div>
    );
}