import * as vscode from 'vscode';
import { provideAOSSuggestions } from './aosSuggestions';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'aos-suggestions-vscode-extension.insertAOS',
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        editor.insertSnippet(new vscode.SnippetString(`
          <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
          <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css">
          <script>AOS.init();</script>
        `));
      }
    }
  );

  const aosSuggestionsProvider = vscode.languages.registerCompletionItemProvider(
    { language: 'html' },
    provideAOSSuggestions(),
    '!'
  );

  context.subscriptions.push(disposable, aosSuggestionsProvider);
}

export function deactivate() { }
