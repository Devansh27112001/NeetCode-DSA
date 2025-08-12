// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
const solution_optimal = (sentence: string): boolean => {
  if (sentence.length < 26) return false;
  let total = 325;
  let charSet = new Set<string>();
  let calTotal = 0;
  for (const char of sentence) {
    if (!charSet.has(char)) {
      calTotal += char.charCodeAt(0) - 97;
    }
    charSet.add(char);
  }

  return calTotal === total;
};
console.log(
  solution_optimal(
    "wcjvornjfzhttmcqmdgrwhcwvchhysmniubxybybqdnpiwgbnjsftduhtwzgccjjmcletlykydclgcpkvfdffpjpldqsbvvlpvslzerojrywtsrhipbdrmgklqmuvdtdtvuycgofoibxbmrdvijqdzsdgdgzbzffnudrkrbnwsxeitcxtpgnlselhqeyreztbbnkjwqozuttmkfojbzhlnusvktnplpfyfeccvubkumnrkswqqdbuhvxlrsdtljyxfcioldepmyipspemrmocurhwlmlieqhiqrjnbyiqdlsmdyvhiptngqbxjqxuoeevyzdrtkxvqtwsyjbtnrbcwozpkzmcrquuoxzwrpvmuizutpwshcpvwxnxhbjkuyhujdwwoglynqmyjqpopsqkytmpgcncdbbspsmtbgokfxcwsxdveboeboovskfhcgbheovyfltfuoyouwhxjvxtsdryrmjrctdxydglgmrmuucsbpwypbvsnllphzcqswfdfobghhzuhvhojeusfhfgqnhloubpkxutoqbtzdjjovmnikbyirkxfqeedjtffljhivdonenkgvmzhovruydluvojqftwvvzzjhbztqlcbjdufhyqwzdmbufwqnpbdprcyiqguudwrwsejhlyecqnzpocwdvrmptwsxyrdrtcyzfqbhzqtpuhfstemkwvfxmftldojjlglwflpddrvchlvjcmpyykjccjqhgttivhfsquwiusflhzdtyesimfezdmbctcowglbicxysccvoevdxeihvngcpfbtkoiowjrifduvheljheuseltyiqtmefzhsyrjvzdydbczddrmsbikyhzzohdzpniowoxbiimgecsuzcjbjoijolqzuzwexhwvdownuzoevqznhumsyvzonzcrigeovwdcnogyudresoiknqxdmpzprevkfwkzqrsforxzghgrduzveuypidmlxrgyxrpxuuyhpwiy"
  )
);

const solution_optimal_2 = (sentence: string): boolean => {
  if (sentence.length < 26) return false;
  let charSet = new Set<string>();
  for (const char of sentence) {
    charSet.add(char);
  }

  return charSet.size === 26;
};

const solution_optimal_3 = (sentence: string): boolean => {
  return new Set(sentence.split("")).size === 26;
};
