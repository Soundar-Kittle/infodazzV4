class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  addMessage(message, options = {}) {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, this.createChatBotMessage(message, options)],
    }));
  }

handleGreeting = () => {
  const greeting = this.createChatBotMessage("Hi! I'm Dazzly 🤖 How can I help you today?");
  const serviceOptions = this.createChatBotMessage("Please choose a service to begin:", {
    widget: "serviceOptions",
    delay: 500,
  });

  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, greeting, serviceOptions],
  }));
};

  handleSEO = () => {
    this.addMessage("Great! Choose one:", {
      widget: "seoQuestions"
    });
  };

  handleDigitalMarketing = () => {
    this.addMessage("Awesome! What would you like to know?", {
      widget: "digitalQuestions"
    });
  };

  handleSoftware = () => {
    this.addMessage("Nice! Select one:", {
      widget: "softwareQuestions"
    });
  };

  handlePhotography = () =>{
     this.addMessage("Nice! Select one:", {
      widget: "photographyQuestions"
    });
  }

  handleMoreInfo = () => {
    this.addMessage("Sure, you can connect with us on WhatsApp:", {
      widget: "whatsappLink"
    });
  };

  handleDefault = () => {
    this.addMessage("I'm sorry, I didn’t get that. You can try asking about SEO, Digital Marketing, or Software.");
  };

  // Answer Handlers
  handleAnswer = (answerText) => {
    switch (answerText.toLowerCase()) {
    case "seo":
      this.handleSEO();
      break;
    case "digital marketing":
      this.handleDigitalMarketing();
      break;
    case "software development":
      this.handleSoftware();
      break;
    case "photography and videography":
      this.handlePhotography();
      break;
    default:
      this.addMessage(answerText);
      this.handleMoreInfo();
  }
  };
}

export default ActionProvider;
