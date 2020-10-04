from typing import TextIO, List, Union, Dict, Tuple

# PART I: File I/O, strings, lists

def is_word(token: str) -> bool:
    '''Return True IFF token is an alphabetic word optionally containing
    forward slashes or dashes.

    >>> is_word('Painting')
    True
    >>> is_word('writer/singer')
    True
    >>> is_word('true-to-life')
    True
    >>> is_word("'re")
    False
    >>> is_word("1960s")
    False
    '''
    for c in token:
        if not (c.isalpha() or c=='/' or c=='\\' or c=='-'):
            return False
    return True

def get_word_list(statement: str) -> List[str]:
    '''Return a list of words contained in statement, converted to lowercase.
    Use is_word to determine whether each token in statement is a word.

    >>> get_word_list('I enjoy going for walks')
    ['I', 'enjoy', 'going', 'for', 'walks']
    '''
    list=statement.split()
    answer=[]
    for token in list:
        if is_word(token):
            answer.append(token.lower())
    return answer


def judge(score: float) -> str:
    
    '''
    Return 'Dislikes' if score is 1.5 or less.
    Return 'Likes' if score is 2.5 or more.
    Return 'neutral' otherwise.
    >>> judge(1.3)
    'Dislikes'
    >>> judge('1.8')
    'neutral'
    >>> judge('3.4')
    'Likes'
    '''
    if 0 <= score <= 1.5:
        return 'Dislikes'
    elif 4 >= score >= 2.5:
        return 'Likes'
    elif 1.5 <= score <= 2.5:
        return 'neutral'
    else:
        return 'Error'


def word_kss_scan(word: str, file: TextIO) -> Union[None, float]:
    '''Given file composed of rated biodata , return the average score
    of all occurrences of word in file. If word does not occur in file, return None.
    '''
    score = 0.0
    total_occur = 0
    for line in file:
        ranking = int(line[0])
        word_list = get_word_list(line)
        occurences = word_list.count(word)
        score += occurences*ranking
        total_occur += occurences
    if total_occur==0:
        return None
    else:
        return float(score)/float(total_occur)


# PART II: Dictionaries
def extract_kss(file: TextIO) -> Dict[str, List[int]]:
    '''Given file composed of rated biodata, return a dictionary
    containing all words in file as keys. For each key, store a list
    containing the total sum of review scores and the number of times
    the key has occurred as a value, e.g., { 'a' : [12, 4] }

    '''
    answer = {}
    for line in file:
        ranking = int(line[0])
        line = line[2:] 
        word_list=get_word_list(line)
        #occur=0
        for word in word_list:
            if word in answer.keys():
                answer[word][0] += ranking
                answer[word][1] += 1
            else:
                answer[word] = [ranking, 1]
    return answer



def word_kss(word: str, kss: Dict[str, List[int]]) -> Union[float, None]:
    '''Return the Known Sentiment Score of word if it appears in kss.
    If word does not appear in kss, return None.
    '''
    word = word.lower()
    if word in kss:
        #value_list=kss[str]
        return kss[word][0]/kss[word][1]
    #else:
    return None



def statement_pss(statement: str, kss: Dict[str, List[int]]) -> Union[float, None]:
    '''Return the Predicted Sentiment Score of statement based on
    word Known Sentiment Scores from kss.
    Return None if statement contains no words from kss.



    '''
    review = get_word_list(statement)
    occurs=0
    answer=[]
    included=0
    for token in review:
        if token  in kss.keys():
            included+=1
            answer = word_kss(token, kss)
            occurs += answer
    if included==0:
        return None
    else:
        return (occurs/included)




# PART III: Word Frequencies

def score(item: Tuple[str, List[int]]) -> float:
    '''
    Given item as a (key, value) tuple, return the
    ratio of the first and second integer in value
    >>>

    >>>

    '''
    return int(item[1][0])/ int(item[1][1])


def most_extreme_words(count: int, min_occ: int, kss: Dict[str, List[int]], pos: bool) -> List[List[Union[str,float,int]]]:
    ''' Return a list of lists containing the count most extreme words
    that occur at least min_occ times in kss.
    Each item in the list is formatted as follows:
    [word, average score, number of occurrences]
    If pos is True, return the most liked words.
    If pos is False, return the most disliked words.
     '''
    answer_list= []
    copy_list = []

    # if pos == True:
    first_kss = sorted(kss.items(), key=score, reverse = pos)
    #else:
    #    first_kss = sorted(kss.items(), key=score)
    for item in first_kss:
        occurences = item[1][1]
        if occurences >= min_occ:
            copy_list.append(item)
        else:
            pass

    num_found=len(copy_list)
    display_count=0
    if (num_found<=count):
        display_count = num_found
    else:
        display_count=count

    if display_count==0:
        print('No words found')
    else:
        for index in range(display_count):
            word = copy_list[index][0]
            avg = score(copy_list[index])
            occ_count = copy_list[index][1][1]
            answer_list.append([word, avg, occ_count])

    return answer_list





def most_disliked_words(count: int, min_occ: int, kss: Dict[str, List[int]]) -> List[List[Union[str,float,int]]]:
    '''Return a list of the count most disliked words that occur at least min_occ times in kss.
    >>>

    >>>

    '''
    return most_extreme_words(count, min_occ, kss, False)


def most_liked_words(count: int, min_occ: int, kss: Dict[str, List[int]]) -> List[List[Union[str,float,int]]]:
    '''Return a list of the count most liked words that occur at least min_occ times in kss.
    >>>

    >>>

    '''
    return most_extreme_words(count, min_occ, kss, True)



if __name__ == "__main__":
    dataset = 'biodata.txt'

# Pick a dataset

    #print(is_word('Walking'))
    #print(is_word('writer/singer'))
    #print(is_word('true-to-life'))
    #print(is_word("'re"))
    #print(is_word("1960s"))
    #print(get_word_list("I enjoy listening to music from the 80's ."))
    #print(get_word_list("I enjoy listening to music on the vinyl ."))
    

    #print(judge(1.3))
    #print(judge(1.8))
    #print(judge(3.4))
    BioFile=open(dataset,'r')
    print(word_kss_scan('fun', BioFile))


  # ==========


     #   print(extract_kss(file))

     #'''
    #dataset = 'small.txt'
     #dataset = 'medium.txt'
     #dataset = 'full.txt'
    #with open('small.txt', 'r') as file:
        #kss = extract_kss(file)
        #print(word_kss_scan('ahmed', file))
        #print(word_kss('Hearst', kss))
