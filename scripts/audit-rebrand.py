#!/usr/bin/env python3
"""Final comprehensive audit of Athena-Desktop rebrand."""
import os, re, sys

root = r"C:\Users\USER\athena-desktop"
ignore_dirs = {".git", "node_modules", "out"}
binary_exts = {".png", ".ico", ".icns", ".webp", ".mp4", ".pyc", ".svg", ".woff2", ".ttf"}

issues = []

for dirpath, dirs, files in os.walk(root):
    dirs[:] = [d for d in dirs if d not in ignore_dirs]
    for f in files:
        fpath = os.path.join(dirpath, f)
        rel = os.path.relpath(fpath, root)
        ext = os.path.splitext(f)[1].lower()
        if ext in binary_exts:
            # Check filename only for binary files
            if "hermes" in f.lower():
                issues.append(f"BINARY filename: {rel}")
            continue
        if ext not in (".ts", ".tsx", ".js", ".jsx", ".json", ".html", ".css", ".md", ".yaml", ".yml", ".toml", ".sh", ".bat", ".ps1", ".plist", ".mjs", ".cjs"):
            continue
        try:
            with open(fpath, "r", encoding="utf-8", errors="replace") as fh:
                content = fh.read()
        except:
            continue
        # Check for "hermes" (case-insensitive) in content
        if re.search(r'\bhermes\b', content, re.IGNORECASE):
            issues.append(f"CONTENT: {rel}")

if issues:
    for i in issues:
        print(f"  ✗ {i}")
    sys.exit(1)
else:
    print("✓ ZERO issues found — rebrand is hermetic.")
