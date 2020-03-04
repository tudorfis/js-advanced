// ([a-zA-Z]{1}|[âăîșțĂÎÂȚȘ]{1})\?([a-zA-Z]{1}|[âăîșțĂÎÂȚȘ]{1})
// ([âăîșțĂÎÂȚȘ]{1})\?([âăîșțĂÎÂȚȘ]{1})
// ([a-zA-Z]{1})\?([\â\ă\î\ș\ț\Ă\Î\Â\Ț\Ș]{1})

// ([a-zA-Z]{1}|[\â\ă\î\ş\ț\Ă\Î\Â\Ţ\Ș]{1})\?([a-zA-Z]{1}|[\â\ă\î\ş\ț\Ă\Î\Â\Ţ\Ș]{1})
// $1\? $2

// ([a-zA-Z]{1})\?([a-zA-Z]{1})

// (*{1})\;(*{1})
// \1; \2

function randomWord(start, end, arr, firstLetter) {
  arr = [...arr];

  for (let i = start; i < end; i++) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }

  let restWord = arr.join('');

  return `${firstLetter}${restWord}`;
}

function getRegexpWords(str = '') {
  const firstLetter = str.charAt(0);
  const arr = str.split('').slice(1);
  let output = '';

  for (let i = 0; i < arr.length - 1; i++)
    output += randomWord(i, i + 1, arr, firstLetter) + '|';

  console.log(str);
  console.log(`(${output.slice(0, -1)})`);
}

getRegexpWords('Tudor');
