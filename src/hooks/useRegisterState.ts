import { useState, useCallback, useMemo } from "react";
import { REGISTERS, parseHexByte, combineBytes, toHex, getBit } from "@/data/registerData";

export interface RegisterInput {
  low: string;
  mid: string;
  high: string;
}

export interface RegisterState {
  inputs: Record<string, RegisterInput>;
  setByteInput: (key: string, field: "low" | "mid" | "high", value: string) => void;
  getCombinedValue: (key: string) => number;
  getCombinedHex: (key: string) => string;
  getBitValue: (key: string, bitPos: number) => number;
  clearAll: () => void;
}

function createEmptyInputs(): Record<string, RegisterInput> {
  const inputs: Record<string, RegisterInput> = {};
  REGISTERS.forEach((r) => {
    inputs[r.key] = { low: "", mid: "", high: "" };
  });
  return inputs;
}

export function useRegisterState(): RegisterState {
  const [inputs, setInputs] = useState<Record<string, RegisterInput>>(createEmptyInputs);

  const setByteInput = useCallback((key: string, field: "low" | "mid" | "high", value: string) => {
    setInputs((prev) => ({
      ...prev,
      [key]: { ...prev[key], [field]: value },
    }));
  }, []);

  const getCombinedValue = useCallback(
    (key: string): number => {
      const inp = inputs[key];
      if (!inp) return 0;
      return combineBytes(parseHexByte(inp.low), parseHexByte(inp.mid), parseHexByte(inp.high));
    },
    [inputs]
  );

  const getCombinedHex = useCallback(
    (key: string): string => {
      const reg = REGISTERS.find((r) => r.key === key);
      if (!reg) return "00";
      const val = getCombinedValue(key);
      return reg.hasMiddleHigh ? toHex(val, 6) : toHex(val & 0xFF, 2);
    },
    [getCombinedValue]
  );

  const getBitValue = useCallback(
    (key: string, bitPos: number): number => {
      return getBit(getCombinedValue(key), bitPos);
    },
    [getCombinedValue]
  );

  const clearAll = useCallback(() => {
    setInputs(createEmptyInputs());
  }, []);

  return { inputs, setByteInput, getCombinedValue, getCombinedHex, getBitValue, clearAll };
}
