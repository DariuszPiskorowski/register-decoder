export interface RegisterDef {
  key: string;
  datasheet: string;
  guiView: string;
  notes: string;
  hasMiddleHigh: boolean; // GSB has only Low byte
  bits: BitDef[];
}

export interface BitDef {
  bit: number;
  name: string;
  description: string;
  resetValue: number;
}

export interface LegendEntry {
  bit: number;
  name: string;
  resetValue: string;
  description: string;
}

export interface LegendSection {
  title: string;
  entries: LegendEntry[];
}

export const REGISTERS: RegisterDef[] = [
  {
    key: "GSB",
    datasheet: "GSB",
    guiView: "0x30 byte 0",
    notes: "Global Status Byte (only Byte L is used).",
    hasMiddleHigh: false,
    bits: [
      { bit: 7, name: "GSBN", description: "Global Status Bit Inverted", resetValue: 1 },
      { bit: 6, name: "RSTB", description: "Reset bit", resetValue: 0 },
      { bit: 5, name: "SPIE", description: "SPI error", resetValue: 0 },
      { bit: 4, name: "PLE", description: "Physical layer error", resetValue: 0 },
      { bit: 3, name: "FE", description: "Functional error", resetValue: 0 },
      { bit: 2, name: "DE", description: "Device error", resetValue: 0 },
      { bit: 1, name: "GW", description: "Global warning", resetValue: 0 },
      { bit: 0, name: "FS", description: "Fail-safe state", resetValue: 0 },
    ],
  },
  {
    key: "SR1",
    datasheet: "31h",
    guiView: "0x30 bytes 1..3",
    notes: "Status Register 1",
    hasMiddleHigh: true,
    bits: [
      { bit: 23, name: "Reserved", description: "—", resetValue: 0 },
      { bit: 22, name: "WU_STATE", description: "WU input live state", resetValue: 0 },
      { bit: 21, name: "Reserved", description: "—", resetValue: 0 },
      { bit: 20, name: "WU_WAKE", description: "Wake-up by WU", resetValue: 0 },
      { bit: 19, name: "WAKE_CAN", description: "Wake-up by CAN", resetValue: 0 },
      { bit: 18, name: "WAKE_LIN", description: "Wake-up by LIN", resetValue: 0 },
      { bit: 17, name: "WAKE_TIMER", description: "Wake-up by Timer", resetValue: 0 },
      { bit: 16, name: "DEBUG_ACTIVE", description: "Debug mode active", resetValue: 0 },
      { bit: 15, name: "V1UV", description: "V1 undervoltage", resetValue: 0 },
      { bit: 14, name: "V1_RESTART_2", description: "V1 restart counter bit 2", resetValue: 0 },
      { bit: 13, name: "V1_RESTART_1", description: "V1 restart counter bit 1", resetValue: 0 },
      { bit: 12, name: "V1_RESTART_0", description: "V1 restart counter bit 0", resetValue: 0 },
      { bit: 11, name: "WDFAIL_CNT_3", description: "Watchdog failure counter bit 3", resetValue: 0 },
      { bit: 10, name: "WDFAIL_CNT_2", description: "Watchdog failure counter bit 2", resetValue: 0 },
      { bit: 9, name: "WDFAIL_CNT_1", description: "Watchdog failure counter bit 1", resetValue: 0 },
      { bit: 8, name: "WDFAIL_CNT_0", description: "Watchdog failure counter bit 0", resetValue: 0 },
      { bit: 7, name: "DEVICE_STATE_1", description: "Previous device state bit 1", resetValue: 0 },
      { bit: 6, name: "DEVICE_STATE_0", description: "Previous device state bit 0", resetValue: 0 },
      { bit: 5, name: "TSD2", description: "Thermal shutdown 2 reached", resetValue: 0 },
      { bit: 4, name: "TSD1", description: "Thermal shutdown 1 reached", resetValue: 0 },
      { bit: 3, name: "FORCED_SLEEP_TSD2/V1SC", description: "Forced Vbat_standby by TSD2 or V1 short", resetValue: 0 },
      { bit: 2, name: "FORCED_SLEEP_WD", description: "Forced Vbat_standby by watchdog failures", resetValue: 0 },
      { bit: 1, name: "WDFAIL", description: "Watchdog failure", resetValue: 0 },
      { bit: 0, name: "VPOR", description: "VS power-on reset threshold reached", resetValue: 0 },
    ],
  },
  {
    key: "SR2",
    datasheet: "32h",
    guiView: "0x30 bytes 4..6",
    notes: "Status Register 2",
    hasMiddleHigh: true,
    bits: [
      { bit: 23, name: "LIN_PERM_DOM", description: "LIN bus dominant too long", resetValue: 0 },
      { bit: 22, name: "LIN_TXD_DOM", description: "TxDL dominant too long", resetValue: 0 },
      { bit: 21, name: "LIN_PERM_REC", description: "LIN bus does not follow TxDL", resetValue: 0 },
      { bit: 20, name: "CAN_RXD_REC", description: "RxDC has not followed TxDC", resetValue: 0 },
      { bit: 19, name: "CAN_PERM_REC", description: "CAN bus did not follow TxDC", resetValue: 0 },
      { bit: 18, name: "CAN_PERM_DOM", description: "CAN bus dominant too long", resetValue: 0 },
      { bit: 17, name: "CAN_TXD_DOM", description: "TxDC dominant too long", resetValue: 0 },
      { bit: 16, name: "CAN_SUP_LOW", description: "CAN supply low", resetValue: 0 },
      { bit: 15, name: "DSMON_HS2", description: "Drain-source monitor HS2", resetValue: 0 },
      { bit: 14, name: "DSMON_HS1", description: "Drain-source monitor HS1", resetValue: 0 },
      { bit: 13, name: "DSMON_LS2", description: "Drain-source monitor LS2", resetValue: 0 },
      { bit: 12, name: "DSMON_LS1", description: "Drain-source monitor LS1", resetValue: 0 },
      { bit: 11, name: "SPI_INV_CMD", description: "Invalid SPI command", resetValue: 0 },
      { bit: 10, name: "SPI_SCK_CNT", description: "SPI wrong number of clock cycles", resetValue: 0 },
      { bit: 9, name: "CP_LOW", description: "Charge pump low", resetValue: 0 },
      { bit: 8, name: "TW", description: "Thermal warning", resetValue: 0 },
      { bit: 7, name: "V2SC", description: "V2 short circuit", resetValue: 0 },
      { bit: 6, name: "V2FAIL", description: "V2 fail event", resetValue: 0 },
      { bit: 5, name: "V1FAIL", description: "V1 fail event", resetValue: 0 },
      { bit: 4, name: "VSREG_EW", description: "VSREG early warning", resetValue: 0 },
      { bit: 3, name: "VSREG_OV", description: "VSREG overvoltage", resetValue: 0 },
      { bit: 2, name: "VSREG_UV", description: "VSREG undervoltage", resetValue: 0 },
      { bit: 1, name: "VS_OV", description: "VS overvoltage", resetValue: 0 },
      { bit: 0, name: "VS_UV", description: "VS undervoltage", resetValue: 0 },
    ],
  },
  {
    key: "SR3",
    datasheet: "33h",
    guiView: "0x30 bytes 7..9",
    notes: "Status Register 3",
    hasMiddleHigh: true,
    bits: [
      { bit: 23, name: "OUT1_HS_OC_TH_EX", description: "Overcurrent shutdown / thermal expiration", resetValue: 0 },
      { bit: 22, name: "OUT1_LS_OC_TH_EX", description: "Overcurrent shutdown / thermal expiration", resetValue: 0 },
      { bit: 21, name: "OUT2_HS_OC_TH_EX", description: "Overcurrent shutdown / thermal expiration", resetValue: 0 },
      { bit: 20, name: "OUT2_LS_OC_TH_EX", description: "Overcurrent shutdown / thermal expiration", resetValue: 0 },
      { bit: 19, name: "OUT3_HS_OC_TH_EX", description: "Overcurrent shutdown / thermal expiration", resetValue: 0 },
      { bit: 18, name: "OUT3_LS_OC_TH_EX", description: "Overcurrent shutdown / thermal expiration", resetValue: 0 },
      { bit: 17, name: "OUT4_HS_OC_TH_EX", description: "Overcurrent shutdown / thermal expiration", resetValue: 0 },
      { bit: 16, name: "OUT4_LS_OC_TH_EX", description: "Overcurrent shutdown / thermal expiration", resetValue: 0 },
      { bit: 15, name: "OUT5_HS_OC_TH_EX", description: "Overcurrent shutdown / thermal expiration", resetValue: 0 },
      { bit: 14, name: "OUT5_LS_OC_TH_EX", description: "Overcurrent shutdown / thermal expiration", resetValue: 0 },
      { bit: 13, name: "OUT6_HS_OC_TH_EX", description: "Overcurrent shutdown / thermal expiration", resetValue: 0 },
      { bit: 12, name: "OUT6_LS_OC_TH_EX", description: "Overcurrent shutdown / thermal expiration", resetValue: 0 },
      { bit: 11, name: "OUT7_OC_TH_EX", description: "Overcurrent shutdown / thermal expiration", resetValue: 0 },
      { bit: 10, name: "OUT8_OC_TH_EX", description: "Overcurrent shutdown / thermal expiration", resetValue: 0 },
      { bit: 9, name: "OUT9_OC", description: "Overcurrent shutdown", resetValue: 0 },
      { bit: 8, name: "OUT10_OC", description: "Overcurrent shutdown", resetValue: 0 },
      { bit: 7, name: "OUT11_OC", description: "Overcurrent shutdown", resetValue: 0 },
      { bit: 6, name: "OUT12_OC", description: "Overcurrent shutdown", resetValue: 0 },
      { bit: 5, name: "OUT13_OC", description: "Overcurrent shutdown", resetValue: 0 },
      { bit: 4, name: "OUT14_OC", description: "Overcurrent shutdown", resetValue: 0 },
      { bit: 3, name: "OUT15_OC", description: "Overcurrent shutdown", resetValue: 0 },
      { bit: 2, name: "OUTHS_OC_TH_EX", description: "Overcurrent shutdown / thermal expiration", resetValue: 0 },
      { bit: 1, name: "LS2FSO_OC", description: "Fail-safe low-side 2 overcurrent", resetValue: 0 },
      { bit: 0, name: "LS1FSO_OC", description: "Fail-safe low-side 1 overcurrent", resetValue: 0 },
    ],
  },
  {
    key: "SR4",
    datasheet: "34h",
    guiView: "0x30 bytes 10..12",
    notes: "Status Register 4",
    hasMiddleHigh: true,
    bits: [
      { bit: 23, name: "OUT1_HS_OCR_ALERT", description: "Autorecovery alert", resetValue: 0 },
      { bit: 22, name: "OUT1_LS_OCR_ALERT", description: "Autorecovery alert", resetValue: 0 },
      { bit: 21, name: "OUT2_HS_OCR_ALERT", description: "Autorecovery alert", resetValue: 0 },
      { bit: 20, name: "OUT2_LS_OCR_ALERT", description: "Autorecovery alert", resetValue: 0 },
      { bit: 19, name: "OUT3_HS_OCR_ALERT", description: "Autorecovery alert", resetValue: 0 },
      { bit: 18, name: "OUT3_LS_OCR_ALERT", description: "Autorecovery alert", resetValue: 0 },
      { bit: 17, name: "OUT4_HS_OCR_ALERT", description: "Autorecovery alert", resetValue: 0 },
      { bit: 16, name: "OUT4_LS_OCR_ALERT", description: "Autorecovery alert", resetValue: 0 },
      { bit: 15, name: "OUT5_HS_OCR_ALERT", description: "Autorecovery alert", resetValue: 0 },
      { bit: 14, name: "OUT5_LS_OCR_ALERT", description: "Autorecovery alert", resetValue: 0 },
      { bit: 13, name: "OUT6_HS_OCR_ALERT", description: "Autorecovery alert", resetValue: 0 },
      { bit: 12, name: "OUT6_LS_OCR_ALERT", description: "Autorecovery alert", resetValue: 0 },
      { bit: 11, name: "OUT7_OCR_ALERT", description: "Autorecovery alert", resetValue: 0 },
      { bit: 10, name: "OUT8_OCR_ALERT", description: "Autorecovery alert", resetValue: 0 },
      { bit: 9, name: "Reserved", description: "—", resetValue: 0 },
      { bit: 8, name: "Reserved", description: "—", resetValue: 0 },
      { bit: 7, name: "Reserved", description: "—", resetValue: 0 },
      { bit: 6, name: "Reserved", description: "—", resetValue: 0 },
      { bit: 5, name: "Reserved", description: "—", resetValue: 0 },
      { bit: 4, name: "Reserved", description: "—", resetValue: 0 },
      { bit: 3, name: "Reserved", description: "—", resetValue: 0 },
      { bit: 2, name: "OUTHS_OCR_ALERT", description: "Autorecovery alert", resetValue: 0 },
      { bit: 1, name: "DSMON_HEAT", description: "Heater drain-source monitor", resetValue: 0 },
      { bit: 0, name: "ECV_OC", description: "Electrochrome overcurrent", resetValue: 0 },
    ],
  },
  {
    key: "SR5",
    datasheet: "35h",
    guiView: "0x30 bytes 13..15",
    notes: "Status Register 5",
    hasMiddleHigh: true,
    bits: [
      { bit: 23, name: "OUT1_HS_OL", description: "Open-load", resetValue: 0 },
      { bit: 22, name: "OUT1_LS_OL", description: "Open-load", resetValue: 0 },
      { bit: 21, name: "OUT2_HS_OL", description: "Open-load", resetValue: 0 },
      { bit: 20, name: "OUT2_LS_OL", description: "Open-load", resetValue: 0 },
      { bit: 19, name: "OUT3_HS_OL", description: "Open-load", resetValue: 0 },
      { bit: 18, name: "OUT3_LS_OL", description: "Open-load", resetValue: 0 },
      { bit: 17, name: "OUT4_HS_OL", description: "Open-load", resetValue: 0 },
      { bit: 16, name: "OUT4_LS_OL", description: "Open-load", resetValue: 0 },
      { bit: 15, name: "OUT5_HS_OL", description: "Open-load", resetValue: 0 },
      { bit: 14, name: "OUT5_LS_OL", description: "Open-load", resetValue: 0 },
      { bit: 13, name: "OUT6_HS_OL", description: "Open-load", resetValue: 0 },
      { bit: 12, name: "OUT6_LS_OL", description: "Open-load", resetValue: 0 },
      { bit: 11, name: "OUT7_OL", description: "Open-load", resetValue: 0 },
      { bit: 10, name: "OUT8_OL", description: "Open-load", resetValue: 0 },
      { bit: 9, name: "OUT9_OL", description: "Open-load", resetValue: 0 },
      { bit: 8, name: "OUT10_OL", description: "Open-load", resetValue: 0 },
      { bit: 7, name: "OUT11_OL", description: "Open-load", resetValue: 0 },
      { bit: 6, name: "OUT12_OL", description: "Open-load", resetValue: 0 },
      { bit: 5, name: "OUT13_OL", description: "Open-load", resetValue: 0 },
      { bit: 4, name: "OUT14_OL", description: "Open-load", resetValue: 0 },
      { bit: 3, name: "OUT15_OL", description: "Open-load", resetValue: 0 },
      { bit: 2, name: "OUTHS_OL", description: "Open-load", resetValue: 0 },
      { bit: 1, name: "GH_OL", description: "Gate heater open-load", resetValue: 0 },
      { bit: 0, name: "ECV_OL", description: "Electrochrome open-load", resetValue: 0 },
    ],
  },
  {
    key: "SR6",
    datasheet: "36h",
    guiView: "0x30 bytes 16..18",
    notes: "Status Register 6",
    hasMiddleHigh: true,
    bits: [
      { bit: 23, name: "WD_TIMER_STATE_1", description: "Watchdog timer state bit 1", resetValue: 0 },
      { bit: 22, name: "WD_TIMER_STATE_0", description: "Watchdog timer state bit 0", resetValue: 0 },
      { bit: 21, name: "Reserved", description: "—", resetValue: 0 },
      { bit: 20, name: "Reserved", description: "—", resetValue: 0 },
      { bit: 19, name: "Reserved", description: "—", resetValue: 0 },
      { bit: 18, name: "Reserved", description: "—", resetValue: 0 },
      { bit: 17, name: "ECV_VNR", description: "Electrochrome voltage not reached", resetValue: 0 },
      { bit: 16, name: "ECV_VHI", description: "Electrochrome voltage high", resetValue: 0 },
      { bit: 15, name: "Reserved", description: "—", resetValue: 0 },
      { bit: 14, name: "Reserved", description: "—", resetValue: 0 },
      { bit: 13, name: "TW_CL6", description: "Thermal warning cluster 6", resetValue: 0 },
      { bit: 12, name: "TW_CL5", description: "Thermal warning cluster 5", resetValue: 0 },
      { bit: 11, name: "TW_CL4", description: "Thermal warning cluster 4", resetValue: 0 },
      { bit: 10, name: "TW_CL3", description: "Thermal warning cluster 3", resetValue: 0 },
      { bit: 9, name: "TW_CL2", description: "Thermal warning cluster 2", resetValue: 0 },
      { bit: 8, name: "TW_CL1", description: "Thermal warning cluster 1", resetValue: 0 },
      { bit: 7, name: "Reserved", description: "—", resetValue: 0 },
      { bit: 6, name: "Reserved", description: "—", resetValue: 0 },
      { bit: 5, name: "TSD1_CL6", description: "Thermal shutdown 1 cluster 6", resetValue: 0 },
      { bit: 4, name: "TSD1_CL5", description: "Thermal shutdown 1 cluster 5", resetValue: 0 },
      { bit: 3, name: "TSD1_CL4", description: "Thermal shutdown 1 cluster 4", resetValue: 0 },
      { bit: 2, name: "TSD1_CL3", description: "Thermal shutdown 1 cluster 3", resetValue: 0 },
      { bit: 1, name: "TSD1_CL2", description: "Thermal shutdown 1 cluster 2", resetValue: 0 },
      { bit: 0, name: "TSD1_CL1", description: "Thermal shutdown 1 cluster 1", resetValue: 0 },
    ],
  },
  {
    key: "SR12",
    datasheet: "3Ch",
    guiView: "0x30 bytes 34..36",
    notes: "Status Register 12",
    hasMiddleHigh: true,
    bits: [
      { bit: 23, name: "Reserved", description: "—", resetValue: 0 },
      { bit: 22, name: "Reserved", description: "—", resetValue: 0 },
      { bit: 21, name: "Reserved", description: "—", resetValue: 0 },
      { bit: 20, name: "FECNT_4", description: "Frame error counter bit 4", resetValue: 0 },
      { bit: 19, name: "FECNT_3", description: "Frame error counter bit 3", resetValue: 0 },
      { bit: 18, name: "FECNT_2", description: "Frame error counter bit 2", resetValue: 0 },
      { bit: 17, name: "FECNT_1", description: "Frame error counter bit 1", resetValue: 0 },
      { bit: 16, name: "FECNT_0", description: "Frame error counter bit 0", resetValue: 0 },
      { bit: 15, name: "Reserved", description: "—", resetValue: 0 },
      { bit: 14, name: "SWRD_CR29", description: "Selective wake register 29 read done", resetValue: 0 },
      { bit: 13, name: "SWRD_CR28", description: "Selective wake register 28 read done", resetValue: 0 },
      { bit: 12, name: "SWRD_CR27", description: "Selective wake register 27 read done", resetValue: 0 },
      { bit: 11, name: "SWRD_CR26", description: "Selective wake register 26 read done", resetValue: 0 },
      { bit: 10, name: "SWRD_CR25", description: "Selective wake register 25 read done", resetValue: 0 },
      { bit: 9, name: "SWRD_CR24", description: "Selective wake register 24 read done", resetValue: 0 },
      { bit: 8, name: "SWRD_CR23", description: "Selective wake register 23 read done", resetValue: 0 },
      { bit: 7, name: "SYSERR", description: "CAN system error", resetValue: 0 },
      { bit: 6, name: "OSC_FAIL", description: "CAN selective wake oscillator failure", resetValue: 0 },
      { bit: 5, name: "CAN_SILENT", description: "CAN bus silence live status", resetValue: 0 },
      { bit: 4, name: "TX_SYNC", description: "CAN transceiver reference oscillator synchronized", resetValue: 0 },
      { bit: 3, name: "CANTO", description: "CAN communication timeout", resetValue: 0 },
      { bit: 2, name: "WUP", description: "Wake-up pattern flag", resetValue: 0 },
      { bit: 1, name: "WUF", description: "Wake-up frame flag", resetValue: 0 },
      { bit: 0, name: "FDERR", description: "Frame detect error", resetValue: 0 },
    ],
  },
  {
    key: "CR",
    datasheet: "3Fh",
    guiView: "0x30 bytes 42..44",
    notes: "Configuration Register",
    hasMiddleHigh: true,
    bits: [
      { bit: 23, name: "WU_CONFIG", description: "WU pin config", resetValue: 1 },
      { bit: 22, name: "LIN_WU_CONFIG", description: "LIN wake-up config", resetValue: 0 },
      { bit: 21, name: "LIN_HS_EN", description: "LIN high-speed enable", resetValue: 0 },
      { bit: 20, name: "TSD_CONFIG", description: "Thermal shutdown behavior", resetValue: 0 },
      { bit: 19, name: "ECV_HV", description: "Electrochrome max voltage", resetValue: 0 },
      { bit: 18, name: "DM", description: "H-bridge dual motor mode", resetValue: 0 },
      { bit: 17, name: "ICMP_CONFIG_EN", description: "Allow ICMP write on next SPI cmd", resetValue: 0 },
      { bit: 16, name: "WD_CONFIG_EN", description: "Allow watchdog config write on next SPI cmd", resetValue: 0 },
      { bit: 15, name: "MASK_OL_HS1", description: "Mask HS1 open-load from GSBN", resetValue: 0 },
      { bit: 14, name: "MASK_OL_LS1", description: "Mask LS1 open-load from GSBN", resetValue: 0 },
      { bit: 13, name: "MASK_TW", description: "Mask thermal warning from GSBN", resetValue: 0 },
      { bit: 12, name: "MASK_EC_OL", description: "Mask ECV/OUT10 open-load from GSBN", resetValue: 0 },
      { bit: 11, name: "MASK_OL", description: "Mask all open-load from GSBN", resetValue: 0 },
      { bit: 10, name: "MASK_SPIE", description: "Mask SPI error from GSBN", resetValue: 0 },
      { bit: 9, name: "MASK_PLE", description: "Mask physical layer error from GSBN", resetValue: 0 },
      { bit: 8, name: "MASK_GW", description: "Mask global warning from GSBN", resetValue: 0 },
      { bit: 7, name: "CP_OFF_EN", description: "Allow CP_OFF write on next SPI cmd", resetValue: 0 },
      { bit: 6, name: "CP_LOW_CONFIG", description: "CP_LOW live/latched behavior", resetValue: 0 },
      { bit: 5, name: "CP_DITH_DIS", description: "Disable charge-pump dithering", resetValue: 0 },
      { bit: 4, name: "FS_FORCED", description: "Force fail-safe low-sides ON", resetValue: 0 },
      { bit: 3, name: "CAN_SUP_5V2_EN", description: "Supply CAN from V2", resetValue: 0 },
      { bit: 2, name: "Reserved", description: "—", resetValue: 0 },
      { bit: 1, name: "Reserved", description: "—", resetValue: 0 },
      { bit: 0, name: "TRIG", description: "Watchdog trigger bit", resetValue: 1 },
    ],
  },
];

