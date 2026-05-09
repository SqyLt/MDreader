<div align="center">
  <h1>📖 MDreader</h1>
  <p><strong>A sleek, lightweight Markdown editor and viewer for your desktop.</strong></p>
</div>

<br>

MDreader is a modern, responsive Markdown editor built originally as a web prototype and now packaged as a native Windows desktop application. It provides real-time live preview, distraction-free split writing, outline navigation, and local file import/export functionality.

## ✨ Features

- **Real-time Live Preview**: See what you write instantly on the right pane.
- **Multiple Views**: Switch seamlessly between `Edit`, `Split`, and `Preview` modes.
- **Smart Outline**: Automatically generates a clickable table of contents from your headings.
- **Rich Formatting Toolbar**: Quick access to bold, italic, lists, quotes, code blocks, and links.
- **Export Capabilities**:
  - Save as raw Markdown (`.md`).
  - Export as standalone HTML.
  - **Export to PDF**: Generate high-quality PDFs natively with clean typography (hiding sidebars and editor UI automatically).
- **Auto-save & Persistence**: Your drafts are automatically persisted locally.
- **Drag & Drop Support**: Drag any `.md` or `.txt` file directly into the application window to open it.
- **Multilingual UI**: Native interface support for English, Simplified Chinese (简体中文), Traditional Chinese (繁體中文), and Japanese (日本語).
- **Standalone Desktop App**: Powered by Python's `pywebview`, offering a native window experience without the heavy footprint of Chromium-based wrappers.

## 🛠️ Technology Stack

- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **Desktop Wrapper**: Python, [PyWebView](https://pywebview.flowdash.com/)
- **Packager**: PyInstaller

## 🚀 Getting Started

### For Regular Users
You don't need any programming environment to run MDreader.
1. Go to the **Releases** section of this repository.
2. Download the latest `MDreader.exe`.
3. Double-click the `.exe` file to start writing!

### For Developers (Build from source)
If you want to modify the code or build the executable yourself:

**Prerequisites:**
- Python 3.8+
- pip (Python package manager)

**1. Clone the repository**
```bash
git clone https://github.com/yourusername/MDreader.git
cd MDreader
```

**2. Install dependencies**
```bash
pip install pywebview pyinstaller
```

**3. Run in Development Mode**
You can run the Python wrapper directly:
```bash
python main.py
```
*(Alternatively, you can just open `index.html` directly in any modern web browser to test frontend changes).*

**4. Build the Executable**
To package the app into a single standalone `.exe` file with the custom icon:
```bash
pyinstaller --name MDreader --noconsole --onefile --icon=app.ico --add-data "index.html;." --add-data "styles.css;." --add-data "app.js;." main.py
```
The resulting executable will be placed in the `dist/` directory.

## 📁 File Structure

- `index.html`: The core application shell and layout.
- `styles.css`: The styling system, including responsive design and `@media print` rules for PDF export.
- `app.js`: Application logic, event handling, and custom Markdown-to-HTML parsing engine.
- `main.py`: The Python entry point that spins up the PyWebView window.
- `app.ico`: The customized icon for the desktop executable.

## 📝 License
This project is open-source and available under the [MIT License](LICENSE).
