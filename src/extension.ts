import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "bootshell.openClaudeTerminal",
      async () => {
        // Ask where to show the terminal
        const location = await vscode.window.showQuickPick(
          ["left", "right", "bottom"],
          {
            placeHolder: "Where do you want to open the Claude terminal?",
          }
        );
        if (!location) return;

        // Ask whether to run the Claude command
        const shouldRun = await vscode.window.showQuickPick(["Yes", "No"], {
          placeHolder: "Do you want to run the 'claude' command automatically?",
        });
        const runClaude = shouldRun === "Yes";

        // Map location to VS Code terminal location
        const terminalLocation =
          location === "left"
            ? vscode.TerminalLocation.Editor
            : location === "right"
              ? { viewColumn: vscode.ViewColumn.Two }
              : vscode.TerminalLocation.Panel;

        // Create terminal
        const terminal = vscode.window.createTerminal({
          name: "Claude Code",
          location: terminalLocation,
        });

        terminal.show();

        if (runClaude) {
          terminal.sendText("claude", true);
        }
      }
    )
  );
}

export function deactivate() {}
