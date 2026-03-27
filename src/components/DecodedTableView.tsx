import { REGISTERS } from "@/data/registerData";
import type { RegisterState } from "@/hooks/useRegisterState";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface DecodedTableViewProps {
  state: RegisterState;
}

export function DecodedTableView({ state }: DecodedTableViewProps) {
  const rows: {
    register: string;
    datasheet: string;
    gui: string;
    bit: number;
    inputHex: string;
    bitName: string;
    bitState: number;
    description: string;
  }[] = [];

  REGISTERS.forEach((reg) => {
    const hex = state.getCombinedHex(reg.key);
    reg.bits.forEach((b) => {
      rows.push({
        register: reg.key,
        datasheet: reg.key === "GSB" ? "GSB bits 31..24" : `0x${reg.datasheet.replace("h", "")}`,
        gui: reg.guiView,
        bit: b.bit,
        inputHex: `0x${hex}`,
        bitName: b.name,
        bitState: state.getBitValue(reg.key, b.bit),
        description: b.description,
      });
    });
  });

  const exportPdf = () => {
    const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
    doc.setFontSize(14);
    doc.text("L99DZ100G — Decoded Table", 14, 15);
    doc.setFontSize(8);
    doc.text(`Generated: ${new Date().toLocaleString()}`, 14, 20);

    autoTable(doc, {
      startY: 24,
      head: [["Register", "Datasheet", "GUI", "Bit #", "Input HEX", "Bit name", "State", "Description"]],
      body: rows.map((r) => [r.register, r.datasheet, r.gui, String(r.bit), r.inputHex, r.bitName, String(r.bitState), r.description]),
      styles: { fontSize: 7, cellPadding: 1.5, font: "courier" },
      headStyles: { fillColor: [37, 99, 235], textColor: 255, fontStyle: "bold" },
      bodyStyles: { textColor: 50 },
      alternateRowStyles: { fillColor: [240, 245, 255] },
      didParseCell: (data) => {
        if (data.section === "body" && data.column.index === 6) {
          const val = data.cell.raw as string;
          if (val === "1") {
            data.cell.styles.fillColor = [34, 197, 94];
            data.cell.styles.textColor = 255;
            data.cell.styles.fontStyle = "bold";
          }
        }
      },
    });

    doc.save("L99DZ100G_Decoded_Table.pdf");
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button
          onClick={exportPdf}
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent"
        >
          <Download className="h-3.5 w-3.5" />
          Export PDF
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b-2 border-primary/30 bg-primary/10">
              <th className="px-3 py-2 text-left font-semibold text-foreground">Register</th>
              <th className="px-3 py-2 text-left font-semibold text-foreground">Datasheet</th>
              <th className="px-3 py-2 text-left font-semibold text-foreground">GUI</th>
              <th className="px-3 py-2 text-center font-semibold text-foreground">Bit #</th>
              <th className="px-3 py-2 text-center font-semibold text-foreground">Input HEX</th>
              <th className="px-3 py-2 text-left font-semibold text-foreground">Bit name</th>
              <th className="px-3 py-2 text-center font-semibold text-foreground">State</th>
              <th className="px-3 py-2 text-left font-semibold text-foreground">Description</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => {
              const isActive = row.bitState === 1;
              const isReserved = row.bitName === "Reserved";
              return (
                <motion.tr
                  key={`${row.register}-${row.bit}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.005, duration: 0.2 }}
                  className={`border-b border-border transition-colors ${
                    isActive ? "bg-bit-active/10" : "hover:bg-accent/30"
                  }`}
                >
                  <td className="px-3 py-1.5 font-mono font-semibold text-primary">{row.register}</td>
                  <td className="px-3 py-1.5 font-mono text-muted-foreground">{row.datasheet}</td>
                  <td className="px-3 py-1.5 font-mono text-muted-foreground">{row.gui}</td>
                  <td className="px-3 py-1.5 text-center font-mono">{row.bit}</td>
                  <td className="px-3 py-1.5 text-center font-mono text-muted-foreground">{row.inputHex}</td>
                  <td className={`px-3 py-1.5 font-mono ${isReserved ? "text-bit-reserved-foreground" : "text-foreground"}`}>
                    {row.bitName}
                  </td>
                  <td className="px-3 py-1.5 text-center">
                    <span
                      className={`inline-flex w-6 h-6 items-center justify-center rounded font-mono font-bold text-xs ${
                        isReserved
                          ? "bg-bit-reserved text-bit-reserved-foreground"
                          : isActive
                            ? "bg-bit-active text-bit-active-foreground"
                            : "bg-bit-inactive text-bit-inactive-foreground"
                      }`}
                    >
                      {row.bitState}
                    </span>
                  </td>
                  <td className="px-3 py-1.5 text-muted-foreground">{row.description}</td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
