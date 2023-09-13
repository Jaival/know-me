// 'use client';
// import { ThemeProvider } from 'next-themes';

// export default function Providers({ children }: { children: React.ReactNode }) {
//   return <ThemeProvider defaultTheme={'dark'}>{children}</ThemeProvider>;
// }

'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export default function Provider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
