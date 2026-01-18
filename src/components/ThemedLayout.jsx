import { useTheme } from "../context/ThemeContext";
import Header from "./Header";

const ThemedLayout = () => {
  const { theme } = useTheme();
  return (
    <div className={`app-container ${theme}-mode`}>
      <Header />

      <main className="page-content">
        <h1>Theme Switcher Assignment</h1>
        <p>
          This is some dummy text. The background and text color around me are
          changing based on the global context!
        </p>
      </main>
    </div>
  );
};

export default ThemedLayout;
