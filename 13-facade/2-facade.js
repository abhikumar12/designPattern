// ✅ FACADE PATTERN — poore complex subsystem ke aage ek SIMPLE, single
// entry-point object rakho. Caller ko internal steps ka pata hi nahi hona
// chahiye.
// Chalao:  node 2-facade.js

const codec = { decode: (file) => `decoded(${file})`, encode: (data, fmt) => `${data}.${fmt}` };
const audioMixer = { normalize: (data) => `normalized(${data})` };
const subtitleEngine = { burnIn: (data, subs) => (subs ? `${data}+subs` : data) };

// Facade — subsystem ke saare steps ko ek simple method ke peeche chhupata hai
class VideoConverterFacade {
  convert(file, format, subs = false) {
    const decoded = codec.decode(file);
    const normalized = audioMixer.normalize(decoded);
    const withSubs = subtitleEngine.burnIn(normalized, subs);
    return codec.encode(withSubs, format);
  }
}

const converter = new VideoConverterFacade();
console.log(converter.convert('movie.mkv', 'mp4', true));
console.log(converter.convert('clip.avi', 'webm'));

// Caller ko codec/audioMixer/subtitleEngine ke naam tak pata nahi — sirf
// EK simple method call karta hai. Subsystem internally reorganize ho sakta
// hai, facade ka interface same rehta hai.