export const LEGEND_SECTIONS: LegendSection[] = [
  {
    title: "GSB — Global Status Byte",
    entries: [
      { bit: 31, name: "GSBN", resetValue: "1", description: "Inverted global status bit; 0 means at least one of bits 24..30 is active." },
      { bit: 30, name: "RSTB", resetValue: "0", description: "Indicates the device generated a reset." },
      { bit: 29, name: "SPIE", resetValue: "0", description: "SPI communication error." },
      { bit: 28, name: "PLE", resetValue: "0", description: "LIN/CAN physical-layer error." },
      { bit: 27, name: "FE", resetValue: "0", description: "Functional error from output/diagnostic blocks." },
      { bit: 26, name: "DE", resetValue: "0", description: "Device/global error, e.g. CP_LOW or supply faults." },
      { bit: 25, name: "GW", resetValue: "0", description: "Global warning, e.g. thermal warning." },
      { bit: 24, name: "FS", resetValue: "0", description: "Fail-Safe mode active." },
    ],
  },
  {
    title: "Configuration Register (0x3F)",
    entries: [
      { bit: 23, name: "WU_CONFIG", resetValue: "1", description: "1 = WU pin used for voltage measurement; 0 = WU pin used as wake-up input." },
      { bit: 22, name: "LIN_WU_CONFIG", resetValue: "0", description: "Selects LIN wake-up behavior." },
      { bit: 21, name: "LIN_HS_EN", resetValue: "0", description: "1 = LIN high-speed / flashing mode." },
      { bit: 20, name: "TSD_CONFIG", resetValue: "0", description: "1 = selective cluster shutdown at TSD1." },
      { bit: 19, name: "ECV_HV", resetValue: "0", description: "Raises electrochrome controller max voltage to 1.5 V instead of 1.2 V." },
      { bit: 18, name: "DM", resetValue: "0", description: "1 = dual motor mode for H-bridge." },
      { bit: 17, name: "ICMP_CONFIG_EN", resetValue: "0", description: "Allows writing ICMP in the next SPI command." },
      { bit: 16, name: "WD_CONFIG_EN", resetValue: "0", description: "Allows watchdog configuration write in the next SPI command." },
      { bit: 15, name: "MASK_OL_HS1", resetValue: "0", description: "Masks HS1 open-load from GSBN." },
      { bit: 14, name: "MASK_OL_LS1", resetValue: "0", description: "Masks LS1 open-load from GSBN." },
      { bit: 13, name: "MASK_TW", resetValue: "0", description: "Masks thermal warning from GSBN." },
      { bit: 12, name: "MASK_EC_OL", resetValue: "0", description: "Masks ECV and OUT10 open-load from GSBN." },
      { bit: 11, name: "MASK_OL", resetValue: "0", description: "Masks open-load of all outputs from GSBN." },
      { bit: 10, name: "MASK_SPIE", resetValue: "0", description: "Masks SPIE from GSBN." },
      { bit: 9, name: "MASK_PLE", resetValue: "0", description: "Masks PLE from GSBN." },
      { bit: 8, name: "MASK_GW", resetValue: "0", description: "Masks GW from GSBN." },
      { bit: 7, name: "CP_OFF_EN", resetValue: "0", description: "Allows writing CP_OFF=1 in the next SPI command." },
      { bit: 6, name: "CP_LOW_CONFIG", resetValue: "0", description: "0 = CP_LOW latched; 1 = CP_LOW live bit with automatic driver recovery." },
      { bit: 5, name: "CP_DITH_DIS", resetValue: "0", description: "1 = disables charge-pump clock dithering." },
      { bit: 4, name: "FS_FORCED", resetValue: "0", description: "1 = forces LSx_FSO ON and enters Fail-Safe without NReset." },
      { bit: 3, name: "CAN_SUP_5V2_EN", resetValue: "0", description: "1 = powers CAN from V2 instead of V1." },
      { bit: 2, name: "Reserved", resetValue: "0", description: "Reserved." },
      { bit: 1, name: "Reserved", resetValue: "0", description: "Reserved." },
      { bit: 0, name: "TRIG", resetValue: "1", description: "Watchdog trigger bit." },
    ],
  },
];

// Helper: parse hex string to number
export function parseHexByte(input: string): number {
  if (!input || input.trim() === "") return 0;
  let cleaned = input.trim().toUpperCase();
  cleaned = cleaned.replace(/^0X/i, "").replace(/H$/i, "");
  const val = parseInt(cleaned, 16);
  return isNaN(val) ? 0 : val & 0xFF;
}

// Combine Low, Mid, High bytes into a 24-bit number
export function combineBytes(low: number, mid: number, high: number): number {
  return (high << 16) | (mid << 8) | low;
}

// Format number as hex string
export function toHex(value: number, digits: number = 6): string {
  return value.toString(16).toUpperCase().padStart(digits, "0");
}

// Get bit value from combined number
export function getBit(value: number, bitPosition: number): number {
  return (value >> bitPosition) & 1;
}
