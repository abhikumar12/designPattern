// ❌ THE NAIVE VERSION — caller ko poore subsystem (codec, audio, subtitle)
// ke saare steps aur unka sahi order khud yaad rakhna padta hai.
// Chalao:  node 1-naive.js

const codec = { decode: (file) => `decoded(${file})`, encode: (data, fmt) => `${data}.${fmt}` };
const audioMixer = { normalize: (data) => `normalized(${data})` };
const subtitleEngine = { burnIn: (data, subs) => (subs ? `${data}+subs` : data) };

function convertVideo(file, format, subs) {
  const decoded = codec.decode(file);
  const normalized = audioMixer.normalize(decoded);
  const withSubs = subtitleEngine.burnIn(normalized, subs);
  return codec.encode(withSubs, format);
}

console.log(convertVideo('movie.mkv', 'mp4', true));

// PROBLEM: caller (ya iske UI/CLI) ko subsystem ke saare internal steps
// (decode -> normalize -> subs -> encode) aur unka sahi order pata hona
// chahiye. Har naya caller yeh poora orchestration dobara likhega.
