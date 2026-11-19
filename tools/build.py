#!/usr/bin/env python3
"""Rakit index.html (satu file, siap main) dari src/.

    python3 tools/build.py
"""
from pathlib import Path

root = Path(__file__).resolve().parent.parent
shell = (root / "src/shell.html").read_text(encoding="utf-8")
engine = (root / "src/levels-engine.js").read_text(encoding="utf-8")
gen = (root / "src/generator.js").read_text(encoding="utf-8")
out = shell.replace("/*DATA_ENGINE*/", engine).replace("/*GEN*/", gen)
(root / "index.html").write_text(out, encoding="utf-8")
print(f"index.html ditulis ({len(out.encode()):,} byte)")
