export default {
  preparing: "準備中...",
  startingInstall: "インストールを開始しています",
  installationComplete: "インストール完了",
  installationFailed: "インストール失敗",
  installingAthena: "Athena Agent をインストール中",
  installationFailedHint:
    "インストールに失敗しました。再試行するか、ターミナル経由でインストールしてください。",
  retryInstallation: "再試行",
  copied: "コピーしました！",
  copyLogs: "ログをコピー",
  stepLabel: "ステップ {{step}}/{{total}}：{{title}}",
  waitingToStart: "開始待機中...",
  continueToSetup: "セットアップへ進む",
  confirmTitle: "インストール前の確認",
  confirmLocationLabel: "Athena のインストール先:",
  confirmFresh:
    "ここに既存のインストールは見つかりませんでした。新しくインストールされます。",
  confirmUpdate:
    "ここに既存の Athena インストールがあります。最新バージョンに更新されます。",
  confirmReplace:
    "ここにフォルダがありますが、有効な Athena インストールではありません。インストールすると削除されて置き換えられます。",
  confirmNotInherited:
    "Athena を別の場所、またはコマンドラインでインストールした場合、それは引き継がれません。",
  confirmInstallBtn: "Athena をインストール",
  useExistingBtn: "既存のインストールを使用",
  useExistingHint:
    "既存の Athena インストールが含まれるフォルダ（athena-agent フォルダを含むフォルダ）を選択してください。",
  useExistingInvalid:
    "そのフォルダで使用可能な Athena インストールが見つかりませんでした。",
  useExistingDone:
    "既存のインストールを設定しました。Athena を終了して再度開くと適用されます。",
  useExistingQuitBtn: "Athena を終了",
} as const;
