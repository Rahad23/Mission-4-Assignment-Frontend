import { useEffect } from "react";

const PageRefreshWarning = () => {
  useEffect(() => {
    // Handler for the beforeunload event
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // Set the warning message
      const message =
        "You have unsaved changes. Are you sure you want to leave?";
      event.returnValue = message; // For modern browsers
      return message; // For older browsers
    };

    // Add the event listener
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return null; // This component does not render anything
};

export default PageRefreshWarning;
