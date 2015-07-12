'use strict';

var commands = require('../command/Commands');

module.exports = function MockPlayerModule(playerEventDispatcher) {

    return {
        name: 'Mock player',
        supportedCommands: [
            commands.PLAYBACK.PLAY,
            commands.PLAYBACK.PAUSE,
            commands.PLAYBACK.STOP
        ],
        onPlaybackCommand: function (command) {
            playerEventDispatcher.onPlaybackEvent(command);
        },
        onVolumeChange: function (command) {
            playerEventDispatcher.onVolumeChange(command);
        },
        onActivateModule: function(){},
        onDeactivateModule: function(){}
    }
};
