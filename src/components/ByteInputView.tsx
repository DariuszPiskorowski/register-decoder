import { REGISTERS } from "@/data/registerData";
import type { RegisterState } from "@/hooks/useRegisterState";
import { motion } from "framer-motion";

interface ByteInputViewProps {
  state: RegisterState;
}

export function ByteInputView({ state }: ByteInputViewProps) {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground space-y-1">
        <p>Enter GUI bytes separately: Low / Mid / High. The app auto-builds the full HEX as High-Mid-Low.</p>
        <p>Accepted byte formats: <span className="font-mono text-foreground">0C</span> / <span className="font-mono text-foreground">0x0C</span> / <span className="font-mono text-foreground">0Ch</span>. GSB uses only Byte L/GSB.</p>
      </div>

      <div className="flex justify-end">
        <button
          onClick={state.clearAll}
          className="rounded-md bg-destructive px-3 py-1.5 text-xs font-medium text-destructive-foreground transition-colors hover:opacity-90"
        >
          Clear All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-primary/10">
              <th className="px-3 py-2 text-left font-semibold text-foreground">Register</th>
              <th className="px-3 py-2 text-left font-semibold text-foreground">Datasheet</th>
              <th className="px-3 py-2 text-left font-semibold text-foreground">GUI view</th>
              <th className="px-3 py-2 text-center font-semibold text-foreground">Byte L / GSB</th>
              <th className="px-3 py-2 text-center font-semibold text-foreground">Byte M</th>
              <th className="px-3 py-2 text-center font-semibold text-foreground">Byte H</th>
              <th className="px-3 py-2 text-center font-semibold text-foreground">Combined HEX</th>
              <th className="px-3 py-2 text-left font-semibold text-foreground">Notes</th>
            </tr>
          </thead>
          <tbody>
            {REGISTERS.map((reg, idx) => (
              <motion.tr
                key={reg.key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.03, duration: 0.3 }}
                className="border-b border-border hover:bg-accent/50 transition-colors"
              >
                <td className="px-3 py-2 font-mono font-semibold text-primary">{reg.key}</td>
                <td className="px-3 py-2 font-mono text-muted-foreground">{reg.datasheet}</td>
                <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{reg.guiView}</td>
                <td className="px-3 py-2">
                  <input
                    type="text"
                    maxLength={4}
                    value={state.inputs[reg.key]?.low || ""}
                    onChange={(e) => state.setByteInput(reg.key, "low", e.target.value)}
                    placeholder="00"
                    className="w-16 rounded border border-input bg-background px-2 py-1 text-center font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </td>
                <td className="px-3 py-2">
                  {reg.hasMiddleHigh ? (
                    <input
                      type="text"
                      maxLength={4}
                      value={state.inputs[reg.key]?.mid || ""}
                      onChange={(e) => state.setByteInput(reg.key, "mid", e.target.value)}
                      placeholder="00"
                      className="w-16 rounded border border-input bg-background px-2 py-1 text-center font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  ) : (
                    <span className="text-muted-foreground">—</span>
                  )}
                </td>
                <td className="px-3 py-2">
                  {reg.hasMiddleHigh ? (
                    <input
                      type="text"
                      maxLength={4}
                      value={state.inputs[reg.key]?.high || ""}
                      onChange={(e) => state.setByteInput(reg.key, "high", e.target.value)}
                      placeholder="00"
                      className="w-16 rounded border border-input bg-background px-2 py-1 text-center font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  ) : (
                    <span className="text-muted-foreground">—</span>
                  )}
                </td>
                <td className="px-3 py-2 text-center">
                  <span className="rounded bg-primary/10 px-2 py-1 font-mono text-sm font-semibold text-primary">
                    0x{state.getCombinedHex(reg.key)}
                  </span>
                </td>
                <td className="px-3 py-2 text-xs text-muted-foreground">{reg.notes}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-lg border border-border bg-card p-3 text-xs text-muted-foreground">
        <strong>Quick rule:</strong> If GUI shows Low=AA, Mid=BB, High=CC, the Combined HEX becomes CCBBAA.
      </div>
    </div>
  );
}
