import { useState } from "react";

export const useDashboard = () => {
  const [duration, setDutation] = useState(false);
  const handleDuration = () => {
    setDutation((prev) => !prev);
  };

  return {
    handleDuration,
    duration,
    setDutation,
  };
};
