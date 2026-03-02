"""
Simple direct string-replacement patching of all 6 CV docx files.
No regex - avoids unicode escape issues.
"""
import zipfile, os

FILES_DIR = r"c:\Users\totot\.gemini\personal-website\files"

REPLACEMENTS = [
    # Name
    ("[Your Name]", "Toto Lai Man To"),
    # Remove C (Basic) language
    (">C (Basic)</w:t>",  "></w:t>"),
    (">C (Basic)<",       "><"),
    # Remove JavaScript language
    (">JavaScript</w:t>", "></w:t>"),
    (">JavaScript<",      "><"),
    # Fix proficiency: make sure native languages say Native
    ("Cantonese — Fluent",      "Cantonese — Native"),
    ("Cantonese - Fluent",      "Cantonese — Native"),
    ("Cantonese (Native)",      "Cantonese — Native"),
    ("English — Fluent",        "English — Native"),
    ("English - Fluent",        "English — Native"),
    ("English (Native)",        "English — Native"),
    ("Putonghua — Fluent",      "Putonghua — Native"),
    ("Putonghua - Fluent",      "Putonghua — Native"),
    ("Putonghua (Native)",      "Putonghua — Native"),
    ("Mandarin — Fluent",       "Putonghua — Native"),
    ("Mandarin - Fluent",       "Putonghua — Native"),
    ("Mandarin (Native)",       "Putonghua — Native"),
    ("Mandarin Chinese — Native","Putonghua — Native"),
    ("Mandarin Chinese - Native","Putonghua — Native"),
]

def update_docx(path):
    with zipfile.ZipFile(path, "r") as z:
        contents = {n: z.read(n) for n in z.namelist()}

    key = "word/document.xml"
    xml = contents[key].decode("utf-8")

    old_xml = xml
    for old, new in REPLACEMENTS:
        xml = xml.replace(old, new)

    changed = xml != old_xml
    name_ok = "Toto Lai Man To" in xml
    c_gone  = "C (Basic)" not in xml
    js_gone = "JavaScript" not in xml
    print(f"  {os.path.basename(path)}: changed={changed}, name={'ok' if name_ok else 'MISSING'}, C_Basic={'gone' if c_gone else 'STILL THERE'}, JS={'gone' if js_gone else 'STILL THERE'}")

    contents[key] = xml.encode("utf-8")

    tmp = path + ".tmp"
    with zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED) as z:
        for name, data in contents.items():
            z.writestr(name, data)
    os.replace(tmp, path)

for fname in sorted(os.listdir(FILES_DIR)):
    if fname.endswith(".docx"):
        try:
            update_docx(os.path.join(FILES_DIR, fname))
        except Exception as e:
            print(f"  ERROR {fname}: {e}")

print("\nDone.")
