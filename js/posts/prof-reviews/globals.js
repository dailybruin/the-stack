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

export const MALE_COLOR = "#CF7058",FEMALE_COLOR = "#5A9BD4";