from typing import TextIO, List, Union, Dict, Tuple
from sentiment import *

# Your exploration functions here
# Follow FDR

def sharpen(score: float) -> str:
    '''
    Return 'This score is negative.' if score is between 0 to less than 2.
    Return 'This score is positive.' if score is more than 2 to 4.
    Return 'This score is exactly neutral.' otherwise
    >>> sharpen(0)
    'negative'
    >>> sharpen(1.99)
    'negative
    >>> sharpen(2)
    'neutral'
    >>> sharpen(2.01)
    positive
    >>> sharpen(4)
    'positive'
    '''
    if 0 <= score < 2:
        return 'This score is negative.'
    elif 2 < score <= 4:
        return 'This score is positive.'
    else:
        return 'This score is exactly neutral.'
    return ''

def pss_close(statement: str, kss: Dict[str, List[int]]) -> Union[float, None]:
    '''
    Returns a human-readable statement showing whether the Predicted Sentiment Score ( PSS)
    is within 0.5 of the original review score. If the PSS is greater than 0.5, then it will show 
    that the difference is too wide.
    Return None if statement contains no words from kss.
    '''
    review = get_word_list(statement)
    pss = []
    final_score = 0
    for word in review:
        if word not in kss:
            return None
        else:
            pss = round(word_kss(word, kss) , 2)
            accumulator += pss
    final_score = round(accumulator / len(review) , 2)
    original_score = int(statement[0])
    diff_in_scores = round(original, 2)
    if 0 <= diff_in_scores > 0.5:
        return 'The Predicted Sentiment Score (PSS) of the given statement had a ' + str(diff_in_scores) + ' difference compared to original review score of ' + str(final_score) + ". This difference is too wide."
    else: 
        return 'The original review score of the given statement: ' + str(final_score) + ' is within 0.5 of the Predicted Sentiment Score, ' + str(pss) + '.' 


if __name__ == "__main__":

    # Pick a dataset    
    #dataset = 'tiny.txt'
    #dataset = 'small.txt'
    #dataset = 'medium.txt'
    dataset = 'full.txt'
    
    # Your exploration testing code here
    with open(dataset, 'r') as file:        
        kss = extract_kss(file)
    
    print('=====FIRST EXAMPLE======')
    print(sharpen(2))
    print('The function above had the score parameter of 2, which returns a statement saying that the score is exactly neutral.') 
    print(sharpen(1.99))
    print('The function above had the score parameter of 1.99, which returns a statement saying that the score is negative.') 
    print('---------TESTING DIFFERENT FUNCTION BELOW-------------')
    print(pss_close("1 Even fans of Ismail Merchant 's work , I suspect , would have a hard time sitting through this one ." , kss))
    print("The function above had a given review score of 1, and its PSS was within 0.5 of the given review score. \nTherefore this statement's PSS is reasonably close to the given review score. ")
    print(pss_close("3 Hatfield and Hicks make the oddest of couples , and in this sense the movie becomes a study of the gambles of the publishing world , offering a case study that exists apart from all the movie 's political ramifications ." , kss))
    print("The function above had a given review score of 3, however it's PSS was greater than 0.5, and the difference is considered too wide. ")
    print('=========END=========')

