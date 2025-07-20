# BootShell

A VS Code extension that provides an integrated Claude Terminal interface with flexible terminal placement options.

## Features

- **Flexible Terminal Placement**: Choose where to open the Claude terminal (left, right, or bottom)
- **Integrated Claude Terminal**: Run Claude Code directly within VS Code
- **Automatic Command Execution**: Option to automatically run the `claude` command
- **User-friendly Interface**: Simple prompts for configuration
- **Terminal Management**: Easy terminal creation and management

## Prerequisites

Before using this extension, you need to install the Claude Code:

1. **Install Claude Code**: Follow the official installation guide at [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code/overview)

2. **Verify Installation**: Make sure `claude` command is available in your PATH

## Commands

- `BootShell: Open Claude Terminal` – Opens the Claude Terminal interface

## Usage

1. **Open Claude Terminal**:
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
   - Type "BootShell: Open Claude Terminal"
   - Select the command

2. **Configure Terminal**:
   - **Choose Location**: Select where you want the terminal to appear:
     - `left`: Opens in the left editor area
     - `right`: Opens in the right editor area
     - `bottom`: Opens in the bottom panel
   - **Run Claude Command**: Choose whether to automatically run the `claude` command:
     - `Yes`: Automatically executes `claude` in the terminal
     - `No`: Just opens the terminal without running any command

3. **Using the Terminal**:
   - If you chose "Yes", Claude will start automatically
   - If you chose "No", manually type `claude` to start
   - Use the terminal normally for Claude interactions

## Features

### Terminal Placement

- **Left Editor**: Terminal opens in the left editor area
- **Right Editor**: Terminal opens in the right editor area
- **Bottom Panel**: Terminal opens in the bottom panel (traditional terminal location)

### User Experience

- **Simple Configuration**: Easy-to-use prompts for setup
- **Flexible Options**: Choose your preferred terminal location
- **Automatic Setup**: Option to automatically start Claude
- **Manual Control**: Option to manually control when to start Claude

### Terminal Management

- **VS Code Native Terminal**: Uses VS Code's built-in terminal
- **Standard Terminal Features**: All standard terminal functionality available
- **Process Management**: VS Code handles terminal lifecycle

## Requirements

- VS Code 1.75.0 or higher
- Claude Code installed and available in PATH

## Development

### Building the Extension

```bash
npm install
npm run compile
```

### Running in Development Mode

1. Open the project in VS Code
2. Press `F5` to start debugging
3. A new VS Code window will open with the extension loaded

### Testing

```bash
npm run test
```

## Troubleshooting

### Claude Code Not Found

If you see an error about Claude Code not being installed:

1. Install Claude Code following the [official guide](https://docs.anthropic.com/en/docs/claude-code/overview)
2. Make sure it's added to your system PATH
3. Restart VS Code
4. Try opening the terminal again

### Terminal Won't Open

If the terminal fails to open:

1. Check if VS Code has permission to create terminals
2. Try a different terminal location
3. Restart VS Code
4. Check the VS Code output panel for error messages

### Claude Command Not Working

If the `claude` command doesn't work in the terminal:

1. Verify Claude Code is properly installed
2. Check your system PATH
3. Try running `claude --help` in the terminal
4. Restart VS Code and try again

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Author

Developer: 박지민(Kyle Park)
<br/>
E-mail: keepinblazing@gmail.com
<br/>
Github: https://github.com/keepitblazing

## License

MIT © 박지민
