'use strict';

var Commands = require('../command/Commands');
var PlaybackStatus = require('../playback/PlaybackStatus');

function statusForCommand(command) {
    switch (command) {
        case Commands.PLAYBACK.PAUSE:
            return PlaybackStatus.PAUSED;
        case Commands.PLAYBACK.STOP:
            return PlaybackStatus.STOPPED;
        default:
            return PlaybackStatus.PLAYING;
    }
}

module.exports = function MockPlayerModule(playerEventDispatcher) {

    return {
        name: 'Mock player',
        supportedCommands: [
            Commands.PLAYBACK.PLAY,
            Commands.PLAYBACK.PAUSE,
            Commands.PLAYBACK.STOP
        ],
        onPlaybackCommand: function (command) {
            playerEventDispatcher.onPlaybackEvent(statusForCommand(command));
        },
        onVolumeChange: function (command) {
            playerEventDispatcher.onVolumeChange(command);
        },
        onActivateModule: function(){},
        onDeactivateModule: function(){}
    }
};
