import * as vscode from "vscode";

export async function activate(context: vscode.ExtensionContext) {
  const openTerminalFlow = async () => {
    // 1. 위치 선택
    const locationChoice = await vscode.window.showQuickPick(
      ["Right", "Bottom"],
      {
        placeHolder: "Where do you want to open the terminal?",
      }
    );
    if (!locationChoice) return;

    const location =
      locationChoice === "Right"
        ? { viewColumn: vscode.ViewColumn.Two }
        : vscode.TerminalLocation.Panel;

    // 2. 터미널 생성 및 표시
    const terminal = vscode.window.createTerminal({
      name: "Auto Terminal",
      location,
    });
    terminal.show();

    // 3. claudo code 실행 여부 확인
    const runClaudo = await vscode.window.showQuickPick(["Yes", "No"], {
      placeHolder: "Would you like to run 'claudo code'?",
    });

    if (runClaudo === "Yes") {
      terminal.sendText("claudo code", true);
    }
  };

  // 명령 등록 (단, 사용자 입력 없이 실행됨)
  const disposable = vscode.commands.registerCommand(
    "bootshell.start",
    openTerminalFlow
  );
  context.subscriptions.push(disposable);

  // VS Code 실행 직후 자동 실행
  await vscode.commands.executeCommand("bootshell.start");
}

export function deactivate() {}
