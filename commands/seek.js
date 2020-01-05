// 2nd party
const { ffmpeg, convert } = require('@ckrnstck/qut');

const command = {
  async execute(argv)
  {
    const filepath = argv._[1];
    let { output, from, seconds, frames, percent, timecode } = argv;

    output = output || 'timecode';
    from = from || 'duration';

    const probe = await ffmpeg.ffprobe(filepath);

    let inputInSeconds = null;

    if (seconds != null)
    {
      inputInSeconds = seconds;
    }
    else if (frames != null)
    {
      inputInSeconds = frames / probe.fps;
    }
    else if (percent != null)
    {
      inputInSeconds = (probe.duration / 100) * percent;
    }
    else if (timecode != null)
    {
      inputInSeconds = convert.timecodeToSeconds(timecode);
    }

    if (output === 'seconds')
    {
      console.log(inputInSeconds);
    }
    else if (output === 'frames')
    {
      console.log(inputInSeconds * probe.fps);
    }
    else if (output === 'percent')
    {
      console.log((100 / probe.duration) * inputInSeconds);
    }
    else if (output === 'timecode')
    {
      const timecode = convert.secondsToTimecode(inputInSeconds);
      console.log(timecode);
    }
  }
};

module.exports = command;