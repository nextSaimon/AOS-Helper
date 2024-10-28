import * as vscode from 'vscode';

export function provideAOSSuggestions(): vscode.CompletionItemProvider<vscode.CompletionItem> {
  return {
    provideCompletionItems(
      document: vscode.TextDocument,
      position: vscode.Position
    ) {
      const suggestions: vscode.CompletionItem[] = [];

      // Full HTML template suggestion for `$aos`
      const aosHtmlTemplate = new vscode.CompletionItem(
        '$aos',
        vscode.CompletionItemKind.Snippet
      );
      aosHtmlTemplate.insertText = new vscode.SnippetString(`
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> </title>
  <!-- AOS CSS -->
  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</head>

<body>
  <!-- Your content here -->

  <!-- AOS Script -->
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
</body>

</html>
      `);
      aosHtmlTemplate.detail = 'Insert full HTML template with AOS setup';
      suggestions.push(aosHtmlTemplate);

      // Define predefined options
      const animations = [
        'fade', 'fade-up', 'fade-down', 'fade-left', 'fade-right',
        'fade-up-right', 'fade-up-left', 'fade-down-right', 'fade-down-left',
        'flip-up', 'flip-down', 'flip-left', 'flip-right',
        'slide-up', 'slide-down', 'slide-left', 'slide-right',
        'zoom-in', 'zoom-in-up', 'zoom-in-down', 'zoom-in-left', 'zoom-in-right',
        'zoom-out', 'zoom-out-up', 'zoom-out-down', 'zoom-out-left', 'zoom-out-right'
      ];
      const anchorPlacements = [
        'top-bottom', 'top-center', 'top-top',
        'center-bottom', 'center-center', 'center-top',
        'bottom-bottom', 'bottom-center', 'bottom-top'
      ];
      const easingFunctions = [
        'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out',
        'ease-in-back', 'ease-out-back', 'ease-in-out-back',
        'ease-in-sine', 'ease-out-sine', 'ease-in-out-sine',
        'ease-in-quad', 'ease-out-quad', 'ease-in-out-quad',
        'ease-in-cubic', 'ease-out-cubic', 'ease-in-out-cubic',
        'ease-in-quart', 'ease-out-quart', 'ease-in-out-quart'
      ];

      // Add animations to data-aos attribute
      animations.forEach(animation => {
        const item = new vscode.CompletionItem(
          `data-aos="${animation}"`,
          vscode.CompletionItemKind.Property
        );
        item.detail = 'AOS animation';
        item.insertText = new vscode.SnippetString(`data-aos="${animation}"`);
        suggestions.push(item);
      });

      // Other data-aos-* attribute suggestions
      suggestions.push(
        new vscode.CompletionItem('data-aos-offset=""', vscode.CompletionItemKind.Property),
        new vscode.CompletionItem('data-aos-delay=""', vscode.CompletionItemKind.Property),
        new vscode.CompletionItem('data-aos-duration=""', vscode.CompletionItemKind.Property),
        new vscode.CompletionItem('data-aos-easing=""', vscode.CompletionItemKind.Property),
        new vscode.CompletionItem('data-aos-mirror=""', vscode.CompletionItemKind.Property),
        new vscode.CompletionItem('data-aos-once=""', vscode.CompletionItemKind.Property),
        new vscode.CompletionItem('data-aos-anchor-placement=""', vscode.CompletionItemKind.Property)
      );

      // Easing function suggestions
      easingFunctions.forEach(easing => {
        const item = new vscode.CompletionItem(
          `data-aos-easing="${easing}"`,
          vscode.CompletionItemKind.Property
        );
        item.detail = 'AOS easing function';
        item.insertText = new vscode.SnippetString(`data-aos-easing="${easing}"`);
        suggestions.push(item);
      });

      // Anchor placements suggestions
      anchorPlacements.forEach(anchor => {
        const item = new vscode.CompletionItem(
          `data-aos-anchor-placement="${anchor}"`,
          vscode.CompletionItemKind.Property
        );
        item.detail = 'AOS anchor placement';
        item.insertText = new vscode.SnippetString(`data-aos-anchor-placement="${anchor}"`);
        suggestions.push(item);
      });

      return suggestions;
    }
  };
}
