import { useState } from "react";

export const useDashboard = () => {
  const [duration, setDutation] = useState(false);
  const handleDuration = (state) => {
    setDutation(state);
  };

  return {
    handleDuration,
    duration,
    setDutation,
  };
};
