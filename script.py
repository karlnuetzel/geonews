#imports
import json
import urllib2

#functions
#gets all stories from selected sources
def getStories(sources):
    apiKey = "279ecef911f34160b534b23398b244d6"
    for source in sources:
        data = json.load(urllib2.urlopen("https://newsapi.org/v1/articles?source=" + source + "&sortBy=top&apiKey=" + apiKey))
        for i, article in enumerate(data["articles"]):
            stories['articles'].append(data["articles"][i])
            stories['source'].append(data['source'])
            stories['location'].append([])
    parseStories(stories)

#removes simplistic words and keeps important words from article description
def parseStories(stories):
    wordsToRemove = ["a", "are", "for", "and", "nor", "but", "or", "yet", "so", "of", "in", "to", "for", "with", "on", "at", "from", "by", "about", "as", "into", "like", "through", "after", "over", "be", "between", "out", "against", "during", "without", "before", "under", "around", "among", "able", "bad", "best", "better", "big", "black", "certain", "clear", "different", "early", "easy", "economic", "federal", "free", "full", "good", "great", "hard", "has", "high", "human", "important", "international", "large", "late", "little", "local", "long", "low", "major", "military", "national", "new", "old", "only", "other", "political", "possible", "public", "real", "recent", "right", "small", "social", "special", "strong", "sure", "true", "white", "whole", "young", "all", "another", "any", "anybody", "anyone", "anything", "both", "each", "either", "everybody", "everyone", "everything", "few", "he", "her", "hers", "herself", "him", "himself", "his", "i", "it", "its", "itself", "little", "many", "me", "mine", "more", "most", "much", "my", "myself", "neither", "no", "nobody", "none", "nothing", "one", "other", "others", "our", "ours", "ourselves", "several", "she", "some", "somebody", "someone", "something", "that", "the", "theirs", "them", "themselves", "these", "they", "this", "those", "us", "we", "what", "whatever", "which", "whichever", "who", "whoever", "whom", "whomever", "whose", "yes", "you", "your", "yours", "yourself", "yourselves", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    for article in stories["articles"]:
        queryWords = article["description"].split()
        resultWords = [word for word in queryWords if word.lower() not in wordsToRemove]
        result = ' '.join(resultWords)
        summaries.append(result)
    findRelatedStories(summaries[0], summaries)

#compares a main story to see how many it relates to
def findRelatedStories(mainSummary, summaries):
    relatedSummaries = []
    compareList = [word.lower() for word in mainSummary.split()]
    for summary in summaries:
        score = 0
        for word in summary.split():
            if word.lower() in compareList and word[0].isupper():
                score += 1
            else:
                score += .3
            if score >= 5 and summary.encode('utf-8') not in relatedSummaries:
                relatedSummaries.append(summary.encode('utf-8'))
    getRelatedStories(relatedSummaries)

#matches the summarized/reduced description to the actual article again
def getRelatedStories(summaries):
    index = 0
    for i, summary in enumerate(summaries):
        count = 0
        for word in summary.split():
            for phrase in stories['articles'][i]['description'].split():
                if count == len(summary.split()) and index < len(summaries) and stories['articles'][i] not in similarStories['articles']:
                    similarStories['articles'].append(stories['articles'][i])
                    similarStories['source'].append(stories['source'][i])
                    similarStories['location'].append(stories['location'][i])
                    count = 0
                    index += 1
                elif word in stories['articles'][i]['description'].encode('utf-8'):
                    count += 1
            
def printStories(data):
    for i in range(0, len(data["articles"])):
        article = data["articles"][i]
        source = data["source"][i]
        location = data["location"][i]
        print("Author: " + str(article["author"]).encode('utf-8'))
        print("Title: " + str(article["title"].encode('utf-8')))
        print("Description: " + str(article["description"].encode('utf-8')))
        print("Source: " + str(source).encode('utf-8'))
        print("Location: " + str(location).encode('utf-8'))
        print("\n")
    print(len(data["articles"]))
    print(len(stories["articles"]))
    
#variables
summaries = []
stories = {'articles':[], 'source':[], 'location':[], 'coordinates':[]}
similarStories = {'articles':[], 'source':[], 'location':[], 'coordinates':[]}
sources = ["cnn", "reuters", "cnbc", "business-insider", "the-wall-street-journal"]

#function calls
getStories(sources)
printStories(similarStories)