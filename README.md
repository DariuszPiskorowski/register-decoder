# Register Decoder

Register Decoder is a web application designed to decode and analyze register values from the L99DZ100G integrated circuit.

## Overview

This application simplifies the process of reading and interpreting register values obtained from **Kostia Commander**. It takes raw register values, breaks them down into individual bits, and maps them to the proper bit fields according to the L99DZ100G datasheet template.

## Features

- **Register Value Input**: Enter register values from Kostia Commander directly into the application
- **Bit-Level Decoding**: Automatically splits register values into individual bits
- **Datasheet Mapping**: Maps bits to the correct fields according to the L99DZ100G datasheet
- **Flag Visualization**: Shows exactly which flags are set in the registers
- **Analysis**: Helps understand what can be inferred from the register states

## How It Works

1. Copy register values from Kostia Commander
2. Paste them into the input fields on the first page
3. The application decodes the values into individual bits
4. Bits are displayed in the proper template format matching the L99DZ100G datasheet
5. Review the decoded flags and analyze the register states

## Technology Stack

- React + TypeScript
- Vite
- Tailwind CSS + shadcn/ui components

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## License

Private project by Dariusz Piskorowski
