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

---

<div align="center">
  <h1>📖 MDreader (中文版简介)</h1>
  <p><strong>一款为您桌面打造的极简、现代的 Markdown 阅读与编辑器。</strong></p>
</div>

<br>

MDreader 是一款现代且响应式的 Markdown 编辑器。它最初作为 Web 原型开发，现已打包为原生的 Windows 桌面应用程序。它提供实时预览、无干扰的分屏写作、大纲导航以及本地文件的导入导出功能。

## ✨ 功能特性

- **实时预览**：在右侧窗格中实时查看您的输入效果。
- **多种视图**：在 `编辑`、`分屏` 和 `预览` 模式之间无缝切换。
- **智能大纲**：根据您的标题自动生成可点击的目录。
- **丰富的格式工具栏**：快速设置粗体、斜体、列表、引用、代码块和链接。
- **导出能力**：
  - 另存为原生 Markdown (`.md`)。
  - 导出为独立的 HTML。
  - **导出为 PDF**：原生生成高质量、排版整洁的 PDF（自动隐藏侧边栏和编辑区 UI）。
- **自动保存与持久化**：您的草稿会自动保存在本地。
- **拖拽支持**：将任何 `.md` 或 `.txt` 文件直接拖入应用窗口即可打开。
- **多语言 UI**：原生支持英语、简体中文、繁体中文和日语。
- **独立桌面应用**：由 Python 的 `pywebview` 驱动，提供原生的窗口体验，而无需 Chromium 内核那样的庞大体积。

## 🛠️ 技术栈

- **前端**：原生 JavaScript (ES6+)、HTML5、CSS3
- **桌面端封装**：Python, [PyWebView](https://pywebview.flowdash.com/)
- **打包工具**：PyInstaller

## 🚀 快速开始

### 面向普通用户
您不需要任何编程环境即可运行 MDreader。
1. 前往本仓库的 **Releases** 页面。
2. 下载最新的 `MDreader.exe`。
3. 双击 `.exe` 文件即可开始写作！

### 面向开发者 (从源码构建)
如果您想修改代码或自行构建可执行文件：

**环境要求：**
- Python 3.8+
- pip (Python 包管理器)

**1. 克隆仓库**
```bash
git clone https://github.com/yourusername/MDreader.git
cd MDreader
```

**2. 安装依赖**
```bash
pip install pywebview pyinstaller
```

**3. 在开发模式下运行**
您可以直接运行 Python 封装器：
```bash
python main.py
```
*(或者，您可以直接在任何现代 Web 浏览器中打开 `index.html` 来测试前端的更改)。*

**4. 构建可执行文件**
要将应用程序连同自定义图标打包为单个独立的 `.exe` 文件：
```bash
pyinstaller --name MDreader --noconsole --onefile --icon=app.ico --add-data "index.html;." --add-data "styles.css;." --add-data "app.js;." main.py
```
生成的可执行文件将位于 `dist/` 目录中。

## 📁 目录结构

- `index.html`：核心应用外壳和布局。
- `styles.css`：样式系统，包含响应式设计和用于 PDF 导出的 `@media print` 规则。
- `app.js`：应用逻辑、事件处理和自定义的 Markdown 到 HTML 解析引擎。
- `main.py`：启动 PyWebView 窗口的 Python 入口点。
- `app.ico`：桌面应用程序的自定义图标。

## 📝 许可证
本项目为开源项目，基于 [MIT License](LICENSE) 发布。
