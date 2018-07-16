const { VoiceText } = require('voice-text');
const { writeFileSync } = require('fs');

const voiceText = new VoiceText('8b3e7q6yg4zdfzct');
voiceText.fetchBuffer('激アツモンゴル', {
		format: 'ogg',
		speaker:'show'
	})
    .then((buffer) => {
        writeFileSync('voice.ogg', buffer);
    });
