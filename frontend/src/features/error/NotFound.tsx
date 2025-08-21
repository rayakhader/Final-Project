import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routePaths";

const NotFound = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleReset = () => {
    setIsAnimating(true);
    window.location.reload();
  };

  return (
    <main className="flex  flex-col items-center justify-center from-slate-50 to-slate-100 px-6 py-24">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-red-100">
            <AlertTriangle className="size-10 text-red-600" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
           Not Found
          </h1>

          <p className="mt-4 text-pretty text-gray-600">
            
          </p>

          <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            <button disabled={isAnimating} onClick={handleReset}>
              <RefreshCw
                className={`size-4 ${isAnimating ? "animate-spin" : ""}`}
              />
              Try Again
            </button>

            <button >
              <Link to={ROUTES.ADMIN}>
                <Home className="size-4" />
               Back Home
              </Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
