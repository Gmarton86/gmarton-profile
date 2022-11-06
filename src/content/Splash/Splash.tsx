import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/projects");
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="wave">
        <span style={{ "--item": 1 } as React.CSSProperties}>Z</span>
        <span style={{ "--item": 2 } as React.CSSProperties}>U</span>
        <span style={{ "--item": 3 } as React.CSSProperties}>R</span>
        <span style={{ "--item": 4 } as React.CSSProperties}>V</span>
        <span style={{ "--item": 5 } as React.CSSProperties}>I</span>
        <span style={{ "--item": 6 } as React.CSSProperties}>.</span>
        <span style={{ "--item": 7 } as React.CSSProperties}>s</span>
        <span style={{ "--item": 8 } as React.CSSProperties}>k</span>
      </div>
    </div>
  );
};

export default Splash;
