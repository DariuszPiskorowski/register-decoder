import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useRegisterState } from "@/hooks/useRegisterState";
import { useTheme } from "@/hooks/useTheme";
import { ByteInputView } from "@/components/ByteInputView";
import { BitMatrixView } from "@/components/BitMatrixView";
import { DecodedTableView } from "@/components/DecodedTableView";
import { LegendView } from "@/components/LegendView";

const TABS = [
  { id: "byte_input", label: "Byte Input" },
  { id: "bit_matrix", label: "Bit_Matrix" },
  { id: "decoded_table", label: "Decoded_Table" },
  { id: "legend", label: "Legend" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabId>("byte_input");
  const registerState = useRegisterState();
  const { isDark, toggle } = useTheme();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <span className="font-mono text-xs font-bold text-primary-foreground">L99</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground leading-tight">L99DZ100G Register Decoder</h1>
              <p className="text-xs text-muted-foreground">bit-level analysis</p>
            </div>
          </div>

          <button
            onClick={toggle}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card transition-colors hover:bg-accent"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4 text-foreground" /> : <Moon className="h-4 w-4 text-foreground" />}
          </button>
        </div>

        {/* Tabs */}
        <div className="mx-auto max-w-7xl px-4">
          <nav className="flex gap-1 -mb-px">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-x-0 -bottom-px h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {activeTab === "byte_input" && <ByteInputView state={registerState} />}
            {activeTab === "bit_matrix" && <BitMatrixView state={registerState} />}
            {activeTab === "decoded_table" && <DecodedTableView state={registerState} />}
            {activeTab === "legend" && <LegendView />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-3 text-center">
        <span className="text-[10px] text-muted-foreground tracking-wider">
          Created by Dariusz Piskorowski 2026
        </span>
      </footer>
    </div>
  );
};

export default Index;
