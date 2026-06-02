import { ScriptOnce } from "@tanstack/react-router";
import type { ReactNode } from "react";
import ClerkProvider from "#/integrations/clerk/provider";

const themeScript = `(function() {
  try {
    const theme = localStorage.getItem('theme') || 'auto';
    const resolved = theme === 'auto'
      ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : theme;
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
