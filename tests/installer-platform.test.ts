import { describe, expect, it } from "vitest";
import { delimiter } from "path";
import {
  getEnhancedPath,
  athenaCliArgs,
  CORTEX_PYTHON,
  CORTEX_SCRIPT,
} from "../src/main/installer";

describe("installer platform wiring", () => {
  it("uses the platform path delimiter in the enhanced PATH", () => {
    const enhancedPath = getEnhancedPath();

    expect(enhancedPath).toContain(process.env.PATH || "");
    expect(enhancedPath.split(delimiter).length).toBeGreaterThan(1);
  });

  it("builds platform-specific Athena CLI invocation args", () => {
    const args = athenaCliArgs(["--version"]);

    if (process.platform === "win32") {
      expect(args).toEqual(["-m", "cortex_cli.main", "--version"]);
      // Use `pythonw.exe` (Windows-subsystem) instead of `python.exe` so
      // child spawns don't flash a blank console window before
      // `windowsHide`/CREATE_NO_WINDOW takes effect — see issue #342.
      expect(CORTEX_PYTHON).toMatch(/venv[\\/]Scripts[\\/]pythonw\.exe$/);
      expect(CORTEX_SCRIPT).toMatch(/venv[\\/]Scripts[\\/]athena\.exe$/);
      return;
    }

    expect(args).toEqual([CORTEX_SCRIPT, "--version"]);
    expect(CORTEX_PYTHON).toMatch(/venv[\\/]bin[\\/]python$/);
  });
});
