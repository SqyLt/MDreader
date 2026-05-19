import webview
import os
import sys

def get_base_path():
    """Get absolute path to resource, works for dev and for PyInstaller"""
    try:
        # PyInstaller creates a temp folder and stores path in _MEIPASS
        base_path = sys._MEIPASS
    except Exception:
        base_path = os.path.dirname(os.path.abspath(__file__))
    return base_path

class Api:
    def open_file(self):
        file_types = ('Markdown Files (*.md;*.markdown;*.txt)', 'All files (*.*)')
        result = webview.windows[0].create_file_dialog(webview.OPEN_DIALOG, allow_multiple=False, file_types=file_types)
        if result and len(result) > 0:
            filepath = result[0]
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                return {'success': True, 'path': filepath, 'filename': os.path.basename(filepath), 'content': content}
            except Exception as e:
                return {'success': False, 'error': str(e)}
        return {'success': False, 'error': 'Cancelled'}

    def save_file(self, content, filepath):
        try:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return {'success': True, 'path': filepath, 'filename': os.path.basename(filepath)}
        except Exception as e:
            return {'success': False, 'error': str(e)}

    def save_as_file(self, content, default_filename):
        file_types = ('Markdown Files (*.md)', 'All files (*.*)')
        result = webview.windows[0].create_file_dialog(webview.SAVE_DIALOG, directory='', save_filename=default_filename, file_types=file_types)
        if result and len(result) > 0:
            filepath = result[0]
            if not filepath.endswith('.md') and not '.' in os.path.basename(filepath):
                filepath += '.md'
            return self.save_file(content, filepath)
        return {'success': False, 'error': 'Cancelled'}

if __name__ == '__main__':
    html_file = os.path.join(get_base_path(), 'index.html')
    api = Api()
    
    # Create the webview window
    window = webview.create_window(
        title='MDreader', 
        url=html_file,
        js_api=api,
        width=1200, 
        height=800,
        min_size=(800, 600)
    )
    
    # Start the webview application
    webview.start()
