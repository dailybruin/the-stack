// should only remove for single words (could be useful with bigrams)
export const STOPWORDS = [
  'give',
  'recommend',
  'solve',
  'learn',
  'learned',
  'learning',
  'participate',
  'make',
  'knows',
  'ask',
  'code',
  'say',
  'improve',
  'answer',
  'wanted',
  'teach',
  'expect',
  'receive', // verbs
  'lab',
  'research',
  'content',
  'extra',
  'credit',
  'assignment',
  'homework',
  'problem',
  'problems',
  'studies',
  'readings',
  'reader',
  'essay',
  'draft',
  'write',
  'writer',
  'test',
  'group',
  'work',
  'clicker',
  'lecturer',
  'information',
  'student',
  'professor',
  'professors',
  'prompt',
  'workload', // class-related nouns
  'major',
  'physics',
  'math',
  'calculus',
  'chemistry',
  'science',
  'art',
  'philosophy', // subject-related words
  'end',
  'time',
  'pang',
  'board',
  'pandemic',
  'median',
  'partial', // other nouns
  'amazing',
  'good',
  'fine',
  'better',
  'super',
  'great',
  'wonderful',
  'best',
  'cool',
  'short',
  'high',
  'real',
  'little',
  'possible',
  'cumulative', // non-descript adjectives
  'basically',
  'weekly',
  'honestly', // filler adverbs
];

export const INCLUDEWORDS = ['smart'];

export const MALE_COLOR = '#3A8369',
  FEMALE_COLOR = '#7462E0',
  MALE_COLOR_BRIGHT = '#5dd4a9',
  FEMALE_COLOR_BRIGHT = '#a293fa',
  NEUTRAL_COLOR = '#0F7BAE';
export const PRE_PANDEMIC_COLOR = '#f0a13e';
export const PANDEMIC_COLOR = '#1293d1';

const parent_div = document.getElementById('rating-svg-div');
export const W_WIDTH = parent_div.clientWidth;
export const W_HEIGHT = window.innerHeight;
export const isMobile = () => {
  // returns whether device is small or not
  return W_WIDTH <= 600 || W_HEIGHT <= 600;
};
