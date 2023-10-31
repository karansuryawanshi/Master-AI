import { useState } from 'react';

function VoiceAssistant() {
  const speak = () => {
    const text = 'This is test statement';
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <button onClick={speak}>Read Statement</button>
    </div>
  );
}

export default VoiceAssistant;
