// should only remove for single words (could be useful with bigrams)
export const STOPWORDS = [
    'give', 'recommend', 'solve', 'learn', 'learned', 'learning', 'participate', 'make', 'knows', 'ask', 'code', 'say', 'improve', 'answer','wanted', 'teach',// verbs
    'lab','research','content', 'extra', 'credit', 'assignment', 'homework', 'problem', 'problems', 'studies',
    'readings', 'reader', 'essay', 'draft', 'write', 'writer','test', 'group', 'work', 'clicker', 'lecturer', 'information', 'student', 'professor', 'professors', // class-related nouns
    'major', 'physics', 'math', 'calculus', 'chemistry', 'science', 'art', 'philosophy',// subject-related words
    'end', 'time', 'pang', 'board', 'pandemic', // other nouns
    'amazing', 'good', 'fine', 'better', 'super','great','wonderful','best', 'cool', 'short', 'high', 'real', 'little', // non-descript adjectives
    'basically','weekly','honestly' // filler adverbs
]; 

export const MALE_COLOR = "#3A8369",FEMALE_COLOR = "#7462E0", MALE_COLOR_BRIGHT = "#5dd4a9", FEMALE_COLOR_BRIGHT = "#a293fa";

export const W_WIDTH = window.innerWidth, W_HEIGHT = window.innerHeight;
export const isMobile = () =>{ // returns whether device is small or not
    return (W_WIDTH <= 600);
  }  