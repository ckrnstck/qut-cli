// 2nd party
const { ffmpeg } = require('@ckrnstck/qut');

const command = {
  async execute(argv)
  {
    const [cmd, filepath, timecode, output] = argv._;

    await ffmpeg.thumbnailAtTimecode(filepath, timecode, output);
  }
};

module.exports = command;