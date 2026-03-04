"""
Remove the "Lead Climbing Coach & Data Manager" entry from all CV DOCX files.
This works by removing XML paragraphs that contain that text and all sub-bullet paragraphs following it,
until the next heading-level or separator paragraph.
"""
import zipfile, os, re

FILES_DIR = r"c:\Users\totot\.gemini\personal-website\files"

# The marker text that identifies the Lead Climbing Coach paragraph(s)
COACH_MARKER = "Lead Climbing Coach"

def remove_coaching_entry_from_docx(path):
    with zipfile.ZipFile(path, "r") as z:
        contents = {n: z.read(n) for n in z.namelist()}

    key = "word/document.xml"
    xml = contents[key].decode("utf-8")

    if COACH_MARKER not in xml:
        print(f"  {os.path.basename(path)}: no coaching entry found, skipping")
        return

    # Split into paragraphs (<w:p ...>...</w:p>)
    # We'll process paragraph by paragraph
    # Find all paragraph tags
    para_pattern = re.compile(r'<w:p[ >].*?</w:p>', re.DOTALL)
    paragraphs = para_pattern.findall(xml)
    splits = list(para_pattern.finditer(xml))

    # Identify which paragraphs to remove:
    # - The paragraph containing "Lead Climbing Coach"
    # - Following bullet paragraphs that are sub-items (contain the bullet detail lines)
    # We stop removing when we hit a paragraph that has a new bold heading or separator
    
    STOP_MARKERS = [
        "National Athlete",  # Business Dev CV
        "================",
        "CERTIFICATIONS",
        "SKILLS",
        "---",
        "Vice President",   # just in case
    ]
    
    to_remove = set()
    i = 0
    while i < len(paragraphs):
        p = paragraphs[i]
        if COACH_MARKER in p:
            to_remove.add(i)
            # Remove following bullet paragraphs
            j = i + 1
            while j < len(paragraphs):
                next_p = paragraphs[j]
                # Extract plain text from paragraph
                text_content = re.sub(r'<[^>]+>', '', next_p)
                text_stripped = text_content.strip()
                if not text_stripped:
                    # Empty paragraph - include in removal to clean up spacing
                    to_remove.add(j)
                    j += 1
                    break  # stop after one empty para
                # Check if it's a stop marker (next section / heading)
                is_stop = any(marker in text_stripped for marker in STOP_MARKERS)
                if is_stop:
                    break
                # Otherwise it's a bullet point belonging to this entry
                to_remove.add(j)
                j += 1
        i += 1

    # Rebuild XML by skipping removed paragraphs
    result_parts = []
    last_end = 0
    for idx, m in enumerate(splits):
        if idx in to_remove:
            # Add text before this paragraph
            result_parts.append(xml[last_end:m.start()])
            last_end = m.end()
        # else keep it
    result_parts.append(xml[last_end:])
    new_xml = "".join(result_parts)

    removed_count = len(to_remove)
    still_there = COACH_MARKER in new_xml
    print(f"  {os.path.basename(path)}: removed {removed_count} paragraphs, coaching_still_present={still_there}")

    if removed_count > 0:
        contents[key] = new_xml.encode("utf-8")
        tmp = path + ".tmp"
        with zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED) as z:
            for name, data in contents.items():
                z.writestr(name, data)
        os.replace(tmp, path)

for fname in sorted(os.listdir(FILES_DIR)):
    if fname.endswith(".docx") and not fname.startswith("~$"):
        fpath = os.path.join(FILES_DIR, fname)
        try:
            remove_coaching_entry_from_docx(fpath)
        except Exception as e:
            print(f"  ERROR {fname}: {e}")

print("\nDone.")
