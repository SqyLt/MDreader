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

if __name__ == '__main__':
    html_file = os.path.join(get_base_path(), 'index.html')
    
    # Create the webview window
    window = webview.create_window(
        title='MDreader', 
        url=html_file,
        width=1200, 
        height=800,
        min_size=(800, 600)
    )
    
    # Start the webview application
    webview.start()
