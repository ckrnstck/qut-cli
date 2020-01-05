// 2nd party
const { ffmpeg } = require('@ckrnstck/qut');

const command = {
  async execute(argv)
  {
    const [cmd, ...rest] = argv._;

    for (let item of rest)
    {
      const { width, height, fps, duration, frames, fullPath } = await ffmpeg.ffprobe(item);

      console.table({ width, height, fps, duration, frames, fullPath });
    }
  }
};

module.exports = command;