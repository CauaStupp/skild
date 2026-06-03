import { ClerkProvider } from "@clerk/tanstack-react-start";
import { ScriptOnce } from "@tanstack/react-router";
import type { ReactNode } from "react";

const themeScript = `(function() {
  try {
    const theme = localStorage.getItem('theme') || 'auto';
    const validThemes = ['dark', 'light', 'auto'];
    const safeTheme = validThemes.includes(theme) ? theme : 'auto';
    const resolved = safeTheme === 'auto'
      ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : safeTheme;
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(resolved);
  } catch (e) {}
})();`;
function ThemeProvider({ children }: { children: ReactNode }) {
	return (
		<>
			{/** biome-ignore lint/correctness/noChildrenProp: <explanation> */}
			<ScriptOnce children={themeScript} />
			{children}
		</>
	);
}

function Providers({ children }: { children: ReactNode }) {
	return (
		<ClerkProvider>
			<ThemeProvider>{children}</ThemeProvider>
		</ClerkProvider>
	);
}

export default Providers;
