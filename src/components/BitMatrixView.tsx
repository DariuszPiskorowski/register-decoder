import { REGISTERS } from "@/data/registerData";
import type { RegisterState } from "@/hooks/useRegisterState";
import { motion } from "framer-motion";

interface BitMatrixViewProps {
  state: RegisterState;
}

export function BitMatrixView({ state }: BitMatrixViewProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground space-y-1">
        <p>Enter bytes on the Byte Input tab. This page displays the combined HEX automatically.</p>
        <p>GUI mapping: 0x30 byte 0 = GSB; then 3 bytes per SR; 0x30 bytes 42..44 = Configuration Register.</p>
      </div>

      {REGISTERS.map((reg, regIdx) => {
        const combinedVal = state.getCombinedValue(reg.key);
        const combinedHex = state.getCombinedHex(reg.key);
        const decVal = combinedVal;

        return (
          <motion.div
            key={reg.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: regIdx * 0.05, duration: 0.4 }}
            className="rounded-lg border border-border bg-card overflow-hidden"
          >
            <div className="flex items-center justify-between bg-primary/10 px-4 py-2">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-foreground">{reg.notes || reg.key}</span>
                <span className="text-xs text-muted-foreground font-mono">Datasheet: {reg.datasheet}</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="text-muted-foreground">Input: Byte_Input</span>
                <span className="rounded bg-primary/20 px-2 py-0.5 text-primary font-semibold">
                  HEX: 0x{combinedHex}
                </span>
                <span className="text-muted-foreground">Dec: {decVal}</span>
              </div>
            </div>

            <div className="overflow-x-auto p-4">
              <table className="w-full text-xs">
                <thead>
                  <tr>
                    <td className="pr-2 py-1 font-semibold text-muted-foreground w-16">Bit #</td>
                    {reg.bits.map((b) => (
                      <td key={b.bit} className="px-1 py-1 text-center font-mono text-muted-foreground min-w-[40px]">
                        {b.bit}
                      </td>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pr-2 py-1 font-semibold text-muted-foreground">Name</td>
                    {reg.bits.map((b) => (
                      <td
                        key={b.bit}
                        className="px-1 py-1 text-center font-mono text-[10px] leading-tight"
                        title={b.description}
                      >
                        <span className={b.name === "Reserved" ? "text-bit-reserved-foreground" : "text-foreground"}>
                          {b.name}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="pr-2 py-1 font-semibold text-muted-foreground">0/1</td>
                    {reg.bits.map((b) => {
                      const val = state.getBitValue(reg.key, b.bit);
                      const isReserved = b.name === "Reserved";
                      const isActive = val === 1;

                      return (
                        <td key={b.bit} className="px-1 py-1 text-center">
                          <motion.div
                            key={`${reg.key}-${b.bit}-${val}`}
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className={`
                              inline-flex items-center justify-center w-8 h-8 rounded font-mono font-bold text-sm transition-colors
                              ${isReserved
                                ? "bg-bit-reserved text-bit-reserved-foreground"
                                : isActive
                                  ? "bg-bit-active text-bit-active-foreground animate-bit-pop"
                                  : "bg-bit-inactive text-bit-inactive-foreground"
                              }
                            `}
                          >
                            {val}
                          </motion.div>
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        );
      })}

      <div className="text-center text-xs text-muted-foreground">
        Source: <a href="https://www.st.com/resource/en/datasheet/l99dz100g.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">L99DZ100G Datasheet (ST Microelectronics)</a>
      </div>
    </div>
  );
}
