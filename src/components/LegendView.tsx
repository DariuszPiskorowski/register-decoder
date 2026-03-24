import { LEGEND_SECTIONS } from "@/data/registerData";
import { motion } from "framer-motion";

export function LegendView() {
  return (
    <div className="space-y-8">
      <div className="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground space-y-2">
        <p><strong>Recommended workflow:</strong></p>
        <p>1) Fill Byte Input Low/Mid/High. 2) Read Bit_Matrix / Decoded_Table.</p>
        <p>
          Source:{" "}
          <a
            href="https://www.st.com/resource/en/datasheet/l99dz100g.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            L99DZ100G Datasheet (ST Microelectronics)
          </a>
        </p>
      </div>

      {LEGEND_SECTIONS.map((section, sIdx) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: sIdx * 0.1, duration: 0.4 }}
          className="rounded-lg border border-border bg-card overflow-hidden"
        >
          <div className="bg-primary/10 px-4 py-2">
            <h3 className="font-semibold text-foreground">Legend — {section.title}</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-2 text-left font-semibold text-foreground w-16">Bit</th>
                  <th className="px-4 py-2 text-left font-semibold text-foreground w-40">Name</th>
                  <th className="px-4 py-2 text-center font-semibold text-foreground w-16">Reset</th>
                  <th className="px-4 py-2 text-left font-semibold text-foreground">Description (EN)</th>
                </tr>
              </thead>
              <tbody>
                {section.entries.map((entry, eIdx) => (
                  <motion.tr
                    key={`${section.title}-${entry.bit}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: sIdx * 0.1 + eIdx * 0.02, duration: 0.3 }}
                    className="border-b border-border hover:bg-accent/30 transition-colors"
                  >
                    <td className="px-4 py-2 font-mono text-primary">{entry.bit}</td>
                    <td className="px-4 py-2 font-mono font-medium text-foreground">{entry.name}</td>
                    <td className="px-4 py-2 text-center font-mono text-muted-foreground">{entry.resetValue}</td>
                    <td className="px-4 py-2 text-muted-foreground">{entry.description}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      ))}

      <div className="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground">
        <h4 className="font-semibold text-foreground mb-2">GUI ↔ Datasheet Mapping</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono">
          <div className="flex justify-between"><span>0x30 byte 0</span><span className="text-primary">GSB</span></div>
          <div className="flex justify-between"><span>0x30 bytes 1..3</span><span className="text-primary">SR1 (0x31)</span></div>
          <div className="flex justify-between"><span>0x30 bytes 4..6</span><span className="text-primary">SR2 (0x32)</span></div>
          <div className="flex justify-between"><span>0x30 bytes 7..9</span><span className="text-primary">SR3 (0x33)</span></div>
          <div className="flex justify-between"><span>0x30 bytes 10..12</span><span className="text-primary">SR4 (0x34)</span></div>
          <div className="flex justify-between"><span>0x30 bytes 13..15</span><span className="text-primary">SR5 (0x35)</span></div>
          <div className="flex justify-between"><span>0x30 bytes 16..18</span><span className="text-primary">SR6 (0x36)</span></div>
          <div className="flex justify-between"><span>0x30 bytes 19..21</span><span className="text-primary">SR7 (0x37)</span></div>
          <div className="flex justify-between"><span>0x30 bytes 22..24</span><span className="text-primary">SR8 (0x38)</span></div>
          <div className="flex justify-between"><span>0x30 bytes 25..27</span><span className="text-primary">SR9 (0x39)</span></div>
          <div className="flex justify-between"><span>0x30 bytes 28..30</span><span className="text-primary">SR10 (0x3A)</span></div>
          <div className="flex justify-between"><span>0x30 bytes 31..33</span><span className="text-primary">SR11 (0x3B)</span></div>
          <div className="flex justify-between"><span>0x30 bytes 34..36</span><span className="text-primary">SR12 (0x3C)</span></div>
          <div className="flex justify-between"><span>0x30 bytes 42..44</span><span className="text-primary">CR (0x3F)</span></div>
        </div>
      </div>
    </div>
  );
}
