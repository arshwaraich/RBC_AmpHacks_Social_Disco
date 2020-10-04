from sentiment import *


def part_i_interface(filename: str) -> None:
    print('Current dataset:', filename)    
    prompt = '''What would you like to do?
        - Calculate (W)ord KSS
        - (Q)uit
: '''
    
    while True:
        command = input(prompt).lower()
        if command == 'q':
            return
        elif command == 'w':
            word = input('Please enter a word: ')
            with open(filename, 'r') as file:
                word_score = word_kss_scan(word, file)
                if word_score != None:
                    print(word, round(word_score,2), '('+ judge(word_score) + ')')
                else:
                    print('No score found for', word)
        
        else:
            print('Command not found')
            
            

def part_ii_interface(filename: str, kss: Dict[str, List[int]]) -> None:
    print('Current dataset:', filename)
    prompt = '''What would you like to do?
        - Look-up (W)ord KSS
        - Calculate (S)tatement PSS
        - Most (L)iked words
        - Most (D)isliked words
        - (Q)uit
: '''    
    while True:
        command = input(prompt)
        if command == 'Q':
            return
        elif command == 'W':
            word = input('Please enter a word: ')
            score = word_kss(word, kss)
            if score == None:
                print('No score found for', word)
            else:
                print(word, round(score, 2), '('+ judge(score) + ')')
        elif command == 'S':
            statement = input('Please enter a review statement: ')
            statement_score = statement_pss(statement, kss)
            if statement_score != None:
                print('Statement score: ', round(statement_score,2), '('+ judge(statement_score) + ')')
            else:
                print('Statement cannot be evaluated')
        elif command == 'L':
            word_count = int(input('How many words would you like?: '))
            occ_count = int(input('Least number of occurrences?: '))
            mpw = most_liked_words(word_count, occ_count, kss)
            print(word_count, 'most liked words that occur at least', occ_count, 'times:')
            for item in mpw:
                print(item[0], '\t', round(item[1],2), '\t(seen '+ str(item[2]) + ' times)')
            
        elif command == 'D':
            word_count = int(input('How many words would you like?: '))
            occ_count = int(input('Least number of occurrences?: '))
            mpw = most_disliked_words(word_count, occ_count, kss)
            print(word_count, 'most disliked words that occur at least', occ_count, 'times:')
            for item in mpw:
                print(item[0], '\t', round(item[1],2), '\t(seen '+ str(item[2]) + ' times)')
        else:
            print('Command not found')
        
        
        


        
    
if __name__ == "__main__":

# Pick a dataset    
    #dataset = 'full.txt'
#    dataset = 'small.txt'
#    dataset = 'medium.txt'
    dataset = 'tiny.txt'

# Test Part 1
    #part_i_interface(dataset)
    
# Uncomment to build a dictionary
    with open(dataset, 'r') as file:        
        kss = extract_kss(file)   

# Uncomment to test parts 2 and 3
part_ii_interface(dataset, kss)

