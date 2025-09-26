class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lower = message.toLowerCase();

    if (lower.includes("hi") || lower.includes("hello") || lower.includes("hey")) {
      this.actionProvider.handleGreeting();
    } else if (lower.includes("seo")) {
      this.actionProvider.handleSEO();
    } else if (lower.includes("digital")) {
      this.actionProvider.handleDigitalMarketing();
    } else if (lower.includes("software")) {
      this.actionProvider.handleSoftware();
    } else if (lower.includes("photography")) {
      this.actionProvider.handleSoftware();
    } if (lower.includes("more info") || lower.includes("contact")) {
      this.actionProvider.handleMoreInfo();
    }
    else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;
