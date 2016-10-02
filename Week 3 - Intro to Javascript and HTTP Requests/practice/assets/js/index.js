function bootstrapApp() {
  // Add code here
  console.log('DOM has loaded');
}

// Listen for changes to the document.readyState
// `onreadystatechange` is fired when readyState value is changed
document.onreadystatechange = function() {
  // Check if readyState is interactive: DOM has loaded
  if (document.readyState === 'interactive') {
    bootstrapApp();
  }
}

