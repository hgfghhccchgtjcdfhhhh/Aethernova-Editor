// Grab elements
const htmlEditor = document.getElementById("html-editor");
const cssEditor = document.getElementById("css-editor");
const applyButton = document.getElementById("apply-code");
const worldFrame = document.getElementById("world-frame");

// Initialize the world when the page loads
function renderWorld() {
    const htmlContent = htmlEditor.value;
    const cssContent = cssEditor.value;

    const worldDoc = worldFrame.contentDocument || worldFrame.contentWindow.document;

    worldDoc.open();
    worldDoc.write(`
        <html>
        <head>
            <style>${cssContent}</style>
        </head>
        <body>
            ${htmlContent}
        </body>
        </html>
    `);
    worldDoc.close();
}

// Render when player clicks "Apply Code"
applyButton.addEventListener("click", () => {
    renderWorld();
});

// Render once at the beginning
renderWorld();
